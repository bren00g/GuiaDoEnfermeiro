# 💰 Análise de Custos: Next.js, Vercel e Supabase

Este documento detalha a perspectiva de custos para a migração do projeto **Guia do Enfermeiro APS** para uma stack dinâmica, conforme descrito no `MIGRATION_GUIDE.md`.

---

## 🎯 Resumo (TL;DR)

Para o escopo atual e futuro previsível do projeto, o custo para desenvolver, hospedar e manter a aplicação será de **R$ 0,00 (zero)**.

Os planos gratuitos da Vercel e do Supabase são mais do que suficientes para suportar milhares de usuários e um volume significativo de dados, tornando a stack extremamente custo-efetiva para iniciar e escalar.

---

##  breakdown dos Custos por Tecnologia

### 1. Next.js (Framework)

- **Custo: R$ 0,00**

Next.js é um framework open-source mantido pela Vercel. Não há nenhum custo de licenciamento ou taxa associada ao seu uso. O "custo" de usar Next.js está na hospedagem da aplicação que ele gera, que é o papel da Vercel.

---

### 2. Vercel (Hospedagem do Frontend)

- **Plano Utilizado: "Hobby"**
- **Custo: R$ 0,00**

A Vercel é a plataforma ideal para hospedar projetos Next.js. O plano gratuito ("Hobby") é extremamente generoso e perfeitamente adequado para o projeto.

**O que o plano gratuito da Vercel inclui?**
- **Largura de Banda (Bandwidth):** **100 GB por mês.**
  - *Perspectiva Real:* Sua aplicação é muito leve. Mesmo com 10.000 usuários acessando o site várias vezes ao mês, o consumo de banda ficaria muito abaixo desse limite. Seriam necessários milhões de pageviews para sequer se aproximar do teto.
- **Builds:** **6.000 minutos por mês.**
  - *Perspectiva Real:* Cada vez que você envia uma atualização para o GitHub, a Vercel "constrói" o site. Um build do seu projeto levaria menos de 1 minuto. Este limite permite que você atualize o site centenas de vezes por dia, todos os dias.
- **Serverless Functions:** **1.000.000 de execuções por mês.**
  - *Perspectiva Real:* No modelo proposto, as chamadas ao banco de dados são feitas diretamente do navegador do cliente para o Supabase, não passando por funções da Vercel. Portanto, este limite provavelmente não será utilizado, deixando uma margem enorme para funcionalidades futuras.
- **Domínios Personalizados:** Suporte completo e gratuito, com certificados SSL automáticos.

**Quando a Vercel passaria a custar algo?**
Apenas se o projeto se tornasse uma empresa com múltiplos desenvolvedores precisando de colaboração em equipe, ou se atingisse uma escala massiva (nível de grande portal de notícias), o que exigiria um upgrade para o plano "Pro" (a partir de $20/mês por usuário). Para um projeto individual ou de pequena equipe, o plano gratuito é, na prática, ilimitado.

---

### 3. Supabase (Backend e Banco de Dados)

- **Plano Utilizado: "Free"**
- **Custo: R$ 0,00**

O Supabase funcionará como seu backend completo. O plano gratuito é projetado para levar projetos da ideia à produção sem custos.

**O que o plano gratuito do Supabase inclui?**
- **Projetos:** Você pode ter até 2 projetos distintos na sua conta.
- **Tamanho do Banco de Dados:** **500 MB.**
  - *Perspectiva Real:* Isso é **enorme** para dados de texto. Uma evolução SOAP completa, com bastante texto, pode ocupar cerca de 2 KB. Com 500 MB, você poderia armazenar aproximadamente **250.000 evoluções completas**. É mais do que suficiente para anos de uso por muitos usuários.
- **Usuários Autenticados:** **50.000 usuários.**
  - *Perspectiva Real:* O limite é autoexplicativo e mais do que suficiente para a comunidade de enfermeiros que o app visa atender.
- **Requisições de API:** **50.000 por mês.**
  - *Perspectiva Real:* Este é o limite mais "sensível". Cada vez que um usuário salva uma evolução, carrega a lista de evoluções ou realiza uma ação que lê/escreve no banco, uma requisição é consumida. 50.000 requisições permitem, por exemplo, que **500 usuários realizem 100 ações cada um durante o mês**. É um limite inicial muito bom.
- **Armazenamento de Arquivos (Storage):** **1 GB.**
  - *Perspectiva Real:* Não será usado inicialmente, mas permite que no futuro você possa adicionar funcionalidades como upload de fotos de perfil ou anexos em evoluções.

**O que acontece se exceder os limites do Supabase?**
Diferente de outros serviços que cobram automaticamente, o Supabase tem uma abordagem amigável:
- Se você exceder os limites, seu projeto será **pausado temporariamente** até o início do próximo ciclo mensal. Você receberá alertas por e-mail antes que isso aconteça.
- Isso lhe dá total controle, evitando surpresas na fatura. Para continuar usando, você pode otimizar o uso da API ou fazer o upgrade para o plano "Pro" (a partir de $25/mês), que oferece limites muito maiores e um modelo de pagamento por uso.

---

## Conclusão

A arquitetura com **Next.js + Vercel + Supabase** é a escolha ideal para um projeto que precisa evoluir de estático para dinâmico com um orçamento de R$ 0. Os planos gratuitos são robustos, alinhados com as melhores práticas de desenvolvimento e oferecem um caminho claro e sem surpresas para escalar, caso o "Guia do Enfermeiro APS" se torne um sucesso estrondoso.

Você pode construir, lançar e manter a aplicação para uma base considerável de usuários **sem nenhum custo direto**, focando apenas no desenvolvimento e na melhoria das funcionalidades.