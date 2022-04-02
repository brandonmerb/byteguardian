import { ActionBarControl, ActionBarControlList } from '../models/actionBarModel';

const credActions: ActionBarControlList = {
  typeName: 'credential',
  items: [
    {
      name: 'Info',
      icon: 'mdi-information-outline',
      action: 'info',
    },
    {
      name: 'Tags',
      icon: 'mdi-tag',
      action: 'tag'
    },
    {
      name: 'Sharing',
      icon: 'mdi-link',
      action: 'share',
    },
    {
      name: 'History',
      icon: 'mdi-clock-outline',
      action: 'history',
    },
    {
      name: 'Settings',
      icon: 'mdi-cog-outline',
      action: 'settings',
    },
    {
      name: 'More',
      icon: 'mdi-dots-vertical',
      action: 'more',
    },
  ]
}

export default credActions;