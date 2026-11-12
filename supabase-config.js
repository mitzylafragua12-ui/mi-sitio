// Configuración de conexión a Supabase (Usa solo la clave anon public)
const SUPABASE_URL = 'https://deekhdvvmbivnethldss.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'sb_publishable_aIGr1dWe7paFn-79skNNag_qWfJ-6-p';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
