import { Container, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoodIcon from '@mui/icons-material/Mood';
const FindShip = () => {
  return (
    <div>
      <div className=" h-full  bg-gradient-to-r from-violet-900 to-fuchsia-900 py-6">
        <h2 className="text-5xl py-8 font-bold  text-center text-white ">
          Search. Find. Ship.
          <hr className="w-24 mx-auto font-bold mt-4" />
        </h2>
        <Container>
          <div className="text-white py-8">
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <video
                  src="https://ilost-files.s3.amazonaws.com/iLost_the_search_engine_for_lost__found.mp4"
                  width="1000"
                  height="240"
                  controls
                ></video>
              </Grid>
              <Grid item xs={12} md={6}>
                <h2 className="text-3xl font-bold  mt-16">
                  Anytime. Anyplace. Anywhere.
                </h2>
                <p className="mt-5 text-lg">
                  Register your valuables with iSave. So you can start searching
                  from the moment you lose something.
                </p>
                <div className="mt-6 text-xl flex gap-5 ">
                  <SearchIcon sx={{fontSize: 54}}  />
                  <MoodIcon sx={{fontSize: 54}} />
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FindShip;
