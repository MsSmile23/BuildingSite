
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { Box, Card, CardContent, Container, Dialog, DialogContent, DialogContentText, FormControl, TextField, Typography } from '@mui/material';

export const UploadText = ({userId}) => {
    const [files, setFile] = useState({});
    const [open, setOpen] = React.useState<boolean>(false);
    const [name, setName] = React.useState<string>('');
    const [executor, setExecutor] = React.useState<string>('');
    const [price, setPrice] = React.useState<number>(0);
    const [stage, setStage] = React.useState<number>(0);
    const openopen = () => setOpen(true)
    const closeclose = () => setOpen(false);
    const handleFile = (e) => {
      if (e.target.files) {
        setFile((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
          file: e.target.files[0],
        }));
      } else {
        setFile((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }  
  }
  
    const handleName = (e) => {
      setName(e.target.value)
    }
    const handleExecutor = (e) => {
      setExecutor(e.target.value)
    }
    const handlePrice = (e) => {
      setPrice(e.target.value)
    }
    const handleStage = (e) => {
      setStage(e.target.value)
    }
      
    const handleDocument = async  (e) => {
        e.preventDefault()
        console.log('Привет');
        
        if (typeof files === 'undefined') return;
        const formData = new FormData();
        formData.append('files', files.file);
            
        const responce = await fetch(`http://localhost:3000/api/addFile/${userId}`, {
            method: 'POST',
            body: formData
        });
        const result = await responce.json()
        console.log(result);
        await fetch(`http://localhost:3000/api/document`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({result, name, price, executor, stage}),
        })
        
        setFile('');
        setName(' ');
        setExecutor(' ');
        setPrice(0);
        setStage(0);
        openopen();
    }
  return (
    <>  

<Card sx={{ ml: 2, maxWidth: '100ch', bgcolor: '#faf9f3' }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" align='center'>
        Документ
        </Typography>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
        {/* <form onSubmit={handleDocument}> */}
            <FormControl>
            <TextField
                type="text"
                variant='outlined'
                color='info'
                name="name"
                label="Название документа"
                onChange={handleName}
                value={name}
                fullWidth
                required
                sx={{mb: 4}}
            >
            </TextField>
            <TextField
                type="text"
                variant='outlined'
                color='info'
                name="executor"
                value={executor}
                label="Исполнитель"
                onChange={handleExecutor}
                fullWidth
                required
                sx={{mb: 4}}
            >
            </TextField>
            <TextField
                type="text"
                variant='outlined'
                color='info'
                name="stage"
                value={stage}
                label="Стадия"
                onChange={handleStage}
                fullWidth
                required
                sx={{mb: 4}}
            >
            </TextField>
            <TextField
                type="text"
                variant='outlined'
                color='info'
                name="price"
                onChange={handlePrice}
                label="Цена"
                value={price}
                fullWidth
                required
                sx={{mb: 4}}
            >
            </TextField>
           
                    <Button
                    variant="contained"
                    component="label"
                    sx={{mt: 3, bgcolor: '#fa7301'}}
                    >
                    Выбрать файлы
                    <input
                        type="file"
                        hidden
                        onChange={handleFile}
                        />
                    </Button>
                    <Button variant="contained"
                    onClick={handleDocument}
                    sx={{mt: 3, bgcolor: '#fa7301'}}
                    >
                    Загрузить
                    </Button>
            </FormControl>
          {/* </form> */}
        </Box>
        </CardContent>
        <Dialog open={open} onClose={closeclose}>
        <DialogContent>
          <DialogContentText>
            Файлы загружены
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </Card>
    </>
  )
}
