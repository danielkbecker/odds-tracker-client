import { defineStore } from 'pinia';

export const useAuthStore = defineStore('LoaderStore', {
  state: () => ({
    refCount: 0,
    isLoading: false,
  }),
  getters: {
    refCounter: this.refCount,
    isLoadingGet: this.isLoading,
  },
  actions: {
  },
  // Not sure
  // persist: false,
});
