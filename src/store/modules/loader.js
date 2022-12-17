export default {
  state: {
    refCount: 0,
    isLoading: false,
  },
  getters: {
    refCounter: (state) => (state.refCount),
    isLoadingGet: (state) => (state.isLoading),
  },
  mutations: {
    loading(state, isLoading) {
      if (isLoading) {
        state.refCount += 1;
        state.isLoading = true;
      } else if (state.refCount > 0) {
        state.refCount -= 1;
        state.isLoading = (state.refCount > 0);
      }
    },
  },
};
