<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="justify-center">
        <login-embed show-register/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import LoginEmbed from '@/modules/authentication/components/LoginEmbed.vue'

export default Vue.extend({
  name: 'Login',
  components: {
    LoginEmbed
  }
})
</script>
