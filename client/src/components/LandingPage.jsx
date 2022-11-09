import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import Divider from '@mui/material/Divider';

import ExampleComponent from './ExampleComponent';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  ></Box>
);
const animals = [
  { id: 1, animal: 'Dog' },
  { id: 2, animal: 'Bird' },
  { id: 3, animal: 'Cat' },
  { id: 4, animal: 'Mouse' },
  { id: 5, animal: 'Horse' },
];

export default function LandingPage() {
  const demail = 'abc@gmail.com';
  const props = { email: 'Pallav', lastName: 'Hegde' };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <nav aria-label="secondary mailbox folders">
          <List>
            {animals.map((item) => (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.animal} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
          </List>
        </nav>
        <ExampleComponent {...props}></ExampleComponent>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
