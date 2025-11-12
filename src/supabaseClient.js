import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://grtdzxdfnrrynwzvnwfm.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdydGR6eGRmbnJyeW53enZud2ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjgyMzgsImV4cCI6MjA3NzMwNDIzOH0.JgEZcTYjFEDBxYKtkOFQp-mMpSte3CJb_3iaOV1N9_s";
export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
