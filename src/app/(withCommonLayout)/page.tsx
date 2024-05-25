import About from '@/components/UI/Homepage/About/About';
import FindShip from '@/components/UI/Homepage/FindShip/FindShip';
import HeroSection from '@/components/UI/Homepage/HeroSection/HeroSection';
import ResentLostItems from '@/components/UI/Homepage/ResentLostItems/ResentLostItems';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <About />
      <ResentLostItems />
      <FindShip />
    </Box>
  );
};

export default HomePage;
