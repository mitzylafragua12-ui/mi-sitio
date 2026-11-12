// Configuración de conexión a Supabase (Usa solo la clave anon public)
const SUPABASE_URL = 'https://deekhdvvmbivnethldss.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'sb_publishable_itAjJIoPQ81vbxWuT8jV8g_hlhQTZkW';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
