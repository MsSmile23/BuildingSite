import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import { Container, Typography, Box } from '@mui/material';




function PhotoList({ order }): JSX.Element {

  return (
    <>
    {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 8, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {order.photo.map((el) => (
            <CardMedia
            component="img"
            sx={{
            //   width: 460,
            //   height: 260,
              width: 120,
              height: 100,
              display: { xs: 2, sm: 'block' },
            }}
            // <img key={el.id} src={el.photo} alt="" />
            image={el.photo}
          />

        ))}
      </Grid>
    </Box> */}


          {/* <Container maxWidth="lg"> */}
          <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 1.5}} columns={{ xs: 2, sm: 8, md: 16}}>
          {order.photo.map((el) => (
            <Grid item xs={8} sm={4}>
            <CardMedia
            component="img"
            sx={{
            
              width: '100%',
              height: 130,
              // display: { xs: 2, sm: 'block' },
            }}
            image={el.photo}
          />

        </Grid>
        ))}
    
          </Grid>
          </Box>
        
      {/* </Container> */}

    </>
  );
}

export default PhotoList;




