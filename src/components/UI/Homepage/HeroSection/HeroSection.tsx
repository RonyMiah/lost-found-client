import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Box className="    bg-gradient-to-r from-violet-900 to-fuchsia-900 py-60">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold pt-4  ">
          REPORT WHAT YOU FOUND OR LOST
        </h1>
        <p className="mt-10">
          Report your lost item here FREE of charge. You will only pay for
          shipping & handling after your item is found.
        </p>
        <hr className="w-20 mx-auto font-bold my-5 py-2" />
        <div className="flex align-middle justify-center gap-5">
          <Link href="/lostitems">
            <Button>Report Lost Item</Button>
          </Link>
          <Link href="/founditems">
            <Button>Report Found Item</Button>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default HeroSection;
