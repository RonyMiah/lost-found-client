'use client';
import { USER_ROLE } from '@/constants/role';
import { DrawerItem, UserRole } from '@/types';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: 'Website Activity',
          path: `${role}/activity`,
          icon: LocalActivityIcon,
        },
        {
          title: 'Manage Users',
          path: `${role}/users`,
          icon: ManageAccountsIcon,
        }
      );
      break;
    default:
      break;
  }

  return [...roleMenus];
};
