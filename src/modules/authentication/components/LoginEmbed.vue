<template>
  <v-sheet rounded :outlined="border">
    <div :style="{'max-width': maxWidth == null ? 'auto' : `${maxWidth}px`}"
         class="inner-padding">
      <v-form>
        <v-row>
          <v-col cols="12">
            <h3>Login</h3>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <v-text-field label="Username" prepend-icon="mdi-account" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password" prepend-icon="mdi-lock"/>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="6" v-if="showRegister">
            <v-btn to="/register">
              Register
            </v-btn>
          </v-col>
          <v-col>
            <div class="d-flex justify-end">
              <v-btn @click="login">
                Login
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LoginEmbed',
  props: {
    border: {
      type: Boolean,
      default: true,
      required: false,
    },
    maxWidth: {
      type: String,
      default: null,
      required: false,
    },
    showRegister: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  inject: [
    'httpService'
  ],
  methods: {
    login() {
      this.httpService.get('login');
    }
  }
})
</script>
<style scoped>
.inner-padding { 
  padding: 16px;
}
</style>