import { RouteConfig } from 'vue-router'


const routes: Array<RouteConfig> = [
  {
    path: '/notes',
    name: 'Notes Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
  }
]

export default routes
