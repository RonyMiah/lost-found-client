'use client';
import AvaterMenu from '@/components/dashboard/AvaterMenu/AvaterMenu';
import { getUserInfo, } from '@/services/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';


const AuthButton = () => {
  const userInfo = getUserInfo();

  return (
    <>
      {userInfo?.id ? (
        <AvaterMenu />
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
