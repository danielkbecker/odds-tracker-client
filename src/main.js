import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import App from './App.vue';
import router from './router';
import './style.css';

const pinia = createPinia();
const app = createApp(App);
pinia.use(piniaPluginPersistedState);
app.use(VueAxios, axios);
app.use(pinia);
app.use(router);
app.mount('#app');
