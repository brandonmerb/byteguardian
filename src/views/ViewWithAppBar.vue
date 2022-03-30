<template>
  <v-app>
    <navigation-bar app />
    <v-system-bar
      app
      color="primary"
      dark
    >
      <span v-for="item in menu.items" :key="item.name" class="root-menu">
        {{item.name}}
      </span>
    </v-system-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import NavigationBar from '@/components/NavigationBar.vue';

export default Vue.extend({
  components: { NavigationBar },
  name: 'ViewWithAppBar',

  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  data: () => ({
  }),
});
</script>
<style scoped>
</style>