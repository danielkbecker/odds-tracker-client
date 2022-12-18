import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useLoadingIndicatorStore = defineStore('LoadingIndicatorStore', {
  state: () => ({
    refCount: 0,
    isLoading: false,
  }),
  getters: {
    refCounter() {
      return this.refCount;
    },
    isLoadingGet() {
      return this.isLoading;
    },
  },
  actions: {
    loading(isLoading) {
      if (isLoading) {
        this.refCount += 1;
        this.isLoading = true;
      } else if (this.refCount > 0) {
        this.refCount -= 1;
        this.isLoading = (this.refCount > 0);
      }
    },
  },
  // Not sure
  persist: false,
});
