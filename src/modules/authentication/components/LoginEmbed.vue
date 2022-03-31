<template>
  <v-sheet>
    <div :style="{'max-width': maxWidth == null ? 'auto' : `${maxWidth}px`}"
         :class="{'with-border': border, 'inner-padding': true}">
      <v-form>
        <v-row>
          <v-col cols="12">
            <h3>Login</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Username" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-end">
              <v-btn>
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
  }
})
</script>
<style scoped>
.with-border {
  border: 1px solid #ccc;
}
.inner-padding { 
  padding: 12px;
}
</style>