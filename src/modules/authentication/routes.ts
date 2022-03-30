import { RouteConfig } from 'vue-router'


const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    meta: {
      showSystemBar: false,
      showStatusBar: false,
      showActionBar: false,
      showNavigationBar: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
    meta: {
      showSystemBar: false,
      showStatusBar: false,
      showActionBar: false,
      showNavigationBar: false
    }
  },
]

export default routes
