<template>
  <v-app class="host-app">
    <navigation-bar app v-show="isNavigationBarVisible"/>
    <action-bar app right v-show="isActionBarVisible"/>
    <system-bar app v-show="isSystemBarVisible"/>
    <v-main app>
      <router-view />
    </v-main>
    <status-bar app v-show="isStatusBarVisible"/>
    <v-dialog
      v-model="isSettingsOpen"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition">
      <settings />
    </v-dialog>
    <toast-system />
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import ActionBar from '@/components/ActionBar.vue'
import NavigationBar from '@/components/NavigationBar.vue';
import SystemBar from '@/components/SystemBar.vue'
import StatusBar from '@/components/StatusBar.vue'
import Settings from '@/views/Settings.vue';
import ToastSystem from '@/components/ToastSystem.vue';

export default Vue.extend({
  components: {
    ActionBar,
    NavigationBar,
    Settings,
    SystemBar,
    StatusBar,
    ToastSystem
  },
  computed: {
    isSettingsOpen: {
      get () {
        return this.$store.state.settingsOpen;
      },
      set (v) {
        this.$store.commit('setSettingsOpen', v);
      }
    },
    isNavigationBarVisible () {
      return this.$store.state.navigationBarVisible;
    },
    isActionBarVisible () {
      return this.$store.state.actionBarVisible;
    },
    isSystemBarVisible () {
      return this.$store.state.systemBarVisible;
    },
    isStatusBarVisible () {
      return this.$store.state.statusBarVisible;
    }
  },
})
</script>
<style scoped>
</style>