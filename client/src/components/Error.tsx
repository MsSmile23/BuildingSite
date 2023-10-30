import { Container, CssBaseline, Grid, Typography, Item } from '@mui/material';
import error from '../../public/img/404.png';

export default function Error() {
  return (
    <>
    <CssBaseline />
      <Container maxWidth="sm" sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
        <main>
          <Typography align="center" component="h5" variant="h5" color="inherit" gutterBottom>
              Страницы нет. Наверное, она скоро появится...
          </Typography>
          <img width={500} src={error} />
        </main> 
      </Container>
    
    </>
  )
}