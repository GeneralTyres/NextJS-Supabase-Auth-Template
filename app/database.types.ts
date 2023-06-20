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
      checkpoints: {
        Row: {
          created_at: string
          id: string
          name: string
          routeId: string
          routeOrder: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          name: string
          routeId: string
          routeOrder: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          routeId?: string
          routeOrder?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "checkpoints_routeId_fkey"
            columns: ["routeId"]
            referencedRelation: "routes"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      routes: {
        Row: {
          created_at: string
          id: string
          name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      tripRequest: {
        Row: {
          accepted: boolean
          createdAt: string
          departurePointId: string
          destinationPointId: string
          id: string
          open: boolean
          pickUp: boolean
          pickUpAddress: string
          updatedAt: string
          userId: string
        }
        Insert: {
          accepted?: boolean
          createdAt?: string
          departurePointId: string
          destinationPointId: string
          id: string
          open?: boolean
          pickUp?: boolean
          pickUpAddress: string
          updatedAt?: string
          userId: string
        }
        Update: {
          accepted?: boolean
          createdAt?: string
          departurePointId?: string
          destinationPointId?: string
          id?: string
          open?: boolean
          pickUp?: boolean
          pickUpAddress?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "tripRequest_departurePointId_fkey"
            columns: ["departurePointId"]
            referencedRelation: "checkpoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tripRequest_destinationPointId_fkey"
            columns: ["destinationPointId"]
            referencedRelation: "checkpoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tripRequest_userId_fkey"
            columns: ["userId"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      trips: {
        Row: {
          completed: boolean
          createdAt: string
          departureDateTime: string
          depaturePointId: string
          destinationPointId: string
          id: string
          luggageSize: Database["public"]["Enums"]["luggage_size"]
          price: number
          spaceAvaliable: number
          updatedAt: string
        }
        Insert: {
          completed?: boolean
          createdAt?: string
          departureDateTime: string
          depaturePointId: string
          destinationPointId: string
          id: string
          luggageSize?: Database["public"]["Enums"]["luggage_size"]
          price?: number
          spaceAvaliable: number
          updatedAt?: string
        }
        Update: {
          completed?: boolean
          createdAt?: string
          departureDateTime?: string
          depaturePointId?: string
          destinationPointId?: string
          id?: string
          luggageSize?: Database["public"]["Enums"]["luggage_size"]
          price?: number
          spaceAvaliable?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "trips_depaturePointId_fkey"
            columns: ["depaturePointId"]
            referencedRelation: "checkpoints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trips_destinationPointId_fkey"
            columns: ["destinationPointId"]
            referencedRelation: "checkpoints"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      luggage_size: "small" | "medium" | "large" | "extra_large"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
