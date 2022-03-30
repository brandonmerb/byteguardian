// typings.d.ts or router.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    showSystemBar?: boolean,
    showStatusBar?: boolean,
    showActionBar?: boolean,
    showNavigationBar?: boolean
  }
}