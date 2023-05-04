export interface Contact {
    id: number,
    firstName: string,
    lastName: string,
    locationId: number,
    phone: string, 
}

export type Contacts = Contact[]

export interface Location {
    id: number,
    name: string
}

export type Locations = Location[]