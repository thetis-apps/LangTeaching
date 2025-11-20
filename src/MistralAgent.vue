<script setup lang="ts">

import {Mistral} from "@mistralai/mistralai";
import {computed, type Ref, ref} from "vue";
import { marked } from "marked";
import type {MessageOutputEvent} from "@mistralai/mistralai/models/components";

const agentInput: Ref<string> = ref("");
const agentOutput: Ref<string> = ref("");
const renderedOutput = computed(() => marked.parse(agentOutput.value));
const dialog: Ref<string> = ref("");

const client = new Mistral({
    serverURL: "https://api.mistral.ai/",
    apiKey: "rtAplrLzyFtXAd5VrUyh6QNofgpSVlrC"
});

const askAgent = async () => {

    dialog.value += agentInput.value;
    agentInput.value = "";

    const response = await client.beta.conversations.startStream({
        agentId: "ag_019a557a8030742d9c1019ed0867f199",
        inputs: dialog.value,
    });

    agentOutput.value = "";

    for await (const chunk of response) {

        console.log(JSON.stringify(chunk));
        if (chunk.event === "message.output.delta") {
            const messageOutputEvent = chunk.data as MessageOutputEvent;
            agentOutput.value += messageOutputEvent.content;
        }

    }

    dialog.value += agentOutput.value;
}

</script>

<template>
    <div class="mistral-agent" >
        <h1>Poesi assistent</h1>
        <form @submit.prevent="askAgent">
            <textarea type="text" placeholder="Enter your message" v-model="agentInput" cols="90" rows="10"/>
            <button type="submit">Send</button>
        </form>
        <div v-html="renderedOutput"></div>
    </div>
</template>

<style scoped>

</style>
