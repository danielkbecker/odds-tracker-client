<template>
  <!-- eslint-disable max-len -->
  <div class="flex flex-col min-h-screen items-center">
    <tabs v-model="activeTab" class="flex flex-col w-96">
      <tab name="first" title="Login" class="">
        <form @submit.prevent="handleLogin">
          <label for="email" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Email:
            <input type="email" name="emailLogin" v-model="loginEmail" required
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </label>
          <label for="password" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Password:
            <input type="password" name="passwordLogin" v-model="loginPassword" required
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </label>
          <button class="flex mt-4 px-4 py-2 text-center rounded-full bg-blue-500 text-white mx-auto">
            Login
          </button>
          <div v-if="error">{{ error }}</div>
        </form>
      </tab>
      <tab name="second" title="Sign-Up" class="">
        <form @submit.prevent="handleSignup" class="mx-auto flex flex-col items-center">
          Ask for email to login with
          <!--
          <label for="email" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Email:
            <input type="email" name="emailSignup" v-model="signupEmail" required
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </label>
          <label for="password" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Password:
            <input type="password" name="passwordSignup" v-model="signupPassword" required
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </label>
          <button class="flex w-max mt-4 px-4 py-2 text-center rounded-full bg-blue-500 text-white mx-auto">
            Sign Up
          </button>
          <div v-if="error">{{ error }}</div>
          -->
        </form>
      </tab>
    </tabs>
    <!--
    <div class="basis-1/3">
      <div class="logo flex-row columns-3 h-12 mx-auto">
        <img class="image h-full mx-auto" src="../assets/basketballlogo.png" alt="foo">
        <img class="image h-full mx-auto" src="../assets/footballlogo.png" alt="foo">
        <img class="image h-full mx-auto" src="../assets/hockeylogo.png" alt="foo">
      </div>
    </div>
    -->
  </div>
</template>

<script>
import { Tabs, Tab } from 'flowbite-vue';

export default {
  components: { Tab, Tabs },
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      signupEmail: '',
      signupPassword: '',
      error: null,
      activeTab: 'first',
    };
  },
  methods: {
    async handleLogin() {
      try {
        await this.$store.dispatch('login', {
          email: this.loginEmail,
          password: this.loginPassword,
        });
        this.$router.push('/dashboard');
      } catch (err) {
        this.error.value = err.message;
      }
    },
    async handleSignup() {
      try {
        await this.$store.dispatch('signup', {
          email: this.signupEmail,
          password: this.signupPassword,
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
