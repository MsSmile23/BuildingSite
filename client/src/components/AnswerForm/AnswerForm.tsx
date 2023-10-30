import React, { useState, useRef } from 'react'
import { Button, Dialog, DialogContent, DialogContentText, DialogActions, Select, MenuItem, FormControl, TextField, SelectChangeEvent, InputLabel  } from '@mui/material';
import emailjs from '@emailjs/browser';
// import './answer.css';

export const AnswerForm = () => {
    const [dialog, setDialog] = useState(false);
    const [position, setPosition] = useState<string>('');
    const [project, setProject] = useState<string>('');
    const [whoWillWrite, setWill] = useState<string>('');
    const [jobEmail, setJob] = useState<string>('');
    const [open, setOpen] = useState(false);
    const [openproject, setOpenproject] = useState(false);
    const [hiddentDialog, setHidden] = useState(false);
    const form = useRef();
    const openDialog = () => setDialog(true);
    const closeDialog = () => setDialog(false);
    const closeHidden = () => setHidden(false);
    const user = 'Паша';
    const userEmail = 'Pavel@yandex.ru';
    const usertelephone = '79855776267';
    const userProject = ['Фундамент', 'Стеновой комплект', 'Кровля', 'Фасад', 'Окна, двери', 'Документы', 'Другое'];
    const handleChange = (event: SelectChangeEvent<typeof position>) => {
        setPosition(event.target.value);
      };
    const handleProject = (event: SelectChangeEvent<typeof project>) => {
        setProject(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
      const jobClose = () => {
        setOpenproject(false);
      };
    
      const jobOpen = () => {
        setOpenproject(true);
      };
    const openWindow = (event) => {
        event.preventDefault();
        if(position === 'Директор'){
            setHidden(true);
            setWill('Директор');
            setJob('service_u3ikgar');
        } else if(position === 'Начальник проекта'){
            setHidden(true);
            setWill('Начальник проекта');
            setJob('service_u3ikgar');
        } else if(position === 'Архитектор'){
            setHidden(true);
            setWill('Архитектор');
            setJob('service_u3ikgar');
        } else if(position === 'Дизайнер'){
            setHidden(true);
            setWill('Дизайнер');
            setJob('service_u3ikgar');
        } else if(position === 'Консультант'){
            setHidden(true);
            setWill('Консультант');
            setJob('service_u3ikgar');
        }
    }
    const sendJobEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”
        emailjs.sendForm(jobEmail, 'template_5r51tji', form.current, 'AtCV_Wiq-eDBtT01c')
          .then((result) => {
              // show the user a success message
          }, (error) => {
              // show the user an error
          });
        setHidden(false);
      };

  return (
    <>  

        
        <Button variant="outlined" onClick={openDialog} >Напишите нам, если у вас появились вопросы. Мы ответим в ближайшее время.</Button>
        <Dialog open={dialog} onClose={closeDialog}>
          <DialogContent>
            <DialogContentText>
            <form ref={form} onSubmit={openWindow}>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-controlled-open-select-label">С кем бы вы хотели связаться?</InputLabel>
            <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={position}
            sx={{mb: 5}}
            label="С кем бы вы хотели связаться?"
            onChange={handleChange}
            >
             <MenuItem value="">
            </MenuItem>
            <MenuItem value='Директор'>Директор</MenuItem>
            <MenuItem value='Начальник проекта'>Начальник проекта</MenuItem>
            <MenuItem value='Архитектор'>Архитектор</MenuItem>
            <MenuItem value='Дизайнер'>Дизайнер</MenuItem>
            <MenuItem value='Консультант'>Консультант</MenuItem>
            </Select>
            <Button sx={{ bgcolor: '#fa7301', mb: 2 }} variant="contained" color="info" type="submit" value="Send">Написать</Button>
            </FormControl>
            </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button sx={{ bgcolor: '#fa7301', mb: 2 }} variant="contained" color="info" onClick={closeDialog}>Закрыть</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={hiddentDialog} onClose={closeHidden}>
          <DialogContent>
            <DialogContentText>
            <form ref={form} onSubmit={sendJobEmail}>
            <FormControl fullWidth >
            <InputLabel id="demo-controlled-open-select-label">Тема обращения</InputLabel>
            <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={openproject}
            onClose={jobClose}
            onOpen={jobOpen}
            value={project}
            sx={{mb: 5}}
            name="project"
            label="Teма обращения"
            onChange={handleProject}
            variant='outlined'
            >
            <MenuItem value=""></MenuItem>
            {userProject.map((el, i) => (<MenuItem key={i} value={el}>
                {el}
            </MenuItem>)
            )}
            </Select>
            </FormControl>
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
            <Button sx={{ bgcolor: '#fa7301', mb: 2 }} variant="contained" color="info" type="submit" value="Send" onClick={closeHidden}>Отправить</Button>
            </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button sx={{ bgcolor: '#fa7301', mb: 2 }} variant="contained" color="info" onClick={closeHidden}>Закрыть</Button>
          </DialogActions>
        </Dialog>
    </>
  )
}
