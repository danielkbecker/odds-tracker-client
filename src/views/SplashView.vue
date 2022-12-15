<template>
  <!-- eslint-disable max-len -->
  <div class="flex flex-wrap mx-auto">
    <div class="flex flex-col w-96 mx-auto">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" @click.prevent="toggleTabs(1)" @keydown="toggleTabs(1)"
             v-bind:class="{'text-blue-600 bg-white': openTab !== 1, 'text-white bg-blue-600': openTab === 1}">
            Login
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" @click.prevent="toggleTabs(2)" @keydown="toggleTabs(1)"
             v-bind:class="{'text-blue-600 bg-white': openTab !== 2, 'text-white bg-blue-600': openTab === 2}">
            Sign Up
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
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
                <button class="flex mt-4 px-4 py-2 text-center rounded bg-blue-500 text-white mx-auto uppercase text-xs font-bold">
                  Login
                </button>
                <div v-if="error">{{ error }}</div>
              </form>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <form @submit.prevent="handleSignup">
                <label for="email" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Email:
                  <input type="email" name="emailSignup" v-model="signupEmail" required
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </label>
                <label for="password" class="email block mb-2 text-sm
       font-medium text-gray-900 dark:text-white">Password:
                  <input type="password" name="passwordSignup" v-model="signupPassword" required
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </label>
                <button class="flex mt-4 px-4 py-2 text-center rounded bg-blue-500 text-white mx-auto uppercase text-xs font-bold">
                  Sign Up
                </button>
                <div v-if="error">{{ error }}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
    async handleLogin() {
      try {
        await this.$store.dispatch('login', {
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
        await this.$store.dispatch('signup', {
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
.block {
  cursor: pointer
}
</style>
