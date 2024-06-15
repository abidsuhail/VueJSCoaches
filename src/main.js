import { createApp } from 'vue';
import App from './App.vue'
import router from './router/router.js'
import TheHeader from './components/TheHeader.vue'
import LoadingView from './components/LoadingView.vue'

const app = createApp(App)

app.component("TheHeader",TheHeader)
app.component("LoadingView",LoadingView)
app.use(router)
app.mount('#app');
