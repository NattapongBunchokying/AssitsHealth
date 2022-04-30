import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, lastname, status, blood, weight, height, tel, address ) {
  return {id, name, lastname, status, blood, weight, height, tel, address };
}

const rows = [
  createData(
    0,
    'Jirapong',
    'Thotsakan',
    'Standard',
    'O+',
    '80',
    '180',
    '0828479173',
    'HKT'
  ),
  createData(
    1,
    'Arthiyaporn',
    'Sawedsuthiphan',
    'Standard',
    'A+',
    '50',
    '165',
    '0828103973',
    'HKT'
  ),
  createData(
    2, 
    'Naphat',
    'Sungnoo',
    'Standard',
    'B+',
    '75',
    '185',
    '0294475173',
    'HKT'
    ),
  createData(
    3,
    'Phu',
    'Wara',
    'Standard',
    'AB+',
    '100',
    '170',
    '0828493843',
    'HKT'
  ),
  createData(
    4,
    'Doungjai',
    'Chaikangkan',
    'Standard',
    'O+',
    '67',
    '174',
    '0828492733',
    'HKT'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Members</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Lastname</b></TableCell>
            <TableCell><b>Status</b></TableCell>
            <TableCell><b>Blood</b></TableCell>
            <TableCell><b>Weight</b></TableCell>
            <TableCell><b>Height</b></TableCell>
            <TableCell><b>Tel</b></TableCell>
            <TableCell align="right"><b>Address</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.lastname}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.blood}</TableCell>
              <TableCell>{row.weight}</TableCell>
              <TableCell>{row.height}</TableCell>
              <TableCell>{row.tel}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
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