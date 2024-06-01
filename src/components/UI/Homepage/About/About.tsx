import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import aboutImage from '@/assets/lost-and-found.png';
const About = () => {
  return (
    <div className=" py-12">
      <h2 className="text-5xl font-bold  text-center text-white ">
        About Us <hr className="w-24 mx-auto font-bold mt-4" />
      </h2>
      <Container>
        <div className="text-white py-8">
          <Grid container spacing={16}>
            <Grid item xs={12} md={6}>
              <h2 className="text-3xl font-bold  mt-6">
                LOST AND FOUND IS OUR CORE BUSINESS
              </h2>
              <p className="mt-5">
                The Lost and Found App was developed in cooperation with
                industry leaders from hospitality, aviation and public
                transportation. In all of our products, we keep both the
                companies as well as the passengers maximum satisfaction in
                mind.
              </p>
              <h2 className="text-3xl  my-8">We Provide </h2>
              <li>revolutionary Lost Services . </li>
              <li>revolutionary Found Services . </li>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src={aboutImage}
                alt="about image"
                width={1000}
                height={1000}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default About;
