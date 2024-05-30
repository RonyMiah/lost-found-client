import { useGetClaimItemsQuery } from '@/redux/api/claimApi';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';

const MyClaimRequest = () => {
  const { data, isLoading } = useGetClaimItemsQuery({});
  if (isLoading) {
    <h1>Loading ..</h1>;
  }

  console.log(data);

  return (
    <div>
      <div className="pt-32">
        <h1 className="text-3xl font-bold mx-auto text-center ">
          My Claim Requests
        </h1>
        <hr className="w-48 mx-auto text-center my-6" />
      </div>

      {/* <Grid container spacing={2} py={4} > */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 py-10 ">
        {isLoading ? (
          <h1 className="text-center mx-auto text-3xl text-white py-20">
            Loading ...
          </h1>
        ) : (
          data?.map((item: any) => (
            <Card key={item.id} sx={{ minWidth: 275, boxShadow: 'none',  }}>
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
                  <span className="font-extrabold">Description: </span>
                  {item?.description}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <span className="font-extrabold">Finder Number: </span>
                  {item?.finderContactNumber}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <span className="font-extrabold">Status: </span>
                  {item?.status}
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
      </div>
      {/* </Grid> */}
    </div>
  );
};

export default MyClaimRequest;
