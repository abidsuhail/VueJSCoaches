import { createApp } from 'vue';
import App from './App.vue'
import router from './router/router.js'
import TheHeader from './components/TheHeader.vue'

const app = createApp(App)

app.component("TheHeader",TheHeader)
app.use(router)
app.mount('#app');
