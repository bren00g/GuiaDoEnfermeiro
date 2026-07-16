create table if not exists public.medicamentos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  nome text not null,
  categoria text not null,
  quantidade numeric(12,3),
  unidade text not null,
  apresentacao text not null,
  indicacao text not null,
  respaldo_legal text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.medicamentos enable row level security;

create policy "medicamentos_select_own"
on public.medicamentos for select
using (auth.uid() = user_id);

create policy "medicamentos_insert_own"
on public.medicamentos for insert
with check (auth.uid() = user_id);

create policy "medicamentos_update_own"
on public.medicamentos for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "medicamentos_delete_own"
on public.medicamentos for delete
using (auth.uid() = user_id);

create index if not exists medicamentos_user_created_idx
on public.medicamentos(user_id, created_at desc);
