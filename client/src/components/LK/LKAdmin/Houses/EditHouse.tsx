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

export default function EditHouse() {
    const [project, setProject] = useState();
    const { id } = useParams();

    const navigate = useNavigate();

    
    useEffect(() => {
        const response = fetch(`http://localhost:3000/lk/editHouse/${id}`);
        response.then((res) => res.json()).then((data) => setProject(data));
      }, [id]);


    const [inputs, setInputs] = useState({ material: project?.material, size: project?.size, about: project?.about })

    const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    
    const submitHendler = (): void => {
        const response = fetch(`http://localhost:3000/lk/editHouse/${id}`, {
            method: "PUT", 
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
    
    

  return (
    <Card sx={{ maxWidth: '100ch', margin: 'auto', bgcolor: '#faf9f3' }}>
      <CardMedia
        // sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Объект: {project?.name}
        </Typography>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
        {/* <TextField
          id="outlined-textarea"
          label="Название проекта"
          placeholder={project?.name}
          multiline
        /> */}
        {/* <TextField
          onChange={changeHandler}
          name="floor"
          id="outlined-textarea"
          label="Количество этажей"
          placeholder={project?.floor}
          multiline
        /> */}
        <TextField
          onChange={changeHandler}
          name="material"
          id="outlined-textarea"
          label="Материал"
          placeholder={project?.material}
          multiline
        />
        <TextField
          onChange={changeHandler}
          name="size"
          id="outlined-textarea"
          label="Площадь, м2"
          placeholder={project?.size}
          multiline
        />
        {/* <TextField
          onChange={changeHandler}
          name="price"
          id="outlined-textarea"
          label="Стоимость, млн.руб."
          placeholder={project?.price}
          multiline
        /> */}
</Box>
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '82ch' },
      }}
      noValidate
      autoComplete="off"
    >

        <TextField
          onChange={changeHandler}
          name="about"
          id="outlined-textarea"
          label="Описание"
          placeholder={project?.about}
          multiline
          />
          </Box>
        
        {/* <Typography gutterBottom variant="h5" component="div">
        <input name="name" type="text" placeholder={project?.name} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button onClick={submitHendler} size="large">Сохранить</Button>
        <Button onClick={() => navigate(-1)} size="large">Назад</Button>
      </CardActions>
    </Card>
  );
}