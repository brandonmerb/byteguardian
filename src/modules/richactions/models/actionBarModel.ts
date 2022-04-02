export interface ActionBarControl {
  name: string
  icon: string
  action: string
  data?: any
}

export interface ActionBarControlList {
  typeName: string
  items: ActionBarControl[]
}