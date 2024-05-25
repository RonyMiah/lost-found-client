import { USER_ROLE } from '@/constants/role';
import { DrawerItem, UserRole } from '@/types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import ReviewsIcon from '@mui/icons-material/Reviews';

import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
//userRole wise Item show using Switch Catch
export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: 'Dashboard',
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: 'Manage Users',
          path: `${role}/manage-users`,
          icon: GroupAddIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: 'Dashboard',
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: 'Specialties',
          path: `${role}/specialties`,
          icon: CameraEnhanceIcon,
        },
        {
          title: 'Doctors',
          path: `${role}/doctors`,
          icon: LocalHospitalIcon,
        },

        {
          title: 'Schedules',
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: 'Appointments',
          path: `${role}/appointments`,
          icon: PunchClockIcon,
        },
        {
          title: 'Reviews',
          path: `${role}/reviews`,
          icon: ReviewsIcon,
        }
      );
      break;
    default:
      break;
  }

  return [...roleMenus];
};
