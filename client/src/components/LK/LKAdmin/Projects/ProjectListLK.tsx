// РАБОЧЕЕ ПОСЛЕДНЕЕЕ
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import ProjectCard from './ProjectCard';

import { Container, Typography, Box, Grid } from '@mui/material';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ProjectsList(): JSX.Element {
  const { projects } = useSelector((store: RootState) => store.projects);

  // Функция для фильтрации и сортировки проектов
  const filterAndSortProjects = (projects: Project[]) => {
    const filteredProjects = [...projects]; // Создаем копию массива проектов

    return filteredProjects;
  };

  const filteredAndSortedProjects = filterAndSortProjects(projects);

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {filteredAndSortedProjects.map((project) => (
            <ProjectCard
              project={project}
              photos={project.photos}
              key={project.id}
            />
        ))}
      </Grid>
    </Box>

    </div>
  );
}

export default ProjectsList;
