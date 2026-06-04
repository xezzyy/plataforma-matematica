import { createClient } from "@supabase/supabase-js";

const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(url, key);

// ---- Auth helpers ----
export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function signInWithEmail(email, password) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signUpWithEmail(email, password) {
  return supabase.auth.signUp({ email, password });
}

export async function signOut() {
  return supabase.auth.signOut();
}

// ---- Progresso helpers ----
export async function carregarProgresso(userId) {
  const { data, error } = await supabase
    .from("progresso")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function guardarProgresso(userId, diasFeitos, exFeitos, licoesFeitas) {
  const { error } = await supabase
    .from("progresso")
    .upsert(
      { user_id: userId, dias_feitos: diasFeitos, ex_feitos: exFeitos, licoes: licoesFeitas },
      { onConflict: "user_id" }
    );
  if (error) throw error;
}
