<template>
  <component :is="currentMenu" :right="false">
      <a href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span>{{ email }}</span>
      </a>
            <a href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span>{{ email }}</span>
      </a>
            <a href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span>{{ email }}</span>
      </a>
            <a href="#">
        <i class="fa fa-fw fa-star-o"></i>
        <span>{{ email }}</span>
      </a>
    </component>
</template>
<script>
import { Slide } from 'vue3-burger-menu';
import { mapState } from 'pinia';
import { useAuthStore } from '@/stores/AuthStore';

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
    email() {
      if (this.user != null) {
        return this.user.email;
      }
      return '';
    },
  },
  components: { Slide },

};

</script>
