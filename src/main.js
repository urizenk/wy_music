import { createApp } from 'vue';
import App from './App.vue';
import {useVant} from "./plugins/index.js";
import {router} from '@/router'
const app = createApp(App)
useVant(app)
app.use(router)
app.mount('#app')