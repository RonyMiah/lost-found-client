'use client';

import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import { useCreateClaimItemsMutation } from '@/redux/api/claimApi';
import { useGetSingleFoundItemsQuery } from '@/redux/api/foundApi';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const CreateClaimPage = ({ params }: any) => {
  const id = params?.foundId;
  const router = useRouter();
  const [error, setError] = useState('');
  const [createClaimItems] = useCreateClaimItemsMutation();
  const { data, isLoading } = useGetSingleFoundItemsQuery(id);

  if (isLoading) {
    <p>Loading ...</p>;
  }
  const hanldeLoginSubmit = async (values: FieldValues) => {
    const claimData = { ...values, foundId: id };
    try {
      const res = await createClaimItems(claimData).unwrap();
      if (res?.id) {
        toast.success('Claim Submited Successfully !');
        router.push('/myprofile');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {
    finderContactNumber: data?.contactNumber,
  };

  return (
    <div className=" h-full w-screen bg-gradient-to-r from-violet-900 to-fuchsia-900 py-24">
      {isLoading ? (
        <p className="py-96 text-center text-white text-3xl">Loading...</p>
      ) : (
        <Container>
          <Stack
            sx={{
              height: '100vh',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                maxWidth: 600,
                width: '100%',
                boxShadow:
                  '0px 3px 1px -2px black,0px 2px 2px 0px rgba(62, 52, 25, 0.9),0px 1px 5px 0px rgba(74, 54, 49, 0.448)',
                borderRadius: 1,
                p: 4,
                textAlign: 'center',
              }}
            >
              <Stack
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    color={'white'}
                    component="h1"
                    fontWeight={600}
                  >
                    Create Claim Item
                  </Typography>
                </Box>
              </Stack>
              {/* For Error Message show in Server  */}
              <Box>
                {error && (
                  <Box>
                    <Typography sx={{ color: 'red', textAlign: 'center' }}>
                      {error}
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box>
                <ReuseableForm
                  onSubmit={hanldeLoginSubmit}
                  defaultValues={defaultValues}
                >
                  <Grid container spacing={2} my={1}>
                    <Grid item md={12} xs={12}>
                      <ReuseableInput
                        name="description"
                        fullWidth={true}
                        label="Description"
                        sx={{ color: 'white' }}
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <ReuseableInput
                        name="finderContactNumber"
                        fullWidth={true}
                        label="Founder Contact Number"
                        size="small"
                        disabled={true}
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <ReuseableInput
                        name="uploadImage"
                        fullWidth={true}
                        label="Image Url"
                        size="small"
                      />
                    </Grid>
                  </Grid>

                  <Button
                    sx={{
                      margin: '10px 0px',
                    }}
                    type="submit"
                    fullWidth={true}
                  >
                    Submit
                  </Button>
                </ReuseableForm>
              </Box>
            </Box>
          </Stack>
        </Container>
      )}
    </div>
  );
};

export default CreateClaimPage;
