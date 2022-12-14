import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MiniCampView from '@/views/MiniCampView.vue'
import ModuleLearningView from '@/views/ModuleLearningView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Bootcamp Coding Online | Ubah Hidupmu Bersama Fazztrack',
            }
        }, {
            path: '/minicamp',
            name: 'minicamp',
            component: MiniCampView,
            meta: {
                title: 'Mini Bootcamp Fazztrack'
            }
        }, {
            path: '/modul-belajar',
            name: 'moduleLearning',
            component: ModuleLearningView,
            meta: {
                title: 'Modul Belajar Online Dari Fazztrack'
            }
        }, {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView,
            meta: {
                title: 'This page could not be found'
            }
        },
    ],
})

routes.beforeEach((to, from, next) => {
    document.title = to.meta.title,
        next()
})

export default routes