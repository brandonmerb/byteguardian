<template>
  <v-card>
    <v-card-title>
      Custom Settings
    </v-card-title>
    <v-card-text>
      Nothing here yet
    </v-card-text>
    <v-btn @click="closeSettings"
            fab
            small
            absolute
            right
            class="custom-top">
      <v-icon>
        mdi-close
      </v-icon>
    </v-btn>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Settings',
  methods: {
    closeSettings () {
      this.$store.commit('setSettingsOpen', false);
    }
  }
})
</script>
<style scoped>
.custom-top {
  top: 20px;
}
</style>