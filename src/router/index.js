import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/AuthStore';
import SplashView from '../views/SplashView.vue';
import DashboardView from '../views/DashboardView.vue';
import PageNotExist from '../views/PageNotExist.vue';

const routes = [
  {
    path: '/',
    name: 'splash',
    component: SplashView,
    alias: '/sign-up',
    meta: { requiresAuth: false },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotExist,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStores = useAuthStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authStores.isAuthenticated) {
      next();
      return;
    }
    next('/');
  } else {
    if (authStores.isAuthenticated) {
      next('/dashboard');
      return;
    }
    next();
  }
});

export default router;
