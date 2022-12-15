<template>
    <!-- eslint-disable max-len -->
  <nav class="grid grid-cols-3 border-b-4" >
    <!-- for logged in users -->
    <router-link to="/dashboard">
      <img class="image max-h-16 ml-5" src="../assets/logo.png" alt="foo">
    </router-link>
    <div>

    </div>
    <div>
      <button class="mt-.5 mb-.5 px-4 py-2 rounded bg-blue-600 text-white uppercase text-xs font-bold hover:bg-blue-800" v-if="isLoggedIn" @click="logout">
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({ path: '/' });
    },
  },
};
</script>
<style scoped>

.hideDot:after {
  content: '.';
  visibility: hidden;
}

.title {
  margin: 5px 0px 10px 0;
}

.logout {
  margin-right: 10px;
  color: white;
}
</style>
