<template>
  <div id="app">
    <!-- https://github.com/mkdillard/vue3-burger-menu -->
    <component :is="currentMenu" :right="false" v-if="isLoggedIn">
      <a href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span>Favourites</span>
      </a>
    </component>
    <main id="page-wrap">
      <Navbar/>
      <router-view/>
    </main>
  </div>
</template>
<script>
import { Slide } from 'vue3-burger-menu';
import { mapActions, mapState } from 'pinia';
import { useLoadingIndicatorStore } from './stores/LoadingIndicatorStore';
import Navbar from './components/NavBar.vue';
import { useAuthStore } from './stores/AuthStore';

export default {
  data() {
    return {
      foo: true,
      currentMenu: 'slide',
    };
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
    isLoggedIn() {
      return this.user != null;
    },
  },
  components: { Navbar, Slide },
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
