import AllCoaches from '../pages/AllCoaches.vue'
import CoachRequests from '../pages/CoachRequests.vue';
const routes = {
    ALL_COACHES: {
      path:"/allCoaches",
      name : "all-coaches-route",
      component:AllCoaches
    },
    HOME: {
      path:"/home",
      name : "home-route",
      component:AllCoaches
    },
    COACH_REQUESTS: {
      path:"/requests",
      name : "requests-route",
      component:CoachRequests
    }
};
Object.freeze(routes)
export default routes