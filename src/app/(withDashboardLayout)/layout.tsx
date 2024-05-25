import DashbordDrawer from '@/components/dashboard/DashboardDrawer/DashboarDrawer';
import { ReactNode } from 'react';

const DashbordLayout = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();
  // if (!isLoggedIn) {
  //   return router.push('/login');
  // }
  return <DashbordDrawer> {children} </DashbordDrawer>;
};

export default DashbordLayout;
