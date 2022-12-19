// src/stores/AuthStore.js (Pinia)
import { defineStore } from 'pinia';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const useVegasInsiderStore = defineStore('VegasInsiderStore', {
  state: () => ({
    tables: null,
  }),
  actions: {
    async fetchTablesFromBackend() {
      const response = await axios.get('/query/tables');
      if (response) {
        this.tables = response.data;
      } else {
        throw new Error('could not get tables');
      }
    },
  },
  persist: true,
});
