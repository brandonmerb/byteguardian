<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="justify-center">
        <register-embed />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import RegisterEmbed from '@/modules/authentication/components/RegisterEmbed.vue'

export default Vue.extend({
  name: 'Register',
  components: {
    RegisterEmbed
  }
})
</script>
