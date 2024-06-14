import { createWebHistory, createRouter } from 'vue-router'
import RouteConfig from '../utils/RouteConfig.js'
const routes = []
Object.values(RouteConfig).forEach((route) => {
    routes.push(route)
});
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router