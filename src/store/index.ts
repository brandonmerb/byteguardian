import Vue, { Component } from 'vue'
import Vuex from 'vuex'

import notesStore from '@/modules/notes/store';
import authStore from '@/modules/authentication/store';

import actionBarOptions from '@/modules/richactions/configs/credentialActionBar';
import {ActionBarControlList} from '@/modules/richactions/models/actionBarModel';

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

  actionBarOptions: ActionBarControlList[];
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
      items: [
        {
          icon: 'mdi-home-outline',
          text: 'Home', 
          route: '/'
        },
        {
          icon: 'mdi-filter-plus-outline',
          text: 'Filter',
          route: '/custom-filter'
        }
      ],
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
    currentEditorTab: 0,

    actionBarOptions: [actionBarOptions]
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
      // Fetch the tab
      let index = val;
      if (typeof val !== 'number'){
        // We may be passed the object directly. If so, fetch it's index
        index = state.tabs.indexOf(val);
      }
      // Set the currentEditorTab index to be the value of indexOf
      state.currentEditorTab = index as number;

      // Process the current tab's action bar items
    }
  },
  actions: {
  },
  getters: {
    currentTab(state): TabItem {
      return state.tabs[state.currentEditorTab];
    },
    currentActionBarItems(state): ActionBarControlList | undefined {
      return state.actionBarOptions.find((x) => x.typeName === state.tabs[state.currentEditorTab]?.itemType);
    }
  },
  modules: {
    notes: notesStore,
    auth: authStore
  }
})
