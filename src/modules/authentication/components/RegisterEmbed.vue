<template>
  <v-sheet>
    <div :style="{'max-width': maxWidth == null ? 'auto' : `${maxWidth}px`}"
         :class="{'with-border': border, 'embed-wrapper': true}">
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step :completed="step > 1" step="1">
            Basic Info
          </v-stepper-step>
          <v-divider />
          <v-stepper-step :completed="step > 2" step="2">
            Contact Info
          </v-stepper-step>
          <v-divider />
          <v-stepper-step :completed="step > 3" step="3">
            Account Info
          </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <div>
            Basic
            </div>
          </v-stepper-content>
          <v-stepper-content step="2">
            Contact
          </v-stepper-content>
          <v-stepper-content step="3">
            Account
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'RegisterEmbed',
  data() {
    return {
      step: 1
    }
  },
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
  }
})
</script>
<style scoped>
.with-border {
  border: 1px solid #CCC;
}
.embed-wrapper {
  padding: 20px;
}
</style>