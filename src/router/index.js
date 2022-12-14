import { createRouter, createWebHistory } from 'vue-router';
import SignupView from '../views/SignupView.vue';
import SplashView from '../views/SplashView.vue';
import DashboardView from '../views/DashboardView.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'splash',
    component: SplashView,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    component: DashboardView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next('/');
  } else {
    next();
  }
});

export default router;
