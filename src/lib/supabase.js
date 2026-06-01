import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://ngeeelhdviwpbffvugep.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nZWVlbGhkdml3cGJmZnZ1Z2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyOTgyMjEsImV4cCI6MjA5NTg3NDIyMX0.Gt1TtBNDh5MdcxU4sQLB-uDo07v5NzANqBiAq4djs_A";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);