import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ChangeEvent, useEffect, useState } from 'react'


export default function Login():JSX.Element {
  const [inputs, setInputs] = useState({ name: "", password: "" })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  };
  
  const submitHendler = async (): void => {
    const response = await fetch("http://localhost:3000/lk/login", {
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs)
    })
    setInputs({ name: "", password: "" })
    console.log('response.status--------->', response.status);
    if (response.status === 210) {
        window.location = '/profileUser'
    }
    if (response.status === 220) {
        window.location = '/profileAdmin'
    }
  }

  return (
    <>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
        >
        <Typography component="h1" variant="h5">
          Вход в личный кабинет
        </Typography>
          <TextField
            onChange={changeHandler}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Логин"
            name="name"
            autoFocus
            value={inputs.name}
          />
          <TextField
            onChange={changeHandler}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            value={inputs.password}
          />
          <Button
            onClick={submitHendler}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: '#fa7301' }}
          >
            Войти
          </Button>
        </Box>
    </Container>
          </>
  );
}