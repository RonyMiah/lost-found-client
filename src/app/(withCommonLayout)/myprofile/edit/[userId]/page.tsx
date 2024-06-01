'use client';

import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import {
  useGetSingelUserQuery,
  useUpdateMyProfileMutation,
} from '@/redux/api/userApi';
import { Button, Container, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const Doctorpage = ({ params }: any) => {
  const router = useRouter();
  const [updateMyProfile] = useUpdateMyProfileMutation();
  const { data, isLoading } = useGetSingelUserQuery({});

  const handleSubmit = async (values: FieldValues) => {
    try {
      const res = await updateMyProfile(values).unwrap();
      if (res?.id) {
        toast.success('Profile Updated Successfully !');
        router.push('/myprofile');
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <div className="py-24 text-white h-screen w- ">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1 className="text-2xl font-normal my-2 text-center">
              Edit Profile
            </h1>

            <div className="max-w-[600px] mx-auto">
              {isLoading ? (
                <h1>Loading ....</h1>
              ) : (
                <ReuseableForm onSubmit={handleSubmit} defaultValues={data}>
                  <ReuseableInput
                    name="userName"
                    fullWidth={true}
                    label="User Name"
                    sx={{ my: 2 }}
                  />
                  {/* <ReuseableInput
                    name="email"
                    type="email"
                    fullWidth={true}
                    label="Email"
                  /> */}
                  <Button
                    fullWidth
                    type="submit"
                    sx={{
                      my: 1,
                      textAlign: 'center',
                    }}
                  >
                    Update{' '}
                  </Button>
                </ReuseableForm>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Doctorpage;
