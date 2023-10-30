import { Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import { Company } from "./components/Company/Company";
import HomePage  from './components/HomePage/HomePage';
import Gallery from './components/LazyImage/Gallery';
import MapHouses from './components/MapHouses/MapHouses';
import Online from './components/Online';
import Error from './components/Error';
import NavButton from './components/NavButton/NavBatton';
import Service from './components/Service/Service';
import About from './components/About/About';
import './App.css';


import React, { useState, useEffect } from 'react'

const defaultTheme = createTheme();


import ProjectsList from './components/Projects/ProjectsList'
import ProjectInfo from './components/Projects/ProjectInfo'
import { useAppDispatch } from './store'
import { projectsInit } from './components/Projects/projectsSlice'
import Login from './components/LK/Login';
import LKUser from './components/LK/LKUser/LKUser';
import LKAdmin from './components/LK/LKAdmin/LKAdmin';
import EditProject from './components/LK/LKAdmin/Projects/EditProject';
import AddProject from './components/LK/LKAdmin/Projects/AddProject';
import EditHouse from './components/LK/LKAdmin/Houses/EditHouse';
import AddHouse from './components/LK/LKAdmin/Houses/AddHouse';





function App(): JSX.Element {
const dispatch = useAppDispatch();


useEffect(() => {
dispatch(projectsInit())
}, [])

  return ( 
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline /> 
      <Container maxWidth="lg">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/maphouses" element={<MapHouses />} />
          <Route path="/online" element={<Online/>} />
          <Route path="/*" element={<Error/>} />
          <Route path="/projects" element={<ProjectsList/>} />
          <Route path="/projects/:id" element={<ProjectInfo/>} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Company/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profileUser" element={<LKUser/>} />
          <Route path="/profileAdmin" element={<LKAdmin/>} />
          <Route path="/editProject/:id" element={<EditProject />} />
          <Route path="/addProject" element={<AddProject/>} />
          <Route path="/editHouse/:id" element={<EditHouse/>} />
          <Route path="/addHouse" element={<AddHouse/>} />

        </Routes>
        <NavButton />
      <Footer
        title="Home & Garden"
        description="Информация, предствленная на сайте, не является публичной офертой."
        />
        </Container>
    </ThemeProvider> 
  );
}

export default App
