import { useEffect, useState } from 'react';
// TODO #rm 
// import { AppBar, Button, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
// import { Menu } from '@mui/icons-material';
import { getContacts, getLocations } from './async';
import { Contacts, Locations, Contact, Location } from './types'

function App() {
  const [contacts, setContacts] = useState<Contacts | undefined>([]);
  const [locations, setLocations] = useState<Locations | undefined >([]);

  const refetch = false;

  // TODO #rm/use
  // useEffect(async () => {
  //   const contacts: Contacts = await getContacts();
  //   setContacts(contacts);

  //   const locations: Locations = await getLocations();
  //   setLocations(locations);
  // }, [refetch]);

  useEffect(() => {
    // TODO refactor this
    const fetchAndSetData = async () => {
      const contacts: Contacts | undefined = await getContacts();
      setContacts(contacts);

      const locations: Locations | undefined = await getLocations();
      setLocations(locations);
    }
  
    fetchAndSetData()
      .catch(console.error);
  }, [])

  const findLocation = (contact: Contact) => {
    // I know how to use a ternary but i figured this line was getting a litte 
    // long and although its easy to see what is going on
    // i've found being as explicit as possible yeilds
    // best results for everyone

    // TODO # this is a mess and for sure needs 
    // to be refactored
    let name = ''
    let location
    if (locations && locations.length) {
      // locations.find((location) => location.id === contact.locationId).name
      location = location && locations.length ? locations.find((location) => location.id === contact.locationId) : {}
    }
    return location && location.name ? location.name : ''
  }

  return (
    <>
      {/* <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' aria-label='menu'>
            <Menu />
          </IconButton>
          <Typography variant='h6'>Contacts</Typography>
          <Button color='inherit'>New Contact</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        {/* becuase contacts can be undefined added a truthy value here */}
        {/* {contacts && contacts.map((contact) => (
          <Grid key={contact.id} item xs={12}>
            <Paper>{`${contact.firstName} ${contact.lastName} - ${findLocation(contact)}`}</Paper>
          </Grid>
        ))} */}
      {/* </Grid> */}
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  );
}

export default App;
