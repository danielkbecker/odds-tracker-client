<template>
    <!-- eslint-disable max-len -->
  <nav class="grid grid-cols-3 bg-blue-600 justify-center">
    <div class="leftCol">
      .
    </div>
    <router-link to="/dashboard">
      <h1 class="title text-center">Sports Odds Tracking</h1>
    </router-link>

    <!-- for logged in users -->
    <div class="text-end logout" v-if="isLoggedIn">
      <button class="flex mt-4 px-4 py-2 rounded bg-blue-500 text-white mx-auto uppercase text-xs font-bold" @click="logout">Logout</button>
    </div>

    <!-- for logged out users -->
<!--    <div class="flex space-x-4">-->
<!--      <router-link to="/login">Login</router-link>-->
<!--      <router-link to="/signup">Signup</router-link>-->
<!--    </div>-->
  </nav>
</template>

<script>
export default {
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

.leftCol:after {
  content: '.';
  visibility: hidden;
}

.title {
  margin: 5px 0px 10px 0;
  color: white;
}

.logout {
  margin-right: 10px;
  color: white;
}
</style>
