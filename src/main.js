import { createApp } from 'vue';
import App from './App.vue'
import router from './router/router.js'
import TheHeader from './components/TheHeader.vue'
import LoadingView from './components/LoadingView.vue'
import BaseCard from './components/BaseCard.vue'
import coachStore from './store/coachStore.js';
const app = createApp(App)

app.component("TheHeader",TheHeader)
app.component("LoadingView",LoadingView)
app.component("BaseCard",BaseCard)

app.use(router)
app.use(coachStore)

app.mount('#app');
