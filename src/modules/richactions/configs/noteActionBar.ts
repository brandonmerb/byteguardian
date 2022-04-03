import { ActionBarControlList } from '../models/actionBarModel';

const noteActions: ActionBarControlList = {
  typeName: 'note',
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
      icon: 'mdi-share',
      action: 'share',
    },
    {
      name: 'Attachments',
      icon: 'mdi-paperclip',
      action: 'attach',
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

export default noteActions;