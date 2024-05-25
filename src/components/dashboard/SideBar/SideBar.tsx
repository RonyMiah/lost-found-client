import { Box, List, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo3.png';

import SidebarItem from './SidebarItem';
import { useEffect, useState } from 'react';
import { drawerItems } from '@/utils/drawerItems';
import { UserRole } from '@/types';

const SideBar = () => {
  const [userRole, setUserRole] = useState(' ');

  //   useEffect(() => {
  //     const { role } = getUserInfo() ;
  //     setUserRole(role);
  //   }, []);

  return (
    <div className=" h-full w-full bg-gradient-to-r from-violet-900 to-violet-900  ">
      <Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ py: 1, mt: 1 }}
          gap={1}
          component={Link}
          href="/"
        >
          <Image src={logo} alt="logo" height={40} width={40} />
          <Typography variant="h6" component="h1">
            Found Way
          </Typography>
        </Stack>
        <List>
          {drawerItems(userRole as UserRole).map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </List>
      </Box>
    </div>
  );
};

export default SideBar;
