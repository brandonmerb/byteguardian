<template>
  <v-system-bar
    color="primary"
    dark
    v-bind="$attrs"
  >
    <span v-for="item in menu.items" :key="item.name" class="root-menu">
      {{item.name}}
    </span>
  </v-system-bar>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    menu() {
      return this.$store.state.menu;
    },
  }
})
</script>
<style scoped>
.root-menu {
  color: #fff;
  padding: 5px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 1px;
}
.root-menu:hover {
  background-color: rgba(0, 0, 0, .1);
  cursor: default;
}
</style>