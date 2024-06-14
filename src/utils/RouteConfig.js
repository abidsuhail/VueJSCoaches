import AllCoaches from '../components/AllCoaches.vue'
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
    }
};
Object.freeze(routes)
export default routes