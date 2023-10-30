import { Container, CssBaseline, Grid, Typography, Item } from '@mui/material';
import ReactPlayer from 'react-player';

export default function Online() {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="lg" sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
        <main>
        
          <Typography align="center" component="h1" variant="h3" color="inherit" gutterBottom>
              Трансляция со стройки
          </Typography>
          <Typography align="left" component="h5" variant="h5" color="inherit" gutterBottom>
              Объект №1
          </Typography>
          <Grid container rowSpacing={1}>
            
    <ReactPlayer url='https://youtu.be/RsHqICBQyRo'
                 width='1102px'
                 hight='560px'
                 playing
                 muted
    />
          <Typography align="left" component="h5" variant="h5" color="inherit" gutterBottom>
              Объект №2
          </Typography>     
          
    <ReactPlayer url='https://youtu.be/8PBCnggBENU'
                 width='1102px'
                 hight='560px'
                 playing
                 muted
    />
          <Typography align="left" component="h5" variant="h5" color="inherit" gutterBottom>
              Объект №3
          </Typography>     
          
    <ReactPlayer url='https://youtu.be/cCnfdYPVljA'
                 width='1102px'
                 hight='560px'
                 playing
                 muted
    />
             
          </Grid>
        </main> 
      </Container>
    
    </>
  )
}