import { createRouter, createWebHistory } from 'vue-router'
// Her importerer vi de komponenter, der skal fungere som "sider"
// For nu kan vi bruge de eksisterende assistenter eller lave view-komponenter

const apiKey = 'rtAplrLzyFtXAd5VrUyh6QNofgpSVlrC';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/poetry'
        },
        {
            path: '/greetings',
            name: 'greetings',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019c43840a5f7331bd5e6055a78d96a3',
                title: 'Hilsner'
            }
        },
        {
            path: '/family',
            name: 'family',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019c43bcc1f471d9a4492d42792f033e',
                title: 'Familie'
            }
        },
        {
            path: '/date-and-time',
            name: 'date-and-time',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019c43cde12c753bad871bfaeb9a9259',
                title: 'Dato og tid'
            }
        },
        {
            path: '/poetry',
            name: 'poetry',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019a557a8030742d9c1019ed0867f199',
                title: 'Poesi oversættelse'
            }
        },
        {
            path: '/essay',
            name: 'essay',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019bb385269e74fbaa07a01852a15016',
                title: 'Avisartikel oversættelse'
            }
        },
        {
            path: '/rent',
            name: 'rent',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019d5e09510375168617c6c4f5ad1b79',
                title: 'Leje af bolig'
            }
        },
        {
            path: '/travel',
            name: 'travel',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019d5e1d8c1373de8ed14a6039bda851',
                title: 'Rejser'
            }
        },
        {
            path: '/sport',
            name: 'sport',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019d5e15db1e7376bf8adc7f0a6daf95',
                title: 'Sport'
            }
        },
        {
            path: '/dorm',
            name: 'dorm',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019dcb00168c75c1a4aa24932c7fe4f4',
                title: 'Kollegieliv'
            }
        },
        {
            path: '/shopping',
            name: 'shopping',
            component: () => import('./MistralAgent.vue'),
            props: {
                apiKey: apiKey,
                agentId: 'ag_019dcb0f5ad571059272675a72a52439',
                title: 'Indkøb'
            }
        }
    ]
})

export default router