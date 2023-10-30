import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Newspaper from '@mui/icons-material/Newspaper'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Dialog, DialogContent, DialogContentText } from '@mui/material';




const defaultTheme = createTheme();

export default function Subscribe() {
  const [email, setEmail] = React.useState<string>();
  const [open, setOpen] = React.useState<boolean>(false);
  const [messege, setMessege] = React.useState<string | undefined>()
  const openopen = () => setOpen(true)
  const closeclose = () => setOpen(false);
  const validateEmail = (email : string | undefined) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateEmail(email) === null) {
      setMessege('Поле заполнено не правильно')
      openopen()
    } else {
      setMessege('Вы успешно подписались на рассылку')
      fetch("http://localhost:3000/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email}),
      })
      openopen()
      setEmail('')
    }
    
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#fa7301' }}>
            <Newspaper />
          </Avatar>
          <Typography component="h5" variant="h6">
            Полезная рассылка:
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" >
      {'Разбираем мифы и ошибки стройки, показываем дома и рассказываем про акции.'}
    </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              type='email'
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Ваш email"
              value={email}
              name="email"
              autoComplete="email"
              // autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#fa7301' }}
            >
              Подписаться
            </Button>
            
            <FormControlLabel
              control={<Checkbox checked value="agreement" color="primary" />}
              label="Согласие на обработку личных данных."
            />
            
          </Box>
        </Box>
        
      </Container>
      <Dialog open={open} onClose={closeclose}>
        <DialogContent>
          <DialogContentText>
            {messege}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}