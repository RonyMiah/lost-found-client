'use client';

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import logo from '@/assets/logo3.png';
import { z } from 'zod';
import ReuseableForm from '@/components/Forms/ReuseableForm';
import { zodResolver } from '@hookform/resolvers/zod';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import Link from 'next/link';
import { userRegister } from '@/services/actions/userRegister';
import { toast } from 'sonner';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';

//zod Validation
export const patientValidationSchema = z
  .object({
    userName: z.string().min(1, 'User Name Required!'),
    email: z
      .string()
      .email({ message: 'Please Enter Your Valida Email Address'! }),
    password: z.string().min(6, 'Password Mininum 6 Caracter'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

//default value's
export const defatultvalues = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  //submit Handaller
  const registerHandleSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);

    try {
      const res = await userRegister(values);
      // console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        if (result?.data?.accessToken) {
          toast.success(result?.message);
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push('/');
        }
      } else {
        setError((res.message = 'This User is Already Exists'));
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-screen bg-gradient-to-r from-violet-900 to-fuchsia-900 py-24">
      <Container>
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
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
                <Image src={logo} width={50} height={50} alt="logo" />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  component="h1"
                  color={'white'}
                  fontWeight={600}
                >
                  Found Way Register
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
                onSubmit={registerHandleSubmit}
                resolver={zodResolver(patientValidationSchema)}
                defaultValues={defatultvalues}
              >
                <Grid container spacing={2} my={1}>
                  <Grid item md={12}>
                    <ReuseableInput
                      name="userName"
                      fullWidth={true}
                      label="User Name"
                      type="text"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={12}>
                    <ReuseableInput
                      name="email"
                      fullWidth={true}
                      label="Email"
                      type="email"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <ReuseableInput
                      name="password"
                      fullWidth={true}
                      label="Password"
                      type="password"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6}>
                    <ReuseableInput
                      name="confirmPassword"
                      fullWidth={true}
                      label="Confirm Password"
                      type="password"
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
                  Register
                </Button>
                <Typography component="h6" color={'yellow'} fontWeight={300}>
                  Do you already have an account ?{' '}
                  <Link className="text-blue-200" href="/login">
                    Login Here
                  </Link>
                </Typography>
              </ReuseableForm>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default RegisterPage;
