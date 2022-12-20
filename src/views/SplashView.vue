<template>
  <!-- eslint-disable max-len -->
  <div class="flex flex-wrap mx-auto">
    <div class="flex flex-col w-96 mx-auto">
      <h1 class="flex flex-col w-96 justify-center text-center font-bold text-4xl mt-20">Sign In</h1>
      <div class="flex flex-col w-96 justify-center text-center mt-2 text-neutral-500">Log in and track your bets.</div>
      <div class="flex flex-col w-96 mt-6 justify-center" v-if="signInToggled">
        <form @submit.prevent="handleLogin">
          <label for="email" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Email:
            <input type="email" name="emailLogin" v-model="loginEmail" required
                   class="autofill:shadow-fill-white emailInput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 font-normal">
          </label>
          <label for="password" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Password:
            <input type="password" name="passwordLogin" v-model="loginPassword" required
                   class="passwordInput border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 dark:bg-gray-700 font-normal">
          </label>
          <div v-if="error">{{ error }}</div>
          <div class="flex flex-row w-96 mt-1">
            <div class="text-left text-blue-500 text-sm mt-1">Forgot Password?</div>
            <div class="flex grow justify-end">
              <button class="flex px-4 py-2 text-right rounded hover:bg-blue-800 bg-blue-600 text-white uppercase text-xs font-bold" @click.prevent="handleLogin">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useAuthStore } from '../stores/AuthStore';

export default {
  name: 'splashView',
  data() {
    return {
      openTab: 1,
      loginEmail: '',
      loginPassword: '',
      signupEmail: '',
      signupPassword: '',
      error: null,
      signInToggled: true,
    };
  },
  methods: {
    ...mapActions(useAuthStore, ['signup', 'login']),
    async handleLogin() {
      try {
        await this.login('login', {
          email: this.loginEmail,
          password: this.loginPassword,
        });
        this.$router.push('/dashboard');
      } catch (err) {
        this.error = err.message;
      }
    },
    async handleSignup() {
      try {
        await this.signup('signup', {
          email: this.signupEmail,
          password: this.signupPassword,
        });
        this.$router.push('/dashboard');
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>

<style scoped>
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}
</style>
