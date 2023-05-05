export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          firstName: string
          id: number
          lastName: string
          locationId: number
          phone: string
        }
        Insert: {
          firstName: string
          id?: number
          lastName: string
          locationId: number
          phone: string
        }
        Update: {
          firstName?: string
          id?: number
          lastName?: string
          locationId?: number
          phone?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
