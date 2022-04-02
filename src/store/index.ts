import Vue, { Component } from 'vue'
import Vuex from 'vuex'

import notesStore from '@/modules/notes/store';
import authStore from '@/modules/authentication/store';

Vue.use(Vuex)

/* 
  Menu, MenuItems, Navigation, NavigationItems are all 
  good candidates to potentially be refactored. I think
  they're potentially superfluous and unnecessary.
*/
interface Menu {
  items: Array<MenuItem>
}

interface MenuItem {
  name: string,
  hoverText: string,
  click: any,
  
  children: Array<MenuItem>
}

interface Navigation {
  items: Array<NavigationItem>
}

interface NavigationItem {
  icon: string,
  text: string,
  route: any
}

export interface TabItem {
  icon: string,
  text: string,
  component: Component,

  itemId: string,
  itemType: 'credential' | 'note',
}

export interface MainApplicationState {
  menu: Menu;
  leftNavigation: Navigation;

  navigationBarVisible: boolean;
  navigationBarExpanded: boolean;

  actionBarVisible: boolean;
  actionBarExpanded: boolean;

  systemBarVisible: boolean;
  statusBarVisible: boolean;
 
  settingsOpen: boolean;
  desktopMode: boolean;

  tabs: TabItem[];
  currentEditorTab: number;
}

export {
  Menu, MenuItem, Navigation, NavigationItem
}


// The goal of this store is two things:
// 1) Supply all of the base application store functionality
// 2) Import Vuex modules for all application modules in the project
export default new Vuex.Store({
  state: {
    menu: {
      items: []
    },

    leftNavigation: {
      items: [],
    },

    desktopMode: true,

    navigationBarVisible: true,
    navigationBarExpanded: false,

    actionBarVisible: true,
    actionBarExpanded: false,

    systemBarVisible: true,
    statusBarVisible: true,

    settingsOpen: false,

    tabs: [],
    currentEditorTab: 1,
  },
  mutations: {
    setNavigationBarVisible(state: MainApplicationState, val: boolean) {
      state.navigationBarVisible = val;
    },
    setNavigationBarExpanded(state: MainApplicationState, val: boolean) {
      state.navigationBarExpanded = val;
    },

    setActionBarVisible(state: MainApplicationState, val: boolean) {
      state.actionBarVisible = val;
    },
    setActionBarExpanded(state: MainApplicationState, val: boolean) {
      state.actionBarExpanded = val;
    },

    setMenu(state: MainApplicationState, menu: Menu) {
      state.menu = menu;
    },
    setLeftNavigation(state: MainApplicationState, nav: Navigation){
      state.leftNavigation = nav;
    },

    setSettingsOpen(state: MainApplicationState, val: boolean) {
      state.settingsOpen = val;
    },

    setSystemBarVisible(state: MainApplicationState, val: boolean) {
      state.systemBarVisible = val;
    },
    setStatusBarVisible(state: MainApplicationState, val: boolean) {
      state.statusBarVisible = val;
    },

    addTabItem(state: MainApplicationState, val: TabItem) {
      state.tabs.push(val);
    },
    removeTabItem(state: MainApplicationState, val: TabItem) {
      const indexOf = state.tabs.indexOf(val);
      state.tabs.splice(indexOf, 1);
    },
    closeAllTabs(state: MainApplicationState) {
      state.tabs = [];
    },
    closeOtherTabs(state: MainApplicationState, val: TabItem) {
      state.tabs = [val];
    },

    setCurrentTab(state: MainApplicationState, val: TabItem | number) {
      let index = val;
      if (typeof val !== 'number'){
        index = state.tabs.indexOf(val);
      }
      state.currentEditorTab = index as number;
    }
  },
  actions: {
  },
  getters: {
    currentTab(state): TabItem {
      return state.tabs[state.currentEditorTab];
    }
  },
  modules: {
    notes: notesStore,
    auth: authStore
  }
})
