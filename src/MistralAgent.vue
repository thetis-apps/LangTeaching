<script setup lang="ts">

import { PaperAirplaneIcon } from '@heroicons/vue/20/solid'

import {Mistral} from "@mistralai/mistralai";
import {computed, nextTick, onMounted, type Ref, ref, watch} from "vue";
import { marked } from "marked";
import type {MessageOutputEvent} from "@mistralai/mistralai/models/components";
import {useRoute} from "vue-router";

const agentInput: Ref<string> = ref("");
const agentOutput: Ref<string> = ref("");
const renderedOutput = computed(() => marked.parse(agentOutput.value));
const dialog: Ref<string> = ref("");
const inProgress: Ref<boolean> = ref(false);

const props = defineProps<{
    agentId: string;
    apiKey: string;
    title: string;
}>()

const client = new Mistral({
    serverURL: "https://api.mistral.ai/",
    apiKey: props.apiKey
});

const textarea = ref<HTMLTextAreaElement | null>(null);

onMounted(() => {
    textarea.value?.focus();
    agentOutput.value = "";
});

const route = useRoute();

watch(() => route.path, () => {
    nextTick(() => textarea.value?.focus());
    agentOutput.value = "";
})

const askAgent = async () => {

    inProgress.value = true;

    dialog.value += agentInput.value;
    agentInput.value = "";

    const response = await client.beta.conversations.startStream({
        agentId: props.agentId,
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

    inProgress.value = false;

    textarea.value?.focus();
}

</script>

<template>
    <div class="min-h-screen overflow-y-auto">
        <div class="w-2/3 mx-auto p-4">
            <div class="text-gray-700 text-2xl mt-2 mb-2">{{ title }}</div>
            <form @submit.prevent="askAgent">
                <div>
                    <textarea ref="textarea" class="w-full bg-white p-2 border border-gray-400 rounded-lg" type="text" placeholder="Indtast din tekst" v-model="agentInput" rows="10" :disabled="inProgress"/>
                </div>
                <div class="flex justify-end mt-2">
                    <PaperAirplaneIcon class="h-10 w-10 shrink-0 text-gray-400 cursor-pointer" aria-hidden="true" @click="askAgent" />
                </div>
            </form>
            <div v-html="renderedOutput"></div>
        </div>
    </div>
</template>

<style scoped>

</style>
