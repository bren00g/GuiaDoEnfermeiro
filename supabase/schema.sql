-- Guia do Enfermeiro APS - schema inicial Supabase
-- Execute este arquivo no SQL Editor do Supabase.

create extension if not exists pgcrypto;

create table if not exists public.evolucoes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  title text not null,
  category text not null default 'SOAP',
  content text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.favoritos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  item_type text not null,
  item_ref text,
  title text not null,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.custom_medicamentos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  nome text not null,
  concentracao text,
  apresentacao text,
  indicacao text,
  protocolo text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.evolucoes enable row level security;
alter table public.favoritos enable row level security;
alter table public.custom_medicamentos enable row level security;

create policy "evolucoes_select_own"
on public.evolucoes for select
using (auth.uid() = user_id);

create policy "evolucoes_insert_own"
on public.evolucoes for insert
with check (auth.uid() = user_id);

create policy "evolucoes_update_own"
on public.evolucoes for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "evolucoes_delete_own"
on public.evolucoes for delete
using (auth.uid() = user_id);

create policy "favoritos_select_own"
on public.favoritos for select
using (auth.uid() = user_id);

create policy "favoritos_insert_own"
on public.favoritos for insert
with check (auth.uid() = user_id);

create policy "favoritos_update_own"
on public.favoritos for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "favoritos_delete_own"
on public.favoritos for delete
using (auth.uid() = user_id);

create policy "custom_medicamentos_select_own"
on public.custom_medicamentos for select
using (auth.uid() = user_id);

create policy "custom_medicamentos_insert_own"
on public.custom_medicamentos for insert
with check (auth.uid() = user_id);

create policy "custom_medicamentos_update_own"
on public.custom_medicamentos for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "custom_medicamentos_delete_own"
on public.custom_medicamentos for delete
using (auth.uid() = user_id);

create index if not exists evolucoes_user_updated_idx
on public.evolucoes(user_id, updated_at desc);

create index if not exists favoritos_user_created_idx
on public.favoritos(user_id, created_at desc);

create index if not exists custom_medicamentos_user_updated_idx
on public.custom_medicamentos(user_id, updated_at desc);
