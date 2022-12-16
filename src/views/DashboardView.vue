<template>
  <div>
  <h1>You are logged in</h1>
    <div v-if="isAuthenticated">{{isAuthenticated.email}}</div>
    <QueryViewer/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import QueryViewer from '../components/QueryViewer.vue';

export default {
  components: {
    QueryViewer,
  },
  computed: {
    ...mapGetters([
      'isAuthenticated',
    ]),
  },
};
</script>
