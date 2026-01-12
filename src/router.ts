import { createRouter, createWebHistory } from 'vue-router'
// Her importerer vi de komponenter, der skal fungere som "sider"
// For nu kan vi bruge de eksisterende assistenter eller lave view-komponenter

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/poetry'
        },
        {
            path: '/poetry',
            name: 'poetry',
            // Du kan senere flytte denne logik til en dedikeret PoetryView.vue
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: 'rtAplrLzyFtXAd5VrUyh6QNofgpSVlrC',
                agentId: 'ag_019a557a8030742d9c1019ed0867f199',
                title: 'Poesi assistent'
            }
        },
        {
            path: '/essay',
            name: 'essay',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: 'rtAplrLzyFtXAd5VrUyh6QNofgpSVlrC',
                agentId: 'ag_019bb385269e74fbaa07a01852a15016',
                title: 'Avisartikel assistent'
            }
        }
    ]
})

export default router