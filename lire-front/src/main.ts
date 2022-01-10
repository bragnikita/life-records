import 'modern-normalize/modern-normalize.css'
import './index.css';
import naive from 'naive-ui';
import { createApp } from 'vue'
import App from './App.vue'
import router from './services/routes';
import { createPinia } from 'pinia'

// General Font
import 'vfonts/Lato.css'
// Monospace Font
import 'vfonts/FiraCode.css'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(naive)
    .mount('#app');
