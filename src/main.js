import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router'; // Impor router Vue

loadFonts();

createApp(App)
  .use(router) // Gunakan Vue Router
  .use(vuetify)
  .mount('#app');
