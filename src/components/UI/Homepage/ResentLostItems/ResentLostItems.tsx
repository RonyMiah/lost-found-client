import { Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardItems from '../Card/Card';

const ResentLostItems = async () => {
  const res = await fetch(
    'https://lost-found-server.vercel.app/api/v1/property/getall-lost-items'
  );
  const data = await res.json();
  // console.log(data.data.data);
  return (
    <div className=" h-full  bg-gradient-to-r from-violet-900 to-fuchsia-900 py-12">
      <Box>
        <h2 className="text-white text-3xl font-bold text-center">
          Recent Lost Item Reports
        </h2>
        <hr className="font-bold  mt-3 w-80 mx-auto" />
        <p className="mx-auto text-white text-center mt-2">
          See Below For Recent Lost Item Reports
        </p>
      </Box>

      <Container>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5 ">
          {data?.data?.data?.slice(0, 5).map((item: any) => (
            <CardItems key={item.id} props={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ResentLostItems;
