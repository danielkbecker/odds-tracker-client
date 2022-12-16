export default {
  namespaced: true,
  state: {
    loading: false,
    requestsPending: 0,
  },
  actions: {
    show({ commit }) {
      commit('show');
    },
    hide({ commit }) {
      commit('hide');
    },
    pending({ commit }) {
      commit('pending');
    },
    done({ commit }) {
      commit('done');
    },
  },
  mutations: {
    show(state) {
      state.loading = true;
    },
    hide(state) {
      state.loading = false;
    },
    pending(state) {
      if (state.requestsPending === 0) {
        this.commit('loader/show');
      }

      state.requestsPending += 1;
    },
    done(state) {
      if (state.requestsPending >= 1) {
        state.requestsPending -= 1;
      }

      if (state.requestsPending <= 0) {
        this.commit('loader/hide');
      }
    },
  },
};
