// src/stores/AuthStore.js (Pinia)
import { defineStore } from 'pinia';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const useVegasInsiderStore = defineStore('VegasInsiderStore', {
  state: () => ({
    tables: null,
    requested_table: null,
    futures: null,
  }),
  getters: {
    current_odds(state) {
      return state.requested_table;
    },
  },
  actions: {
    async fetchTablesFromBackend() {
      const response = await axios.get('/query/tables');
      if (response) {
        this.tables = response.data;
      } else {
        throw new Error('could not get tables');
      }
    },
    async getOddsTable(tableName) {
      const response = await axios.post('/query/table', { table_name: tableName });
      if (response) {
        this.requested_table = response.data;
      } else {
        throw new Error('could not get table');
      }
    },
  },
  persist: false,
});
