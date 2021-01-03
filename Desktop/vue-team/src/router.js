import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/home',
            component: () => import('./components/Home.vue')
        },
        {
            path: '/dialogs',
            component: () => import('./components/Dialogs.vue')
        },
        {
            path: '/profile',
            component: () => import('./components/Profile.vue')
        },
        {
            path: '/liked',
            component: () => import('./components/Liked.vue')
        },
    ]
})
