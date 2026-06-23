# 🏠 Guia do Enfermeiro APS — Maceió 2026

**Desenvolvido por Breno Gomes** | breno.monteiro@eenf.ufal.br  
_Cuidar · Acolher · Transformar_

---

## 📋 Descrição

Aplicativo web estático para enfermeiros da Atenção Primária à Saúde (APS) de Maceió/AL. Reúne em um único lugar:
- Prescrições de medicamentos com respaldo legal
- Calendário vacinal completo (PNI)
- Calculadora de risco gestacional (Nota Técnica 06/2025 – SESAU/AL)
- Modelos de evolução SOAP com editor Rich Text

---

## ✅ Funcionalidades Implementadas

### 💊 Prescrições
- Lista completa de medicamentos com concentração, apresentação (incluindo vias tópicas), indicação e respaldo legal
- Filtro por categorias: IST, Contracepção, PEP, Saúde da Mulher, Pré-natal, Criança, Tuberculose, Crônicas, Tabagismo, Dengue, **Curativos**, Outros
- Busca em tempo real por nome, concentração ou indicação
- Botão "Copiar para o PEC" com nome + concentração + apresentação + indicação + protocolo
- Medicamentos atualizados incluindo:
  - **Portaria 223/2015 SMS/Maceió** (sinvastatina, salbutamol, espiramicina, papaínas, AGE, alginato, permanganato, etc.)
  - **Nota Técnica 001/2022 CAITS** — ITU em gestantes (cefalexina, amoxicilina+clavulanato)
  - **Nota Técnica 04/2025 CAITS** — Prevenção de pré-eclâmpsia (carbonato de cálcio)
  - Vias tópicas incluídas (metronidazol gel, nistatina creme, aciclovir creme, sulfadiazina de prata, etc.)

### 💉 Calendário Vacinal
- Grupos: Crianças, Adolescentes, Adultos, Gestantes, Idosos
- Timeline visual com todas as vacinas, via de administração, dose e descrição

### 🧮 Calculadora de Risco Gestacional
- Instrumento conforme **Nota Técnica Nº 06/2025 – SESAU/Alagoas**
- 6 grupos de critérios (socioambientais, nutricional, obstétricos, gestação atual, clínicos, intercorrências)
- Pontuação automática em tempo real
- Classificação: ✅ Risco Habitual (≤4) | ⚠️ Médio Risco (5–9) | 🔴 Alto Risco (≥10)
- **Ficha de impressão** completa com dados da gestante, tabela de critérios marcados e assinatura
- Suporte a impressão/PDF via `window.print()`

### 📝 Evoluções SOAP (Rich Text)
- **Editor Rich Text** com toolbar: negrito, itálico, sublinhado, listas, títulos, remover formatação
- Modelos pré-preenchidos com formatação HTML semântica (h2, h3, ul, li, strong)
- Cópia inteligente: converte o HTML para texto plano formatado (apto para colar no PEC/e-SUS)
- Grupos disponíveis:
  - **Hiperdia / Renovação de Receita**
  - **Puericultura** (masculino e feminino)
  - **Pré-natal** (com dados obstétricos detalhados)
  - **Urgência / Acolhimento com Classificação de Risco**
  - **Curativo / Tratamento de Ferida** *(novo — avaliação completa de ferida)*
  - **CCO (Citologia Oncótica)**
  - **Teste Rápido (TR)**

### 🎨 Interface
- Logo SVG personalizada (jangada + chapéu nordestino + cruz médica) no header e **favicon do navegador**
- Favicon configurado para: aba do navegador, favoritos, atalho de tela iOS/Android
- Design responsivo mobile-first
- Paleta: azul marinho (#002D6D), laranja (#FF8A00), azul céu (#4DB6E8)

---

## 🗂 Estrutura de Arquivos

```plaintext
/
├── css/
│   └── style.css    # Folha de estilos principal
├── js/
│   └── main.js      # Lógica e interatividade do aplicativo
├── index.html       # Estrutura principal da página (HTML)
├── favicon.svg      # Ícone para navegador e atalhos
└── README.md        # Esta documentação
```

---

## 🔗 URIs / Navegação

| Rota | Descrição |
|------|-----------|
| `/` (index.html) | Página principal — inicia na aba Prescrições |
| `#` tab-meds | Aba de Prescrições |
| `#` tab-vacinas | Aba Calendário Vacinal |
| `#` tab-calculadora | Calculadora de Risco Gestacional |
| `#` tab-evolucoes | Evoluções SOAP |

---

## 📦 Dependências (CDN)

- **Google Fonts** — Poppins (300–800)
- Nenhuma outra dependência externa (JS/CSS 100% inline)

---

## 🚀 Deploy

Para publicar, use a **aba Publish** do Genspark.


---

## ⚖️ Referências Normativas

- Portaria 223/2015 – SMS Maceió
- PCDT IST/MS 2022
- PCDT Pré-natal/MS 2022
- Nota Técnica Nº 06/2025 – SESAU/AL (Estratificação de Risco Gestacional)
- Nota Técnica Nº 001/2022 – CAITS (ITU em Gestantes)
- Nota Técnica Nº 04/2025 – CAITS (Prevenção de Pré-eclâmpsia)
- PCDT PEP/MS 2021
- PCDT TB/MS 2019 | PCDT ILTB/MS 2022
- Resolução 801/2026 COFEN
- PNI – Programa Nacional de Imunizações 2024/2025
