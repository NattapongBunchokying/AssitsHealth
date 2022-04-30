import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Link from '@mui/material/Link';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIndIcon />
      </ListItemIcon>
     <Link underline="none" href="/profile"><ListItemText secondary="Profile" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ContactPageIcon />
      </ListItemIcon>
      <Link underline="none" href="/admin"><ListItemText secondary="Admin" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SupervisorAccountIcon />
      </ListItemIcon>
      <Link underline="none" href="/member"><ListItemText secondary="Member" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DateRangeIcon />
      </ListItemIcon>
      <Link  underline="none" href="/schedule"><ListItemText secondary="Schedule" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccessibilityNewIcon />
      </ListItemIcon>
      <ListItemText primary="New posture" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);