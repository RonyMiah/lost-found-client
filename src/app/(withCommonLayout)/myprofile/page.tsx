'use client';
import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import { useGetSingelUserQuery } from '@/redux/api/userApi';
import { Button, Container, Divider, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import MyClaimRequest from './components/MyClaimRequest';

const MyProfile = () => {
  const { data, isLoading } = useGetSingelUserQuery({});

  if (isLoading) {
    <h1>Loading ...</h1>;
  }
  console.log(data);

  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };

  const handleChangePassword = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className="py-24 text-white h-screen w- bg-gradient-to-r from-violet-900 to-fuchsia-900">
      <Container>
        <div className="my-16">
          <h1 className="text-3xl font-bold mx-auto text-center ">
            {' '}
            User Account{' '}
          </h1>
          <hr className="w-48 mx-auto text-center my-6" />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <h1 className="text-2xl font-normal my-2">Edit Profile</h1>

            <div className="max-w-[600px]">
              {isLoading ? (
                <h1>Loading ....</h1>
              ) : (
                <ReuseableForm onSubmit={handleSubmit} defaultValues={data}>
                  <ReuseableInput
                    name="userName"
                    fullWidth={true}
                    label="User Name"
                    sx={{ my: 4 }}
                  />
                  <ReuseableInput
                    name="email"
                    type="email"
                    fullWidth={true}
                    label="Email"
                  />
                  <Button
                    type="submit"
                    sx={{
                      my: 4,
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}
                  >
                    Update{' '}
                  </Button>
                </ReuseableForm>
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className="text-2xl font-normal my-2">Change Password</h1>

            <div className="max-w-[600px]">
              <ReuseableForm onSubmit={handleChangePassword}>
                <ReuseableInput
                  name="oldPassword"
                  fullWidth={true}
                  type="password"
                  label="Enter Your Old Password"
                  placeholder="Enter Your Old Password"
                  sx={{ my: 4 }}
                />
                <ReuseableInput
                  name="newPassword"
                  type="password"
                  fullWidth={true}
                  label="Enter Your New Password"
                  placeholder="Enter Your New Password"
                />
                <Button
                  type="submit"
                  sx={{
                    my: 4,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}
                >
                  Submit
                </Button>
              </ReuseableForm>
            </div>
          </Grid>
        </Grid>

        <div className="my-10">
          <h1 className="text-3xl font-bold mx-auto text-center ">
            My Claim Requests
          </h1>
          <hr className="w-48 mx-auto text-center my-6" />
        </div>
        <MyClaimRequest />
      </Container>
    </div>
  );
};

export default MyProfile;
