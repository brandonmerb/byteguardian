import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import BaseHttpService from './services/baseHttpService'
import ToastService from './services/toastService'

Vue.config.productionTip = false

const toastService: ToastService = new ToastService().setStore(store);
const httpService: BaseHttpService = new BaseHttpService('https://localhost:8080', toastService).setStore(store);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  provide: {
    'httpService': httpService,
    'toastService': toastService
  }
}).$mount('#app')
