<template>
  <div class="mx-auto">
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'pinia';
import { useLoadingIndicatorStore } from './stores/LoadingIndicatorStore';
import Navbar from './components/NavBar.vue';

export default {
  components: { Navbar },
  methods: {
    ...mapActions(useLoadingIndicatorStore, ['loading']),
  },
  created() {
    this.axios.interceptors.request.use((config) => {
      this.loading(true);
      return config;
    }, (error) => {
      this.loading(false);
      return Promise.reject(error);
    });

    this.axios.interceptors.response.use((response) => {
      this.loading(false);
      return response;
    }, (error) => {
      this.loading(false);
      return Promise.reject(error);
    });
  },
};
</script>

<style>
</style>
