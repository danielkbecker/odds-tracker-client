import CreatePersistedState from 'vuex-persistedstate';
import { createStore } from 'vuex';
import loader from './modules/loader';
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
    loader,
  },
  plugins: [CreatePersistedState()],
});
