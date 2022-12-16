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
      // Log out the user state
      console.log(state.user);
    },
  },
  actions: {
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
