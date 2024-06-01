'use client';
import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import { useChangePasswordMutation } from '@/redux/api/authApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const validationSchema = z.object({
  oldPassword: z.string().min(6, 'Must be at least 6 characters long'),
  newPassword: z.string().min(6, 'Must be at least 6 characters long'),
});

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();

  const handleChangePassword = async (values: FieldValues) => {
    const res = await changePassword(values).unwrap();
    if (res?.message) {
      toast.success(res?.message);
      router.push('/myprofile');
    }
  };

  return (
    <div className="py-24 text-white h-screen  ">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <h1 className="text-2xl font-normal my-2 text-center">
            Change Password
          </h1>

          <div className="max-w-[600px] mx-auto">
            <ReuseableForm
              onSubmit={handleChangePassword}
              resolver={zodResolver(validationSchema)}
            >
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
