// Firebase imports
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '@/firebase/config';

export default {
  state: {
    user: null,
  },
  getters: {
    isAuthenticated: (state) => (!!state.user && state.user !== undefined ? state.user : null),
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    // In the future, will want to do email verification https://redfern.dev/articles/email-verification-firebase-vuejs/
    async signup(context, { email, password }) {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      if (response) {
        context.commit('setUser', response.user);
      } else {
        throw new Error('signup failed');
      }
    },
    async login(context, { email, password }) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        context.commit('setUser', response.user);
      } else {
        throw new Error('login failed');
      }
    },
    async logout() {
      signOut(auth).then(
        this.commit('setUser', null),
      );
    },
  },
  modules: {
  },
};
