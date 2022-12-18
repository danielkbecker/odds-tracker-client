<template>
  <div class="mx-auto">
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'pinia';
import { useLoaderStore } from './stores/LoaderStore';
import Navbar from './components/NavBar.vue';

export default {
  components: { Navbar },
  methods: {
    ...mapActions(useLoaderStore, ['loading']),
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
