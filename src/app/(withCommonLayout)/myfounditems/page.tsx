"use client"
import { useGetMyFoundItemsQuery } from '@/redux/api/foundApi';
import { Card, CardContent, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const MyFoundItems = () => {
    const { data, isLoading } = useGetMyFoundItemsQuery({});
    console.log(data)
  return (
    <div className=" h-full text-white w-full bg-gradient-to-r from-violet-900 to-fuchsia-900 py-10">
      <div className="pt-32">
        <h1 className="text-3xl font-bold mx-auto text-center ">
          My Found Items
        </h1>
        <hr className="w-48 mx-auto text-center my-6" />
      </div>
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 py-10 ">
          {isLoading ? (
            <h1 className="text-center mx-auto text-3xl text-white py-20">
              Loading ...
            </h1>
          ) : (
            data?.map((item: any) => (
              <Card key={item.id} sx={{ minWidth: 275, boxShadow: 'none' }}>
                <CardContent>
                  <Image
                    src={
                      'https://www.invoicera.com/wp-content/uploads-webpc/uploads/2023/11/default-image.jpg.webp'
                    }
                    alt=""
                    width={320}
                    height={320}
                  />
                  <Typography
                    sx={{ mb: 1.5 , mt:1.5}} color="text.secondary"
                  >
                    <span className="font-extrabold">Description: </span>
                    {item?.description}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }} color="text.secondary"
                  >
                    <span className="font-extrabold">Location: </span>
                    {item?.location}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Category: </span>
                    {item?.category}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">ContactNumber: </span>
                    {item?.contactNumber}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Brand: </span>
                    {item?.brand}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default MyFoundItems;
