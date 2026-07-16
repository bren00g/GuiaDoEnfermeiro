# Arquitetura Next.js + Supabase

Esta migracao cria uma base moderna sem remover a versao estatica original.

## Stack

- Next.js com App Router
- Supabase Auth e PostgreSQL
- RLS para isolamento de dados por usuario
- CSS vanilla em `styles/globals.css`
- Hospedagem prevista na Vercel

## Rotas

- `/`: painel inicial da nova arquitetura
- `/prescricoes`: entrada publica para migracao das prescricoes
- `/vacinas`: entrada publica para calendario PNI
- `/calculadora`: entrada publica para risco gestacional
- `/legacy`: versao estatica original preservada
- `/auth/login`: login
- `/auth/signup`: cadastro
- `/evolucoes`: CRUD protegido de evolucoes SOAP
- `/favoritos`: favoritos e medicamentos personalizados

## Configuracao

1. Crie um projeto no Supabase.
2. Execute `supabase/schema.sql` no SQL Editor.
3. Copie `.env.example` para `.env.local`.
4. Preencha:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

5. Instale as dependencias e rode o projeto:

```bash
npm install
npm run dev
```

## Modelo de seguranca

As tabelas `evolucoes`, `favoritos` e `custom_medicamentos` usam `user_id default auth.uid()`.
As policies RLS permitem `select`, `insert`, `update` e `delete` apenas quando `auth.uid() = user_id`.

## Proximas fases

- Extrair os dados de medicamentos, vacinas e calculadora do `main.js` legado para modulos versionados.
- Corrigir encoding dos textos herdados antes da migracao completa dos datasets.
- Adicionar testes para a pontuacao da calculadora gestacional.
- Criar rotinas de exportacao/backup de evolucoes.
