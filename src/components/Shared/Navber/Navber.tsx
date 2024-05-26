'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Container } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/logo3.png';
import AuthButton from '@/components/UI/AuthButton/AuthButton';
import Link from 'next/link';

const drawerWidth = 240;

const Navber = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/">
          <Image
            className="mx-auto"
            src={logo}
            alt="logo"
            height={40}
            width={40}
          />
        </Link>
      </Typography>

      <Divider />
      <List>
        {/* <Link href={''} className="mx-8 block py-4">
          Home
        </Link>
        <Link href={''} className="mx-8 block py-4">
          About Us
        </Link>
        <Link href={''} className="mx-8 block py-4">
          My Profile
        </Link> */}

        <AuthButton />
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: '#501D93' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link href="/">
                <Image src={logo} alt="logo" height={60} width={60} />
              </Link>
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {/* <Link href={'/'} className="mx-8 ">
                Home
              </Link>
              <Link href={''} className="mx-8">
                About Us
              </Link>
              <Link href={''} className="mx-8">
                My Profile
              </Link> */}
              <AuthButton />
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main">
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Navber;
