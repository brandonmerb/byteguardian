<template>
  <v-sheet class="tabs">
    <div class="tab-bar" @drop="dragEnd($event)" @dragover.prevent @dragenter="dragEnter($event)" v-show="tabs.length> 0">
      <span
          :class="{'tab-title': true, 'tab-title-active': tab === currentTab}"
          v-for="tab in tabs"
          :key="tab.itemId"
          @click.self="tabClick(tab)"
          draggable
          @dragstart="startDrag($event, tab)"
        >
        <v-icon small fab class="tab-icon" @click.self="tabClick(tab)">
          mdi-note
        </v-icon>
        {{tab.text}}
        <v-icon small fab class="tab-close" @click="tabClose(tab)">
          mdi-close-circle
        </v-icon>
      </span>
    </div>
    <div class="tab-content">
      <div :is="currentTab.component" v-if="currentTab != null" :custom-model="currentTab" />
      <div v-else class="tab-content-placeholder">
        Nothing is currently open. Please select something!
      </div>
    </div>
  </v-sheet>
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
    currentTab () {
      return this.$store.getters.currentTab;
    },
    tabs () {
      return this.$store.state.tabs;
    }
  },
  methods: {
    closeTab(tab: TabItem) {
      this.$store.commit('removeTabItem', tab);
    },

    tabClick(tab: TabItem) {
      this.$store.commit('setCurrentTab', tab);
    },
    tabClose(tab: TabItem) {
      this.$store.commit('removeTabItem', tab);
    },

    startDrag(e: DragEvent, tab: TabItem) {
      console.log(e)
      console.log(tab)
    },

    dragEnd(e: DragEvent){
      console.log('end');
    },

    dragEnter(e: DragEvent) {
      console.log('enter');
      console.log(e);
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
.tabs {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
}
.tab-bar {
  height: 40px;
  flex-shrink: 1;
  display: flex;

  font-size: 14px;

  background-color: var(--v-primary-base);
}
.tab-content {
  flex-grow: 1;
  display: flex;

  justify-content: center;
}

.tab-icon {
  margin-right: 5px;
}
.tab-close {
  margin-left: 5px;
}

.tab-title {
  justify-items: center;
  align-items: center;
  display: flex;

  padding-left: 5px;
  padding-right: 5px;

  margin-right: 1px;

  background-color: var(--v-primary-darken1);
}
.tab-title:hover {
  cursor: pointer;
}
.tab-title-active {
  background-color: var(--v-primary-darken2);
}

.tab-content-placeholder {
  align-self: center;
}
</style>