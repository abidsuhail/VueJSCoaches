import AllCoaches from '../pages/AllCoaches.vue'
import CoachRequests from '../pages/CoachRequests.vue';
import ContactCoach from '../pages/ContactCoach.vue';
const routes = {
    ALL_COACHES: {
      path:"/allCoaches",
      name : "all-coaches-route",
      component:AllCoaches
    },
    HOME: {
      path:"/",
      name : "home-route",
      redirect:"/allCoaches",
      component:AllCoaches
    },
    COACH_REQUESTS: {
      path:"/requests",
      name : "requests-route",
      component:CoachRequests
    },
    CONTACT_COACH: {
      path:"/contactCoach/:coachId",
      name : "contact-coach-route",
      component:ContactCoach,
      props:true
    }
};
Object.freeze(routes)
export default routes