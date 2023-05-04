import { useEffect, useState } from 'react';
import { AppBar, Button, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { getContacts, getLocations } from './async';

function App() {
  const [contacts, setContacts] = useState([]);
  const [locations, setLocations] = useState([]);

  const refetch = false;

  useEffect(() => {
    getContacts().then((res) => {
      setContacts(res.data);
    });

    getLocations().then((res) => {
      setLocations(res.data);
    });
  }, [refetch]);

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' aria-label='menu'>
            <Menu />
          </IconButton>
          <Typography variant='h6'>Contacts</Typography>
          <Button color='inherit'>New Contact</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        {contacts.map((contact) => (
          <Grid key={contact.id} item xs={12}>
            <Paper>{`${contact.firstName} ${contact.lastName} - ${
              locations.length ? locations.find((loc) => loc.id === contact.locationId).name : ''
            }`}</Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
