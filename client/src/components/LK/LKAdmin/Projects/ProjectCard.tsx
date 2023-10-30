      // import * as React from 'react';
      
      
import React, { useEffect, useState } from 'react';
import { Project, PhotoProject } from './type';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link, Route, Routes } from 'react-router-dom';
import EditProject from './EditProject';

interface ProjectCardProps {
  project: Project;
  photos: PhotoProject[];
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
  const { photos } = props;
  const [project, setProject] = useState(props.project);

  // Определение текста для отображения этажей
  function getFloorText(project) {
    if (project.floor === '1') {
      return `${project.floor} этаж`;
    } else if (project.floor === '2') {
      return `${project.floor} этажа`;
    } else if (project.floor === 'Мансарда') {
      return `${project.floor}`;
    } else {
      return `${project.floor} этажей`;
    }
  }



  const delProject = (event: ChangeEvent<HTMLInputElement>) => {
    fetch(`http://localhost:3000/lk/delProject/${project.id}`, {
           method: 'DELETE' ,
           headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
      });
      setProject((prev) => [...prev, project])
      window.location = '/profileAdmin';
}


const editProject = (event: ChangeEvent<HTMLInputElement>) => {
  fetch(`http://localhost:3000/lk/editProject/${project.id}`, {
         method: 'GET' ,
         headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      // body: JSON.stringify( {todo} ),
  });
}

// useEffect(() => {


  
  // const response = fetch(`http://localhost:3000/lk/delProject/${project.id}`);
  // response.then((res) => res.json()).then((data) => setProject(data));
// }, [project]);


  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{ maxWidth: '460px', maxHeight: '860px', marginBottom: '40px' }}
    >
        {/* <CardActionArea> */}
          <Card>
            <CardMedia
              component="img"
              sx={{
                width: 460,
                height: 260,
                display: { xs: 'none', sm: 'block' },
              }}
              image={photos && photos.length > 0 ? photos[0].photo : ''}
              alt={`Фото проекта ${project.name}`}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {getFloorText(project)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {project.material}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {project.size} м²
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {project.price} млн. ₽
              </Typography>
            </CardContent>
            <Stack direction="row" spacing={2} margin={1}>
              <Link key={project.id} to={`/editProject/${project.id}`}>
                <Button onClick={editProject} variant="contained" sx={{bgcolor: '#fa7301'}} endIcon={<CreateIcon />}>
                  Редактировать
                </Button>
              </Link>
              {/* <Routes>
                <Route path="/editProject/:id" element={<EditProject />} />
              </Routes> */}
              <Button onClick={delProject} variant="contained" sx={{bgcolor: '#fa7301'}} startIcon={<DeleteIcon />}>
                Удалить
              </Button>
            </Stack>


          </Card>
        {/* </CardActionArea> */}
    </Grid>
  );
}

export default ProjectCard;





// export default function IconLabelButtons() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Button variant="outlined" startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//       <Button variant="contained" endIcon={<SendIcon />}>
//         Send
//       </Button>
//     </Stack>
//   );
// }






// import React from 'react';
// import { Project, PhotoProject } from './type';
// import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
// import './ProjectCard.css'; //  CSS файл

// function ProjectCard({
//   project,
//   photos,
// }: {
//   project: Project;
//   photos: PhotoProject[];
// }): JSX.Element {
//   return (
//     <Card>
//       <CardContent sx={{ flex: 1 }}>
//         <Grid container spacing={2}>
//           {photos.map((photo) => (
//             <Grid item key={photo.id} >
//               <CardMedia
//                 component="img"
//                 className="project-card-img"
//                 image={photo.photo || ''}
//                 alt={`Фото проекта ${project.name}`}
//               />
//             </Grid>
//           ))}
//         </Grid>

//         <Typography variant="h5" component="div">
//           {project.name}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Этаж: {project.floor}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Материал: {project.material}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Площадь: {project.size} кв. м
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Описание: {project.about}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Цена: {project.price} млн. ₽
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default ProjectCard;

// ОНО РАБОТАЕТ
// import React from 'react';
// import { Project, PhotoProject } from './type';
// import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
// import './ProjectCard.css'; // Импортируйте CSS файл

// function ProjectCard({
//   project,
//   photos,
// }: {
//   project: Project;
//   photos: PhotoProject[];
// }): JSX.Element {
//   return (
//     <Card>
//       <CardContent>
//         {photos && photos.length > 0 && (
//           <Grid container spacing={2}>
//             {photos.map((photo) => (
//               <Grid item key={photo.id} xs={6} sm={4} md={3}>
//                 <CardMedia
//                   component="img"
//                   className="project-card-img"
//                   image={photo.photo || ''}
//                   alt={`Фото проекта ${project.name}`}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         )}

//         <Typography variant="h5" component="div">
//           {project.name}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Этаж: {project.floor}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Материал: {project.material}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Площадь: {project.size} кв. м
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Описание: {project.about}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Цена: {project.price} рублей
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default ProjectCard;

// // ПОСЛЕДНЕЕЕ РАБОЧЕЕЕЕ
// import React from 'react';
// import { Project, PhotoProject } from './type';

// function ProjectCard({
//   project,
//   photos,
// }: {
//   project: Project;
//   photos: PhotoProject[];
// }): JSX.Element {
//   return (
//     <div>
//       {photos && photos.length > 0 && (
//         <div>
//           {/* <h3>Фотографии проекта</h3> */}
//           {photos.map((photo) => (
//             <img
//               key={photo.id}
//               src={photo.photo || ''}
//               alt={`Фото проекта ${project.name}`}
//             />
//           ))}
//         </div>
//       )}

//       <div>
//         <div>
//           <h3>{project.name}</h3>
//         </div>
//         <div>
//           <p>Этаж: {project.floor}</p>
//           <p>Материал: {project.material}</p>
//           <p>Площадь: {project.size} кв. м</p>
//           <p>Описание: {project.about}</p>
//           <p>Цена: {project.price} рублей</p>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default ProjectCard;

// import React from 'react';
// import { Project } from './type';

// function ProjectCard({ project }: { project: Project }): JSX.Element {
//   return (
//     <div>
//       <div>
//         <strong>{project.name}</strong>
//       </div>
//       <div>
//         <p>Цена: {project.price} рублей</p>
//         <p>Этаж: {project.floor}</p>
//         <p>Площадь: {project.size} кв. м</p>
//         <p>Материал: {project.material}</p>
//         <p>Описание: {project.about}</p>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;

// ОНО РАБОТАЕТ
// import React from 'react';
// import { Project, PhotoProject } from './type';
// import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
// import './ProjectCard.css'; // Импортируйте CSS файл

// function ProjectCard({
//   project,
//   photos,
// }: {
//   project: Project;
//   photos: PhotoProject[];
// }): JSX.Element {
//   return (
//     <Card>
//       <CardContent>
//         {photos && photos.length > 0 && (
//           <Grid container spacing={2}>
//             {photos.map((photo) => (
//               <Grid item key={photo.id} xs={6} sm={4} md={3}>
//                 <CardMedia
//                   component="img"
//                   className="project-card-img"
//                   image={photo.photo || ''}
//                   alt={`Фото проекта ${project.name}`}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         )}

//         <Typography variant="h5" component="div">
//           {project.name}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Этаж: {project.floor}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Материал: {project.material}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Площадь: {project.size} кв. м
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Описание: {project.about}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           Цена: {project.price} рублей
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default ProjectCard;
