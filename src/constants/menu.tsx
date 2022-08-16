export interface menu {
  label?: string;
  link?: string;
}

export const MENUS: menu[] = [
  {
    label: 'Dashboard',
    link: '/dashboard'
  },
  {
    label: 'My patients',
    link: '/patients'
  },
  {
    label: 'Medication',
    link: '/medication'
  },
  {
    label: 'Payments',
    link: '/payments'
  },
  {
    label: 'Other features',
    link: 'other-features'
  },
  {
    label: 'Publish',
    link: '/publish'
  },
  {
    label: 'History',
    link: '/history'
  },
  {
    label: 'Settings',
    link: '/settings'
  }
]