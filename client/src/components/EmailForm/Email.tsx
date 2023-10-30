import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField, FormControlLabel, Checkbox } from '@mui/material';


 
const EmailContactForm = ({setActive, openchange})  => {
 const form = useRef();
 
 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
   setActive(false);
   openchange(true);
   emailjs.sendForm('service_u3ikgar', 'template_iav0le8', form.current, 'AtCV_Wiq-eDBtT01c')
     .then((result) => {
         // show the user a success message
     }, (error) => {
         // show the user an error
     });
 };
 
 return (
    <>
  <form ref={form} onSubmit={sendEmail} >
  <TextField
        type="text"
        variant='outlined'
        name="speaker"
        color='info'
        label="Как к вам можно обращаться"
        fullWidth
        required
        sx={{mb: 4}}
  />
  <TextField
      type="email"
      name="email"
      variant='outlined'
      color='info'
      label="Email"
      fullWidth
      required
      sx={{mb: 4}}
  />
  <TextField
      type="tel"
      name="telephone"
      variant='outlined'
      color='info'
      label="Телефон"
      required
      fullWidth
      sx={{mb: 4}}
  />
  <TextField
      type="text"
      variant='outlined'
      color='info'
      name="message"
      label="Сообщение"
      fullWidth
      required
      sx={{mb: 4}}
  />
  <Button sx={{ bgcolor: '#fa7301', mb: 2 }} variant="contained" color="info" type="submit" value="Send">Отправить</Button>
  </form>
  </>
 );
};
 
export default EmailContactForm;