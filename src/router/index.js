import { createRouter, createWebHistory } from "vue-router";

import Home from '../view/Home.vue';
import Detail from '../view/Detail.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/detail',
        component: Detail,
        name: 'Detail'
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {return { top: 0 }}
})

export default router;