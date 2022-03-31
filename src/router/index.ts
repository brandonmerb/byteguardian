import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

import NotesRoutes from '@/modules/notes/routes';
import CredentialRoutes from '@/modules/credentials/routes';
import AuthRoutes from '@/modules/authentication/routes';

Vue.use(VueRouter)

// Configure our default routes
let routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// Concat dynamically added routes to create a single router instance
routes = routes.concat(AuthRoutes);
routes = routes.concat(NotesRoutes);
routes = routes.concat(CredentialRoutes);

// Instantiate our single router instance
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Configure meta data controls over layout areas
router.beforeEach((to, from, next) => {
  // For each of these areas, if the meta is undefined we will enable it
  // Otherwise if defined, we will set to the value defined in the meta
  router.app.$store.commit('setNavigationBarVisible', to.meta?.showNavigationBar == null ? true : to.meta.showNavigationBar);
  router.app.$store.commit('setSystemBarVisible', to.meta?.showSystemBar == null ? true : to.meta.showSystemBar);
  router.app.$store.commit('setStatusBarVisible', to.meta?.showStatusBar == null ? true : to.meta.showStatusBar);
  router.app.$store.commit('setActionBarVisible', to.meta?.showActionBar == null ? true : to.meta.showActionBar);

  // Check if we require authentication. Require it by default if not otherwise specified.
  if (to.meta?.requireAuthentication == null || to.meta.requireAuthentication === true) {
    // If required, then check if we're authentication before prompting for auth
    /*if (router.app.$store.state.auth.authenticated !== true){
      next({path: '/login'})
    } else {
      // We're authenticated. Check if session still valid
      if (router.app.$store.state.auth.sessionEndDate <= new Date()){
        // Session has ended. Redirect to login
        next({path: '/login'})
      }
    }*/
  }

  next();
});


export default router
