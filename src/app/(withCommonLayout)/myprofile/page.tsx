'use client';
import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import { useGetSingelUserQuery } from '@/redux/api/userApi';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import MyClaimRequest from './components/MyClaimRequest';
import Image from 'next/image';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';
import KeyIcon from '@mui/icons-material/Key';

const StyleInformationBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#cc99eeaf',
  borderRadius: theme.spacing(1),
  padding: '8px 16px',
}));

const MyProfile = () => {
  const { data, isLoading } = useGetSingelUserQuery({});

  if (isLoading) {
    <h1>Loading ...</h1>;
  }
  //   console.log(data);

  return (
    <div className="  text-white   bg-gradient-to-r from-violet-900 to-fuchsia-900 ">
      <Container>
        <div className="pt-32">
          <h1 className="text-3xl font-bold mx-auto text-center ">
            My Profile
          </h1>
          <hr className="w-48 mx-auto text-center my-4" />
        </div>
        <Grid container spacing={8} mx={'auto'}>
          <Grid item md={6}>
            <div>
              <Image
                height={200}
                width={200}
                alt="User Image"
                src="https://static.vecteezy.com/system/resources/thumbnails/028/149/256/small_2x/3d-user-profile-icon-png.png"
              />
              <h1 className="text-3xl font-bold text-pink-300 ">
                Basic Information
              </h1>
              <hr className="w-60  my-2 text-pink-300" />
              <p className="text-lg my-3">
                <span className="font-bold text-gray-400">User Name :</span>{' '}
                {data?.userName}
              </p>
              <p className="text-lg ">
                <span className="font-bold text-gray-400"> Email :</span>{' '}
                {data?.email}
              </p>
            </div>
          </Grid>
          <Grid item md={6} spacing={2} my={2}>
            <Grid item md={4} my={2}>
              <StyleInformationBox>
                <Typography color="Black">Role</Typography>
                <Typography color="Black">{data?.role}</Typography>
              </StyleInformationBox>
            </Grid>
            <Grid item md={4} my={2}>
              <StyleInformationBox>
                <Typography color="Black">Status</Typography>
                <Typography color="Black">{data?.status}</Typography>
              </StyleInformationBox>
            </Grid>
            <Grid item md={4} my={2}>
              <Link href={`/myprofile/edit/${data?.id}`}>
                {' '}
                <Button endIcon=<EditIcon />>Edit Profile Info </Button>{' '}
              </Link>
            </Grid>
            <Grid item md={4} my={2}>
              <Link href="/myprofile/changepassword">
                {' '}
                <Button endIcon=<KeyIcon />>Change Password </Button>{' '}
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <MyClaimRequest />
      </Container>
    </div>
  );
};

export default MyProfile;
