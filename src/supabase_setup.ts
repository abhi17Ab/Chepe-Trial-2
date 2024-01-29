import { createClient } from "@supabase/supabase-js";
import { Database } from "./models/supabase";

// Replace placeholders with your actual Supabase credentials
const supabaseUrl = "https://hoxgwelczfqetztuklcv.supabase.co";
const supabaseApIKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhveGd3ZWxjemZxZXR6dHVrbGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MzcyODYsImV4cCI6MjAyMjExMzI4Nn0.UOyh4dJBTOECTSd0Oy2vDvkdhbTYG8_MFzJbLmvBMGM";

export const supabase = createClient<Database>(supabaseUrl, supabaseApIKey);
