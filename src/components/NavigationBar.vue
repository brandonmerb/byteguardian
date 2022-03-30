<template>
  <v-navigation-drawer v-bind="$attrs" :mini-variant="!isOpen">
    <v-list>
      <v-list-item v-for="navItem in nav" :key="navItem.text" :to="navItem.route">
        <v-list-item-icon>
          <v-icon>{{navItem.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title> {{navItem.text}} </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-spacer />
    <v-list class="bottom-icons">
      <v-list-item @click="toggleOpen">
        <v-list-item-icon>
          <v-icon>{{iconToDisplay}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Close Navigation </v-list-item-title>
      </v-list-item>
      <v-list-item @click="toggleSettings">
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Settings </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    isOpen() {
      return this.$store.state.navigationBarExpanded;
    },
    isSettingsOpen() {
      return this.$store.state.settingsOpen;
    },
    iconToDisplay () {
      if (this.isOpen) return 'mdi-arrow-left-thick'
      else return 'mdi-arrow-right-thick'
    },
    nav () {
      return this.$store.state.leftNavigation.items;
    }
  },
  methods: {
    toggleOpen() {
      this.$store.commit('setNavigationBarExpanded', !this.isOpen);
    },
    toggleSettings() {
      this.$store.commit('setSettingsOpen', !this.isSettingsOpen);
    }
  }
});
</script>
<style scoped>
.bottom-icons {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>