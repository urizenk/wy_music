/*
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-19 13:22:54
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-19 21:21:32
 * @FilePath: \wy_music\src\router\index.js
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: '/home'
    }
    ,
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/itemMusic',
        name: 'itemMusic',
        component: () => import('../views/ItemMusic.vue')
    },
    {
        path: '/plays',
        name: 'plays',
        component: () => import('../views/Plays.vue')
    }
]

export const router = createRouter({
    history:  createWebHashHistory(),
    routes: routes
})

