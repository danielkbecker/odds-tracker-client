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
    <div class="flex w-1/3 justify-end items-center">
      <VDropdown placement="right" v-if="isLoggedIn" class="mr-4">
    <!-- Button content -->
    <template v-slot:button>
      <img class="w-10 h-10 rounded-full border-gray-600 mr-3" src="../assets/accounticon.png" alt="Saleh Mir" />
    </template>

    <!-- Opened dropdown content -->
    <template v-slot:content>
      <a class="flex w-full justify-between items-center rounded px-2 py-1 my-1 hover:bg-indigo-600 hover:text-white" href="#">Profile</a>
      <a class="flex w-full justify-between items-center rounded px-2 py-1 my-1 hover:bg-indigo-600 hover:text-white" href="#">Settings</a>
      <a class="flex w-full justify-between items-center rounded px-2 py-1 my-1 hover:bg-indigo-600 hover:text-white" href="#">Help</a>

      <hr />

      <a class="flex w-full justify-between items-center rounded px-2 py-1 my-1 hover:bg-red-600 hover:text-white" href="#" @click.prevent="logoutFromApp">Logout</a>
    </template>
  </VDropdown>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import VDropdown from './VDropdown.vue';
import { useAuthStore } from '../stores/AuthStore';

export default {
  components: { VDropdown },
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
