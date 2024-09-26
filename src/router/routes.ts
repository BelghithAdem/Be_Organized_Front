import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/Auth/LoginPage.vue'),
  },

];

export default routes;
