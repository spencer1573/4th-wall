import axios from 'axios';
import { Locations, Contacts } from './types'

// TODO #rm 
// const simulateSlowApiCall = (promise) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => promise.then(resolve).catch(reject), 2000)
//   })
// }

//Locations
export const getLocations = async (): Promise<Locations> => {
  const response = await axios.get('http://localhost:3004/locations')
  // TODO #rm
  // console.log('response', response)
  // console.log('data', response.data)
  return response.data 
} 


// TODO #rm 
// export const getLocations = () => simulateSlowApiCall(axios.get('http://localhost:3004/locations'));


// Contacts

// TODO #fix
export const getContacts = async (): Promise<Contacts> => {
  const response = await axios.get('http://localhost:3004/contacts')
  // TODO #rm
  // console.log('response', response)
  // console.log('data', response.data)
  return response.data 
} 

// TODO #fix
// export const saveContact = (contact) => simulateSlowApiCall(axios.post('http://localhost:3004/contacts', contact));

// TODO #fix
// export const updateContact = (contact) => simulateSlowApiCall(axios.put(`http://localhost:3004/contacts/${contact.id}`, contact));

// TODO #fix
// export const deleteContact = (contact) => simulateSlowApiCall(axios.delete(`http://localhost:3004/contacts/${contact.id}`, contact));