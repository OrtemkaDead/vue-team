import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/dialogs',
            component: () => import('./views/Dialogs.vue')
        },
        {
            path: '/profile',
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/liked',
            component: () => import('./views/Liked.vue')
        },
        {
            path: '/message',
            component: () => import('./views/Message.vue')
        },
    ]
})
