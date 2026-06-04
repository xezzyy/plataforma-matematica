-- ============================================================
-- Plataforma Matematica — Schema Supabase
-- Cola isto no SQL Editor do teu projeto Supabase e executa
-- ============================================================

-- Tabela de progresso (uma linha por utilizador)
create table if not exists public.progresso (
  id          uuid default gen_random_uuid() primary key,
  user_id     uuid references auth.users(id) on delete cascade not null unique,
  dias_feitos jsonb not null default '{}',
  ex_feitos   jsonb not null default '{}',
  licoes      jsonb not null default '{}',
  updated_at  timestamptz default now() not null
);

-- Row Level Security: cada utilizador só vê o seu próprio progresso
alter table public.progresso enable row level security;

create policy "Utilizador gere o seu progresso"
  on public.progresso
  for all
  to authenticated
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Função auxiliar para atualizar o timestamp automaticamente
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger on_progresso_updated
  before update on public.progresso
  for each row execute procedure public.set_updated_at();
