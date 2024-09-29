import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home';
import User from '@/pages/User';
import Page404 from '@/pages/Page404';

const routes = [
  {
    path: '/:catchAll(.*)',
    component: Page404
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
