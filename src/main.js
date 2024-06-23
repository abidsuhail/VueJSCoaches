import { createApp } from 'vue';
import App from './App.vue'
import router from './router/router.js'
import TheHeader from './components/TheHeader.vue'
import LoadingView from './components/LoadingView.vue'
import BaseCard from './components/BaseCard.vue'
import coreStore from './store/coreStore.js';
const app = createApp(App)

app.component("TheHeader",TheHeader)
app.component("LoadingView",LoadingView)
app.component("BaseCard",BaseCard)

app.use(router)
app.use(coreStore)

app.mount('#app');
