# 🚀 Guia de Migração: De Estático para Dinâmico com Supabase

Este documento descreve uma estratégia para evoluir o projeto **Guia do Enfermeiro APS** de um aplicativo web estático para uma aplicação dinâmica completa, utilizando uma stack moderna que inclui autenticação de usuários, banco de dados e capacidade de salvar informações personalizadas.

---

## 1. Visão Geral da Nova Arquitetura

O objetivo é transformar a aplicação para que ela possa:
1.  **Autenticar Usuários:** Permitir que enfermeiros criem contas e façam login.
2.  **Persistir Dados:** Salvar informações no banco de dados, como evoluções SOAP personalizadas, medicamentos favoritos ou anotações.
3.  **Manter a Performance:** Continuar oferecendo uma experiência de usuário rápida e fluida.

Para isso, propomos uma mudança da arquitetura puramente client-side para um modelo **Jamstack com um Backend como Serviço (BaaS)**.

### Nova Stack Proposta

- **Frontend Framework:** **Next.js (React)**. É um framework robusto que oferece o melhor dos dois mundos: pode gerar páginas estáticas (como a atual) para conteúdo público e renderizar páginas dinamicamente no servidor ou cliente para conteúdo protegido por login. Ele simplifica o roteamento, a busca de dados e a organização do código.

- **Backend e Banco de Dados:** **Supabase**. Servirá como nosso backend completo, fornecendo:
    - **Banco de Dados PostgreSQL:** Um banco de dados relacional poderoso e confiável.
    - **Autenticação:** Gerenciamento de usuários (login, cadastro, recuperação de senha) pronto para uso.
    - **APIs Automáticas:** Cria automaticamente APIs RESTful e em tempo real para interagir com o banco de dados.
    - **Armazenamento (Storage):** Para salvar arquivos, se necessário no futuro.

- **Estilização:** **Manter o CSS Vanilla**. Sua estrutura de CSS atual é leve e eficiente. Ela pode ser facilmente integrada a um projeto Next.js como um arquivo de estilo global, sem a necessidade de adotar um novo framework de CSS.

- **Hospedagem:** **Vercel** ou **Netlify**. Ambas as plataformas são otimizadas para projetos Next.js, oferecem integração contínua com o GitHub e possuem planos gratuitos excelentes que se conectam perfeitamente ao Supabase.

### Vantagens da Nova Arquitetura

- **Escalabilidade:** O Supabase e a Vercel/Netlify são construídos para escalar. O limite de "requisições simultâneas" passa a ser gerenciado por eles, que lidam com milhares de conexões em seus planos gratuitos.
- **Segurança:** O Supabase gerencia a autenticação e as políticas de acesso ao banco de dados (Row Level Security), garantindo que um usuário só possa ver e modificar seus próprios dados.
- **Experiência do Desenvolvedor:** Next.js e Supabase formam uma dupla com excelente documentação e uma comunidade ativa, facilitando o desenvolvimento.
- **Custo-Benefício:** A combinação do plano gratuito da Vercel/Netlify com o do Supabase permite construir e hospedar a aplicação sem custos iniciais.

---

## 2. Estrutura do Projeto com Next.js

A estrutura de arquivos se tornará mais modular e organizada.

```plaintext
/
├── components/              # Componentes reutilizáveis (Ex: Card, Button, Header)
│   ├── prescricoes/
│   │   └── MedCard.js
│   └── layout/
│       └── Sidebar.js
├── pages/                   # Rotas da aplicação
│   ├── _app.js              # Layout principal da aplicação
│   ├── api/                 # Funções de API (se necessário)
│   ├── auth/
│   │   ├── login.js         # Página de login
│   │   └── signup.js        # Página de cadastro
│   ├── prescricoes.js       # Antiga "Aba de Prescrições"
│   ├── vacinas.js           # Antiga "Aba de Vacinas"
│   └── evolucoes.js         # Antiga "Aba de Evoluções"
├── public/                  # Arquivos estáticos (favicon, imagens)
│   └── favicon.svg
├── styles/                  # Arquivos de CSS
│   └── globals.css          # Seu style.css atual viria para cá
├── lib/                     # Funções auxiliares, como o client do Supabase
│   └── supabaseClient.js
├── .env.local               # Chaves de API e segredos (NÃO vai para o Git)
└── package.json             # Dependências do projeto (Next, React, Supabase)
```

