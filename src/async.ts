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


//Locations
export const getLocations = async (): Promise<Locations> => {
  let { data: locations, error } = await supabase
    .from('locations')
    .select('*')
  
  console.log('location ', locations)

  return locations as Locations
} 


// Contacts
export const getContacts = async () => {

  let { data: contacts, error } = await supabase
    .from('contacts')
    .select('*')

  return contacts as Contacts
} 

// Save/Add contacts
export const saveContact = async (contact: ContactBase) => {

  const { data, error } = await supabase
    .from('contacts')
    .insert([
      { ...contact },
    ])
    .select()
  
  return data as Contact | null

}

// Update/Edit contact
export const updateContact = async (contact: Contact) => {

  const { data, error } = await supabase
    .from('contacts')
    .update({ ...contact })
    .eq('id', contact.id)
    .select() 

  return data as Contact | null

}

// Delete contact
export const deleteContact = async (contact: Contact) => { 

  console.log('contact ', contact)
  
  const { data, error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', contact.id)
    .select()

    return data as Contact | null

}