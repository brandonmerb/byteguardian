<template>
  <v-navigation-drawer v-bind="$attrs" :mini-variant="!isOpen" width="600">
    <v-list>
      <v-list-item v-for="action in actionBarItems" :key="action.name">
        <v-list-item-icon>
          <v-icon>{{action.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title> {{action.name}} </v-list-item-title>
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

    actionBarItems () {
      if (this.$store.getters.currentActionBarItems != null) {
        return this.$store.getters.currentActionBarItems.items;
      } else {
        return []
      }
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
