import axios from 'axios';
import { Locations, Contacts, ContactBase, Contact } from './types'
import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase/types'

const supabaseUrl = 'https://zpccgadpnkevosjdgzby.supabase.co'

// this is the variable system available in vite 
let supabaseKey = import.meta.env.VITE_SUPABASE_KEY ?? 'no-key-set'
// this process variable is only available in prod (vercel)
supabaseKey = process.env.VITE_SUPABASE_KEY ?? supabaseKey

const supabase = createClient<Database>(supabaseUrl, supabaseKey)

// TODO #rm 
// const simulateSlowApiCall = (promise) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => promise.then(resolve).catch(reject), 2000)
//   })
// }

//Locations
export const getLocations = async (): Promise<Locations> => {
  // TODO #rm
  // const response = await axios.get('http://localhost:3004/locations')
  // TODO #rm
  // console.log('response', response)
  // console.log('data', response.data)
  // return response.data 
  let { data: locations, error } = await supabase
    .from('locations')
    .select('*')
  
  console.log('location ', locations)

  return locations as Locations
} 


// TODO #rm 
// export const getLocations = () => simulateSlowApiCall(axios.get('http://localhost:3004/locations'));


// Contacts

// TODO -- refactor redundant type 
export const getContacts = async (): Promise<Contacts> => {

  let { data: contacts, error } = await supabase
    .from('contacts')
    .select('*')

  return contacts as Contacts
} 

// TODO #fix
export const saveContact = async (contact: ContactBase): Promise<Contacts | null> => {

  const { data, error } = await supabase
    .from('contacts')
    .insert([
      { ...contact },
    ])
  
  // TODO - figure out what comes back and typescript for it
  return data as Contacts | null

}



// TODO #fix
// export const updateContact = (contact) => simulateSlowApiCall(axios.put(`http://localhost:3004/contacts/${contact.id}`, contact));

// TODO #fix
export const deleteContact = async (contact: Contact) => { 

  console.log('contact ', contact)
  
  const { data, error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', contact.id)

    // TODO - figure out what comes back and typescript for it
    return data as Contact | null

}