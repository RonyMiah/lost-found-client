import { DrawerItem } from '@/types';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

type IProps = {
  item: DrawerItem;
};

const SidebarItem = ({ item }: IProps) => {
  console.log(item?.path)
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();
  console.log(pathName)
  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderRight: '3px solid #ffffff',
                '& svg': { color: '#fdfdfd' },
              }
            : {}),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText secondary  ={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
