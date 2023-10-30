import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProjectsList from './Projects/ProjectListLK';
import HouseList from './Houses/HouseListLK';

import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserNav from './UserNav';
import { Container } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ user }) {
  // const [user, setUser] = useState()

  // useEffect(() => {
  //     console.log('useEffect App',);
  //     fetch("http://localhost:3000/lk/lkadmin", {
  //         credentials: 'include',
  //         headers: {
  //             "Content-Type": "application/json",
  //             "Access-Control-Allow-Origin": "http://localhost:3000",
  //           },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setUser(data))
  //       .catch((err) => console.log(err))
  //   }, [])

  //   console.log('user-------->', user);


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Редактирование проектов" {...a11yProps(0)} />
          <Tab label="Редактирование построенных домов" {...a11yProps(1)} />
          <Tab label="Взаимодействие с заказчиками" {...a11yProps(2)} />
        </Tabs>
      </Box>
     
      <CustomTabPanel value={value} index={0}>
      <Container maxWidth='lg'>
      <Box sx={{ ml: 21, mb: 3}}>
        <Link to={`/addProject`}>
          <Button sx={{ width: "700px", margin: 'auto', bgcolor: '#fa7301' }} variant="contained" size="large">
            Добавить проект
          </Button>
        </Link>
      </Box>
      </ Container>
      <ProjectsList/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Container maxWidth='lg'>
      <Box sx={{ ml: 21, mb: 3}}>
        <Link to={`/addHouse`}>
        <Button sx={{ width: "700px", margin: 'auto', bgcolor: '#fa7301' }} variant="contained" size="large">
            Добавить дом
          </Button>
        </Link>
      </Box>
      </ Container>
        <HouseList/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Container maxWidth='lg'>
      <Box sx={{ mb: 3}}>
        <UserNav user={user}/>
        </Box>
      </ Container>
      </CustomTabPanel>
      </>
  );
}