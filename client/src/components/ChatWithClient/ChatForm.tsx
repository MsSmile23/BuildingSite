import React, { useRef, useState } from 'react'
import { Button, Dialog, DialogContent, DialogContentText, DialogActions, TextField  } from '@mui/material';
import emailjs from '@emailjs/browser';

export const ChatForm = ({closeFor, user, userEmail, usertelephone}) => {
    const form = useRef();
    const [hiddentDialog, setHidden] = useState(false);
    const sendJobEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        emailjs.sendForm('service_u3ikgar', 'template_5r51tji', form.current, 'AtCV_Wiq-eDBtT01c')
          .then((result) => {
              // show the user a success message
          }, (error) => {
              // show the user an error
          });
          openHidden();
      };
    const openHidden = () => setHidden(true)
    const closeHidden = () => setHidden(false)
    const closers = () => {
        closeHidden();
        closeFor();
    }
  return (
    <div>
        {hiddentDialog? 
        <Dialog open={hiddentDialog} onClose={closeHidden}>
        <DialogContent>
          <DialogContentText>
          Ваше сообщение успешно доставлено
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={closers}>Закрыть</Button>
        </DialogActions>
      </Dialog> : 
        <form ref={form} onSubmit={sendJobEmail}>
            <TextField
                type="text"
                variant='outlined'
                color='info'
                name="message"
                label="Сообщение"
                fullWidth
                required
                sx={{mb: 4}}
            >
            </TextField>
            <TextField
                type="text"
                variant='outlined'
                color='info'
                name="speaker"
                fullWidth
                required
                sx={{mb: 4, display: 'none'}}
                defaultValue={user}
            >
            </TextField>
            <TextField
                type="text"
                variant='outlined'
                color='info'
                name="email"
                fullWidth
                required
                sx={{mb: 4, display: 'none'}}
                defaultValue={userEmail}
            >
            </TextField>
            <TextField
                type="text"
                variant='outlined'
                color='info'
                name="telephone"
                fullWidth
                required
                sx={{mb: 4, display: 'none'}}
                defaultValue={usertelephone}
            >
            </TextField>
            <Button variant="contained" sx={{bgcolor: '#fa7301'}} type="submit" value="Send">Отправить</Button>
            </form>}
    </div>
  )
}
