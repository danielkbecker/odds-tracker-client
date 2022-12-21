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
    <div class="flex justify-end mr-10">
        <Dropdown class="cursor-pointer" text="Left" placement="left" v-if="isLoggedIn">
          <template #trigger>
            <span><img class="image max-h-8" src="../assets/accounticon.png" alt="foo"></span>
          </template>
          <ListGroup>
            <list-group-item>
              <template #prefix>
                <svg class="w-5 h-5 ml-0 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
              </template>
              Account
            </list-group-item>
            <ListGroupItem @click="logoutFromApp">
              <template #prefix >
                <img class="max-h-5 max-w-sm ml-.75" src="../assets/logout.png" alt="foo">
                <!--<svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>-->
              </template>
              Logout
            </ListGroupItem>
          </ListGroup>
        </Dropdown>
    </div>
    </div>
  </nav>
</template>

<script>
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue';
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '../stores/AuthStore';

export default {
  components: { Dropdown, ListGroupItem, ListGroup },
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
