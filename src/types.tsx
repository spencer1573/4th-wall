export interface ContactBase {
    firstName: string,
    lastName: string,
    locationId: number,
    phone: string, 
}

export type ContactBases = ContactBases[]

// I'm not sure htis is the best 
// but its one way to do it and still
// have specificity
export interface Contact extends ContactBase {
    id: number,
}

export type Contacts = Contact[]

export interface Location {
    id: number,
    name: string
}

export type Locations = Location[]