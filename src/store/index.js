import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// Firebase imports
import auth from './modules/auth';

// import axios from 'axios';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});
