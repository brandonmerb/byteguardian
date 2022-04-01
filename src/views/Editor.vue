<template>
  <div>
    <v-tabs v-show="tabs.length > 0" v-model="currentTab">
      <v-tab v-for="tab in tabs" :key="tab.itemId">
        {{tab.text}}
        <v-icon @click="closeTab(tab)">
          mdi-close
        </v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="currentTab">
      <v-tab-item v-for="(tab, index) in tabs" :key="index">
        <component :is="tab.component" :custom-model="tab" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CredentialForm from '../modules/credentials/components/CredentialForm.vue';
import NoteForm from '../modules/notes/components/NoteForm.vue';

import { TabItem } from '../store/index';

export default Vue.extend({
  name: 'Editor',
  components: {
    CredentialForm,
    NoteForm
  },
  computed: {
    currentTab: {
      get () {
        return this.$store.state.currentEditorTab;
      },
      set (v) {
        console.log(v)
        this.$store.commit('setCurrentTab', v);
      }
    },
    tabs () {
      return this.$store.state.tabs;
    }
  },
  methods: {
    closeTab(tab: TabItem) {
      this.$store.commit('removeTabItem', tab);
    }
  },

  mounted() {
    let newTab = {
      icon: '',
      text: 'Sample Credential?',
      component: 'CredentialForm',
      itemId: null,
      itemType: 'credential'
    }
    let newTab2 = {
      icon: '',
      text: 'Sample Note?',
      component: 'NoteForm',
      itemId: null,
      itemType: 'note'
    }
    this.$store.commit('addTabItem', newTab);
    this.$store.commit('addTabItem', newTab2);
  }
})
</script>
<style scoped>
.v-window-item {
  display: flex;
  align-self: stretch;
  justify-content: center;
}
</style>