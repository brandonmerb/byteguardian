<template>
  <div>
    <slot>

    </slot>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Menu, MenuItem, Navigation, NavigationItem} from '@/store/index';
export default Vue.extend({
  mounted() {
    // Load our context menu
    const menu: Menu = {
      items: [
        {name: 'File', hoverText:'', click: null, children: []},
        {name: 'Edit', hoverText:'', click: null, children: []},
      ]
    }

    const nav: Navigation = {
      items: [
        {text: 'Home page', icon: 'mdi-home', route: {path: '/'}},
        {text: 'All notes', icon: 'mdi-notebook-multiple', route: {path: '/notes'}},
        {text: 'Add a note', icon: 'mdi-notebook-plus', route: {path: '/notes/create'}},
        {text: 'Filter', icon: 'mdi-filter', route: {path: '/notes/filter'}}
      ]
    }

    this.$store.commit('setMenu', menu);
    this.$store.commit('setLeftNavigation', nav);
  },
})
</script>