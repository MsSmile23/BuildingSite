import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Avatar from '@mui/material/Avatar';
import wa from '../../../public/img/wa.png';
import tg from '../../../public/img/tg.png';
import email from '../../../public/img/email.png';
import mess4 from '../../../public/img/mess4.png';



const actions = [
  { icon: <Avatar src={wa} />, name: 'WhatsApp', link: 'https://api.whatsapp.com/send/?phone=79273240098/'},
  { icon: <Avatar src={tg} />, name: 'Telegram', link: 'https://t.me/elbrusbootcamp1' },
  { icon: <Avatar src={email} />, name: 'Email', link: 'mailto:sk.home.garden88@gmail.com' },
];

export default function WhatsApp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
      <Box>
      <SpeedDial
        direction='left'
        // sx={{ mr: 60, mb: 2, bottom: 20, right: 20 }}
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 7, right: 330 }}
        icon={<Avatar src={mess4} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            // tooltipTitle={action.name}
            // tooltipOpen
            onClick={() => {handleClose(); window.open(action.link)}}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
// , '_blank'
// href: 'https://api.whatsapp.com/send/?phone=79273240098/'