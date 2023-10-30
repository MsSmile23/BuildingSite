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

export default function AddProject() {
    // const [project, setProject] = useState();
    // const { id } = useParams();

    const navigate = useNavigate();
    const [files, setFile] = useState();
    const [document, setDocument] = useState();
    const handleFile = (e) => {
      setFile(e.target.files)
  }
    const handleDocument = (e) => {
      setDocument(e.target.files)
      console.log(document);
      
    }
    // useEffect(() => {
    //     const response = fetch(`http://localhost:3000/lk/editProject/${id}`);
    //     response.then((res) => res.json()).then((data) => setProject(data));
    //   }, [id]);


    const [inputs, setInputs] = useState()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    
    const submitHendler = async (): void => {

      const name = inputs.name;
      if (typeof document === 'undefined') return;
      const documentData = new FormData();
      for (let i = 0; i < document.length; i++){
        documentData.append(`documents`, document[i])
        
      }
      const newdocument = await fetch('http://localhost:3000/api/workFiles', {
        method: 'POST',
        body: documentData
      });
      const userdocument = await newdocument.json()
      const plan = userdocument;
      const price = inputs.price;
      const floor = inputs.floor;
      const size = inputs.size;
      const material = inputs.material;
      const about = inputs.about;
      const wardrobe = inputs.wardrobe;
      const bathroom = inputs.bathroom;
      const bedroom = inputs.bedroom;  
      const profd = await fetch(`http://localhost:3000/lk/addProject`, {
        method: "POST", 
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({name, price, floor, size, plan, material, about, wardrobe, bathroom , bedroom})
      })
      const project = await profd.json();
      const projectId = project.id;
      if (typeof files === 'undefined') return;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++){
            formData.append(`files`, files[i])
            
        }
        const newfiles = await fetch(`http://localhost:3000/api/addPhotoProject/${projectId}`, {
            method: 'POST',
            body: formData
        })
          // setTodos((prev) => [...prev, inputs])
          // setInputs({ title: "" })
          window.location = '/profileAdmin';
          if (response.status === 200) {
            console.log('response.status-------->', response.status);
        }
        }
    
    

  return (
    <Card sx={{ maxWidth: '100ch', margin: 'auto', bgcolor: '#faf9f3' }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Добавление нового проекта
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
          label="Название проекта"
        //   placeholder={project?.name}
          multiline
        />
        <TextField
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
        />
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
        <TextField
          onChange={changeHandler}
          name="price"
          id="outlined-textarea"
          label="Стоимость, млн.руб."
        //   placeholder={project?.price}
          multiline
        />
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
          </Box>
          <Stack spacing={2} direction="row">
            <Button variant="contained" sx={{bgcolor: '#fa7301'}} component="label">Добавить фотографии <input
                        type="file"
                        hidden
                        multiple
                        onChange={handleFile}
                    /></Button>
            <Button variant="contained" sx={{bgcolor: '#fa7301'}} component="label">Добавить поэтажный план <input
                        type="file"
                        hidden
                        multiple
                        onChange={handleDocument}
                    /></Button>
          </Stack>
      </CardContent>
      <CardActions >
        <Button onClick={submitHendler} size="large">Сохранить</Button>
        <Button onClick={() => navigate(-1)} size="large">Назад</Button>
      </CardActions>
    </Card>
  );
}