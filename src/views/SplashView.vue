<template>
  <div class="flex flex-col min-h-screen items-center">
    <form @submit.prevent="handleLogin" class="mt-4 flex flex-col items-center max-w-sm rounded
   shadow-lg w-1/3">
      <label for="email" class="email">Email:
        <input type="email" name="email" v-model="email" required>
      </label>
      <label for="email">Password:
        <input type="password" name="password" v-model="password" required>
      </label>
      <button class="w-max mt-4 px-4 py-2 text-center rounded-full bg-blue-500 text-white">
        Login
      </button>
      <div v-if="error">{{ error }}</div>
    </form>

    <div class="basis-1/3">
      <div class="logo flex-row columns-3 h-12">
        <img class="image h-full" src="../assets/basketballlogo.png" alt="foo">
        <img class="image h-full" src="../assets/footballlogo.png" alt="foo">
        <img class="image h-full" src="../assets/hockeylogo.png" alt="foo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        });
        this.$router.push('/dashboard');
      } catch (err) {
        this.error.value = err.message;
      }
    },
  },
};
</script>
<style scoped>
.login {
  margin: 0px 0px 0px 0;
}

.email {
  margin: 20px 0px 0px 0;
}
</style>
