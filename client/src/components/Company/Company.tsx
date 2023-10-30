import { Map, Placemark, GeolocationControl } from '@pbe/react-yandex-maps'
import { Container, Grid, Typography } from '@mui/material';
import dizayn from "/dizayn.jpg"
import { useState } from 'react'
import EmailContactForm from '../EmailForm/Email'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Paper } from '@mui/material'


export const Company = () => {
  const [active, setActive] = useState(false);
  const [open, openchange] = useState(false);
  const clickActive = () => setActive(true);
  const closepopup = () => openchange(false);
  
  return (
    <>
    
    <Container maxWidth="lg" sx={{mt: 2}}>
      <h1>
        Контакты
      </h1>
      <Paper elevation={3}>
      <Typography sx={{mt: 2.5, mb: 2}} align="center" component="h4" variant="h4" color="inherit" gutterBottom>
    ☎ 8 800 555-33-77, с 9:00 до 19:00
          </Typography >
    <Grid container spacing={3} sx={{ml: 0.5}}>
    <Grid item xs={6}>
    <div className='yandexmap'>
        <Map
        width={'100%'}
        height={450}
        defaultState={{
        center: [55.75, 37.57],
        zoom: 9,
        controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
            <GeolocationControl options={{ float: "left" }} />
            <Placemark
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            geometry={[55.782392, 37.614924]}
            
            properties={{
                balloonContentHeader: '<h2>Home & Garden<h2><span class="description"></span>',
                balloonContentBody:
                `<img src=${dizayn} alt='office' height='150' width='200' /> <br/>
                <br/>  
                <a href="tel:+8-800-555-33-77">8 800 555-33-77</a><br/>
                <br/>
                <b>С 9:00 до 19:00</b>` ,
                hintContent: 
                'Главный офис компании Home & Garden',
            }}
            options={{
                iconImageSize: [10, 10],
                preset: "islands#redHomeCircleIcon",
                
              }}
            /> 
        </Map>
    </div>
    </Grid>
    <Grid item xs={6}>
    <Typography align="left" component="h4" variant="h4" color="inherit" gutterBottom>
              Центральный офис
          </Typography >
    <Typography sx={{mt: 0.5}} align="left" component="h6" variant="h6" color="inherit" gutterBottom>
            ➱ Адрес: г. Москва, ул. Достоевского, 31, оф. 318
          </Typography >    
    <Typography sx={{mt: 0.5}} align="left" component="h6" variant="h6" color="inherit" gutterBottom>
            ✆ Телефон:
          </Typography > 
          <Typography sx={{mt: 0.5}} align="left" component="h6" variant="body1" color="inherit" gutterBottom>
    <a href="tel+:88005553377">8 800 555-33-77</a>
          </Typography >

    <Typography sx={{mt: 0.5}} align="left" component="h6" variant="h6" color="inherit" gutterBottom>
            ✉ Почта:
          </Typography >
    <Typography sx={{mt: 0.5}} align="left" component="h6" variant="body1" color="inherit" gutterBottom>
    <a href="mailto:sk.home.garden88@gmail.com">sk.home.garden88@gmail.com</a>
          </Typography >
    <Typography sx={{mt: 0.5}} align="left" component="h6" variant="h6" color="inherit" gutterBottom>
            ✎ Реквизиты:
          </Typography >            
    <Typography sx={{mb: 3.5}} align="left" variant="body1" color="inherit" gutterBottom>
            Общество с ограниченной ответственностью "Дом и Сад" <br />
            ИНН 5047068588 <br />
            КПП 027811001 <br />
            ОГРН 1030224552966 <br />
            ОКПО 02428897 <br />
            Расчетный счет 4060281020600030025 <br />
            Банк ОАО "Юнистрим" <br />

          </Typography>
    </Grid>
    </Grid>
    </Paper>
        </Container>
    <Container maxWidth="lg" sx={{mt: 5}}>
      <> {active? (<>
        <EmailContactForm setActive={setActive} openchange={openchange}/>
      </>) : (
        <>
        <Button variant="outlined" onClick={clickActive}>Напишите нам. Менеджер ответит вам в течение часа.</Button>
        <Dialog open={open} onClose={closepopup}>
          <DialogContent>
            <DialogContentText>
              Сообщение отправлено. Свяжемся с вами в ближайшее время.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={closepopup}>Закрыть</Button>
          </DialogActions>
        </Dialog>
        </>
      )
      }
      </>
    </Container>
    </>
    
  )
  
}

