import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Profile from './pages/Profile.vue';
import Page404 from './pages/Page404.vue';

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
    name: 'Profile',
    component: Profile,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
