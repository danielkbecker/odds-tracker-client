<template>
  <h1>Oops this page does not exist.</h1>
  <button id="backbtn" @click="redirectDashboard">Click me to go back to where you were.</button>
</template>
<script>
export default {
  methods: {
    redirectDashboard() {
      this.$router.go(-1);
    },
  },
};
</script>
