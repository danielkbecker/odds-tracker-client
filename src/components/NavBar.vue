<template>
  <!-- eslint-disable max-len -->
  <nav class="flex flex-row border-b-4">
    <!-- for logged in users -->
    <div class="flex w-1/3 items-center">
      <!--      <img class="max-h-8 ml-4" src="../assets/hamburger.png" alt="foo" v-if="isLoggedIn">-->
    </div>
    <div class="flex w-1/3 justify-center">
      <img class="image max-h-16" src="../assets/logo.png" alt="foo">
    </div>
    <div class="flex w-1/3 justify-end">
      <button class="pr-4 rounded bg-white" v-if="isLoggedIn" @click="logoutFromApp">
        <img class="max-h-8" src="../assets/logout.png" alt="foo">
      </button>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '../stores/AuthStore';

export default {
  data() {
    return {
      dropdownAvatarName: false,
      email: '',
    };
  },
  watch: {
    dropdownAvatarName() {
      this.email = this.user.email;
    },
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
    isLoggedIn() {
      return this.user != null;
    },
    showUserIcon() {
      return this.user != null && this.dropdownAvatarName;
    },
    getEmail() {
      return this.user.email;
    },
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    logoutFromApp() {
      this.logout();
      this.$router.push({ path: '/' });
    },
    toggle() {
      this.dropdownAvatarName = !this.dropdownAvatarName;
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
