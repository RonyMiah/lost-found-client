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
  backgroundColor: '#88828bb9',
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
    <div className="  text-white  py-44   ">
      <Container>
        <div className="">
          <h1 className="text-3xl font-bold mx-auto text-center ">
            My Profile
          </h1>
          <hr className="w-48 mx-auto text-center my-2" />
        </div>
        <Grid container spacing={2} mx={'auto'} className="pt-24">
          <Grid
            item
            md={6}
            mx={'auto'}
            className="flex justify-center items-center"
          >
            <div>
              <Image
                height={200}
                width={200}
                alt="User Image"
                src="https://static.vecteezy.com/system/resources/thumbnails/028/149/256/small_2x/3d-user-profile-icon-png.png"
              />
              <h1 className="text-3xl font-bold text-white ">
                Basic Information
              </h1>
              {/* <hr className="w-60  my-2 text-pink-300" /> */}
              <p className="text-lg my-3">
                <span className="font-extrabold text-pink-300">
                  User Name :
                </span>{' '}
                {data?.userName}
              </p>
              <p className="text-lg ">
                <span className="font-extrabold text-pink-300"> Email :</span>{' '}
                {data?.email}
              </p>
            </div>
          </Grid>
          <Grid item md={6} spacing={2} my={2} mx={'auto'}>
            <Grid item md={4} my={2} mx={'auto'}>
              <StyleInformationBox>
                <Typography color="white">
                  <span className="font-extrabold">Role </span>
                </Typography>
                <Typography color="white">{data?.role}</Typography>
              </StyleInformationBox>
            </Grid>
            <Grid item md={4} my={2} mx={'auto'}>
              <StyleInformationBox>
                <Typography color="white">
                  <span className="font-extrabold"> Status </span>
                </Typography>
                <Typography color="white">{data?.status}</Typography>
              </StyleInformationBox>
            </Grid>
            <Grid item md={4} my={2} mx={'auto'}>
              <Link href={`/myprofile/edit/${data?.id}`}>
                {' '}
                <Button fullWidth endIcon=<EditIcon />>
                  Edit Profile Info{' '}
                </Button>{' '}
              </Link>
            </Grid>
            <Grid item md={4} my={2} mx={'auto'}>
              <Link href="/myprofile/changepassword">
                {' '}
                <Button fullWidth endIcon=<KeyIcon />>
                  Change Password{' '}
                </Button>{' '}
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
