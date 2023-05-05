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
    // console.log('locations ', locations)
    console.log('contact ', contact.locationId)
    if (locations && locations.length) {
      // locations.find((location) => location.id === contact.locationId).name
      location = locations && locations.length ? locations.find((location) =>  {
        return location.id === contact.locationId
      }) : {}
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

    <div className="pt-16 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">4th-wall</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of your contacts and important info.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Phone
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Location
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contacts && contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {contact.firstName } {contact.lastName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{contact.phone}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{findLocation(contact)}</td>
                    {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
