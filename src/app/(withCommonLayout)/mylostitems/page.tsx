'use client';
import {
  useDeleteLostItemsMutation,
  useGetMyLostItemsQuery,
} from '@/redux/api/lostApi';
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link';
import { toast } from 'sonner';
const MylostItems = () => {
  const { data, isLoading } = useGetMyLostItemsQuery({});
  const [deleteLostItems] = useDeleteLostItemsMutation();
  // console.log(data);

  //handle Delete
  const handleDelete = async (id: string) => {
    // console.log(id);
    try {
      const res = await deleteLostItems(id).unwrap();
      if (res?.id) {
        toast.success('Lost Item Deleted Successfully !');
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="  text-white w-full  py-32">
      <div className="">
        <h1 className="text-3xl font-bold mx-auto text-center ">
          My Lost Items
        </h1>
        <hr className="w-48 mx-auto text-center my-6" />
      </div>
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 py-12 ">
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
                  <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Title : </span>
                    {item?.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5, mt: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Description: </span>
                    {item?.description}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
                  <div>
                    <Link href={`/mylostitems/edit/${item.id}`}>
                      <Button endIcon={<EditIcon />} sx={{ mx: 2 }} />
                    </Link>

                    <Button
                      onClick={() => handleDelete(item?.id)}
                      endIcon={<DeleteForeverIcon />}
                      sx={{ mx: 2 }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default MylostItems;
