import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/chats',
            name: 'chats',
            component: () => import('./views/Chats.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/home/liked',
            name: 'liked',
            component: () => import('./views/Liked.vue')
        },
        {
            path: '/chat',
            name: 'chat',
            component: () => import('./views/Chat.vue')
        },
    ]
})
