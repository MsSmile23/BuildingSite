import { Project } from './type';

export const getProjects = async (): Promise<Project[]> => {
  const res = await fetch('http://localhost:3000/api/projects');
  const data = await res.json();
  return data;
};
