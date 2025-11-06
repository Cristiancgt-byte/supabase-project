// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://upkhiwqkckfxyugyfthy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwa2hpd3FrY2tmeHl1Z3lmdGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDU3MzAsImV4cCI6MjA3ODAyMTczMH0.hYRAbSvUsT1A-lL1pO52C5iGT5hOSTrLppB50DYsY0U';
export const supabase = createClient(supabaseUrl, supabaseKey);