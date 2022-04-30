import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



export default function BasicSelect() {
    const [Blood, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Your's Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            defaultValue="Nattapong"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            defaultValue="Bunchokying"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Birthday"
            name="Birthday"
            label="Birthday (DD/MM/YY)"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="Weight"
            name="Wight"
            label="Weight KG"
            defaultValue="85"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="Height"
            name="Height"
            label="Height CM"
            defaultValue="180"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="Sex"
            name="Sex"
            label="Sex"
            defaultValue="Male"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Phone Number"
            name="Phone Number"
            label="Phone Number"
            defaultValue="0887827071"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Blood</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={Blood}
        label="Blood"
        onChange={handleChange}
        >
        <MenuItem value={10}>O+</MenuItem>
        <MenuItem value={20}>O-</MenuItem>
        <MenuItem value={30}>B+</MenuItem>
        <MenuItem value={40}>B-</MenuItem>
        <MenuItem value={50}>A+</MenuItem>
        <MenuItem value={60}>A-</MenuItem>
        <MenuItem value={70}>AB-</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Address"
            name="Address"
            label="Address"
            defaultValue="s6230613032@phuket.psu.ac.th"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            defaultValue="Phuket"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            defaultValue="1/22 The best phuke"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            defaultValue="83000"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            defaultValue="Thailand"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
        <Button variant="contained" color="warning" size="medium">Edit</Button>
        
        </Grid>
        <Grid item xs={12} sm={2}>
        
        <Button variant="contained" color="success" size="medium">SAVE</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}