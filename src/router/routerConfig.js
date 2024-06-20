import AllCoaches from '../pages/AllCoaches.vue'
import CoachRequests from '../pages/CoachRequests.vue';
import ContactCoach from '../pages/ContactCoach.vue';
import AddNewCoach from '../pages/AddNewCoach.vue';

const routes = {
    ALL_COACHES: {
      path:"/allCoaches",
      name : "all-coaches-route",
      component:AllCoaches
    },
    ADD_NEW_COACH: {
      path:"/addNewCoach",
      name : "add-new-coach-route",
      component:AddNewCoach
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