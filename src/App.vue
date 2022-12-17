<template>
  <div class="mx-auto">
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/NavBar.vue';

export default {
  components: { Navbar },
  created() {
    this.axios.interceptors.request.use((config) => {
      this.$store.commit('loading', true);
      return config;
    }, (error) => {
      this.$store.commit('loading', false);
      return Promise.reject(error);
    });

    this.axios.interceptors.response.use((response) => {
      this.$store.commit('loading', false);
      return response;
    }, (error) => {
      this.$store.commit('loading', false);
      return Promise.reject(error);
    });
  },
};
</script>

<style>
</style>
