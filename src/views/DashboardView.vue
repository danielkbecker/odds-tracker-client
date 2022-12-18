<template>
  <div>
  <h1>You are logged in</h1>
    <div v-if="isLoggedIn">{{emailAddress}}</div>
    <QueryViewer/>
  </div>
</template>
<script>
import { mapState } from 'pinia';
import { useAuthStore } from '../stores/AuthStore';
// import { mapGetters } from 'vuex';
import QueryViewer from '../components/QueryViewer.vue';

export default {
  components: {
    QueryViewer,
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
    isLoggedIn() {
      return this.user != null;
    },
    emailAddress() {
      return this.user.email;
    },
    // ...mapGetters([
    //   'isAuthenticated',
    // ]),
  },
};
</script>
