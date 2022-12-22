<template>
  <component :is="currentMenu" :right="false" class="flex">
      <a href="#" class="hover:bg-gray-500 flex flex-row">
        <img class="image max-h-8" src="../assets/homeicon.png" alt="foo">
        <span class="text-sm self-center">Dashboard</span>
        <!--<span class="hover:bg-violet-600 text-sm">Dashboard</span>-->
      </a>
      <a href="#" class="hover:bg-gray-500 flex flex-row">
        <img class="image max-h-8" src="../assets/dice-icon-three.png" alt="foo">
        <span class="text-sm self-center">Odds</span>
      </a>
      <a href="#" class="hover:bg-gray-500 flex flex-row">
        <img class="image max-h-8" src="../assets/hourglass-icon.png" alt="foo">
        <span class="text-sm self-center">Futures</span>
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
<style>

 .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 40px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
      display: flex;
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 0%;
      font-size: 20px;
      width: 100%;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }

</style>
