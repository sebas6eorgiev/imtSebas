import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/skills',
        name: 'skills',
        component: () => import('../views/SkillsView.vue')
    },
    {
        path: '/work',
        name: 'work',
        component: () => import('../views/WorkView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/ContactView.vue')
    }    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
