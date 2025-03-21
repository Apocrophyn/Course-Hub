import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
      enrollments: {
        Row: {
          id: string
          user_id: string
          course_id: string
          enrolled_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          enrolled_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          enrolled_at?: string
        }
      }
      course_progress: {
        Row: {
          id: string
          user_id: string
          course_id: string
          progress: number
          last_accessed: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          progress?: number
          last_accessed?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          progress?: number
          last_accessed?: string
        }
      }
    }
  }
} 