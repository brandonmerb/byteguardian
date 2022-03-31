<template>
  <v-alert :type="toast.type">
    {{toast.message}}
  </v-alert>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    toast: {
      type: Object,
      required: true
    }
  }
})
</script>