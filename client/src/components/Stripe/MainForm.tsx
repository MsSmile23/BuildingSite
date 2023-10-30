import React, { useState } from 'react'
import Stripe from './Stripe'
import { Button, TextField } from '@mui/material';

export const MainForm = () => {
    const [pay, setPay] = useState<number>(1)
    const [open, setOpen] = useState(false);
    const handleChange = (event) => {
        setPay(event.target.value);
      };
    const openPay = () => setOpen(true);
  return (
    <div className="App">
        {open?
        <><Stripe pay={pay}/></> : 
        <>
        <form>
            <TextField
                type="text"
                variant='outlined'
                color='secondary'
                name="message"
                label="Введи желаемую сумму оплаты"
                onChange={handleChange}
                fullWidth
                required
                sx={{mb: 4}}
            />
            <Button variant="outlined" onClick={openPay}>Перейти к оплате</Button>
        </form>
        </>}
    </div>
  )
}
