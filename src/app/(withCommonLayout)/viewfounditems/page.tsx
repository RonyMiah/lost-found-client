'use client';

import { useGetAllFoundItemsQuery } from '@/redux/api/foundApi';
import { useDebounced } from '@/redux/hooks';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ViewFoundItems = () => {
  const items = ['Walet', 'Key', 'Mobail', 'Laptop', 'Bike', 'Car', 'Others'];
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectTerm, setSelectTerm] = useState<string>('');
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  let pageCount: number = 0;
  query['page'] = page;
  query['limit'] = limit;

  const debounceTerm = useDebounced({
    searchTerm: searchTerm,
    delay: 600,
  });

  if (!!debounceTerm) {
    query['searchTerm'] = searchTerm;
  }
  if (selectTerm) {
    query['category'] = selectTerm;
  }

  console.log(query);

  const { data, isLoading } = useGetAllFoundItemsQuery({ ...query });
  //   console.log(data?.data);

  if (isLoading) {
    <h1 className="text-white">Loading ..</h1>;
  }
  const meta = data?.meta;
  if (meta?.total) {
    pageCount = Math.ceil(meta?.total / limit);
  }
  //pagination
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className=" py-24 text-white">
      <Container sx={{ margin: '0 auto' }}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <h1 className="text-3xl font-bold mx-auto text-center ">
              All Found Items
            </h1>
            <hr className="w-48 mx-auto text-center my-2" />
          </Grid>
          <Grid item md={2} xs={12}>
            <div className="mx-auto">
              <TextField
                onChange={(e) => setSelectTerm(e.target.value)}
                fullWidth
                label="Select"
                select
                size="small"
                placeholder="Category"
                InputLabelProps={{
                  sx: {
                    color: 'white',
                  },
                }}
              >
                {items.map((item) => (
                  <MenuItem
                    sx={{
                      '&.MuiMenuItem-root': {
                        justifyContent: 'flex-start',
                        color: 'white',
                      },
                    }}
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="mx-auto">
              <TextField
                fullWidth={true}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
                placeholder="Search ..."
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* <Grid container spacing={2} py={4} > */}
      <Container>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  py-10 ">
          {isLoading ? (
            <h1 className="text-center mx-auto text-3xl text-white py-48">
              Loading ...
            </h1>
          ) : (
            data?.data?.map((item: any) => (
              <Card key={item.id} sx={{ minWidth: 275, boxShadow: 'none' }}>
                <CardContent>
                  <Image
                    className="mx-auto w-[280px] h-[200px]"
                    src={
                      item?.uploadImage ||
                      'https://www.invoicera.com/wp-content/uploads-webpc/uploads/2023/11/default-image.jpg.webp'
                    }
                    alt=""
                    width={320}
                    height={320}
                  />
                  <Typography
                    sx={{ mb: 1.5, mt: 2 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <span className="font-extrabold">Description : </span>
                    {item?.description}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <span className="font-extrabold"> Number : </span>
                    {item?.contactNumber}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Email : </span>
                    {item?.email}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Location : </span>
                    {item?.location}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Status : </span>
                    {item?.status}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Category : </span>
                    {item?.category}
                  </Typography>
                  <Link href={`/viewfounditems/edit/${item.id}`}>
                    <Button>Claim Items </Button>
                  </Link>
                </CardContent>
              </Card>
            ))
          )}
        </div>
        <Stack spacing={2} className="flex justify-center items-center ">
          <Typography sx={{ font: 'bold', color: 'white' }}>
            Page: {page}
          </Typography>
          <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Stack>
      </Container>
      {/* </Grid> */}
    </div>
  );
};

export default ViewFoundItems;
