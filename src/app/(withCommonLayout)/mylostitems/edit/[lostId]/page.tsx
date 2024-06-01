'use client';

import ReuseableDatePicker from '@/components/Forms/ReuseableDatePicker';
import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import ReuseableSelect from '@/components/Forms/ReuseableSelect';
import {
  useGetSingleLostItemsQuery,
  useUpdateLostItemsMutation,
} from '@/redux/api/lostApi';
import { dateFormater } from '@/utils/dateFormater';

import { Box, Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const lostItemCategory = [
  'Walet',
  'Key',
  'Mobail',
  'Laptop',
  'Bike',
  'Car',
  'Others',
];

const UpdateLostItems = ({ params }: any) => {
  const id = params?.lostId;
  const router = useRouter();
  const [error, setError] = useState('');
  const [updateLostItems] = useUpdateLostItemsMutation();
  const { data, isLoading } = useGetSingleLostItemsQuery(id);
  if (isLoading) {
    <p>Loading ....</p>;
  }
  //   console.log(data);

 

  //submit Handaller
  const registerHandleSubmit = async (values: FieldValues) => {
    values.date = dateFormater(values.date);

    console.log(values);

    try {
      const res = await updateLostItems({ data: values, id: id }).unwrap();
      if (res?.id) {
        toast.success('Updated Successfully !');
        router.push('/mylostitems');
      }
      //   console.log('Response', res);
    } catch (error: any) {
      console.log(error);
    }
  };

  const defaultValues = {
    title: data?.title,
    // date: data?.date,
    status: data?.status,
    category: data?.category,
    contactNumber: data?.contactNumber,
    email: data?.email,
    color: data?.color,
    brand: data?.brand,
    location: data?.location,
    description: data?.description,
    uploadImage: data?.uploadImage,
  };

  return (
    <div className=" h-screen   py-24 ">
      <h1 className="text-3xl font-bold text-white px-20">Edit Lost Items</h1>

      <div className="px-20">
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
          {isLoading ? (
            <p>Loading ..</p>
          ) : (
            <ReuseableForm
              onSubmit={registerHandleSubmit}
              // resolver={zodResolver(lostItemValidationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6} xs={12}>
                  <ReuseableInput
                    name="title"
                    fullWidth={true}
                    label="Title"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item md={6} xs={6}>
                  <ReuseableDatePicker
                    name="date"
                    fullWidth={true}
                    label="Date"
                    size="small"
                  />
                </Grid>
                {/* <Grid item md={6} xs={12}>
                  <ReuseableSelect
                    name="status"
                    fullWidth={true}
                    label="Status"
                    items={status}
                    size="small"
                  />
                </Grid> */}
                <Grid item md={6} xs={6}>
                  <ReuseableSelect
                    name="category"
                    fullWidth={true}
                    label="Category"
                    size="small"
                    items={lostItemCategory}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ReuseableInput
                    name="contactNumber"
                    fullWidth={true}
                    label="Contact Number"
                    type="tel"
                    size="small"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ReuseableInput
                    name="email"
                    fullWidth={true}
                    label="Email Address"
                    type="email"
                    size="small"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ReuseableInput
                    name="color"
                    fullWidth={true}
                    label="Color"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ReuseableInput
                    name="brand"
                    fullWidth={true}
                    label="Brand Name"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ReuseableInput
                    name="location"
                    fullWidth={true}
                    label="Location"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ReuseableInput
                    name="description"
                    fullWidth={true}
                    label="Description"
                    type="text"
                    size="small"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <ReuseableInput
                    name="uploadImage"
                    label="Uploded Image URL Link"
                    fullWidth={true}
                    type="text"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: '10px 0px',
                }}
                type="submit"
              >
                Submit
              </Button>
            </ReuseableForm>
          )}
        </Box>
      </div>
    </div>
  );
};
export default UpdateLostItems;
