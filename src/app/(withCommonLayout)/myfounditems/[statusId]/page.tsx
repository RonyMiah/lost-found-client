'use client';

import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableSelect from '@/components/Forms/ReuseableSelect';
import { useUpdateFoundItemsMutation } from '@/redux/api/foundApi';
import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const status = ['approved', 'rejected'];

const UpdateStatus = ({ params }: any) => {
  const router = useRouter();

  const id = params?.statusId;
  // console.log(id);

  const [updateFoundItems] = useUpdateFoundItemsMutation();
  const registerHandleSubmit = async (values: FieldValues) => {
    const res = await updateFoundItems({ data: values, id: id }).unwrap();
    if (res?.id) {
      toast.success('Status Updated Successfully !');
      router.push('/myfounditems');
    }
  };

  return (
    <div className="h-screen  bg-gradient-to-r from-violet-900 to-fuchsia-900 py-24 ">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-4xl text-center font-bold text-white px-20">
          Update Status
        </h1>
        <ReuseableForm
          onSubmit={registerHandleSubmit}
          // resolver={zodResolver(lostItemValidationSchema)}
          //   defaultValues={defaultValues}
        >
          <Grid container spacing={4} my={2}>
            <Grid item md={12} xs={12}>
              <ReuseableSelect
                name="status"
                fullWidth={true}
                label="Status"
                items={status}
                size="small"
              />
            </Grid>
          </Grid>
          <Button type="submit">Update</Button>
        </ReuseableForm>
      </div>
    </div>
  );
};

export default UpdateStatus;
