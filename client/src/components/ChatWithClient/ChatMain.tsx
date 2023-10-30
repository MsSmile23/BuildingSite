import React , { useState } from 'react'
import { Button } from '@mui/material';
import { ChatForm } from './ChatForm';

export const ChatMain = () => {
  const [open, setOpen] = useState(false);  
  const openFor = () => setOpen(true);
  const closeFor = () => setOpen(false);
  const user = 'Паша';
  const userEmail = 'Pavel@yandex.ru';
  const usertelephone = '79855776267';

  return (
    <>{open? 
    <ChatForm closeFor={closeFor} user={user} userEmail={userEmail} usertelephone={usertelephone}/> 
    : <Button sx={{ml: 9, mt: 3, bgcolor: '#fa7301'}} variant='contained' onClick={openFor}>Связаться с заказчиком</Button>}
    </>
  )
}
