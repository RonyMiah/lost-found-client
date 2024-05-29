'use client';
import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

const ChangePassword = () => {
  const handleChangePassword = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className="py-24 text-white h-screen w- bg-gradient-to-r from-violet-900 to-fuchsia-900 ">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <h1 className="text-2xl font-normal my-2 text-center">Change Password</h1>

          <div className="max-w-[600px] mx-auto">
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
              fullWidth
                type="submit"
                sx={{
                  my: 4,
                 
                }}
              >
                Submit
              </Button>
            </ReuseableForm>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChangePassword;
