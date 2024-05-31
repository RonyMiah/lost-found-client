'use client';

import { useGetAllFoundItemsQuery } from '@/redux/api/foundApi';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ViewFoundItems = () => {
  const { data, isLoading } = useGetAllFoundItemsQuery({});
  //   console.log(data?.data);
  if (isLoading) {
    <h1 className="text-white">Loading ..</h1>;
  }

  //   console.log(data);

  return (
    <div className=" h-full w-screen bg-gradient-to-r from-violet-900 to-fuchsia-900 py-48 text-white">
      <div className="pt-6">
        <h1 className="text-3xl font-bold mx-auto text-center ">
          All Found Items
        </h1>
        <hr className="w-48 mx-auto text-center my-2" />
      </div>

      {/* <Grid container spacing={2} py={4} > */}
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 py-10 ">
          {isLoading ? (
            <h1 className="text-center mx-auto text-3xl text-white py-48">
              Loading ...
            </h1>
          ) : (
            data?.data?.map((item: any) => (
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
                    sx={{ fontSize: 14, mt: 2 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <span className="font-extrabold">Description : </span>
                    {item?.description}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
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
      </Container>
      {/* </Grid> */}
    </div>
  );
};

export default ViewFoundItems;
