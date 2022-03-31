<template>
  <div class="toast-host">
    <toast v-for="(toast, index) in toasts" :key="index" :toast="toast"/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Toast from './Toast.vue';
import ToastTypeEnum from '../models/toastModels';

interface ToastDto {
  message: string;
  type?: ToastTypeEnum;
  timeout?: number;
}

export default Vue.extend({
  name: 'ToastSystem',
  components: {
    Toast,
  },
  data () {
    return {
      hasBeenCreated: false,
      toasts: [] as ToastDto[],
    }
  },
  inject: ['toastService'],
  created (){
    if (!this.hasBeenCreated) {
      this.toastService.addToastListener(this.pushToast);
      this.hasBeenCreated = true;
    }
  },
  methods: {
    pushToast (message: string, duration?: number, type?: ToastTypeEnum) {
      const toastObj: ToastDto = {
        message: message,
        type: type
      }

      const timeout = setTimeout(() => this.removeToast(toastObj), duration)
      toastObj.timeout = timeout;

      this.toasts.push(toastObj);
    },
    removeToast (toast: any) {
      const id = this.toasts.indexOf(toast, 1);
      this.toasts.splice(id);
    }
  }
})
</script>
<style scoped>
.toast-host {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 20px;
  min-width: 300px;
}
</style>
