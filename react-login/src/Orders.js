import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'Nattpong',
    'Bunchokying',
    'CEO',
    '0887827071',
    'BKK',
  ),
  createData(
    1,
    'Ronnakron',
    'Sanyee',
    'Manager',
    '0638926512',
    'HKT',
  ),
  createData(
    2, 
    'Teerawut', 
    'Sayzim', 
    'Manager', 
    '0815972956', 
    'HKT'
    ),
  createData(
    3,
    'Armarin',
    'kongtong',
    'Manager',
    '0997253867',
    'HKT',
  ),
  createData(
    4,
    'Chongtichaluk',
    'Naedee',
    'Tainer',
    '03368469826',
    'HKT',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Admin</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Lastname</b></TableCell>
            <TableCell><b>Position</b></TableCell>
            <TableCell><b>Tel</b></TableCell>
            <TableCell align="right"><b>Address</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}