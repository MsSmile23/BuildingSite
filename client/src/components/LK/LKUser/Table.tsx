import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import Stripe from '../../Stripe/Stripe';
import React from 'react';
// import MainForm from '../Stripe/MainForm';
// import Stripe from '../Stripe/Stripe';


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  // padding: '6px 12px',
  lineHeight: 1.5,
  color: 'orange',
  borderColor: '#0063cc',
  alignItems: 'right',
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables({ order }) {
       const [open, setOpen] = React.useState(false);
       const [price, setPrice] = React.useState(0);
       const [id, setId] = React.useState(0);
       const [message, setMessage] = React.useState(null);
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Наименование работ</StyledTableCell>
            <StyledTableCell align="center">Статус</StyledTableCell>
            <StyledTableCell align="center">Дата</StyledTableCell>
            <StyledTableCell align="center">Исполнитель</StyledTableCell>
            <StyledTableCell align="center">Стоимость</StyledTableCell>
            <StyledTableCell align="center">Документы</StyledTableCell>
            <StyledTableCell align="center">Оплата</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {order.document.map((row) => (
              <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="left">{row.executor}</StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left">
                <a href={row.files} target="_blank" rel="noopener noreferrer">См. файлы</a>
                {/* {row.files} */}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {(row.payment === 'Не оплачено') ? (

                    <BootstrapButton onClick={() => {setPrice(row.price), setOpen(true), setId(row.id)}}>Оплатить</BootstrapButton>
                    ) : (
                      <span>Оплачено</span>
                    )
              }
              </StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Dialog open={open} onClose={() => {setOpen(false)}}>
      <DialogContent>
        <Stripe pay={price} id={id} message={message} setMessage={setMessage}/>
      </DialogContent>
    </Dialog>
              </>
  );
}


