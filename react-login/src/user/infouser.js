import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import LineWeightOutlinedIcon from '@mui/icons-material/LineWeightOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title><h1>Profile</h1></Title>
      <Typography color="text.secondary" component="p" variant="h5">
      <p><b>Name:</b> Nattapong B.</p>
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 0.5 }}>
      </Typography>
      <Typography color="secondary" component="p" variant="h5">
      <h4><MonitorWeightOutlinedIcon/> Weight: 75 KG </h4>
      </Typography>
      <Typography component="p" variant="h5">
      
      </Typography>
      <Typography color="primary" component="p" variant="h5">
      <p><LineWeightOutlinedIcon/> Height: 180 CM</p>
      </Typography>
    
    </React.Fragment>
  );
}