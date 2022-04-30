import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       <AddCircleOutlineRoundedIcon/> Add Class
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={10}>
          <TextField
            required
            id="Classname"
            name="Classname"
            label="Classname"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="Type"
            name="Type"
            label="Type"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Time"
            name="Time"
            label="Time"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Tariner"
            name="Tariner"
            label="Tariner"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        <Link underline="none" href="/schedule"><Button variant="contained">Add class</Button></Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}