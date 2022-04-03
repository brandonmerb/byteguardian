<template>
  <v-navigation-drawer 
      v-bind="$attrs"
      :mini-variant="!isOpen"
      width="600"
      :class="{'action-drawer-selected': selectedAction != null}"
    >
    <v-list v-if="selectedAction == null">
      <v-list-item v-for="action in actionBarItems" :key="action.name" @click="openAction(action)">
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
    <div v-else>
      <div class="heading d-flex">
        <v-icon class="heading-icon">
          {{selectedAction.icon}}
        </v-icon>
        <span class="heading-text grow">
          {{selectedAction.name}}
        </span>
        <v-icon class="heading-icon" @click="closeOpenAction">
          mdi-close
        </v-icon>
      </div>
      <div class="contents grow">
        <component :is="actionBarPanel" v-if="selectedAction != null"/>
      </div>
    </div>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from 'vue'
import { Action } from 'vuex';

// I strongly dislike this being integrated with something outside of it's own module
// TODO: Refactor this
import {ActionBarControl} from '../modules/richactions/models/actionBarModel'

import GenericPanel from '../modules/richactions/components/GenericPanel.vue'
import HistoryPanel from '../modules/richactions/components/HistoryPanel.vue'
import InfoPanel from '../modules/richactions/components/InfoPanel.vue'
import MorePanel from '../modules/richactions/components/MorePanel.vue'
import SettingsPanel from '../modules/richactions/components/SettingsPanel.vue'
import SharingPanel from '../modules/richactions/components/SharingPanel.vue'
import TagPanel from '../modules/richactions/components/TagPanel.vue'

export default Vue.extend({
  name: 'ActionBar',
  components: {
    GenericPanel,
    HistoryPanel,
    InfoPanel,
    MorePanel,
    SettingsPanel,
    SharingPanel,
    TagPanel
  },
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
    },

    actionBarPanel () {
      const action: ActionBarControl | null = this.selectedAction;
      if (action != null) {
        if (action.action === 'info'){
          return 'InfoPanel'
        } else if (action.action === 'tag'){
          return 'TagPanel'
        } else if (action.action === 'share'){
          return 'SharingPanel'
        } else if (action.action === 'history'){
          return 'HistoryPanel'
        } else if (action.action === 'settings'){
          return 'SettingsPanel'
        } else if (action.action === 'more'){
          return 'MorePanel'
        }
      }
      return 'GenericPanel';
    }
  },
  data() {
    return {
      selectedAction: null,
    }
  },
  methods: {
    toggleOpen() {
      this.$store.commit('setActionBarExpanded', !this.isOpen);
    },
    openAction(action: any) {
      this.$store.commit('setActionBarExpanded', true);
      if (this.isOpen) {
        this.selectedAction = action;
      } else {
        this.selectedAction = null;
      }
    },
    closeOpenAction() {
      this.selectedAction = null;
      this.toggleOpen();
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

.heading {
  margin-top: 8px;
  background-color: var(--v-primary-base);
}
.heading-icon {
  padding: 16px;
}
.heading-text {
  display: flex;
  align-self: center;
}
</style>
<style>
.action-drawer-selected .v-navigation-drawer__content {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
</style>