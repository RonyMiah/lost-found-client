import { Box, Container, Grid, Typography } from '@mui/material';
import logo from '@/assets/logo3.png';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#303030', py: 6, color: 'white' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={2}>
            <Image src={logo} alt="logo" height={80} width={80} />
            <p className="text-xl">Found Way</p>
          </Grid>
          <Grid item xs={6} sm={2}>
            <h3 className="text-xl font-bold py-2">Solutions</h3>
            <Box>
              <p>Marketing</p>
              <p>Analytics</p>
              <p>Commerce</p>
              <p>Insights</p>
            </Box>
          </Grid>
          <Grid item xs={6} sm={2}>
            <h3 className="text-xl font-bold py-2">Support</h3>
            <Box>
              <p>Pricing</p>
              <p>Documentation</p>
              <p>Guides</p>
              <p>API Status</p>
            </Box>
          </Grid>
          <Grid item xs={6} sm={2}>
            <h3 className="text-xl font-bold py-2">Company</h3>
            <Box>
              <p>About</p>
              <p>Blog</p>
              <p>Jobs</p>
              <p>Press</p>
            </Box>
          </Grid>
          <Grid item xs={6} sm={2}>
            <h3 className="text-xl font-bold py-2">Legal</h3>
            <Box>
              <p>Claim</p>
              <p>Privacy</p>
              <p>Commerce</p>
              <p>Terms</p>
            </Box>
          </Grid>
          <Grid item xs={6} sm={2}>
            <h3 className="text-xl font-bold py-2">Social media</h3>
            <Box>
              <p>
                {' '}
                <FacebookIcon />
              </p>
              <p>
                <XIcon />
              </p>
              <p>
                <GitHubIcon />
              </p>
              <p>
                {' '}
                <YouTubeIcon />
              </p>
            </Box>
          </Grid>
          <hr className="w-full , mt-8" />
          <Box
            sx={{
              mx: 'auto',
              marginTop: '20px',
            }}
          >
            <Typography color={'white'}>
              © 2024 Found Way, All rights reserved.
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
