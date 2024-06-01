'use client';
import ReuseableDatePicker from '@/components/Forms/ReuseableDatePicker';
import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import ReuseableSelect from '@/components/Forms/ReuseableSelect';
import { useCreateLostItemMutation } from '@/redux/api/lostApi';
import { dateFormater } from '@/utils/dateFormater';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const lostItemCategory = [
  'Walet',
  'Key',
  'Mobail',
  'Laptop',
  'Bike',
  'Car',
  'Others',
];

//Zod Validation

const lostItemValidationSchema = z.object({
  title: z.string().min(1, 'Titel Required !'),
  date: z.any(),
  // status: z.string().min(1, 'Status Required !'),
  category: z.string().min(1, 'Category Required !'),
  contactNumber: z
    .string()
    .regex(/^(01[3-9]\d{8})$/, 'Please Provide a valid phone number '),
  email: z
    .string()
    .email({ message: 'Please Enter Your Valida Email Address'! }),
  color: z.string().min(1, 'Color Required !'),
  brand: z.string().min(1, 'Brand Name Required !'),
  location: z.string().min(1, 'Location Required !'),
  description: z.string().min(1, 'Description Required !'),
  uploadImage: z.string().optional(),
});
// .min(1, 'Image URL Required !')
const Lostitems = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [createLostItem] = useCreateLostItemMutation();
  //submit Handaller
  const registerHandleSubmit = async (values: FieldValues) => {
    values.date = dateFormater(values.date);
    values.status = 'LOST';

    // console.log(values);

    try {
      const res = await createLostItem(values).unwrap();
      if (res?.id) {
        toast.success('Lost Property Submit Successfully !');
        router.push('/mylostitems');
      }
      console.log('Response', res);
    } catch (error: any) {
      console.log(error);
    }
  };

  const defaultValues = {
    title: '',
    category: '',
    contactNumber: '',
    email: '',
    color: '',
    brand: '',
    location: '',
    description: '',
    uploadImage: '',
  };

  return (
    <div className=" h-screen   py-24">
      <h1 className="text-3xl font-bold text-white px-20">
        Submit Lost Property
      </h1>

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
          <ReuseableForm
            onSubmit={registerHandleSubmit}
            resolver={zodResolver(lostItemValidationSchema)}
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
        </Box>
      </div>
     
    </div>
  );
};

export default Lostitems;
