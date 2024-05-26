'use client';

import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableSelect from '@/components/Forms/ReuseableSelect';
import { useUpdateUserInfoMutation } from '@/redux/api/userApi';
import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const status = ['ACTIVE', 'BLOCKED', 'DELETED'];

const UserUpdatePage = ({ params }: { params: { userId: string } }) => {
  const id = params?.userId;
  const router = useRouter();
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(values);

    values.id = id;
    const data = { id: values.id, body: values };

    try {
      const res: any = await updateUserInfo(data);
      console.log(res);
      if (res?.data?.id) {
        toast.success('User status Upated Successfully !');
        router.push('/dashboard/admin/users');
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[500px] mx-auto mt-20">
      <ReuseableForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <ReuseableSelect
              name="status"
              items={status}
              label="Select Status "
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Button
          sx={{
            mt: 2,
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'end',
          }}
          type="submit"
        >
          {' '}
          Update{' '}
        </Button>
      </ReuseableForm>
    </div>
  );
};

export default UserUpdatePage;
