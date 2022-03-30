import Vue from 'vue'
import Vuex from 'vuex'

import notesStore from '@/modules/notes/store';

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

interface MainApplicationState {
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

    settingsOpen: false
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
    }
  },
  actions: {
  },
  modules: {
    notes: notesStore
  }
})
