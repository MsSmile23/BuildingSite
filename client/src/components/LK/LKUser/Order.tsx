import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import CustomizedTables from './Table';
import Online from './Online';
import { AnswerForm } from '../../AnswerForm/AnswerForm'
import PhotoList from './PhotoList';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Order({order}) {
    const [value, setValue] = useState(0);

    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return ( 
        <>
        <h2>Заказ</h2>
          <Box
            sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
          >
            <Box sx={{minWidth: 200}}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider'  }}
            >
              <Tab label="Галерея" {...a11yProps(0)} />
              <Tab label="Документы" {...a11yProps(1)} />
              <Tab label="Онлайн трансляция" {...a11yProps(2)} />
              <Tab label="Обратная связь" {...a11yProps(3)} />
            </Tabs>
            </Box>
            <Box>
            <TabPanel value={value} index={0}>
              <PhotoList order={order}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CustomizedTables order={order}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Online/>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <AnswerForm/>
            </TabPanel>
            </Box>
          </Box>
          
        </>
        );
}

export default Order;