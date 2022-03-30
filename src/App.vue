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
  }),
});
</script>
<style>
html, body {
  overflow: auto;
}
</style>
