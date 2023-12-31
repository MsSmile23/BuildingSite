import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { UploadFile } from '../../Uploading/UploadFile';
import { UploadText } from '../../Uploading/UploadText';
import { ChatMain } from '../../ChatWithClient/ChatMain';
import AddLink from './AddLink';


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
        <Box sx={{ p: 3 }}>
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

export default function TabForUsers({ userId }) {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    > 
      <Box sx={{minWidth: 200}}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab sx={{align: 'left'}} label="Добавить фото" {...a11yProps(0)} />
        <Tab label="Добавить документ" {...a11yProps(1)} />
        <Tab label="Добавить онлайн трансляцию" {...a11yProps(2)} />
        <Tab label="Связь с заказчиком" {...a11yProps(3)} />
      </Tabs>
      </Box>
      <Box>
      <TabPanel value={value} index={0}>
        <UploadFile userId={userId}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UploadText userId={userId}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddLink/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ChatMain />
      </TabPanel>
      </Box>
    </Box>
    </>
  );
}