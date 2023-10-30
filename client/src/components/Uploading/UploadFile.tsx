
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { Container, Dialog, DialogContent, DialogContentText, FormControl } from '@mui/material';

export const UploadFile = ({userId}) => {
    const [files, setFile] = useState();
    const [open, setOpen] = React.useState<boolean>(false);
    const openopen = () => setOpen(true)
    const closeclose = () => setOpen(false);
    const handleFile = (e) => {
        setFile(e.target.files)
        
    }
      
    const handleUpload =  (e) => {
        console.log('Привет');
        e.preventDefault()
        if (typeof files === 'undefined') return;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++){
            formData.append(`files`, files[i])
            
        }
        fetch(`http://localhost:3000/api/addPhoto/${userId}`, {
            method: 'POST',
            body: formData
        })
        openopen()
        setFile('');
        
    }
  return (
    <> 
    <Container maxWidth='lg'>
        <form onSubmit={handleUpload}>
            {/* <input type="file" name='files' accept="image/*,.pdf" multiple onChange={handleFile}/>
            <button>Загрузить</button> */}
            <FormControl>
                    <Button
                    variant="contained"
                    component="label"
                    sx={{ml: 9, bgcolor: '#fa7301'}}
                    >
                    Выбрать фотографии
                    <input
                        type="file"
                        hidden
                        multiple
                        onChange={handleFile}
                    />
                    </Button>
                    <Button variant="contained"
                    type="submit"
                    sx={{ml: 9, mt: 3, bgcolor: '#fa7301'}}
                    >
                    Загрузить фотографии
                    </Button>
            </FormControl>
        </form>
        <Dialog open={open} onClose={closeclose}>
        <DialogContent>
          <DialogContentText>
            Файлы загружены
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </Container>
    </>
  )
}
