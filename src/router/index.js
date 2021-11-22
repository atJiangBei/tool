import * as VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/view/nav-home'),
  },
  {
    path: '/fileToBase',
    component: () => import('@/view/file-to-base64'),
  },
  {
    path: '/createImgByCanvas',
    component: () => import('@/view/create-img-by-canvas'),
  },
  {
    path: '/manualMarking',
    component: () => import('@/view/manual-marking'),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

export default router;
