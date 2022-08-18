import React from "react";
import { ReactNode } from "react";
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import CableIcon from '@mui/icons-material/Cable';
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import BarChartIcon from '@mui/icons-material/BarChart';
import TuneIcon from '@mui/icons-material/Tune';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';

export interface menu {
  label?: string;
  link?: string;
  icon?: ReactNode;
}

export const MENUS: menu[] = [
  {
    label: 'Dashboard',
    link: '/dashboard',
    icon: <RunningWithErrorsIcon />
  },
  {
    label: 'My patients',
    link: '/patients',
    icon: <CableIcon />
  },
  {
    label: 'Medication',
    link: '/medication',
    icon: <EarbudsBatteryIcon />
  },
  {
    label: 'Payments',
    link: '/payments',
    icon: <HorizontalSplitIcon />
  },
  {
    label: 'Other features',
    link: '/other-features',
    icon: <BarChartIcon />
  },
  {
    label: 'Publish',
    link: '/publish',
    icon: <TuneIcon />
  },
  {
    label: 'History',
    link: '/history',
    icon: <FolderIcon />
  },
  {
    label: 'Settings',
    link: '/settings',
    icon: <SettingsIcon />
  }
]