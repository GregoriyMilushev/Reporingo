import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cvslwgbkbcfeenlfpaox.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2c2x3Z2JrYmNmZWVubGZwYW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU4NDEzNDgsImV4cCI6MTk5MTQxNzM0OH0.754bMYvhrXFIcr5CpASPAaZCfgPHot_klA-XbwOy6kg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})