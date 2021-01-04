import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
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
            path: '/dialog',
            component: () => import('./views/Dialog.vue')
        },
    ]
})
