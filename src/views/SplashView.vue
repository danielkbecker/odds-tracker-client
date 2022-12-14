<template>
  <div class="flex flex-col min-h-screen items-center">
    <form @submit.prevent="handleLogin" class="w-1/2 items-center">
      <label for="email" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Email:
        <!-- eslint-disable max-len -->
        <input type="email" name="email" v-model="email" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </label>
      <label for="password" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Password:
        <input type="password" name="password" v-model="password" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </label>
      <button class="flex w-max mt-4 px-4 py-2 text-center rounded-full bg-blue-500 text-white mx-auto">
        Login
      </button>
      <div v-if="error">{{ error }}</div>
    </form>

    <div class="basis-1/3" >
      <div class="logo flex-row columns-3 h-12 mx-auto">
        <img class="image h-full mx-auto" src="../assets/basketballlogo.png" alt="foo">
        <img class="image h-full mx-auto" src="../assets/footballlogo.png" alt="foo">
        <img class="image h-full mx-auto" src="../assets/hockeylogo.png" alt="foo">
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

.logo {
  margin: 30px 0px 0px 0;
}
.login {
  margin: 0px 0px 0px 0;
}

.email {
  margin: 20px 0px 0px 0;
}

.password {
  margin: 20px 0px 0px 0;
}
</style>