---

## 3. Plano de Migração Passo a Passo

### Passo 1: Configuração do Ambiente

1.  **Criar Projeto Next.js:** Inicie um novo projeto com `npx create-next-app@latest guia-enfermeiro-supabase`.
2.  **Criar Projeto no Supabase:**
    - Crie uma conta gratuita em supabase.com.
    - Crie um novo projeto.
    - Guarde a **URL do Projeto** e a chave de API **`anon (public)`**.
3.  **Instalar Supabase Client:** No terminal do seu projeto Next.js, rode `npm install @supabase/supabase-js`.
4.  **Configurar Variáveis de Ambiente:**
    - Crie um arquivo `.env.local` na raiz do projeto.
    - Adicione suas chaves do Supabase:
      ```
      NEXT_PUBLIC_SUPABASE_URL=URL_DO_SEU_PROJETO_SUPABASE
      NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_ANON_PUBLIC
      ```

### Passo 2: Migração da UI e Dados Estáticos

1.  **Mover CSS:** Copie o conteúdo do seu `style.css` para `styles/globals.css` no projeto Next.js. Importe este arquivo em `pages/_app.js`.
2.  **Recriar Layout:** Transforme o `header` e a navegação por abas em componentes React e os utilize no arquivo `pages/_app.js` para que apareçam em todas as páginas.
3.  **Migrar Dados:** Os arrays `MEDS`, `CATS`, `VACINAS`, etc., podem inicialmente continuar como constantes dentro do código JavaScript, sendo importados pelos componentes que os utilizam. No futuro, eles também podem ser movidos para tabelas no Supabase.
4.  **Converter Páginas:** Converta cada "view" (`#view-meds`, `#view-vacinas`) em uma página Next.js (ex: `prescricoes.js`, `vacinas.js`). A lógica de filtragem e renderização de `main.js` será reescrita em React dentro desses componentes de página.

### Passo 3: Implementar Autenticação

1.  **Criar Páginas de Auth:** Crie as páginas `pages/auth/login.js` e `pages/auth/signup.js` com formulários de email e senha.
2.  **Usar Supabase Auth:** Utilize as funções do client do Supabase para registrar e logar usuários.
    ```javascript
    // Exemplo de função de login
    import { supabase } from '../lib/supabaseClient';

    async function handleLogin(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      // Se não houver erro, o usuário está logado e será redirecionado.
    }
    ```
3.  **Proteger Rotas:** Use o `useUser` hook do Supabase para verificar se um usuário está logado. Se não estiver, redirecione-o para a página de login. Isso garante que apenas usuários autenticados possam acessar as ferramentas principais.

### Passo 4: Modelar e Usar o Banco de Dados

1.  **Criar Tabelas no Supabase:**
    - Use a interface gráfica do Supabase para criar tabelas. Um bom começo seria uma tabela `evolucoes`:
      - `id` (uuid, chave primária)
      - `user_id` (uuid, referência ao usuário que a criou)
      - `created_at` (timestamp)
      - `titulo` (text)
      - `subjetivo` (text)
      - `objetivo` (text)
      - `avaliacao` (text)
      - `plano` (text)
2.  **Ativar Row Level Security (RLS):** Esta é a parte mais importante para a segurança.
    - Vá para a seção "Authentication" -> "Policies" da sua tabela.
    - Crie políticas que permitam a um usuário apenas ler, criar, atualizar e deletar as evoluções que pertencem a ele (`user_id = auth.uid()`).
3.  **Interagir com o Banco de Dados:**
    - Na sua página de evoluções, em vez de usar o array `EVOLUCOES`, você fará uma chamada ao Supabase para buscar as evoluções do usuário logado.
    - Ao salvar uma nova evolução, você usará o método `supabase.from('evolucoes').insert(...)`.

```javascript
// Exemplo de como buscar evoluções do usuário logado
import { supabase } from '../lib/supabaseClient';

async function fetchUserEvolucoes() {
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    const { data, error } = await supabase
      .from('evolucoes')
      .select('*')
      .eq('user_id', user.id); // Graças à RLS, isso já é seguro
    return data;
  }
}
```

Seguindo este guia, você transformará seu projeto em uma aplicação web moderna, segura e escalável, pronta para oferecer funcionalidades personalizadas e valiosas para os enfermeiros.