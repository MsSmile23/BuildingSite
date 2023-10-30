import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store'; // Импортируйте правильный путь к вашему store
import { useParams } from 'react-router-dom';
import { Project } from './type';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

interface ProjectInfoProps {
  projects: Project[];
}

export default function ProjectInfo(): JSX.Element {
  const { id } = useParams();

  // Получаем данные из Redux Store
  const projects = useSelector((store: RootState) => store.projects.projects);

  // Находим текущий проект по ID
  const currentProject = projects.find((el) => el.id === Number(id));

  if (!currentProject) {
    return <div>Проект не найден</div>;
  }

  // Преобразуем JSON-строку в массив URL-ов для планов
  let planImages: string[] = [];
  try {
    planImages = JSON.parse(currentProject.plan);
  } catch (error) {
    // Обработка ошибок, если JSON некорректный
    console.error('Ошибка при разборе JSON:', error);
  }
  // добавила
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

  function getWardrobeText(project) {
    const wardrobeCount = parseInt(project.wardrobe);
  
    if (wardrobeCount === 1) {
      return `${wardrobeCount} гардеробная`;
    } else if (wardrobeCount >= 2 && wardrobeCount <= 4) {
      return `${wardrobeCount} гардеробные`;
    } else {
      return `${wardrobeCount} гардеробных`;
    }
  }

  function getBathroomText(project) {
    const bathroomCount = parseInt(project.bathroom);
  
    if (bathroomCount === 1) {
      return `${bathroomCount} санузел`;
    } else if (bathroomCount >= 2 && bathroomCount <= 4) {
      return `${bathroomCount} санузла`;
    } else {
      return `${bathroomCount} санузла`;
    }
  }
  
  function getBedroomText(project) {
    const bedroomCount = parseInt(project.bedroom);
  
    if (bedroomCount === 1) {
      return `${bedroomCount} спальня`;
    } else if (bedroomCount >= 2 && bedroomCount <= 4) {
      return `${bedroomCount} спальни`;
    } else {
      return `${bedroomCount} спален`;
    }
  }
  


  return (
    <Container maxWidth="md" sx={{ paddingTop: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Проект {currentProject.name}
      </Typography>
      <Paper elevation={3} sx={{mt: 0.5, mb: 2}}>
      <Card>
        <CardMedia
          component="img"
          sx={{
            width: '100%',
            height: 'auto',
          }}
          image={
            currentProject.photos.length > 0
              ? currentProject.photos[0]?.photo
              : ''
          }
          alt={`Фото проекта ${currentProject.name}`}
        />
      </Card>
      </Paper>
      <Paper elevation={3}>
      <CardContent>
        <Typography variant="h5" align="left" color="textSecondary">
        &#128313; {getFloorText(currentProject)}
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary">
          &#128313; Площадь по осям: {currentProject.size} м²
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary">
          &#128313; Материал стен: {currentProject.material}
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary">
        &#128313; {getBedroomText(currentProject)}
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary">
        &#128313; {getBathroomText(currentProject)}
        </Typography>
        <Typography variant="h5" align="left" color="textSecondary" sx={{mb: 3}}>
        &#128313;  {getWardrobeText(currentProject)}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {currentProject.about}
        </Typography>
      </CardContent>
      </Paper>
      <Grid container spacing={3} sx={{ marginTop: '20px' }}>
        {planImages.map((planImage, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                sx={{
                  width: '100%',
                  height: 'auto',
                  // border: 'none',
                }}
                image={planImage}
                alt={`Фото проекта ${currentProject.name}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}