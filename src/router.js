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
            path: '/dialogs',
            name: 'dialogs',
            component: () => import('./views/Dialogs.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/liked',
            name: 'liked',
            component: () => import('./views/Liked.vue')
        },
        {
            path: '/dialog',
            name: 'dialog',
            component: () => import('./views/Dialog.vue')
        },
    ]
})
