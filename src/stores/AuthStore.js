// src/stores/AuthStore.js (Pinia)
import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/firebase/config';

// eslint-disable-next-line import/prefer-default-export
export const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated() {
      return (!!this.user && this.user !== undefined ? this.user : null);
      // return (state) => (!!state.user && state.user !== undefined ? state.user : null),
    },
  },
  actions: {
    async signup(context, { email, password }) {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      if (response) {
        this.user = response.user;
      } else {
        throw new Error('signup failed');
      }
    },
    async login(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        this.user = response.user;
      } else {
        throw new Error('login failed');
      }
    },
    async logout() {
      signOut(auth).then(
        this.user = null,
      );
    },
  },
  persist: true,
});
