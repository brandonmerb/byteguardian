<template>
  <component :is="mainView" />
</template>

<script lang="ts">
import Vue from 'vue';
import store from './store/index'
import ViewWithAppBar from '@/views/ViewWithAppBar.vue'
import ViewWithHeader from '@/views/ViewWithHeader.vue'
import DefaultLayout from '@/views/DefaultLayout.vue'

export default Vue.extend({
  name: 'App',
  components: {
    ViewWithAppBar,
    ViewWithHeader,
    DefaultLayout
  },
  store,
  computed: {
    mainView() {
      return 'DefaultLayout'
    }
  },
  data: () => ({
    darkTheme: true
  }),
  watch: {
    darkTheme (to) {
      this.$vuetify.theme.dark = to;
    }
  },
  beforeMount() {
    // Make sure we have the proper theme
    this.$vuetify.theme.dark = this.darkTheme;
  }
});
</script>
<style>
html, body {
  overflow: auto;
}
.v-main__wrap {
  display: flex;
}
</style>
