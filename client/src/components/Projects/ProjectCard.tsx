import React from 'react';
import { Project, PhotoProject } from './type';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  photos: PhotoProject[];
}

function ProjectCard(props: ProjectCardProps): JSX.Element {
  const { project, photos } = props;

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

  return (
    <Grid container>
      <Link to={`/projects/${project.id}`}>
        <CardActionArea>
      <Paper elevation={3}>
          <Card sx={{
                width: '460',
                height: '560',
                mb: 5
              }} >
            <CardMedia
              component="img"
              sx={{
                width: '460',
                maxHeight: '310',
              
              }}
              image={photos && photos.length > 0 ? photos[0].photo : ''}
              alt={`Фото проекта ${project.name}`}
            />
            <CardContent>
              <Typography variant="h4" component="div">
                {project.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
              &#10004; {getFloorText(project)}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                &#10004; {project.material}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                &#10004; {project.size} м²
              </Typography>
              <Typography variant="body1" color="textSecondary">
                &#10004; {project.price} млн. ₽
              </Typography>
            </CardContent>
          </Card>
         </Paper>
        </CardActionArea>
      </Link>
    </Grid>
  );
}

export default ProjectCard;