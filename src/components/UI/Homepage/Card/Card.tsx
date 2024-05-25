import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const CardItems = ({ props }: { props: any }) => {
  console.log(props);
  return (
    <div className='mt-8'>
      <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
        <div>
          <Image
            className="max-h-[150px] "
            src={props?.uploadImage}
            alt="image1"
            width={400}
            height={400}
          />
          <CardContent>
            <Typography
              color={'white'}
              gutterBottom
              variant="body1"
              component="div"
            >
              Location : {props?.location}
            </Typography>
            <Typography
              color={'white'}
              gutterBottom
              variant="body1"
              component="div"
            >
              Category : {props?.category}
            </Typography>
            <Typography
              color={'white'}
              gutterBottom
              variant="body1"
              component="div"
            >
              ContactNumer : {props?.contactNumber}
            </Typography>
            <Typography color={'white'} variant="body2">
              {props?.description}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default CardItems;
