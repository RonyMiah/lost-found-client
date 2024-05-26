'use client';
import AvaterMenu from '@/components/dashboard/AvaterMenu/AvaterMenu';
import { getUserInfo, removeFromUser } from '@/services/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogout = () => {
    removeFromUser();
    router.refresh();
  };
  return (
    <>
      {userInfo?.id ? (
        <AvaterMenu/>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
