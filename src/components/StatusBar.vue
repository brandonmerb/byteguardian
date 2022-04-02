<template>
  <v-footer v-bind="$attrs">
    <div class="d-flex bottom-bar-container grow justify-end">
      <span class="bottom-bar-connection">
        <v-icon>
          mdi-connection
        </v-icon>
        Connected
      </span>
    </div>
  </v-footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
<style scoped>
.bottom-bar-container {
  font-size: 14px;
}
.bottom-bar-connection {
}
</style>