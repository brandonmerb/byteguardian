import { Store } from 'vuex';
import { MainApplicationState } from './store/index'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<MainApplicationState>
  }
}