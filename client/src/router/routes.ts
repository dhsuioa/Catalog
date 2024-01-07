import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NewPage.vue') }],
  },
  {
    path: '/Mens',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MensPage.vue') }],
  },
  {
    path: '/Womens',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/WomensPage.vue') }],
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
