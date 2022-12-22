<template>
  <div id="app">
    <SideBar v-if="isLoggedIn"/>
    <main id="page-wrap">
      <Navbar/>
      <router-view/>
    </main>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import SideBar from './components/SideBar.vue';
import { useLoadingIndicatorStore } from './stores/LoadingIndicatorStore';
import Navbar from './components/NavBar.vue';
import { useAuthStore } from './stores/AuthStore';

export default {
  data() {
    return {
      currentMenu: 'slide',
    };
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
    isLoggedIn() {
      return this.user != null;
    },
  },
  components: { Navbar, SideBar },
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
  ...mapActions(useAuthStore, ['logout']),
  logoutFromApp() {
    this.logout();
    this.$router.push({ path: '/' });
  },
};
</script>

<style>

 .bm-burger-button {
      margin-top: -20px;
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
</style>
