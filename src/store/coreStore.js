import { createStore } from 'vuex'
import authStore from './authStore'
import coachStore from './coachStore'
export default createStore({
    modules:{
       "auth":authStore,
       "coach":coachStore
    }
})