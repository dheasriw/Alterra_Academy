import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';
import BukuList from '@/components/BukuList.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/buku-list',
    name: 'BukuList',
    component: BukuList
  },
  // ... tambahkan rute lainnya di sini
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
