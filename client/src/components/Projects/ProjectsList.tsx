// РАБОЧЕЕ ПОСЛЕДНЕЕЕ
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProjectCard from './ProjectCard';
import FilterForm from './FilterForm';


import { Container, Typography, Box, Grid } from '@mui/material';

function ProjectsList(): JSX.Element {
  const { projects } = useSelector((store: RootState) => store.projects);

  const [filters, setFilters] = useState({
    floor: [],
    material: [],
    size: '',
    price: '',
  });

  const handleFilterChange = (name: string, value: any) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleSizeSortChange = (direction: string) => {
    setFilters({ ...filters, size: direction });
  };

  const handlePriceSortChange = (direction: string) => {
    setFilters({ ...filters, price: direction });
  };

  // Функция для фильтрации и сортировки проектов
  const filterAndSortProjects = (projects: Project[]) => {
    let filteredProjects = [...projects]; // Создаем копию массива проектов

    if (filters.floor.length > 0) {
      filteredProjects = filteredProjects.filter((p) =>
        filters.floor.includes(p.floor)
      );
    }

    if (filters.material.length > 0) {
      filteredProjects = filteredProjects.filter((p) =>
        filters.material.includes(p.material)
      );
    }

    if (filters.size === 'asc') {
      filteredProjects = filteredProjects.sort((a, b) => a.size - b.size);
    } else if (filters.size === 'desc') {
      filteredProjects = filteredProjects.sort((a, b) => b.size - a.size);
    }

    if (filters.price === 'asc') {
      filteredProjects = filteredProjects.sort((a, b) => a.price - b.price);
    } else if (filters.price === 'desc') {
      filteredProjects = filteredProjects.sort((a, b) => b.price - a.price);
    }

    return filteredProjects;
  };

  const filteredAndSortedProjects = filterAndSortProjects(projects);

  return (
    <Container maxWidth='lg'>
      <h1>
        Проекты загородных домов
      </h1>
      <Grid container rowSpacing={1} >
    
      <Grid item xs={6} sx={{mb: '2'}}>
      <FilterForm
        filters={filters}
        onFilterChange={handleFilterChange}
        onSizeSortChange={handleSizeSortChange}
        onPriceSortChange={handlePriceSortChange}
      />
      </Grid>
      <Grid item xs={6}>
      {filteredAndSortedProjects.map((project) => (
        <ProjectCard
          project={project}
          photos={project.photos}
          key={project.id}
        />
      ))}
      </Grid>
    
    </Grid>
    </Container>
  );
}

export default ProjectsList;
