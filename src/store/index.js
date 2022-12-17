// import CreatePersistedState from 'vuex-persistedstate';
import persistedStateVuex from 'persisted-state-vuex';
import { createStore } from 'vuex';
import loader from './modules/loader';
import auth from './modules/auth';

// const persistedStateOptions = {
//   paths: [
//     'auth',
//   ],
// };

persistedStateVuex.config({
  paths: ['auth'],
});

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
  // plugins: [CreatePersistedState(persistedStateOptions)],
  plugins: [persistedStateVuex.init],
});
