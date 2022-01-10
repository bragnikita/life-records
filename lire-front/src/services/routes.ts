import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';


const routes: RouteRecordRaw[] = [
    {
        path: '/posts',
        name: 'posts_list',
        component: () => import('../components/postsList.vue')
    },
    {
        path: '/posts/:id/edit',
        component: () => import('../components/postEdit.vue')
    },
    {
        path: '/posts/:id',
        component: () => import('../components/postEdit.vue')
    },
    {
        path: '/auth/signin',
        name: 'signin',
        component: () => import('../components/signin.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes,
});
