import { Container, CssBaseline, Grid, Typography, Item } from '@mui/material';
import ReactPlayer from 'react-player';

export default function Online() {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="lg" sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
        <main>
        
          {/* <Typography align="center" component="h1" variant="h3" color="inherit" gutterBottom>
              Трансляция со стройки
          </Typography>
          <Typography align="left" component="h5" variant="h5" color="inherit" gutterBottom>
              Объект №1
          </Typography> */}
          <Grid container rowSpacing={1}>
            
    <ReactPlayer url='https://youtu.be/RsHqICBQyRo'
                 width='640px'
                 hight='480px'
                 playing
                 muted
    />
          </Grid>
        </main> 
      </Container>
    
    </>
  )
}