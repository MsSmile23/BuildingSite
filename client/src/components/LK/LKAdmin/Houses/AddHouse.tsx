import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import { Map, Placemark, GeolocationControl, Polyline } from '@pbe/react-yandex-maps'
import dizayn from "/dizayn.jpg"
// place="30c5ab22-e7fa-4f57-8369-b3e0f20e52f5"
// {place ? <script src={`https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${place}`} type="text/javascript" /> : ''}



export default function AddHouse() {
  const [geo, setGeo] = useState([55.782392, 37.614924])
  const polyline = React.createRef(null);
    // const [project, setProject] = useState();
    // const { id } = useParams();

    const navigate = useNavigate();

    
    // useEffect(() => {
    //     const response = fetch(`http://localhost:3000/lk/editProject/${id}`);
    //     response.then((res) => res.json()).then((data) => setProject(data));
    //   }, [id]);


    const [inputs, setInputs] = useState()

    const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    
    const submitHendler = (): void => {
        const response = fetch(`http://localhost:3000/lk/addHouse`, {
            method: "POST", 
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(inputs)
          })
        //   setTodos((prev) => [...prev, inputs])
          // setInputs({ title: "" })
          window.location = '/profileAdmin';
          if (response.status === 200) {
            console.log('response.status-------->', response.status);
        }
        }
    useEffect(() => {
      console.log('newgeo------->', geo);    
}, [])
    
console.log('geo------->', geo);
console.log('polyline------->', polyline);



  return (
    <Card sx={{ maxWidth: '100ch', margin: 'auto', bgcolor: '#faf9f3' }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Добавление нового объекта
        </Typography>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          onChange={changeHandler}
          name="name"
          id="outlined-textarea"
          label="Название объекта"
        //   placeholder={project?.name}
          multiline
        />
        {/* <TextField
          onChange={changeHandler}
          name="floor"
          id="outlined-textarea"
          label="Количество этажей"
        //   placeholder={project?.floor}
          multiline
        />
        <TextField
          onChange={changeHandler}
          name="wardrobe"
          id="outlined-textarea"
          label="Количество гардеробных"
        //   placeholder={project?.wardrobe}
          multiline
        />
        <TextField
          onChange={changeHandler}
          name="bathroom"
          id="outlined-textarea"
          label="Количество ванных комнат"
        //   placeholder={project?.bathroom}
          multiline
        />
        <TextField
          onChange={changeHandler}
          name="bedroom"
          id="outlined-textarea"
          label="Количество спален"
        //   placeholder={project?.bedroom}
          multiline
        /> */}
        <TextField
          onChange={changeHandler}
          name="material"
          id="outlined-textarea"
          label="Материал"
        //   placeholder={project?.material}
          multiline
        />
        <TextField
          onChange={changeHandler}
          name="size"
          id="outlined-textarea"
          label="Площадь, м2"
        //   placeholder={project?.size}
          multiline
        />
        {/* <TextField
          onChange={changeHandler}
          name="price"
          id="outlined-textarea"
          label="Стоимость, млн.руб."
        //   placeholder={project?.price}
          multiline
        /> */}
</Box>
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '82ch' },
      }}
      noValidate
      autoComplete="off"
    >

        <TextField
          onChange={changeHandler}
          name="about"
          id="outlined-textarea"
          label="Описание"
        //   placeholder={project?.about}
          multiline
          />



          <div className='yandexmap'>
        <Map
              onClick={() => setGeo(geometry.getCoordinates())}
        width={'100%'}
        height={450}
        defaultState={{
        center: [55.75, 37.57],
        zoom: 8,
        controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
            <GeolocationControl options={{ float: "left" }} />
            <Placemark
            // myPlacemark.events.add('click', function (e) {
              
              //   console.log(e.get('target').geometry.getCoordinates());
              
              //   });
              // modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              geometry={geo}
              // onClick={() => setGeo(geometry.getCoordinates())}

              // instanceRef={ref => {
              //   if (ref) {
              //     // По аналогии добавляем обработчик
              //     ref.geometry.events.add("change", function(e) {
              //       const newCoords = e.get("newCoordinates");
              //       // Используя ссылку на инстанс Линии меняем ее геометрию
              //       polyline.current.geometry.set(0, newCoords);
              //     });
              //   }
              // }}
            
            properties={{
                // balloonContentHeader: '<h2>Home & Garden<h2><span class="description"></span>',
                // balloonContentBody:
                // `<img src=${dizayn} alt='office' height='150' width='200' /> <br/>
                // <br/>  
                // <a href="tel:+8-800-555-33-77">8 800 555-33-77</a><br/>
                // <br/>
                // <b>С 9:00 до 19:00</b>` ,
                // hintContent: 
                // 'Главный офис компании Home & Garden',
            }}
            options={{

            draggable: true,
                // iconImageSize: [10, 10],
                // preset: "islands#redHomeCircleIcon",
                
              }}
            /> 
            {/* <Polyline */}
            {/* // geometry={[[55.661574, 37.573856], [55.801574, 37.503856]]} */}
            {/* instanceRef={polyline} */}
          {/* /> */}
        </Map>
          <div id="map" data-x="55.758031" data-y="37.710387" style={{ width: '450px', height: '20px' }} />

    </div>


          <div id="map" data-x="55.758031" data-y="37.710387" style={{ width: '700px', height: '30px' }} />


          </Box>
          <Stack spacing={2} direction="row">
            <Button variant="contained" sx={{bgcolor: '#fa7301'}}>Добавить фотографии дома</Button>
          </Stack>
      </CardContent>
      <CardActions>
        <Button onClick={submitHendler} size="large">Сохранить</Button>
        <Button onClick={() => navigate(-1)} size="large">Назад</Button>
      </CardActions>
    </Card>
  );
}