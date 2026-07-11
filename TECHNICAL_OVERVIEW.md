# 📄 Visão Geral Técnica — Guia do Enfermeiro APS

Este documento descreve a arquitetura, as tecnologias (stack) e as características de performance do projeto **Guia do Enfermeiro APS**.

---

## 🏛️ Arquitetura e Filosofia

O projeto foi concebido como um **Aplicativo Web Estático (Static Web App)**. A principal característica dessa abordagem é que todos os arquivos (HTML, CSS, JavaScript e imagens) são pré-renderizados e entregues ao navegador do cliente exatamente como estão no servidor.

Toda a lógica, interatividade e manipulação de dados ocorrem **inteiramente no lado do cliente (client-side)**, dentro do navegador do usuário. Não há um backend ou banco de dados no servidor com o qual o aplicativo precise se comunicar após o carregamento inicial.

**Vantagens desta arquitetura:**
- **Performance Extrema:** O carregamento é quase instantâneo, pois não há processamento no servidor ou consultas a bancos de dados para renderizar a página.
- **Custo Zero de Hospedagem:** Pode ser hospedado em qualquer serviço de páginas estáticas, como GitHub Pages, Netlify, Vercel ou a própria plataforma Genspark, sem custos de servidor.
- **Segurança Aumentada:** A ausência de um backend reduz drasticamente a superfície de ataque a vulnerabilidades comuns (ex: SQL Injection, XSS no servidor).
- **Confiabilidade e Escalabilidade:** A aplicação é imensamente resiliente. Uma vez que os arquivos são carregados, ela funciona de forma autônoma.

---

## 🥞 Stack de Tecnologias

A stack do projeto é minimalista e focada em tecnologias web nativas, garantindo leveza e máxima compatibilidade.

- **HTML5:** Utilizado para a estruturação semântica de todo o conteúdo da aplicação.
- **CSS3 (Vanilla):** Responsável por toda a estilização e responsividade (mobile-first). Utiliza variáveis CSS (`:root`) para um tema consistente e de fácil manutenção. Nenhuma biblioteca ou framework (como Bootstrap ou Tailwind) é utilizada.
- **JavaScript (Vanilla ES6+):** O coração da aplicação. Todo o dinamismo, como a filtragem de medicamentos, o cálculo de risco gestacional, a troca de abas e a lógica dos editores de texto, é implementado com JavaScript puro, sem frameworks ou bibliotecas (como React, Vue, Angular ou jQuery).

### Dependências Externas

A única dependência externa do projeto é:
- **Google Fonts:** Para carregar a família de fontes "Poppins" via CDN, garantindo uma tipografia consistente e de alta qualidade.

---

## 🗂️ Estrutura de Arquivos

A estrutura é simples e direta, refletindo a natureza da aplicação.

```plaintext
/
├── css/
│   └── style.css    # Folha de estilos principal, com todo o CSS da aplicação.
├── js/
│   └── main.js      # Arquivo único com toda a lógica, dados e interatividade.
├── index.html       # Ponto de entrada único. Contém a estrutura de todas as telas.
├── favicon.svg      # Ícone vetorial da aplicação.
├── README.md        # Documentação funcional do projeto.
└── TECHNICAL_OVERVIEW.md # Este arquivo.
```

---

## 🚀 Performance e Requisições Simultâneas

A questão de "requisições simultâneas" se aplica de forma diferente a um site estático.

**Não há um limite de "requisições simultâneas" no sentido tradicional de um backend.** Como não há um servidor de aplicação processando código ou acessando um banco de dados por usuário, o gargalo não está na capacidade de processamento da aplicação em si.

O limite é transferido para a **capacidade do serviço de hospedagem (CDN - Content Delivery Network) de entregar arquivos estáticos**. Plataformas modernas (como as mencionadas acima) são projetadas para servir milhões de requisições de arquivos por segundo, distribuídas globalmente.

Em termos práticos, a aplicação **suporta um número virtualmente ilimitado de usuários simultâneos**. Cada usuário simplesmente baixa uma cópia dos arquivos (`.html`, `.css`, `.js`) e a executa em sua própria máquina (no navegador). A experiência de um usuário não é afetada pela presença de milhares de outros.

A performance é consistentemente alta e depende apenas da velocidade da conexão do usuário para baixar os arquivos iniciais, que são otimizados para serem pequenos e leves.