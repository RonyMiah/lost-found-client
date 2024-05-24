import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AuthButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    // router.refresh();
  };
  return (
    <>
      <Button onClick={handleLogout} color="error">
        LogOut
      </Button>

      <Button component={Link} href="/login">
        Login
      </Button>
    </>
  );
};

export default AuthButton;
