<template>
  <v-navigation-drawer v-bind="$attrs" :mini-variant="!isOpen">
    <v-list>
      <v-list-item v-for="navItem in nav" :key="navItem.text" :to="navItem.route">
        <v-list-item-icon>
          <v-icon>{{navItem.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title> {{navItem.text}} </v-list-item-title>
      </v-list-item>

      <v-spacer />

      <v-list-item class="bottom-icon" @click="toggleOpen">
        <v-list-item-icon>
          <v-icon>{{iconToDisplay}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Close Action Bar </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ActionBar',
  computed: {
    isOpen() {
      return this.$store.state.actionBarExpanded;
    },
    iconToDisplay () {
      if (this.isOpen) return 'mdi-arrow-right-thick'
      else return 'mdi-arrow-left-thick'
    },
    nav () {
      return this.$store.state.leftNavigation.items;
    }
  },
  methods: {
    toggleOpen() {
      this.$store.commit('setActionBarExpanded', !this.isOpen);
    }
  }
})
</script>
<style scoped>
.bottom-icon {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>
