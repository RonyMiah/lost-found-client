'use client';
import { Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardItems from '../Card/Card';
import Image from 'next/image';
import Link from 'next/link';
import { useGetAllLostItemsQuery } from '@/redux/api/lostApi';

const ResentLostItems = () => {
  const { data, isLoading } = useGetAllLostItemsQuery({});
  if (isLoading) {
    <p>Loading ...</p>;
  }
  // console.log(data?.data);
  return (
    <div className=" h-full py-12">
      <Box>
        <h2 className="text-white text-3xl font-bold text-center ">
          Recent Lost Item Reports
        </h2>
        <hr className="font-bold  mt-3 w-80 mx-auto" />
        <p className="mx-auto text-white text-center mt-2 mb-6">
          See Below For Recent Lost Item Reports
        </p>
      </Box>

      <Container>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  ">
          {data?.data?.slice(0, 5).map((item: any) => (
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
                  sx={{ mb: 1.5, mt: 1 }}
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
                  <span className="font-extrabold">Category : </span>
                  {item?.category}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mx-auto mt-6 text-center ">
          <Link href={'/viewlostitems'}>
            <Button>View All Lost Items</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ResentLostItems;
