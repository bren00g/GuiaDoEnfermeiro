/* ============================================================
   DADOS: CATEGORIAS
   ============================================================ */
const CATS = [
  { id: "Todos",      label: "Todos",           cc: "#002D6D" },
  { id: "IST",        label: "IST",             cc: "#7c3aed" },
  { id: "Contra",     label: "Contracepção",    cc: "#db2777" },
  { id: "PrEP_PEP",  label: "PrEP / PEP",      cc: "#dc2626" },
  { id: "Mulher",     label: "Saúde da Mulher", cc: "#d97706" },
  { id: "Prenatal",   label: "Pré-natal",       cc: "#0077CC" },
  { id: "Crianca",    label: "Criança",         cc: "#16a34a" },
  { id: "TB",         label: "Tuberculose",     cc: "#92400e" },
  { id: "Cronicas",   label: "Crônicas",        cc: "#0891b2" },
  { id: "Tabagismo",  label: "Tabagismo",       cc: "#64748b" },
  { id: "Dengue",     label: "Dengue",          cc: "#ea580c" },
  { id: "Curativo",   label: "Curativos",       cc: "#0d9488" },
  { id: "Outros",     label: "Outros",          cc: "#6366f1" }
];

/* ============================================================
   DADOS: MEDICAMENTOS
   ============================================================ */
const MEDS = [
  /* ── IST ── */
  { n:"Azitromicina", c:"500 mg", a:"Comprimido", u:"Corrimento uretral/cervical (clamídia/gonorreia) – dose única 1g VO", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Azitromicina", c:"500 mg", a:"Comprimido", u:"Cancro mole (Haemophilus ducreyi) – 500mg 1x/dia, 3 dias", cat:"IST", r:"PCDT IST/MS 2022" },
  { n:"Benzilpenicilina Benzatina", c:"1.200.000 UI", a:"Pó para suspenção injetável IM", u:"Sífilis primária/secundária – 2.400.000 UI IM dose única", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Benzilpenicilina Benzatina", c:"1.200.000 UI", a:"Pó para suspensão injetável IM", u:"Sífilis terciária – 2.400.000 UI IM 1x/sem, 3 semanas", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Ciprofloxacino", c:"500 mg", a:"Comprimido", u:"Cancro mole (alternativa) – 500mg 12/12h, 3 dias", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Doxiciclina", c:"100 mg", a:"Comprimido", u:"Clamídia/LGV – 100mg 12/12h, 7 dias (LGV: 21 dias)", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Metronidazol", c:"250 mg", a:"Comprimido", u:"Tricomoníase/vaginose bacteriana – 2g VO dose única ou 500mg 12/12h, 7 dias", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Metronidazol", c:"100 mg/g", a:"Gel vaginal 50 g (via tópica)", u:"Vaginose bacteriana – aplicar 1 vez/noite por 7 noites", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Nistatina", c:"100.000 UI/g", a:"Creme vaginal 60 g (via tópica)", u:"Candidíase vulvovaginal – 1 aplicação intravaginal/noite, 14 noites", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Fluconazol", c:"150 mg", a:"Cápsula", u:"Candidíase vulvovaginal não complicada – dose única VO", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Aciclovir", c:"200 mg", a:"Comprimido", u:"Herpes genital (1º episódio) – 400mg 8/8h, 7–10 dias", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Aciclovir", c:"50 mg/g", a:"Creme dermatológico 10 g (via tópica)", u:"Herpes labial/genital – aplicar na lesão 5x/dia, 5–10 dias", cat:"IST", r:"PCDT IST/MS 2022" },
  { n:"Ceftriaxona", c:"500 mg", a:"Pó para solução injetável IM/IV", u:"Gonorreia – 500mg IM dose única", cat:"IST", r:"PCDT IST/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Espiramicina", c:"500 mg", a:"Comprimido", u:"Sífilis em alérgicos à penicilina (alternativa) / Toxoplasmose na gestação – conforme PCDT", cat:"IST", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Sulfadiazina", c:"500 mg", a:"Comprimido", u:"Toxoplasmose (em associação com pirimetamina) – conforme protocolo", cat:"IST", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Pirimetamina", c:"25 mg", a:"Comprimido", u:"Toxoplasmose (em associação com sulfadiazina) – conforme protocolo", cat:"IST", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Folinato de Cálcio", c:"15 mg", a:"Comprimido", u:"Adjuvante no tratamento de toxoplasmose com pirimetamina – conforme protocolo", cat:"IST", r:"Portaria 223/2015 SMS/Maceió" },

  /* ── PrEP / PEP ── */
  { n:"Tenofovir + Lamivudina (TDF/3TC) — PrEP", c:"300 mg + 300 mg", a:"Comprimido", u:"PrEP HIV – profilaxia pré-exposição: 1 comp/dia contínuo. Indicado para populações-chave com risco substancial de HIV", cat:"PrEP_PEP", r:"PCDT PrEP/MS 2022 · Portaria 29/2021 MS" },
  { n:"Tenofovir + Entricitabina (TDF/FTC) — PrEP", c:"300 mg + 200 mg", a:"Comprimido", u:"PrEP HIV (alternativa) – 1 comp/dia contínuo ou sob demanda (2-1-1) conforme protocolo. Disponível no CRIE/SAE", cat:"PrEP_PEP", r:"PCDT PrEP/MS 2022" },
  { n:"Tenofovir + Lamivudina — PEP", c:"300 mg + 300 mg", a:"Comprimido", u:"PEP HIV – 1 comp/dia, 28 dias (iniciar em até 72h)", cat:"PrEP_PEP", r:"PCDT PEP/MS 2021 · Portaria 223/2015 SMS/Maceió" },
  { n:"Dolutegravir — PEP", c:"50 mg", a:"Comprimido", u:"PEP HIV (3º fármaco) – 1 comp/dia, 28 dias", cat:"PrEP_PEP", r:"PCDT PEP/MS 2021 · Portaria 223/2015 SMS/Maceió" },
  { n:"Raltegravir — PEP", c:"400 mg", a:"Comprimido", u:"PEP HIV (alternativa em gestantes/crianças) – 1 comp 12/12h, 28 dias", cat:"PrEP_PEP", r:"PCDT PEP/MS 2021" },

  /* ── CONTRACEPÇÃO ── */
  { n:"Etinilestradiol + Levonorgestrel", c:"0,03 mg + 0,15 mg", a:"Comprimido (cartela 21 ou 28 dias)", u:"Anticoncepção oral combinada – 1 comp/dia conforme ciclo", cat:"Contra", r:"Portaria 223/2015 SMS/Maceió · PCDT MS" },
  { n:"Levonorgestrel", c:"0,75 mg", a:"Comprimido", u:"Anticoncepção de emergência – 2 comp VO dose única ou 1 comp a cada 12h (até 72h)", cat:"Contra", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Medroxiprogesterona", c:"150 mg/mL", a:"Suspensão injetável IM 1 mL (trimestral)", u:"Anticoncepção injetável trimestral – 1 ampola IM a cada 3 meses", cat:"Contra", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Noretisterona + Estradiol", c:"50 mg + 5 mg/mL", a:"Suspensão injetável IM 1 mL (mensal)", u:"Anticoncepção injetável mensal – 1 ampola IM a cada 30 dias", cat:"Contra", r:"Portaria 223/2015 SMS/Maceió" },

  /* ── SAÚDE DA MULHER ── */
  { n:"Ácido Fólico", c:"5 mg", a:"Comprimido", u:"Pré-concepcional e 1º trimestre – 1 comp/dia (início 30 dias antes até 12ª semana)", cat:"Mulher", r:"Portaria 223/2015 SMS/Maceió · PCDT Pré-natal MS" },
  { n:"Carbonato de Cálcio", c:"1250 mg (equiv. 500 mg Ca elementar)", a:"Comprimido", u:"Prevenção de pré-eclâmpsia – 2 comp/dia (500 mg Ca) a partir da 20ª semana até o parto. Nota Técnica 04/2025 CAITS", cat:"Mulher", r:"Nota Técnica Nº 04/2025 – CAITS · Portaria 223/2015 SMS/Maceió" },
  { n:"Clotrimazol", c:"100 mg", a:"Comprimido vaginal (via tópica)", u:"Candidíase vulvovaginal – 1 comprimido vaginal/noite, 7 noites", cat:"Mulher", r:"Portaria 223/2015 SMS/Maceió" },

  /* ── PRÉ-NATAL ── */
  { n:"Ácido Fólico", c:"400 mcg (0,4 mg)", a:"Comprimido", u:"Prevenção de defeitos do tubo neural – 1 comp/dia até o fim da gestação", cat:"Prenatal", r:"PCDT Pré-natal/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Sulfato Ferroso", c:"40 mg Fe elementar (200 mg)", a:"Comprimido", u:"Prevenção e tratamento de anemia ferropriva na gestação – 1 comp 1h antes do almoço até 3 meses pós-parto", cat:"Prenatal", r:"PCDT Pré-natal/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Carbonato de Cálcio", c:"1250 mg (equiv. 500 mg Ca elementar)", a:"Comprimido", u:"Suplementação gestacional – 1 comp após almoço + 1 comp após jantar, a partir da 12ª semana até o parto", cat:"Prenatal", r:"PCDT Pré-natal/MS 2022 · Nota Técnica Nº 04/2025 – CAITS · Portaria 223/2015 SMS/Maceió" },
  { n:"Cefalexina", c:"500 mg", a:"Comprimido", u:"Tratamento de ITU em gestantes – 1 comp 6/6h, 7 a 10 dias (Nota Técnica 001/2022 CAITS)", cat:"Prenatal", r:"Nota Técnica Nº 001/2022 – CAITS · Portaria 223/2015 SMS/Maceió" },
  { n:"Amoxicilina + Clavulanato", c:"500 mg + 125 mg", a:"Comprimido", u:"Tratamento de ITU em gestantes (alternativa) – 1 comp 8/8h, 7 a 10 dias", cat:"Prenatal", r:"Nota Técnica Nº 001/2022 – CAITS · Portaria 223/2015 SMS/Maceió" },

  /* ── CRIANÇA ── */
  { n:"Vitamina A", c:"100.000 UI (< 1 ano) / 200.000 UI (1–4 anos)", a:"Cápsula gelatinosa", u:"Suplementação Vitamina A – dose única semestral conforme faixa etária", cat:"Crianca", r:"Programa Nacional de Suplementação de Vitamina A/MS · Portaria 223/2015 SMS/Maceió" },
  { n:"Sulfato Ferroso", c:"25 mg/mL (Fe elementar)", a:"Solução oral 30 mL (gotas)", u:"Prevenção anemia ferropriva – 1 mg Fe/kg/dia a partir do 6º mês até 2 anos", cat:"Crianca", r:"Portaria 223/2015 SMS/Maceió · PNSF/MS" },
  { n:"Paracetamol", c:"200 mg/mL", a:"Solução oral (gotas) 15 mL", u:"Febre/dor em crianças – 10–15 mg/kg/dose VO a cada 6h", cat:"Crianca", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Ibuprofeno", c:"50 mg/mL", a:"Suspensão oral 30 mL", u:"Febre/dor/inflamação em crianças – 5–10 mg/kg/dose VO a cada 6–8h", cat:"Crianca", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Amoxicilina", c:"250 mg/5 mL", a:"Suspensão oral 150 mL", u:"Infecções bacterianas pediátricas (IVAS, OMA, ITU) – 40–50 mg/kg/dia 8/8h, 7–10 dias", cat:"Crianca", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Albendazol", c:"400 mg", a:"Comprimido mastigável / Suspensão 400mg/10mL", u:"Helmintíases – dose única VO (>2 anos). Repetir em 6 meses.", cat:"Crianca", r:"Portaria 223/2015 SMS/Maceió" },

  /* ── TUBERCULOSE ── */
  { n:"Rifampicina + Isoniazida + Pirazinamida + Etambutol (RHZE)", c:"150+75+400+275 mg", a:"Comprimido combinado (dose fixa)", u:"Tratamento TB (fase intensiva 2 meses) – doses por faixa de peso conforme PCDT", cat:"TB", r:"PCDT TB/MS 2019 · Portaria 223/2015 SMS/Maceió" },
  { n:"Rifampicina + Isoniazida (RH)", c:"300+150 mg", a:"Comprimido combinado (dose fixa)", u:"Tratamento TB (fase de manutenção 4 meses) – doses por peso conforme PCDT", cat:"TB", r:"PCDT TB/MS 2019 · Portaria 223/2015 SMS/Maceió" },
  { n:"Isoniazida", c:"300 mg", a:"Comprimido", u:"Tratamento Preventivo TB (ILTB) – 300mg/dia por 6 meses ou 900mg 2x/sem por 6 meses", cat:"TB", r:"PCDT ILTB/MS 2022 · Portaria 223/2015 SMS/Maceió" },
  { n:"Piridoxina (Vitamina B6)", c:"40 mg", a:"Comprimido", u:"Prevenção de neuropatia periférica durante tratamento com isoniazida – 1 comp/dia", cat:"TB", r:"PCDT TB/MS 2019 · Portaria 223/2015 SMS/Maceió" },

  /* ── CRÔNICAS (HAS/DM/etc.) ── */
  { n:"Captopril", c:"25 mg", a:"Comprimido", u:"HAS – 25–150 mg/dia em 2–3 tomadas; crise hipertensiva sublingual", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió · Diretriz Bras. HAS 2020" },
  { n:"Enalapril", c:"5 mg / 10 mg / 20 mg", a:"Comprimido", u:"HAS / Insuficiência cardíaca – 5–40 mg/dia em 1–2 tomadas", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Losartana Potássica", c:"50 mg", a:"Comprimido", u:"HAS / Nefropatia diabética – 50–100 mg/dia em 1–2 tomadas", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Hidroclorotiazida", c:"25 mg", a:"Comprimido", u:"HAS (diurético tiazídico) – 12,5–50 mg/dia pela manhã", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Anlodipino", c:"5 mg / 10 mg", a:"Comprimido", u:"HAS / Angina – 5–10 mg/dia em 1 tomada", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Atenolol", c:"50 mg", a:"Comprimido", u:"HAS / Arritmia / Angina – 25–100 mg/dia em 1–2 tomadas", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Metformina", c:"500 mg / 850 mg", a:"Comprimido", u:"DM tipo 2 – iniciar 500mg ou 850mg/dia com refeição; até 2550 mg/dia", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió · Diretriz SBD 2023" },
  { n:"Glibenclamida", c:"5 mg", a:"Comprimido", u:"DM tipo 2 – 2,5–20 mg/dia antes das refeições", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Insulina NPH Humana", c:"100 UI/mL", a:"Suspensão injetável SC (frasco 10 mL ou refil)", u:"DM tipo 1 e 2 – doses individualizadas SC 2x/dia (jejum e pré-jantar)", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Insulina Regular Humana", c:"100 UI/mL", a:"Solução injetável SC/IV (frasco 10 mL)", u:"DM tipo 1 e 2 (correção e pré-prandial) – doses individualizadas SC", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Sinvastatina", c:"20 mg", a:"Comprimido", u:"Dislipidemia / prevenção cardiovascular – 20 mg/dia à noite", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Sinvastatina", c:"40 mg", a:"Comprimido", u:"Dislipidemia / alto risco cardiovascular – 40 mg/dia à noite", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"AAS (Ácido Acetilsalicílico)", c:"100 mg", a:"Comprimido", u:"Antiagregante plaquetário (prevenção cardiovascular secundária) – 100 mg/dia após refeição", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Omeprazol", c:"20 mg", a:"Cápsula", u:"DRGE / úlcera péptica / gastrite – 20 mg em jejum por 4–8 semanas", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Levotiroxina Sódica", c:"25 mcg / 50 mcg / 75 mcg / 100 mcg", a:"Comprimido", u:"Hipotireoidismo – dose individualizada VO em jejum", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Furosemida", c:"40 mg", a:"Comprimido", u:"Edema / Insuficiência cardíaca / HAS resistente – 40–80 mg/dia pela manhã", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Espironolactona", c:"25 mg / 100 mg", a:"Comprimido", u:"Insuficiência cardíaca / HAS resistente – 25–200 mg/dia", cat:"Cronicas", r:"Portaria 223/2015 SMS/Maceió" },

  /* ── TABAGISMO ── */
  { n:"Bupropiona", c:"150 mg", a:"Comprimido de liberação lenta", u:"Cessação do tabagismo – 150 mg/dia por 3 dias, depois 150 mg 12/12h por 7–12 semanas", cat:"Tabagismo", r:"PCDT Cessação Tabagismo/MS 2020 · Portaria 223/2015 SMS/Maceió" },
  { n:"Nicotina", c:"2 mg / 4 mg", a:"Goma de mascar ou adesivo transdérmico (via tópica)", u:"Terapia de reposição de nicotina – conforme protocolo de cessação do tabagismo", cat:"Tabagismo", r:"PCDT Cessação Tabagismo/MS 2020 · Portaria 223/2015 SMS/Maceió" },

  /* ── DENGUE ── */
  { n:"Paracetamol", c:"500 mg / 750 mg", a:"Comprimido", u:"Dengue (febre/dor) – 500–750 mg 6/6h VO. CONTRAINDICADO: AAS, ibuprofeno, dipirona IV", cat:"Dengue", r:"Protocolo Dengue/MS 2024 · Portaria 223/2015 SMS/Maceió" },
  { n:"Dipirona Sódica", c:"500 mg/mL", a:"Solução oral (gotas) 20 mL", u:"Febre/dor em geral (não usar dengue IV) – 20–40 gotas VO 6/6h", cat:"Dengue", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Soro Fisiológico (NaCl 0,9%)", c:"0,9%", a:"Frasco 500 mL (sistema fechado)", u:"Hidratação IV / Dengue grupo C e D / Reposição volêmica", cat:"Dengue", r:"Protocolo Dengue/MS 2024 · Portaria 223/2015 SMS/Maceió" },
  { n:"Soro Ringer + Lactato", c:"Cloreto 109mEq, Sódio 130mEq, K 4mEq, Ca 2,7mEq, Lactato 27,7mEq/L", a:"Frasco 500 mL (sistema fechado)", u:"Reposição volêmica / choque – Dengue grave, conforme protocolo MS", cat:"Dengue", r:"Protocolo Dengue/MS 2024 · Portaria 223/2015 SMS/Maceió" },

  /* ── CURATIVOS ── */
  { n:"SF 0,9% Não Injetável", c:"0,9%", a:"Frasco 500 mL", u:"Limpeza e irrigação de feridas – irrigar em jato para remoção de debris", cat:"Curativo", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Sulfadiazina de Prata", c:"1%", a:"Creme dermatológico 50 g (via tópica)", u:"Queimaduras 2º grau / feridas infectadas / úlceras – aplicar camada fina 1–2x/dia", cat:"Curativo", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"AGE (Ácidos Graxos Essenciais)", c:"Ác. caprílico+cáprico+láurico+linoléico+lecitina de soja+Vit A e E", a:"Loção oleosa 100 mL (via tópica)", u:"Prevenção e tratamento de lesões por pressão graus I e II – aplicar na pele perilesional e ao redor", cat:"Curativo", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Alginato de Cálcio + Prata", c:"Placa 10×10 cm", a:"Cobertura (via tópica)", u:"Feridas com exsudato moderado/alto e infecção – trocar a cada 1–3 dias conforme exsudato", cat:"Curativo", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Hidrogel com Alginato", c:"Bisnaga 25 g (via tópica)", a:"Gel (via tópica)", u:"Feridas secas ou com crosta – promover desbridamento autolítico; trocar 1x/dia", cat:"Curativo", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Papaína", c:"4%", a:"Gel/pomada 50 g (via tópica)", u:"Desbridamento enzimático de feridas com necrose de coagulação leve – 1x/dia", cat:"Curativo", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Papaína", c:"6%", a:"Gel/pomada 50 g (via tópica)", u:"Desbridamento enzimático de feridas com necrose de liquefação moderada – 1x/dia", cat:"Curativo", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Papaína", c:"8%", a:"Gel/pomada 50 g (via tópica)", u:"Desbridamento enzimático de feridas com necrose fibrinosa densa – 1x/dia", cat:"Curativo", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Permanganato de Potássio", c:"100 mg", a:"Comprimido (solução tópica diluída)", u:"Antissepsia de lesões exsudativas e dermatoses – diluir 1 comp em 10L água morna, banho de assento 15 min", cat:"Curativo", r:"Portaria 223/2015 SMS/Maceió" },

  /* ── OUTROS ── */
  { n:"Salbutamol, sulfato", c:"6 mg/mL (equiv. 5 mg salbutamol)", a:"Solução inalante 10 mL (nebulização)", u:"Broncoespasmo / Asma / DPOC – nebulizar 2,5 mg diluídos em SF 0,9% 5 mL, repetir conforme resposta", cat:"Outros", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Glicose", c:"500 mg/mL (50%)", a:"Ampola 10 mL (IV)", u:"Hipoglicemia grave – 20–50 mL IV em bolus lento, monitorar glicemia", cat:"Outros", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Glicose", c:"50 mg/mL (5%)", a:"Frasco 500 mL sistema fechado (IV)", u:"Hidratação / veículo de medicamentos IV – conforme prescrição médica", cat:"Outros", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Amoxicilina", c:"500 mg", a:"Cápsula", u:"Infecções bacterianas do adulto (IVAS, OMA, ITU não complicada) – 500 mg 8/8h, 7–10 dias", cat:"Outros", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Ibuprofeno", c:"600 mg", a:"Comprimido", u:"Dor e inflamação no adulto – 400–600 mg 6–8/6–8h após refeição", cat:"Outros", r:"Portaria 223/2015 SMS/Maceió" },
  { n:"Dipirona Sódica", c:"500 mg", a:"Comprimido", u:"Dor e febre no adulto – 500–1000 mg VO 6/6h se necessário", cat:"Outros", r:"Portaria 223/2015 SMS/Maceió" },
];

/* ============================================================
   DADOS: CALENDÁRIO VACINAL (PNI)
   ============================================================ */
const GRUPOS_VACINA = ["Crianças","Adolescentes","Adultos","Gestantes","Idosos"];
const VACINAS = {
  "Crianças": [
    { mes:"Ao nascer", vacinas:[
      { n:"BCG-ID", via:"ID", dose:"Dose única", d:"Proteção contra formas graves de tuberculose (miliar e meníngea). Aplicar no músculo deltoide direito." },
      { n:"Hepatite B", via:"IM", dose:"1ª dose", d:"Preferencialmente nas primeiras 12 horas de vida." }
    ]},
    { mes:"1 mês", vacinas:[
      { n:"Hepatite B", via:"IM", dose:"2ª dose", d:"Apenas para recém-nascidos filhos de mães HBsAg reagente." }
    ]},
    { mes:"2 meses", vacinas:[
      { n:"Pentavalente (DTP + HepB + Hib)", via:"IM", dose:"1ª dose", d:"Difteria, Tétano, Coqueluche, Hepatite B e Hib." },
      { n:"VIP (Poliomielite Inativada)", via:"IM", dose:"1ª dose", d:"Substituiu a VOP nas primeiras doses." },
      { n:"VPC10 (Pneumocócica 10-valente)", via:"IM", dose:"1ª dose", d:"Previne pneumonia, meningite e otite por pneumococo." },
      { n:"VRH (Rotavírus Humano)", via:"VO", dose:"1ª dose", d:"Diarreia grave por rotavírus. Administrar até 3 meses e 15 dias." }
    ]},
    { mes:"3 meses", vacinas:[
      { n:"DTP (Tríplice Bacteriana)", via:"IM", dose:"1ª dose", d:"Esquema alternativo em alguns municípios. Verificar calendário local." },
      { n:"VIP (Poliomielite Inativada)", via:"IM", dose:"2ª dose", d:"2ª dose da vacina inativada." }
    ]},
    { mes:"4 meses", vacinas:[
      { n:"Pentavalente (DTP + HepB + Hib)", via:"IM", dose:"2ª dose", d:"Continuação do esquema básico." },
      { n:"VIP (Poliomielite Inativada)", via:"IM", dose:"3ª dose", d:"3ª dose da vacina inativada." },
      { n:"VPC10 (Pneumocócica 10-valente)", via:"IM", dose:"2ª dose", d:"Continuação." },
      { n:"VRH (Rotavírus Humano)", via:"VO", dose:"2ª dose", d:"Administrar até 7 meses e 29 dias." }
    ]},
    { mes:"5 meses", vacinas:[
      { n:"DTP (Tríplice Bacteriana)", via:"IM", dose:"2ª dose", d:"Conforme esquema adotado." },
      { n:"VOP (Poliomielite Oral Bivalente)", via:"VO", dose:"Reforço", d:"Reforço oral de poliomielite conforme calendário vigente." }
    ]},
    { mes:"6 meses", vacinas:[
      { n:"Pentavalente (DTP + HepB + Hib)", via:"IM", dose:"3ª dose", d:"Conclusão do esquema primário." },
      { n:"Influenza (Gripe)", via:"IM", dose:"1ª dose", d:"Para crianças entre 6 meses e < 2 anos: 2 doses com intervalo de 30 dias no 1º ano." },
      { n:"Meningocócica C (conjugada)", via:"IM", dose:"1ª dose", d:"Previne meningite meningocócica sorogrupo C." }
    ]},
    { mes:"9 meses", vacinas:[
      { n:"Febre Amarela", via:"SC", dose:"1ª dose", d:"Dose inicial. Reforço único aos 4 anos. Indicada em áreas com recomendação ou viagem." },
      { n:"Meningocócica C (conjugada)", via:"IM", dose:"2ª dose", d:"Conclusão do esquema primário." }
    ]},
    { mes:"12 meses", vacinas:[
      { n:"VPC10 (Pneumocócica 10-valente)", via:"IM", dose:"Reforço (1º)", d:"Reforço único aos 12 meses." },
      { n:"Meningocócica C (conjugada)", via:"IM", dose:"Reforço", d:"Reforço único." },
      { n:"Hepatite A", via:"IM", dose:"Dose única", d:"Dose única a partir de 12 meses." },
      { n:"Tríplice Viral (SCR)", via:"SC", dose:"1ª dose", d:"Sarampo, Caxumba e Rubéola." }
    ]},
    { mes:"15 meses", vacinas:[
      { n:"DTP (Tríplice Bacteriana)", via:"IM", dose:"1º Reforço", d:"Reforço de DTP." },
      { n:"VOP (Poliomielite Oral Bivalente)", via:"VO", dose:"1º Reforço", d:"Reforço oral." },
      { n:"Varicela (Catapora)", via:"SC", dose:"1ª dose", d:"Proteção contra varicela." },
      { n:"Tetraviral (SCRV)", via:"SC", dose:"Dose única", d:"Sarampo, Caxumba, Rubéola e Varicela. Substituída pela Tríplice + Varicela em alguns estados." }
    ]},
    { mes:"4 anos", vacinas:[
      { n:"DTP (Tríplice Bacteriana)", via:"IM", dose:"2º Reforço", d:"Reforço final da DTP na infância." },
      { n:"VOP (Poliomielite Oral Bivalente)", via:"VO", dose:"2º Reforço", d:"Reforço final de pólio." },
      { n:"Febre Amarela", via:"SC", dose:"Reforço único", d:"Reforço único da febre amarela (se primeira dose aos 9 meses)." },
      { n:"Varicela (Catapora)", via:"SC", dose:"2ª dose", d:"Completar esquema de 2 doses." }
    ]}
  ],
  "Adolescentes": [
    { mes:"9–14 anos (meninas) / 11–14 anos (meninos)", vacinas:[
      { n:"HPV Quadrivalente", via:"IM", dose:"2 doses (0 e 6 meses)", d:"Prevenção do HPV tipos 6, 11, 16 e 18. Disponível no CRIE para imunossuprimidos até 45 anos." }
    ]},
    { mes:"11–19 anos", vacinas:[
      { n:"dTpa (Reforço adulto)", via:"IM", dose:"1 dose", d:"Reforço a cada 10 anos. Especial atenção à imunização de adolescentes grávidas e puérperas." },
      { n:"Meningocócica ACWY (conjugada)", via:"IM", dose:"1 dose (11–12 anos)", d:"Ampliar cobertura para sorogrupos A, C, W e Y." },
      { n:"Meningocócica B", via:"IM", dose:"Conforme CRIE", d:"Indicada para grupos de risco pelo CRIE." }
    ]},
    { mes:"Avaliação do Cartão", vacinas:[
      { n:"Hepatite B", via:"IM", dose:"Completar 3 doses", d:"Verificar e completar esquema se não vacinado." },
      { n:"Tríplice Viral (SCR)", via:"SC", dose:"2 doses", d:"Verificar e completar se necessário." },
      { n:"Varicela", via:"SC", dose:"2 doses", d:"Verificar história e completar esquema." },
      { n:"Influenza", via:"IM", dose:"Dose anual", d:"Anual para grupos prioritários (gestantes, doenças crônicas, profissionais de saúde)." }
    ]}
  ],
  "Adultos": [
    { mes:"Adultos em geral (20–59 anos)", vacinas:[
      { n:"dT (Dupla Adulto — difteria + tétano)", via:"IM", dose:"Reforço a cada 10 anos", d:"Substituir 1 dose pelo dTpa (coqueluche) se nunca recebeu. Esquema incompleto: completar 3 doses." },
      { n:"dTpa (Tríplice Acelular Adulto)", via:"IM", dose:"1 dose (se nunca recebeu)", d:"Previne difteria, tétano e coqueluche. Indicado especialmente para profissionais de saúde e cuidadores de bebês." },
      { n:"Hepatite B", via:"IM", dose:"3 doses (0, 1, 6 meses)", d:"Para não vacinados ou sem comprovante. Verificar anti-HBs 30–60 dias após 3ª dose." },
      { n:"Tríplice Viral (SCR)", via:"SC", dose:"2 doses (nascidos após 1960)", d:"Sarampo, Caxumba, Rubéola. Verificar histórico de vacinação." },
      { n:"Febre Amarela", via:"SC", dose:"Dose única (se nunca vacinou)", d:"Indicada para residentes ou viajantes em áreas recomendadas. Uma dose é suficiente para toda a vida." },
      { n:"Influenza", via:"IM", dose:"Dose anual", d:"Para grupos prioritários: profissionais de saúde, gestantes, adultos ≥ 60 anos, doenças crônicas." },
      { n:"Varicela", via:"SC", dose:"2 doses (0 e 60 dias)", d:"Para suscetíveis (sem vacinação e sem história de varicela). Disponível no CRIE para grupos de risco." }
    ]}
  ],
  "Gestantes": [
    { mes:"A qualquer momento da gestação", vacinas:[
      { n:"Hepatite B", via:"IM", dose:"Completar esquema (3 doses)", d:"Verificar e completar esquema vacinal." },
      { n:"Influenza", via:"IM", dose:"Dose anual", d:"Em qualquer trimestre. Protege a mãe e o bebê nos primeiros 6 meses de vida." }
    ]},
    { mes:"A partir do 2º trimestre (≥ 20ª semana)", vacinas:[
      { n:"Febre Amarela", via:"SC", dose:"Dose única (se necessário)", d:"Apenas para gestantes em área de risco ou viagem; avaliar benefício x risco. Contraindicada em imunodeficiência." }
    ]},
    { mes:"A partir do 2º trimestre, preferencialmente entre 27–36 semanas", vacinas:[
      { n:"dTpa (Tríplice Acelular Adulto)", via:"IM", dose:"1 dose a cada gestação", d:"Proteção contra coqueluche para a mãe e o bebê (anticorpos maternos). Idealmente entre 27–36 semanas." }
    ]}
  ],
  "Idosos": [
    { mes:"60 anos ou mais", vacinas:[
      { n:"Influenza", via:"IM", dose:"Dose anual (campanha)", d:"Grupo prioritário. Reduz hospitalizações e mortalidade por complicações gripais." },
      { n:"Pneumocócica 23-valente (VPP23)", via:"IM/SC", dose:"1 ou 2 doses", d:"Para idosos a partir de 60 anos. No CRIE: 2ª dose após 5 anos para imunocomprometidos." },
      { n:"Pneumocócica 13-valente conjugada (VPC13)", via:"IM", dose:"Conforme CRIE", d:"Para imunocomprometidos com ≥ 60 anos, no CRIE." },
      { n:"dT (Dupla Adulto)", via:"IM", dose:"Reforço a cada 10 anos", d:"Completar 3 doses se nunca vacinado." },
      { n:"Hepatite B", via:"IM", dose:"3 doses (se não vacinado)", d:"Verificar histórico e completar." },
      { n:"Febre Amarela", via:"SC", dose:"Dose única (se nunca recebeu)", d:"Para residentes ou viajantes em áreas endêmicas." },
      { n:"Herpes Zóster (Shingrix)", via:"IM", dose:"2 doses (0 e 2–6 meses) — CRIE", d:"Para imunocomprometidos ≥ 50 anos pelo CRIE. Previne herpes zóster e neuralgia pós-herpética." }
    ]}
  ]
};

/* ============================================================
   DADOS: GRUPOS DE EVOLUÇÃO
   ============================================================ */
const GRUPOS_EVOLUCAO = ["Hiperdia","Puericultura","Pré-natal","Urgência","Curativo","CCO","Teste rápido"];

/* ============================================================
   DADOS: EVOLUÇÕES SOAP (RICH TEXT HTML)
   Cada seção usa HTML semântico para formatação
   ============================================================ */
const EVOLUCOES = {
  "Hiperdia": [{
    titulo: " HIPERDIA / RENOVAÇÃO DE RECEITA",
    s: `<h2>HIPER-DIA / RENOVAÇÃO DE RECEITA</h2>
<p>Paciente vem à unidade para <strong>renovação de receita</strong>. Acompanhado por: <strong>___________________</strong>.</p>
<p><strong>QP:</strong> ____</p>
<p><strong>HMP:</strong> Afirma HAS, DM não insulino-dependente.</p>
<ul>
  <li>Nega tabagismo e etilismo.</li>
  <li><strong>HF:</strong> Nega histórico de CA na família.</li>
  <li><strong>Cirurgias e internamentos prévios:</strong> ____</li>
</ul>
<p>Nega: quedas recentes, dificuldade de visão e dores no peito.</p>
<p><strong>MUC:</strong></p>
<ul>
  <li><strong>Sono e vigília:</strong> 08h/dia.</li>
  <li><strong>Alimentação:</strong> Adequada.</li>
  <li><strong>Eliminações:</strong> Vesicointestinais presentes em condições normais.</li>
</ul>`,
    o: `<h2>AO EXAME FÍSICO</h2>
<p><strong>Estado geral:</strong> BEG, normotenso, eupneico, normocárdico, afebril.</p>
<ul>
  <li><strong>Pele:</strong> Hidratado, normocorado, anictérico, acianótico.</li>
  <li><strong>Cabeça e pescoço:</strong> Sem alterações.</li>
  <li><strong>Tórax:</strong> Simétrico com expansibilidade bilateral.</li>
  <li><strong>ACV:</strong> BCR, BNF, S/S.</li>
  <li><strong>AR:</strong> MV+ em AHT, sem RA.</li>
  <li><strong>ABD:</strong> Semigloboso, flácido, RHA+, indolor à palpação superficial ou profunda.</li>
  <li><strong>NEU:</strong> Glasgow 15, lúcido, orientado, responsivo.</li>
  <li><strong>EXT:</strong> Aquecidas, com pulsos periféricos cheios e simétricos, TEC &lt; 3 seg.</li>
</ul>
<h3>Exame do Pé Diabético</h3>
<ul>
  <li><strong>Pele:</strong> Íntegra, hidratada; aparelho ungueal íntegro; região plantar sem calosidades.</li>
  <li>Pulsos palpáveis.</li>
  <li>Motilidade preservada.</li>
  <li>Sensibilidade preservada.</li>
</ul>`,
    a: `<p><strong>Processo de envelhecimento saudável</strong> e dentro dos limites da normalidade.</p>
<p><strong>Outras avaliações:</strong> ____</p>`,
    p: `<h2>PLANO</h2>
<h3>Incentivo</h3>
<ul>
  <li>Vacinação anual conforme calendário vacinal vigente.</li>
  <li>Autoexame das mamas.</li>
  <li>Exame preventivo anual da mama.</li>
  <li>Realização do preventivo anual para CA de útero.</li>
  <li>Realização do exame da próstata.</li>
</ul>
<h3>Orientações Gerais</h3>
<ul>
  <li>Alimentação rica em fibras, vegetais, leguminosas e proteínas.</li>
  <li>Evitar consumo de alimentos e bebidas com alto índice glicêmico.</li>
  <li>Aumento da ingesta hídrica.</li>
  <li>Realizar exercícios físicos de baixo impacto com acompanhamento de profissionais.</li>
  <li>Reforço do uso correto das medicações de uso contínuo.</li>
  <li>Oriento quanto aos riscos de queda.</li>
  <li>Incentivo o uso de jogos (memória, caça-palavras) e leitura ativa para exercitar o raciocínio e prevenir neurodegeneração.</li>
</ul>
<h3>Conduta</h3>
<ul>
  <li>Realizo <strong>renovação de receita</strong>.</li>
  <li>Oriento retorno em <strong>menos de 30 dias</strong> para renovação de receitas, a fim de evitar interrupção do tratamento farmacológico por falta de medicação.</li>
</ul>`
  }],

  "Puericultura": [{
    titulo: " PUERICULTURA",
    s: `<h2>PUERICULTURA</h2>
<p>Paciente vem à unidade para <strong>consulta de puericultura</strong>. Acompanhado por: <strong>___________________</strong>.</p>
<p>Criança de <strong>__ anos</strong> e <strong>__ meses</strong>.</p>
<p><strong>QP:</strong> ____</p>
<p><strong>HMP:</strong></p>
<ul>
  <li><strong>Pré-natal:</strong> Completo, sem intercorrências.</li>
  <li><strong>Cirurgias e internamentos prévios:</strong> ____</li>
  <li>Nega: HAS, DM, alergias e asma. <strong>Afirma:</strong> ____</li>
</ul>
<p><strong>MUC:</strong></p>
<ul>
  <li><strong>Sono e vigília:</strong> 08h/dia.</li>
  <li><strong>Alimentação:</strong> Aleitamento materno exclusivo / AM + complementação / Fórmula. Introdução alimentar: ____.</li>
  <li><strong>Eliminações:</strong> Vesicointestinais presentes em condições normais.</li>
</ul>
<p><strong>Intercorrências desde a última consulta:</strong></p>
<ul>
  <li>Febre: ( ) S ( ) N &nbsp;|&nbsp; Diarreia: ( ) S ( ) N &nbsp;|&nbsp; Vômitos: ( ) S ( ) N</li>
  <li>Outras: ____</li>
</ul>`,
    o: `<h2>AO EXAME FÍSICO — SEXO MASCULINO</h2>
<p><strong>Estado geral:</strong> BEG, eupneico, normocárdico, afebril.</p>
<ul>
  <li><strong>Pele:</strong> Hidratado, normocorado, anictérico, acianótico.</li>
  <li><strong>NEU:</strong> Ativo, reativo.</li>
  <li><strong>Cabeça:</strong> Fontanelas bregmáticas e lambdóideas normotensas, normocefálico. Acuidade visual e auditiva preservadas. Narinas sem alterações. Boca com dentição incompleta sem cáries visíveis. Língua e tonsilas palatinas sem alterações.</li>
  <li><strong>Tórax:</strong> Simétrico com expansibilidade bilateral.</li>
  <li><strong>ACV:</strong> BCR, BNF, S/S.</li>
  <li><strong>AR:</strong> MV+ em AHT, sem RA.</li>
  <li><strong>ABD:</strong> Plano, flácido, RHA+, indolor à palpação, sem massas palpáveis.</li>
  <li><strong>EXT:</strong> Aquecidas, pulsos periféricos cheios e simétricos, TEC &lt; 3 seg.</li>
  <li><strong>Genitália:</strong> Sem assaduras em região inguinal. Testículos palpáveis. Pênis com exposição total da glande. Ânus sem alterações.</li>
</ul>
<hr/>
<h2>AO EXAME FÍSICO — SEXO FEMININO</h2>
<p><strong>Estado geral:</strong> BEG, eupneica, normocárdica, afebril.</p>
<ul>
  <li><strong>Pele:</strong> Hidratada, normocorada, anictérica, acianótica.</li>
  <li><strong>NEU:</strong> Ativa, reativa.</li>
  <li><strong>Cabeça:</strong> Fontanelas bregmática e lambdóidea normotensas, normocefálica. Acuidade visual e auditiva preservadas. Narinas sem alterações. Boca com dentição incompleta sem cáries visíveis. Língua e tonsilas palatinas sem alterações.</li>
  <li><strong>Tórax:</strong> Simétrico com expansibilidade bilateral.</li>
  <li><strong>ACV:</strong> BCR, BNF, S/S.</li>
  <li><strong>AR:</strong> MV+ em AHT, sem RA.</li>
  <li><strong>ABD:</strong> Plano, flácido, RHA+, indolor à palpação, sem massas palpáveis.</li>
  <li><strong>EXT:</strong> Aquecidas, pulsos periféricos cheios e simétricos, TEC &lt; 3 seg.</li>
  <li><strong>Genitália:</strong> Sem assaduras em região inguinal. Grandes e pequenos lábios sem alterações, sem secreções. Ânus sem alterações.</li>
</ul>`,
    a: `<p><strong>Crescimento e desenvolvimento adequado para a idade.</strong></p>
<p><strong>Outras avaliações encontradas:</strong> ____</p>`,
    p: `<h2>PLANO</h2>
<h3>Orientações Gerais</h3>
<ul>
  <li>Alimentação (introdução alimentar/amamentação conforme idade).</li>
  <li>Ingesta hídrica adequada.</li>
  <li>Verificação e atualização da caderneta de vacinas.</li>
  <li>Marcos de crescimento e desenvolvimento esperados.</li>
  <li>Redução do tempo de telas conforme faixa etária.</li>
</ul>
<h3>Conduta</h3>
<ul>
  <li>Realizo registro em <strong>Caderneta da Criança</strong>.</li>
  <li>Oriento retorno em: <strong>____</strong>.</li>
</ul>`
  }],

  "Pré-natal": [{
    titulo: " PRÉ-NATAL",
    s: `<h2>PRÉ-NATAL — Xª CONSULTA</h2>
<p>Paciente vem à unidade relatando estar grávida, portando <strong>exame βHCG reagente</strong>.</p>
<p>— <em>ou</em> —</p>
<p>Paciente vem à unidade para <strong>consulta de pré-natal de risco habitual</strong>.</p>
<p><strong>Antecedentes gestacionais:</strong> G__ P__ A__</p>
<p><strong>História médica pregressa:</strong></p>
<ul>
  <li>Nega: HAS, DM e alergias. Nega tabagismo e etilismo.</li>
  <li><strong>Afirma:</strong> ____</li>
</ul>
<p><strong>Gestação atual:</strong> ____S____D</p>
<p><strong>Queixas:</strong> ____</p>
<p><strong>Em uso de:</strong></p>
<ul>
  <li><strong>Sulfato Ferroso:</strong> 1 comprimido, 1h antes do almoço, até 3 meses pós-parto.</li>
  <li><strong>Carbonato de Cálcio:</strong> 1 comprimido após o almoço e 1 após o jantar, a partir da 12ª semana de gestação até o parto.</li>
  <li><strong>Ácido Fólico:</strong> 1 comprimido ao dia até o fim da gestação.</li>
</ul>
<p>No momento, <strong>nega queixas adicionais</strong>.</p>
<p><strong>MUC:</strong></p>
<ul>
  <li><strong>Sono e vigília:</strong> 08h/dia.</li>
  <li><strong>Alimentação:</strong> Adequada e variada com redução de sódio.</li>
  <li><strong>Eliminações:</strong> Vesicointestinais presentes em condições normais.</li>
</ul>`,
    o: `<h2>AO EXAME FÍSICO</h2>
<p><strong>Estado geral:</strong> BEG, normotensa, eupneica, normocárdica, afebril.</p>
<ul>
  <li><strong>Pele:</strong> Hidratada, normocorada, anictérica, acianótica.</li>
  <li><strong>Cabeça e pescoço:</strong> Sem alterações.</li>
  <li><strong>Tórax:</strong> Simétrico com expansibilidade bilateral.</li>
  <li><strong>ACV:</strong> BCR, BNF, S/S.</li>
  <li><strong>AR:</strong> MV+ em AHT, sem RA.</li>
  <li><strong>ABD:</strong> Gravídico.</li>
  <li><strong>NEU:</strong> Glasgow 15, lúcida, orientada, responsiva.</li>
  <li><strong>EXT:</strong> Aquecidas, com pulsos periféricos cheios e simétricos, TEC &lt; 3 seg.</li>
</ul>
<p><strong>Dados obstétricos:</strong></p>
<ul>
  <li><strong>Altura uterina (AU):</strong> ____ cm</li>
  <li><strong>BCF:</strong> ____ bpm</li>
  <li><strong>Movimentos fetais:</strong> Presentes / Ausentes</li>
  <li><strong>Situação/Apresentação fetal:</strong> ____</li>
  <li><strong>Edema:</strong> ( ) Ausente ( ) Presente — ____ +/4+</li>
  <li><strong>PA:</strong> ____/____ mmHg &nbsp;|&nbsp; <strong>P:</strong> ____ bpm &nbsp;|&nbsp; <strong>T:</strong> ____°C &nbsp;|&nbsp; <strong>SpO2:</strong> ____%</li>
  <li><strong>Peso atual:</strong> ____ kg &nbsp;|&nbsp; <strong>Ganho de peso:</strong> ____ kg</li>
</ul>`,
    a: `<p><strong>Gestação de risco habitual</strong>, evolução dentro da normalidade para a idade gestacional.</p>
<p><strong>Outras avaliações:</strong> ____</p>`,
    p: `<h2>PLANO</h2>
<h3>Orientações Gerais</h3>
<ul>
  <li>Alterações hormonais e anatômicas da gestação.</li>
  <li>Sinais de alarme (sangramento, dor abdominal intensa, cefaleia, edema súbito, diminuição dos MF).</li>
  <li>Alimentação variada, rica em fibras, verduras, leguminosas e proteínas.</li>
  <li>Evitar alimentos com alto teor de sódio e índice glicêmico elevado.</li>
  <li>Ergonomia ao levantar e postura na gestação.</li>
  <li>Reforço sobre amamentação na hora de ouro do parto e pós-parto.</li>
  <li>Exercícios físicos sob orientação profissional.</li>
</ul>
<h3>Prescrição</h3>
<ul>
  <li><strong>Sulfato Ferroso:</strong> 1 comp, 1h antes do almoço, até 3 meses pós-parto.</li>
  <li><strong>Carbonato de Cálcio:</strong> 1 comp após almoço + 1 comp após jantar, a partir da 12ª semana até o parto.</li>
  <li><strong>Ácido Fólico:</strong> 1 comp ao dia até o fim da gestação.</li>
</ul>
<h3>Conduta</h3>
<ul>
  <li>Aguardo resultados de exames solicitados.</li>
  <li>Prescrevo exames do ____º trimestre.</li>
  <li>Encaminho à sala de vacinas e ao teste rápido.</li>
  <li>Oriento retorno em: <strong>____</strong>.</li>
</ul>`
  }],

  "Urgência": [{
    titulo: " URGÊNCIA / ACOLHIMENTO COM CLASSIFICAÇÃO DE RISCO",
    s: `<h2>URGÊNCIA / ACOLHIMENTO COM CLASSIFICAÇÃO DE RISCO</h2>
<p>Paciente vem à unidade com: <strong>____</strong>.</p>
<p><strong>Início dos sintomas:</strong> ____ &nbsp;|&nbsp; <strong>Duração:</strong> ____</p>
<p><strong>HMP:</strong> ____</p>
<ul>
  <li>Alergias: ____</li>
  <li>Medicamentos em uso: ____</li>
  <li>Doenças pré-existentes: ____</li>
</ul>`,
    o: `<h2>AO EXAME FÍSICO</h2>
<p><strong>PA:</strong> ____/____ mmHg &nbsp;|&nbsp; <strong>P:</strong> ____ bpm &nbsp;|&nbsp; <strong>FR:</strong> ____ ipm &nbsp;|&nbsp; <strong>T:</strong> ____°C &nbsp;|&nbsp; <strong>SpO2:</strong> ____% &nbsp;|&nbsp; <strong>Dor:</strong> ____/10</p>
<p><strong>Estado geral:</strong> ____</p>
<ul>
  <li><strong>Pele:</strong> ____</li>
  <li><strong>Cardiopulmonar:</strong> ____</li>
  <li><strong>Abdome:</strong> ____</li>
  <li><strong>Neurológico:</strong> Glasgow ____, ____</li>
  <li><strong>Extremidades:</strong> ____</li>
</ul>
<p><strong>Glicemia capilar:</strong> ____ mg/dL</p>`,
    a: `<p><strong>Hipótese diagnóstica:</strong> ____</p>
<p><strong>Classificação de risco:</strong> ( ) Vermelho &nbsp;( ) Laranja &nbsp;( ) Amarelo &nbsp;( ) Verde &nbsp;( ) Azul</p>`,
    p: `<h2>PLANO</h2>
<ul>
  <li>Condutas imediatas: ____</li>
  <li>Medicamentos administrados: ____</li>
  <li>Encaminhamento: ____</li>
  <li>Orientações ao paciente/cuidador: ____</li>
  <li>Retorno / seguimento: ____</li>
</ul>`
  }],

  "Curativo": [{
    titulo: " CURATIVO / TRATAMENTO DE FERIDA",
    s: `<h2>CURATIVO / TRATAMENTO DE FERIDA</h2>
<p>Paciente vem à unidade para <strong>realização de curativo</strong>. Acompanhado por: <strong>___________________</strong>.</p>
<p><strong>Histórico da ferida:</strong></p>
<ul>
  <li><strong>Origem/Causa:</strong> ( ) Cirúrgica &nbsp;( ) Traumática &nbsp;( ) Úlcera por pressão &nbsp;( ) Úlcera venosa &nbsp;( ) Úlcera arterial &nbsp;( ) Diabética &nbsp;( ) Queimadura &nbsp;( ) Outra: ____</li>
  <li><strong>Data de início da ferida:</strong> ____</li>
  <li><strong>Tempo de evolução:</strong> ____</li>
  <li><strong>Tratamentos anteriores:</strong> ____</li>
  <li><strong>Alergias a coberturas ou antissépticos:</strong> ( ) Não &nbsp;( ) Sim — ____</li>
</ul>
<p><strong>Queixas atuais:</strong></p>
<ul>
  <li>Dor: ( ) Ausente &nbsp;( ) Presente — intensidade: ____/10 &nbsp;|&nbsp; Tipo: ____</li>
  <li>Sintomas sistêmicos: ____</li>
</ul>`,
    o: `<h2>AVALIAÇÃO DO CURATIVO ANTERIOR E DA FERIDA</h2>
<p><strong>Curativo anterior:</strong></p>
<ul>
  <li>Cobertura utilizada: ____</li>
  <li>Condição ao remover: ( ) Íntegra &nbsp;( ) Descolada &nbsp;( ) Saturada &nbsp;( ) Aderida</li>
</ul>
<p><strong>Avaliação da ferida:</strong></p>
<ul>
  <li><strong>Localização:</strong> ____</li>
  <li><strong>Dimensões:</strong> C: ____ cm × L: ____ cm × P: ____ cm</li>
  <li><strong>Leito da ferida:</strong> ( ) Granulação (vermelho) &nbsp;( ) Esfacelo (amarelo) &nbsp;( ) Necrose coagulativa (preto) &nbsp;( ) Epitelização (rosa)</li>
  <li><strong>Exsudato:</strong> Quantidade: ( ) Ausente &nbsp;( ) Escasso &nbsp;( ) Moderado &nbsp;( ) Abundante &nbsp;|&nbsp; Aspecto: ( ) Seroso &nbsp;( ) Serossanguinolento &nbsp;( ) Sanguinolento &nbsp;( ) Purulento</li>
  <li><strong>Odor:</strong> ( ) Ausente &nbsp;( ) Presente — ____</li>
  <li><strong>Borda da ferida:</strong> ( ) Regular &nbsp;( ) Irregular &nbsp;( ) Macerada &nbsp;( ) Endurecida &nbsp;( ) Descolada (tunneling/undermining)</li>
  <li><strong>Pele perilesional:</strong> ( ) Íntegra &nbsp;( ) Macerada &nbsp;( ) Eritematosa &nbsp;( ) Ressecada &nbsp;( ) Descamativa &nbsp;( ) Edemaciada</li>
  <li><strong>Sinais de infecção:</strong> ( ) Ausentes &nbsp;( ) Presentes — dor ↑, eritema, calor, edema, secreção purulenta, febre</li>
</ul>`,
    a: `<p><strong>Classificação da ferida:</strong> ____</p>
<p><strong>Fase de cicatrização:</strong> ( ) Inflamatória &nbsp;( ) Proliferativa &nbsp;( ) Remodelação</p>
<p><strong>Evolução em relação ao curativo anterior:</strong> ( ) Melhora &nbsp;( ) Estável &nbsp;( ) Piora</p>
<p><strong>Outras avaliações:</strong> ____</p>`,
    p: `<h2>PLANO</h2>
<h3>Técnica Realizada</h3>
<ul>
  <li>Irrigação da ferida com SF 0,9% em jato.</li>
  <li>Desbridamento: ( ) Não realizado &nbsp;( ) Mecânico &nbsp;( ) Enzimático (papaína ___%) &nbsp;( ) Autolítico</li>
  <li><strong>Cobertura escolhida:</strong> ____</li>
  <li>Justificativa da cobertura: ____</li>
  <li>Curativo fixado com: ____</li>
</ul>
<h3>Orientações</h3>
<ul>
  <li>Manter curativo limpo e seco.</li>
  <li>Não retirar o curativo antes do prazo indicado.</li>
  <li>Sinais de alerta para retorno imediato: aumento da dor, febre, cheiro fétido, saída de secreção.</li>
  <li>Nutrição adequada (proteínas, Vitamina C, zinco) para favorecer a cicatrização.</li>
  <li>Hidratação adequada.</li>
</ul>
<h3>Conduta</h3>
<ul>
  <li>Próxima troca de curativo: <strong>____</strong>.</li>
  <li>Encaminhamento: ____</li>
  <li>Registro fotográfico: ( ) Realizado &nbsp;( ) Não realizado</li>
</ul>`
  }],

  "CCO": [{
    titulo: "🔬 COLETA DE CITOLOGIA ONCÓTICA (CCO / PREVENTIVO)",
    s: `<h2>COLETA DE CCO — PREVENTIVO DO COLO DO ÚTERO</h2>
<p>Paciente vem à unidade para <strong>realização do exame preventivo do colo do útero (CCO)</strong>.</p>
<p><strong>Última coleta:</strong> ____</p>
<p><strong>Resultado anterior:</strong> ____</p>
<p><strong>MUC:</strong></p>
<ul>
  <li>Data da última menstruação (DUM): ____</li>
  <li>Gestante: ( ) Sim &nbsp;( ) Não</li>
  <li>Método anticoncepcional em uso: ____</li>
  <li>Relação sexual nas últimas 48h: ( ) Sim &nbsp;( ) Não</li>
  <li>Uso de duchas, cremes ou medicamentos vaginais nas últimas 48h: ( ) Sim &nbsp;( ) Não</li>
  <li>Queixas vaginais: ____</li>
</ul>`,
    o: `<h2>EXAME FÍSICO</h2>
<ul>
  <li><strong>Inspeção da genitália externa:</strong> ____</li>
  <li><strong>Exame especular:</strong> Colo visualizado: ( ) Sim &nbsp;( ) Não. Aspecto do colo: ____. Secreção: ____.</li>
  <li><strong>Coleta:</strong> Realizada com espátula de Ayre (ectocérvice) e escova endocervical. Material fixado em lâmina com álcool 96%. Identificação correta.</li>
</ul>`,
    a: `<p>Coleta de CCO realizada de acordo com protocolo vigente. Material enviado ao laboratório para análise citológica.</p>
<p><strong>Observações:</strong> ____</p>`,
    p: `<h2>PLANO</h2>
<ul>
  <li>Material enviado ao laboratório: ____</li>
  <li>Orientação sobre o prazo de resultado e necessidade de buscar o resultado.</li>
  <li>Orientações sobre sinais de alerta: sangramento pós-coito, corrimento com odor, sangramento intermenstrual.</li>
  <li>Reforço sobre a periodicidade: anual por 2 anos consecutivos; se negativos, a cada 3 anos.</li>
  <li>Oriento retorno com resultado para avaliação: ____</li>
</ul>`
  }],

  "Teste rápido": [{
    titulo: "💉 TESTE RÁPIDO (TR)",
    s: `<h2>TESTE RÁPIDO</h2>
<p>Paciente vem à unidade para <strong>realização de teste(s) rápido(s)</strong>.</p>
<p><strong>Motivo:</strong> ( ) Rotina pré-natal &nbsp;( ) Suspeita de IST &nbsp;( ) PEP &nbsp;( ) Solicitação espontânea &nbsp;( ) Outro: ____</p>
<p><strong>Histórico:</strong> ____</p>
<ul>
  <li>Testes anteriores: ____</li>
  <li>Parceiro(s) com diagnóstico de IST: ( ) Sim &nbsp;( ) Não &nbsp;( ) Desconhecido</li>
</ul>`,
    o: `<h2>TESTES REALIZADOS</h2>
<ul>
  <li>TR HIV: ( ) Reagente &nbsp;( ) Não Reagente &nbsp;( ) Indeterminado</li>
  <li>TR Sífilis (VDRL/RPR): ( ) Reagente — título: ____ &nbsp;( ) Não Reagente</li>
  <li>TR Hepatite B (HBsAg): ( ) Reagente &nbsp;( ) Não Reagente</li>
  <li>TR Hepatite C (Anti-HCV): ( ) Reagente &nbsp;( ) Não Reagente</li>
  <li>TR Dengue (NS1/IgM/IgG): ( ) Reagente &nbsp;( ) Não Reagente</li>
  <li>TR Gravidez (βHCG): ( ) Reagente &nbsp;( ) Não Reagente</li>
</ul>
<p><strong>Coleta realizada por:</strong> Punção digital / Punção venosa.</p>`,
    a: `<p><strong>Resultado(s) interpretado(s) conforme PCDT vigente.</strong></p>
<p><strong>Hipótese diagnóstica:</strong> ____</p>`,
    p: `<h2>PLANO</h2>
<ul>
  <li>Resultado comunicado ao paciente com aconselhamento pré e pós-teste.</li>
  <li>Notificação compulsória realizada (se aplicável): ____</li>
  <li>Conduta terapêutica: ____</li>
  <li>Parceiros convocados para triagem: ( ) Sim &nbsp;( ) Não &nbsp;( ) Não se aplica</li>
  <li>Encaminhamento ao SAE/CAPS: ( ) Sim &nbsp;( ) Não</li>
  <li>Oriento retorno: ____</li>
</ul>`
  }]
};

/* ============================================================
   DADOS: CALCULADORA — GRUPOS E ITENS
   ============================================================ */
const CALC_GRUPOS = [
  { id:"g1", label:"1. Fatores Socioambientais", items:[
    { id:"c1_1",  label:"Raça negra (preta ou parda)",                             pts:1 },
    { id:"c1_2",  label:"Altura da gestante < 1,45 m",                             pts:1 },
    { id:"c1_3",  label:"Idade da gestante < 14 anos ou > 35 anos",                pts:1 },
    { id:"c1_4",  label:"Situação familiar instável",                               pts:1 },
    { id:"c1_5",  label:"Não aceitação da gestação",                                pts:1 },
    { id:"c1_6",  label:"Escolaridade: não sabe ler ou escrever",                   pts:1 },
    { id:"c1_7",  label:"Fumante ativa",                                            pts:2 },
    { id:"c1_8",  label:"Dependente de droga lícita ou ilícita",                    pts:2 },
    { id:"c1_9",  label:"Anomalias estruturais do aparelho reprodutor",             pts:2 },
    { id:"c1_10", label:"Gestante exposta a risco ocupacional",                     pts:1 },
    { id:"c1_11", label:"Gestante exposta a condições ambientais desfavoráveis",   pts:1 }
  ]},
  { id:"g2", label:"2. Avaliação Nutricional", items:[
    { id:"c2_1", label:"Baixo peso (IMC < 18,5) ou ganho de peso inadequado", pts:1,  type: 'radio', radioGroup: 'imc' },
    { id:"c2_2", label:"Sobrepeso (IMC 25 – 29,9)",                           pts:1,  type: 'radio', radioGroup: 'imc' },
    { id:"c2_3", label:"Obesidade (IMC 30 – 39,9)",                           pts:5,  type: 'radio', radioGroup: 'imc' },
    { id:"c2_4", label:"Obesidade mórbida (IMC ≥ 40)",                        pts:10, type: 'radio', radioGroup: 'imc' },
    { id:"c2_5", label:"Anemia",                                              pts:1,  type: 'checkbox' }
  ]},
  { id:"g3", label:"3. Antecedentes Obstétricos", items:[
    { id:"c3_1",  label:"Até 2 abortos espontâneos",                                   pts:5,  type: 'radio', radioGroup: 'aborto' },
    { id:"c3_2",  label:"Mais de 2 abortos espontâneos",                               pts:10, type: 'radio', radioGroup: 'aborto' },
    { id:"c3_3",  label:"Natimorto ou óbito fetal sem causa determinada",              pts:5  },
    { id:"c3_4",  label:"Prematuro anterior",                                          pts:5,  type: 'radio', radioGroup: 'prematuro' },
    { id:"c3_5",  label:"Mais de 1 prematuro anterior",                                pts:10, type: 'radio', radioGroup: 'prematuro' },
    { id:"c3_6",  label:"RN com crescimento intrauterino restrito (CIUR)",             pts:5  },
    { id:"c3_7",  label:"RN com malformação complexa",                                 pts:5  },
    { id:"c3_8",  label:"História de tromboembolia",                                   pts:5  },
    { id:"c3_9",  label:"Intervalo interpartal < 2 anos ou > 5 anos",                  pts:2  },
    { id:"c3_10", label:"Hipertensão arterial crônica",                                pts:5  },
    { id:"c3_11", label:"Pré-eclâmpsia ou eclâmpsia anterior",                         pts:10 },
    { id:"c3_12", label:"Placenta prévia ou DPP anterior",                             pts:5  },
    { id:"c3_13", label:"Cirurgia uterina anterior (incl. ≥ 3 cesáreas)",              pts:5  },
    { id:"c3_14", label:"Incompetência istmocervical",                                 pts:10 },
    { id:"c3_15", label:"Diabetes gestacional anterior",                               pts:10 },
    { id:"c3_16", label:"Nuliparidade ou grande multiparidade (≥ 5 gestações)",        pts:3  },
    { id:"c3_17", label:"Acretismo placentário anterior",                              pts:2  },
    { id:"c3_18", label:"Psicose puerperal anterior",                                  pts:10 }
  ]},
  { id:"g4", label:"4. Fator de Risco na Gestação Atual", items:[
    { id:"c4_1",  label:"Ameaça de aborto",                                               pts:5  },
    { id:"c4_2",  label:"Placenta prévia (após 28ª semana)",                              pts:10 },
    { id:"c4_3",  label:"Câncer materno",                                                 pts:10 },
    { id:"c4_4",  label:"Isoimunização / doença hemolítica",                              pts:10 },
    { id:"c4_5",  label:"Infertilidade tratada",                                          pts:5  },
    { id:"c4_6",  label:"Malformação congênita ou arritmia fetal",                        pts:10 },
    { id:"c4_7",  label:"Crescimento intrauterino restrito (CIUR)",                       pts:10 },
    { id:"c4_8",  label:"Polidrâmnio ou oligodrâmnio",                                    pts:10 },
    { id:"c4_9",  label:"Hipertensão gestacional / pré-eclâmpsia",                        pts:10 },
    { id:"c4_10", label:"Citologia cervical anormal (NIC II ou NIC III)",                 pts:10 },
    { id:"c4_11", label:"Diabetes gestacional",                                           pts:10 },
    { id:"c4_12", label:"Gemelaridade",                                                   pts:10 },
    { id:"c4_13", label:"Incompetência istmocervical atual",                              pts:10 },
    { id:"c4_14", label:"Trabalho de parto prematuro",                                    pts:10 }
  ]},
  { id:"g5", label:"5. Condições Clínicas Pré-existentes", items:[
    { id:"c5_1",  label:"Cirurgia bariátrica há menos de 5 anos",                                              pts:10 },
    { id:"c5_2",  label:"Acidente vascular encefálico (AVE)",                                                  pts:5  },
    { id:"c5_3",  label:"Aterosclerose",                                                                       pts:10 },
    { id:"c5_4",  label:"Alteração osteoarticular de interesse obstétrico",                                    pts:5  },
    { id:"c5_5",  label:"Cardiopatia",                                                                         pts:5  },
    { id:"c5_6",  label:"Doenças autoimunes",                                                                  pts:10 },
    { id:"c5_7",  label:"Doença inflamatória intestinal crônica",                                              pts:10 },
    { id:"c5_8",  label:"Endocrinopatias",                                                                     pts:5  },
    { id:"c5_9",  label:"Epilepsia",                                                                           pts:10 },
    { id:"c5_10", label:"Doenças infecciosas (sífilis, HIV, hepatite, TB complicada)",                         pts:10 },
    { id:"c5_11", label:"Acretismo placentário",                                                               pts:5  },
    { id:"c5_12", label:"Ginecopatias (malformação uterina, miomatose, tumores anexiais)",                     pts:10 },
    { id:"c5_13", label:"Nefropatia, pneumopatia ou hematopatia",                                              pts:10 },
    { id:"c5_14", label:"Tromboembolismo ou trombofilia",                                                      pts:10 }
  ]},
  { id:"g6", label:"6. Intercorrências Clínicas (Gestação Atual)", items:[
    { id:"c6_1", label:"ITU complicada, gengivite, periodontite, nefropatias, pneumopatias, cardiopatias, hepatopatias, toxoplasmose ativa", pts:10 },
    { id:"c6_2", label:"Imunossupressão",                                                                                                    pts:10 },
    { id:"c6_3", label:"Doença psiquiátrica grave",                                                                                          pts:10 },
    { id:"c6_4", label:"Hiperêmese gravídica refratária (perda > 5% do peso)",                                                               pts:10 },
    { id:"c6_5", label:"Anemia grave (Hemoglobina < 8 g/dL)",                                                                               pts:10 }
  ]}
];

/* ============================================================
   UTILS
   ============================================================ */
function mostrarToast(msg, type) {
  const toast = document.getElementById("toast");
  const isError = type === "erro" || type === "error";
  toast.classList.toggle("error", isError);
  toast.innerHTML = (isError ? "⚠ " : "✓ ") + (msg || "Copiado com sucesso!");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto).then(() => mostrarToast()).catch(() => {
    const t = document.createElement("textarea");
    t.value = texto;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    mostrarToast();
  });
}

/* Converte innerHTML do editor rich text para texto plano formatado */
function richToPlainText(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  // Substituir tags de bloco por quebras
  div.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(el => {
    el.insertAdjacentText("afterbegin", "\n");
    el.insertAdjacentText("beforeend", "\n");
  });
  div.querySelectorAll("li").forEach(el => {
    el.insertAdjacentText("afterbegin", "• ");
    el.insertAdjacentText("beforeend", "\n");
  });
  div.querySelectorAll("p,br").forEach(el => {
    if (el.tagName === "P") el.insertAdjacentText("beforeend", "\n");
    if (el.tagName === "BR") el.replaceWith("\n");
  });
  div.querySelectorAll("hr").forEach(el => el.replaceWith("\n——————————\n"));
  div.querySelectorAll("ul,ol").forEach(el => el.insertAdjacentText("beforeend", "\n"));
  return div.innerText.replace(/\n{3,}/g, "\n\n").trim();
}

/* ============================================================
   NAVEGAÇÃO
   ============================================================ */
const VIEWS = ["meds","vacinas","calculadora","evolucoes"];
function switchView(view) {
  VIEWS.forEach(v => {
    const tab = document.getElementById("tab-" + v);
    tab.classList.toggle("active", v === view);
    tab.setAttribute("aria-selected", v === view);
    document.getElementById("view-" + v).style.display = (v === view) ? "block" : "none";
  });
  if (view === "vacinas" && grupoVacinaAtivo === "") setVacinaFilter("Crianças");
  if (view === "evolucoes" && grupoEvolucaoAtivo === "") setEvolucaoFilter("Hiperdia");
}

/* ============================================================
   ABA: PRESCRIÇÕES
   ============================================================ */
const catMap = {};
CATS.forEach(c => { catMap[c.id] = c; });

const filterBar = document.getElementById("filterBar");
CATS.forEach(cat => {
  const btn = document.createElement("button");
  btn.className = "filter-btn" + (cat.id === "Todos" ? " active" : "");
  btn.style.setProperty("--cc", cat.cc);
  btn.dataset.cat = cat.id;
  const dot = document.createElement("span");
  dot.className = "filter-dot";
  dot.style.background = cat.cc;
  btn.appendChild(dot);
  btn.appendChild(document.createTextNode(cat.label));
  btn.addEventListener("click", () => setFilter(cat.id));
  filterBar.appendChild(btn);
});

let filtroAtivo = "Todos";
function setFilter(id) {
  filtroAtivo = id;
  document.querySelectorAll(".filter-btn").forEach(b => {
    const active = b.dataset.cat === id;
    b.classList.toggle("active", active);
    if (active && id !== "Todos") {
      b.style.background = catMap[id].cc;
      b.style.borderColor = catMap[id].cc;
      b.style.color = "#fff";
    } else if (active && id === "Todos") {
      b.style.background = catMap["Todos"].cc;
      b.style.borderColor = catMap["Todos"].cc;
      b.style.color = "#fff";
    } else {
      b.style.background = "";
      b.style.borderColor = "";
      b.style.color = "";
    }
  });
  renderizarMeds();
}

const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
searchInput.addEventListener("input", () => {
  clearBtn.style.display = searchInput.value ? "block" : "none";
  renderizarMeds();
});

function limparBusca() {
  searchInput.value = "";
  clearBtn.style.display = "none";
  renderizarMeds();
}

function renderizarMeds() {
  const busca = searchInput.value.toLowerCase().trim();
  const lista = document.getElementById("lista");
  const counter = document.getElementById("resultsCount");
  lista.innerHTML = "";

  const filtrados = MEDS.filter(m => {
    const matchCat = filtroAtivo === "Todos" || m.cat === filtroAtivo;
    const matchSearch = !busca || m.n.toLowerCase().includes(busca) || m.c.toLowerCase().includes(busca);
    return matchCat && matchSearch;
  });

  counter.innerHTML = `<span>${filtrados.length}</span> medicamento${filtrados.length !== 1 ? "s" : ""} encontrado${filtrados.length !== 1 ? "s" : ""}`;

  if (filtrados.length === 0) {
    lista.innerHTML = `<div class="empty"><div class="empty-icon">🔍</div><h3>Nenhum resultado</h3><p>Tente outros termos ou mude o filtro</p></div>`;
    return;
  }

  filtrados.forEach((m, i) => {
    const cat = catMap[m.cat] || { cc: "#888", label: m.cat };
    const card = document.createElement("div");
    card.className = "card";
    card.style.setProperty("--cc", cat.cc);
    card.style.animationDelay = Math.min(i * 0.03, 0.3) + "s";

    const esc = s => s.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, "&quot;");

    card.innerHTML = `
    <div class="card-top">
      <div class="card-stripe"></div>
      <div class="card-body">
        <div class="card-header">
          <div>
            <div class="card-name">${m.n}</div>
            <div class="card-conc">${m.c}</div>
          </div>
          <span class="cat-tag">${cat.label}</span>
        </div>
        <div class="info-row"><span class="info-label">Apresentação</span><span class="info-val">${m.a}</span></div>
        <div class="info-row"><span class="info-label">Indicação</span><span class="info-val">${m.u}</span></div>
        <div class="respaldo"><strong>Respaldo Legal</strong>${m.r}</div>
      </div>
    </div>
    <button class="copy-btn" onclick="copiarMed('${esc(m.n)}','${esc(m.c)}','${esc(m.a)}','${esc(m.u)}','${esc(m.r)}')"> &nbsp;COPIAR PARA O PEC</button>`;
    lista.appendChild(card);
  });
}

function copiarMed(n, c, a, u, r) {
  copiarTexto(`${n} ${c}, ${a}.\nIndicação: ${u}\nProtocolo: ${r}.`);
}

/* ============================================================
   ABA: CALENDÁRIO VACINAL
   ============================================================ */
const vacinaFiltersEl = document.getElementById("vacinaFilters");
GRUPOS_VACINA.forEach(grupo => {
  const btn = document.createElement("button");
  btn.className = "sub-btn";
  btn.dataset.grupo = grupo;
  btn.innerText = grupo;
  btn.addEventListener("click", () => setVacinaFilter(grupo));
  vacinaFiltersEl.appendChild(btn);
});

let grupoVacinaAtivo = "";
function setVacinaFilter(grupo) {
  grupoVacinaAtivo = grupo;
  document.querySelectorAll("#vacinaFilters .sub-btn").forEach(b => b.classList.toggle("active", b.dataset.grupo === grupo));
  renderizarVacinas();
}

function renderizarVacinas() {
  const lista = document.getElementById("lista-vacinas");
  lista.innerHTML = "";
  const cronograma = VACINAS[grupoVacinaAtivo] || [];

  cronograma.forEach((periodo, i) => {
    const divGroup = document.createElement("div");
    divGroup.className = "timeline-group";
    divGroup.style.animation = `fadeUp 0.3s ease ${i * 0.05}s both`;
    let html = `<div class="timeline-age">${periodo.mes}</div>`;
    periodo.vacinas.forEach(vac => {
      html += `<div class="vac-item">
        <div class="vac-header"><span class="vac-name">${vac.n}</span><span class="vac-via">${vac.via}</span></div>
        <div class="vac-dose">${vac.dose}</div>
        <div class="vac-desc">${vac.d}</div>
      </div>`;
    });
    divGroup.innerHTML = html;
    lista.appendChild(divGroup);
  });
}

/* ============================================================
   RICH TEXT TOOLBAR
   ============================================================ */
function criarToolbar(editorId) {
  const toolbar = document.createElement("div");
  toolbar.className = "rich-toolbar";
  toolbar.setAttribute("data-for", editorId);

  const btns = [
    { cmd:"bold",           label:"<b>N</b>",       title:"Negrito" },
    { cmd:"italic",         label:"<i>I</i>",        title:"Itálico" },
    { cmd:"underline",      label:"<u>S</u>",        title:"Sublinhado" },
    { sep: true },
    { cmd:"insertUnorderedList", label:"• Lista",    title:"Lista com marcadores" },
    { cmd:"insertOrderedList",   label:"1. Lista",   title:"Lista numerada" },
    { sep: true },
    { cmd:"formatBlock",    label:"Título",          title:"Transformar em título", value:"h3" },
    { cmd:"formatBlock",    label:"Normal",          title:"Texto normal", value:"p" },
    { sep: true },
    { cmd:"removeFormat",   label:"✕ Form.",         title:"Remover formatação" }
  ];

  btns.forEach(b => {
    if (b.sep) {
      const sep = document.createElement("span");
      sep.className = "tb-btn tb-sep";
      toolbar.appendChild(sep);
    } else {
      const btn = document.createElement("button");
      btn.className = "tb-btn";
      btn.innerHTML = b.label;
      btn.title = b.title;
      btn.type = "button";
      btn.addEventListener("mousedown", e => {
        e.preventDefault();
        const editor = document.getElementById(editorId);
        editor.focus();
        if (b.value) {
          document.execCommand(b.cmd, false, b.value);
        } else {
          document.execCommand(b.cmd, false, null);
        }
      });
      toolbar.appendChild(btn);
    }
  });
  return toolbar;
}

/* ============================================================
   ABA: EVOLUÇÕES (RICH TEXT)
   ============================================================ */
const evolucaoFiltersEl = document.getElementById("evolucaoFilters");
GRUPOS_EVOLUCAO.forEach(grupo => {
  const btn = document.createElement("button");
  btn.className = "sub-btn";
  btn.dataset.grupo = grupo;
  btn.innerText = grupo;
  btn.addEventListener("click", () => setEvolucaoFilter(grupo));
  evolucaoFiltersEl.appendChild(btn);
});

let grupoEvolucaoAtivo = "";
function setEvolucaoFilter(grupo) {
  grupoEvolucaoAtivo = grupo;
  document.querySelectorAll("#evolucaoFilters .sub-btn").forEach(b => b.classList.toggle("active", b.dataset.grupo === grupo));
  renderizarEvolucoes();
}

function renderizarEvolucoes() {
  const lista = document.getElementById("lista-evolucoes");
  lista.innerHTML = "";
  const modelos = EVOLUCOES[grupoEvolucaoAtivo] || [];

  modelos.forEach((modelo, index) => {
    const card = document.createElement("div");
    card.className = "soap-card";
    card.style.animationDelay = (index * 0.05) + "s";

    const sid = `s-${grupoEvolucaoAtivo}-${index}`;
    const oid = `o-${grupoEvolucaoAtivo}-${index}`;
    const aid = `a-${grupoEvolucaoAtivo}-${index}`; // eslint-disable-line no-unused-vars
    const pid = `p-${grupoEvolucaoAtivo}-${index}`; // eslint-disable-line no-unused-vars
    const fid = `f-${grupoEvolucaoAtivo}-${index}`;

    card.innerHTML = `<div class="soap-header">${modelo.titulo}</div>`;

    // Função para criar cada seção SOAP
    function criarSec(label, id, conteudo) {
      const sec = document.createElement("div");
      sec.className = "soap-section";
      const h3 = document.createElement("h3");
      h3.textContent = label;
      sec.appendChild(h3);

      const toolbar = criarToolbar("editor-" + id);
      sec.appendChild(toolbar);

      const editor = document.createElement("div");
      editor.contentEditable = "true";
      editor.className = "soap-rich-editor";
      editor.id = "editor-" + id;
      editor.innerHTML = conteudo;
      sec.appendChild(editor);

      const copyBtn = document.createElement("button");
      copyBtn.className = "soap-btn";
      const btnLabel = label.split(" — ")[0];
      copyBtn.textContent = " COPIAR " + btnLabel;
      copyBtn.addEventListener("click", () => {
        copiarTexto(richToPlainText(editor.innerHTML));
      });
      sec.appendChild(copyBtn);
      return sec;
    }

    card.appendChild(criarSec("S — SUBJETIVO", sid, modelo.s));
    card.appendChild(criarSec("O — OBJETIVO", oid, modelo.o));
    card.appendChild(criarSec("A — AVALIAÇÃO", aid, modelo.a));
    card.appendChild(criarSec("P — PLANO", pid, modelo.p));

    const btnFull = document.createElement("button");
    btnFull.className = "soap-btn soap-full";
    btnFull.textContent = " COPIAR SOAP COMPLETO";
    btnFull.addEventListener("click", () => {
      const sVal = richToPlainText(document.getElementById("editor-" + sid).innerHTML);
      const oVal = richToPlainText(document.getElementById("editor-" + oid).innerHTML);
      const aVal = richToPlainText(document.getElementById("editor-" + aid).innerHTML);
      const pVal = richToPlainText(document.getElementById("editor-" + pid).innerHTML);
      copiarTexto(`SUBJETIVO\n${sVal}\n\nOBJETIVO\n${oVal}\n\nAVALIAÇÃO\n${aVal}\n\nPLANO\n${pVal}`);
    });
    card.appendChild(btnFull);

    lista.appendChild(card);
  });
}

/* ============================================================
   CALCULADORA DE RISCO GESTACIONAL — GERAÇÃO DINÂMICA
   ============================================================ */

const CALC_STORAGE_KEY = 'gestationalRiskFormData';

// Salva o estado atual do formulário no localStorage
function saveCalculatorState() {
  const state = {
    inputs: {},
    checkboxes: {}
  };
  document.querySelectorAll('.calc-id-grid .field-input').forEach(input => {
    state.inputs[input.id] = input.value;
  });
  document.querySelectorAll('#gestationalRiskForm input[type="checkbox"]').forEach(cb => {
    state.checkboxes[cb.id] = cb.checked;
  });
  localStorage.setItem(CALC_STORAGE_KEY, JSON.stringify(state));
}

// Carrega o estado do formulário do localStorage
function loadCalculatorState() {
  const savedState = localStorage.getItem(CALC_STORAGE_KEY);
  if (savedState) {
    const state = JSON.parse(savedState);
    Object.keys(state.inputs).forEach(id => {
      const input = document.getElementById(id);
      if (input) input.value = state.inputs[id];
    });
    Object.keys(state.checkboxes).forEach(id => {
      const cb = document.getElementById(id);
      if (cb) cb.checked = state.checkboxes[id];
    });
  }
}

function buildCalculadora() {
  const container = document.getElementById("calc-grupos-container");
  CALC_GRUPOS.forEach(grupo => {
    const card = document.createElement("div");
    card.className = "calc-group-card";

    const trigger = document.createElement("div");
    trigger.className = "calc-group-trigger";
    trigger.onclick = () => triggerGroupToggle(grupo.id);

    const title = document.createElement("span");
    title.className = "calc-group-title";
    title.innerHTML = `<span class="calc-group-num">${grupo.id.replace("g","")}</span>${grupo.label}`;

    const toggleLabel = document.createElement("label");
    toggleLabel.className = "toggle-switch";
    toggleLabel.onclick = e => e.stopPropagation();

    const chk = document.createElement("input");
    chk.type = "checkbox";
    chk.id = "main-" + grupo.id;
    chk.onchange = () => toggleSpecifics(grupo.id, chk.checked);
    chk.onchange = () => {
      toggleSpecifics(grupo.id, chk.checked);
      saveCalculatorState();
    };

    const slider = document.createElement("span");
    slider.className = "toggle-slider";

    toggleLabel.appendChild(chk);
    toggleLabel.appendChild(slider);
    trigger.appendChild(title);
    trigger.appendChild(toggleLabel);

    const specifics = document.createElement("div");
    specifics.className = "calc-specifics";
    specifics.id = "specifics-" + grupo.id;

    grupo.items.forEach(item => {
      const row = document.createElement("div");
      row.className = "calc-item";

      const inputEl = document.createElement("input");
      inputEl.type = item.type || "checkbox"; // Padrão para checkbox
      if (inputEl.type === 'radio') {
        inputEl.name = `${grupo.id}-${item.radioGroup}`; // Agrupa os radios
      }
      inputEl.id = item.id;
      inputEl.setAttribute("data-pts", item.pts);
      inputEl.setAttribute("data-group-id", grupo.id); // Linka item ao grupo
      inputEl.onchange = () => {
        // Se um item for marcado, garante que o grupo principal esteja ativo
        if (inputEl.checked) document.getElementById("main-" + grupo.id).checked = true;
        calculateRisk();
        saveCalculatorState();
      };

      const lbl = document.createElement("label");
      lbl.htmlFor = item.id;
      lbl.innerHTML = `${item.label} <span class="pts-badge">${item.pts} pt${item.pts !== 1 ? "s" : ""}</span>`;

      row.appendChild(inputEl);
      row.appendChild(lbl);
      specifics.appendChild(row);
    });

    card.appendChild(trigger);
    card.appendChild(specifics);
    container.appendChild(card);
  });

  // Adiciona listeners para salvar o estado dos campos de identificação
  document.querySelectorAll('.calc-id-grid .field-input').forEach(input => {
    input.addEventListener('input', saveCalculatorState);
  });
}

function triggerGroupToggle(groupId) {
  const checkbox = document.getElementById("main-" + groupId);
  checkbox.checked = !checkbox.checked;
  toggleSpecifics(groupId, checkbox.checked);
}

function toggleSpecifics(groupId, show) {
  const panel = document.getElementById("specifics-" + groupId);
  panel.style.display = show ? "block" : "none";
  if (!show) {
    panel.querySelectorAll("input[type='checkbox']").forEach(cb => { cb.checked = false; });
    saveCalculatorState();
    calculateRisk();
  }
}

function calculateRisk() {
  let totalScore = 0;
  CALC_GRUPOS.forEach(grupo => {
    const mainCheck = document.getElementById("main-" + grupo.id);
    const panel = document.getElementById("specifics-" + grupo.id);
    // Garante que o painel esteja visível para contar os pontos
    if (mainCheck && mainCheck.checked && panel) {
      panel.style.display = "block";
      panel.querySelectorAll("input[type='checkbox']:checked").forEach(cb => {
        totalScore += parseInt(cb.dataset.pts || 0);
      });
    }
  });

  const plural = totalScore === 1 ? "ponto" : "pontos";
  document.getElementById("scoreDisplay").innerHTML = `${totalScore} <span>${plural}</span>`;

  const statusTag = document.getElementById("statusTag");
  const condutaBox = document.getElementById("condutaBox");
  const condutaTexto = document.getElementById("condutaTexto");

  statusTag.className = "res-status-tag";
  condutaBox.className = "res-box-info";

  if (totalScore <= 4) {
    statusTag.innerText = "✅ Risco Habitual";
    statusTag.classList.add("r-baixo");
    condutaBox.classList.add("b-baixo");
    condutaTexto.innerText = "Pré-natal realizado na APS, com reclassificação de risco a cada consulta.";
  } else if (totalScore <= 9) {
    statusTag.innerText = "⚠️ Médio Risco";
    statusTag.classList.add("r-medio");
    condutaBox.classList.add("b-medio");
    condutaTexto.innerText = "Pré-natal na APS com reclassificação a cada consulta. Pode solicitar avaliação do Alto Risco para orientação.";
  } else {
    statusTag.innerText = "🔴 Alto Risco";
    statusTag.classList.add("r-alto");
    condutaBox.classList.add("b-alto");
    condutaTexto.innerText = "Encaminhar para pré-natal de Alto Risco (AGAR-R), mantendo acompanhamento compartilhado na APS. Anexar: caderneta, doc. foto, cartão SUS, vacinas, exames, 1ª USG e plano de cuidados.";
  }
  return totalScore;
}

function resetCalculator() {
  CALC_GRUPOS.forEach(grupo => {
    const mainCheck = document.getElementById("main-" + grupo.id);
    if (mainCheck) mainCheck.checked = false;
    const panel = document.getElementById("specifics-" + grupo.id);
    if (panel) {
      panel.style.display = "none";
      panel.querySelectorAll("input[type='checkbox']").forEach(cb => { cb.checked = false; });
    }
  });
  ["id-nome","id-municipio","id-ubs","id-dn","id-tel","id-prof","id-data","id-ig"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  localStorage.removeItem(CALC_STORAGE_KEY);
  calculateRisk();
}

/* ============================================================
   FICHA DE IMPRESSÃO
   ============================================================ */
function formatarData(iso) {
  if (!iso) return "___/___/______";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function abrirFichaImpressao() {
  const score = calculateRisk();
  const itensMarcados = {};

  CALC_GRUPOS.forEach(grupo => {
    const mainCheck = document.getElementById("main-" + grupo.id);
    if (mainCheck && mainCheck.checked) {
      grupo.items.forEach(item => {
        const cb = document.getElementById(item.id);
        if (cb && cb.checked) itensMarcados[item.id] = true;
      });
    }
  });

  let classLabel, classCss, condutas;
  if (score <= 4) {
    classLabel = "RISCO HABITUAL"; classCss = "baixo";
    condutas = "Realizar pré-natal na APS, com reclassificação de risco a cada consulta.";
  } else if (score <= 9) {
    classLabel = "MÉDIO RISCO"; classCss = "medio";
    condutas = "Realizar pré-natal na APS, com reclassificação a cada consulta. Pode solicitar avaliação do alto risco para orientação.";
  } else {
    classLabel = "ALTO RISCO"; classCss = "alto";
    condutas = "Encaminhar para pré-natal de alto risco via SISREG, mantendo o acompanhamento integrado compartilhado na APS (Nota Técnica 06/2025 - SESAU/AL).";
  }

  let tbodyHtml = "";
  CALC_GRUPOS.forEach(grupo => {
    tbodyHtml += `<tr class="group-header"><td colspan="3">${grupo.label}</td></tr>`;
    grupo.items.forEach(item => {
      const marcado = itensMarcados[item.id];
      const rowCls = marcado ? " class='item-marcado'" : "";
      const chk = marcado ? "✔" : "";
      tbodyHtml += `<tr${rowCls}><td class="chk-col">${chk}</td><td>${item.label}</td><td class="pts-col">${item.pts}</td></tr>`;
    });
  });

  const nome       = document.getElementById("id-nome").value      || "________________________________________________";
  const municipio  = document.getElementById("id-municipio").value  || "________________________";
  const ubs        = document.getElementById("id-ubs").value        || "________________________";
  const dn         = formatarData(document.getElementById("id-dn").value);
  const tel        = document.getElementById("id-tel").value        || "________________________";
  const prof       = document.getElementById("id-prof").value       || "________________________";
  const data       = formatarData(document.getElementById("id-data").value);
  const ig         = document.getElementById("id-ig").value         || "________________________";

  document.getElementById("print-container").innerHTML = `
  <div class="ficha-header-inst">
    <p><strong>ESTADO DE ALAGOAS</strong><br>
    SECRETARIA DE ESTADO DA SAÚDE – SESAU<br>
    SECRETARIA EXECUTIVA DE AÇÕES ESTRATÉGICAS – SUAPAE<br>
    GERÊNCIA DE AÇÕES ESTRATÉGICAS – GAEST<br>
    SUPERVISÃO DE CUIDADOS À MULHER, CRIANÇA, ADOLESCENTE E REDE ALYNE – SCMCA</p>
  </div>
  <div class="ficha-title">INSTRUMENTO DE ESTRATIFICAÇÃO DE RISCO GESTACIONAL</div>
  <div class="ficha-subtitle">Nota Técnica Nº 06/2025 – ANEXO I</div>
  <div class="ficha-legenda">
    <div class="leg-item"><strong>✅ RISCO HABITUAL</strong> até 4 pts – pré-natal na APS, reclassificar a cada consulta</div>
    <div class="leg-item"><strong>⚠️ MÉDIO RISCO</strong> 5 a 9 pts – pré-natal na APS, pode solicitar avaliação do alto risco</div>
    <div class="leg-item"><strong>🔴 ALTO RISCO</strong> ≥ 10 pts – encaminhar para pré-natal de alto risco, manter acompanhamento integrado na APS</div>
  </div>
  <div class="ficha-campos">
    <div class="ficha-campo span3"><div class="campo-label">Nome da Gestante</div><div class="campo-valor">${nome}</div></div>
    <div class="ficha-campo"><div class="campo-label">Município</div><div class="campo-valor">${municipio}</div></div>
    <div class="ficha-campo span2"><div class="campo-label">UBS de Origem</div><div class="campo-valor">${ubs}</div></div>
    <div class="ficha-campo"><div class="campo-label">Data de Nascimento</div><div class="campo-valor">${dn}</div></div>
    <div class="ficha-campo"><div class="campo-label">Telefone</div><div class="campo-valor">${tel}</div></div>
    <div class="ficha-campo"><div class="campo-label">Enf. / Médico</div><div class="campo-valor">${prof}</div></div>
    <div class="ficha-campo"><div class="campo-label">Data da Consulta</div><div class="campo-valor">${data}</div></div>
    <div class="ficha-campo"><div class="campo-label">Idade Gestacional</div><div class="campo-valor">${ig}</div></div>
    <div class="ficha-campo"><div class="campo-label">Pontuação Total</div><div class="campo-valor" style="font-size:14px;font-weight:800;color:#002D6D;">${score} ponto${score !== 1 ? "s" : ""}</div></div>
  </div>
  <table class="ficha-table">
    <thead>
      <tr>
        <th class="chk-col" style="width:30px">✔</th>
        <th>Critério</th>
        <th class="pts-col" style="width:50px">Pontos</th>
      </tr>
    </thead>
    <tbody>${tbodyHtml}</tbody>
  </table>
  <div class="ficha-totais">
    <div class="totais-box">
      <div class="tot-label">Pontuação Total</div>
      <div class="tot-valor">${score}</div>
      <div class="tot-sub">ponto${score !== 1 ? "s" : ""}</div>
    </div>
    <div class="class-box ${classCss}">
      <div class="class-label">Classificação</div>
      <div class="class-valor">${classLabel}</div>
      <div class="class-conduta">${condutas}</div>
    </div>
  </div>
  <div class="ficha-assinatura">
    <div class="ass-campo">
      <div class="campo-label">Assinatura do Profissional</div>
      <div class="ass-linha"></div>
    </div>
    <div class="ass-campo" style="max-width:160px">
      <div class="campo-label">Carimbo</div>
      <div style="border:1px dashed #999;height:55px;border-radius:4px;margin-top:4px;"></div>
    </div>
  </div>
  <div class="ficha-fonte">
    Instrumento gerado pelo <strong>Guia do Enfermeiro APS</strong> – Maceió/AL &nbsp;|&nbsp;
    Ref.: Nota Técnica Nº 06/2025 – SESAU/AL &nbsp;|&nbsp; © 2026 Breno Gomes Monteiro. Todos os direitos reservados..
  </div>`;

  document.getElementById("print-overlay").style.display = "block";
  document.body.style.overflow = "hidden";
}

function fecharFichaImpressao() {
  document.getElementById("print-overlay").style.display = "none";
  document.body.style.overflow = "";
}

/* ============================================================
   SPLASH SCREEN — CANVAS PATTERN + LOGIC
   ============================================================ */
(function() {
  const canvas = document.getElementById('splash-canvas');
  const ctx = canvas.getContext('2d');
  const BLUE = '#2A1FFF';
  let animId, t = 0;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = window.innerWidth  * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width  = window.innerWidth  + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function pill(x, y, w, h, r, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(-w/2 + r, -h/2);
    ctx.lineTo( w/2 - r, -h/2);
    ctx.arcTo( w/2, -h/2,  w/2,  h/2, r);
    ctx.lineTo( w/2,  h/2 - r);
    ctx.arcTo( w/2,  h/2, -w/2,  h/2, r);
    ctx.lineTo(-w/2 + r,  h/2);
    ctx.arcTo(-w/2,  h/2, -w/2, -h/2, r);
    ctx.lineTo(-w/2, -h/2 + r);
    ctx.arcTo(-w/2, -h/2,  w/2, -h/2, r);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function draw() {
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    ctx.clearRect(0, 0, cw, ch);

    const ox = Math.sin(t * 0.0004) * 14;
    const oy = Math.cos(t * 0.0003) * 10;
    const ang  = 32 * Math.PI / 180;
    const step = 110;
    const pW = 46, pH = 18, pR = 9;
    const dR = 11;

    ctx.fillStyle = BLUE;
    ctx.globalAlpha = 0.10;

    const cols = Math.ceil(cw / step) + 3;
    const rows = Math.ceil(ch / step) + 3;

    for (let r = -2; r < rows; r++) {
      for (let c = -2; c < cols; c++) {
        const x = c * step + (r % 2) * (step/2) + ox;
        const y = r * step + oy;
        if ((r + c) % 2 === 0) {
          pill(x, y, pW, pH, pR, ang);
        } else {
          ctx.beginPath();
          ctx.arc(x, y, dR, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    ctx.globalAlpha = 1;
    t++;
    animId = requestAnimationFrame(draw);
  }

  function init() { resize(); draw(); }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    draw();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();

function fecharSplash() {
  const splash = document.getElementById('splash');
  splash.classList.add('hiding');
  setTimeout(() => {
    splash.style.display = 'none';
    document.body.classList.remove('splash-active');
  }, 450);
}

function fecharSplashPara(aba) {
  fecharSplash();
  setTimeout(() => { switchView(aba); }, 300);
}

/* ============================================================ */

buildCalculadora();
loadCalculatorState(); // Carrega dados salvos ao iniciar
calculateRisk(); // Calcula o risco com base nos dados carregados
renderizarMeds();

/* ============================================================
   AUTH MODAL (LEGADO) + SUPABASE
   ============================================================ */
let legacySupabaseClient = null;
let legacyAuthNextOverride = "";
const LEGACY_GUIDE_ACCESS_KEY = "legacyGuideAccess";
const LEGACY_LOCAL_CUSTOM_MEDS_KEY = "legacyLocalCustomMeds";

const MED_CATEGORIA_ID_MAP = {
  "IST": "IST",
  "Contracepção": "Contra",
  "PrEP / PEP": "PrEP_PEP",
  "Saúde da Mulher": "Mulher",
  "Pré-natal": "Prenatal",
  "Criança": "Crianca",
  "Tuberculose": "TB",
  "Crônicas": "Cronicas",
  "Tabagismo": "Tabagismo",
  "Dengue": "Dengue",
  "Curativos": "Curativo",
  "Outros": "Outros"
};

const MED_CATEGORIA_LABEL_MAP = {
  IST: "IST",
  Contra: "Contracepção",
  PrEP_PEP: "PrEP / PEP",
  Mulher: "Saúde da Mulher",
  Prenatal: "Pré-natal",
  Crianca: "Criança",
  TB: "Tuberculose",
  Cronicas: "Crônicas",
  Tabagismo: "Tabagismo",
  Dengue: "Dengue",
  Curativo: "Curativos",
  Outros: "Outros"
};

function loadLegacyLocalCustomMeds() {
  try {
    const raw = localStorage.getItem(LEGACY_LOCAL_CUSTOM_MEDS_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return;
    }

    for (let i = parsed.length - 1; i >= 0; i -= 1) {
      const med = parsed[i];
      if (!med || !med.n || !med.c || !med.a || !med.u || !med.cat || !med.r) {
        continue;
      }
      MEDS.unshift(med);
    }
  } catch (_) {
    // Ignora erros de parse/localStorage para nao quebrar o app legado.
  }
}

function saveLegacyLocalCustomMed(med) {
  try {
    const raw = localStorage.getItem(LEGACY_LOCAL_CUSTOM_MEDS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    const safeList = Array.isArray(list) ? list : [];
    safeList.unshift(med);
    localStorage.setItem(LEGACY_LOCAL_CUSTOM_MEDS_KEY, JSON.stringify(safeList));
  } catch (_) {
    // Se falhar localStorage, o item continua visivel na sessao atual via MEDS.unshift.
  }
}

function normalizeSupabaseProjectUrl(rawUrl) {
  if (!rawUrl) {
    return "";
  }

  const trimmed = String(rawUrl).trim();
  if (!trimmed) {
    return "";
  }

  let normalized = trimmed.replace(/\/+$/, "");
  normalized = normalized.replace(/\/rest\/v1$/i, "");
  return normalized;
}

function parseLegacyConcentration(rawConcentration) {
  const defaultValue = { quantidade: null, unidade: "mg" };
  if (!rawConcentration) {
    return defaultValue;
  }

  const input = String(rawConcentration).trim();
  if (!input) {
    return defaultValue;
  }

  const match = input.match(/^([\d.,]+)\s*(\S+)?/);
  if (!match) {
    return defaultValue;
  }

  const numeric = Number(match[1].replace(",", "."));
  const unitRaw = (match[2] || "mg").toLowerCase();
  const allowedUnits = new Set(["mg", "ui", "g", "ml", "mcg", "meq", "outro"]);

  return {
    quantidade: Number.isFinite(numeric) ? numeric : null,
    unidade: allowedUnits.has(unitRaw) ? unitRaw : "mg"
  };
}

function buildSupabaseSeedFromLegacyMed(med) {
  if (!med || !med.n || !med.a || !med.u || !med.r || !med.cat) {
    return null;
  }

  const parsed = parseLegacyConcentration(med.c);
  return {
    nome: med.n,
    categoria: MED_CATEGORIA_LABEL_MAP[med.cat] || "Outros",
    quantidade: parsed.quantidade,
    unidade: parsed.unidade,
    apresentacao: med.a,
    indicacao: med.u,
    respaldo_legal: med.r
  };
}

async function ensureLegacySupabaseMedsSeeded() {
  try {
    const supabaseClient = await getLegacySupabaseClient();
    const {
      data: { user },
      error: userError
    } = await supabaseClient.auth.getUser();

    if (userError || !user) {
      return;
    }

    const seedKey = `legacy_meds_seeded_${user.id}`;
    if (localStorage.getItem(seedKey) === "1") {
      return;
    }

    const { count, error: countError } = await supabaseClient
      .from("medicamentos")
      .select("id", { count: "exact", head: true });

    if (countError) {
      return;
    }

    if ((count || 0) > 0) {
      localStorage.setItem(seedKey, "1");
      return;
    }

    const seedRows = MEDS
      .map(buildSupabaseSeedFromLegacyMed)
      .filter((row) => !!row);

    for (let i = 0; i < seedRows.length; i += 100) {
      const chunk = seedRows.slice(i, i + 100);
      const { error: insertError } = await supabaseClient.from("medicamentos").insert(chunk);
      if (insertError) {
        return;
      }
    }

    localStorage.setItem(seedKey, "1");
  } catch (_) {
    // A semeadura e opcional e nao deve quebrar o uso normal da tela.
  }
}

async function getLegacySupabaseClient() {
  if (legacySupabaseClient) {
    return legacySupabaseClient;
  }

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    throw new Error("SDK do Supabase nao carregado.");
  }

  const metaUrl = document.querySelector('meta[name="legacy-supabase-url"]')?.content?.trim() || "";
  const metaAnonKey = document.querySelector('meta[name="legacy-supabase-anon-key"]')?.content?.trim() || "";
  const localUrl = (localStorage.getItem("legacy_supabase_url") || "").trim();
  const localAnonKey = (localStorage.getItem("legacy_supabase_anon_key") || "").trim();
  const injectedConfig = window.__LEGACY_SUPABASE__ || {};

  const config = {
    url: normalizeSupabaseProjectUrl(window.LEGACY_SUPABASE_URL || injectedConfig.url || metaUrl || localUrl || ""),
    anonKey: (window.LEGACY_SUPABASE_ANON_KEY || injectedConfig.anonKey || metaAnonKey || localAnonKey || "").trim()
  };

  if (!config.url || !config.anonKey) {
    throw new Error("Defina LEGACY_SUPABASE_URL e LEGACY_SUPABASE_ANON_KEY (window, meta ou localStorage).");
  }

  legacySupabaseClient = window.supabase.createClient(config.url, config.anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
  return legacySupabaseClient;
}

function getLegacyAuthQueryValue(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key) || "";
}

function buildLegacySkipSplashUrl(basePath) {
  const safeBasePath = basePath || window.location.pathname || "index.html";
  const url = new URL(safeBasePath, window.location.origin);
  url.searchParams.set("skipSplash", "1");
  return `${url.pathname}${url.search}`;
}

function getLegacyAuthNextPath() {
  const rawNext = (legacyAuthNextOverride || getLegacyAuthQueryValue("next") || "").trim();
  if (!rawNext || rawNext === "/guia") {
    return buildLegacySkipSplashUrl(window.location.pathname);
  }

  const target = new URL(rawNext, window.location.origin);
  target.searchParams.set("skipSplash", "1");
  return `${target.pathname}${target.search}`;
}

function setLegacyAuthStatus(targetId, message, type) {
  const statusEl = document.getElementById(targetId);
  if (!statusEl) {
    return;
  }

  if (!message) {
    statusEl.hidden = true;
    statusEl.textContent = "";
    statusEl.classList.remove("error", "success");
    return;
  }

  statusEl.hidden = false;
  statusEl.textContent = message;
  statusEl.classList.remove("error", "success");
  statusEl.classList.add(type || "error");
}

function setLegacyAuthMode(mode) {
  const loginView = document.getElementById("legacy-auth-login");
  const signupView = document.getElementById("legacy-auth-signup");
  if (!loginView || !signupView) {
    return;
  }

  const isLogin = mode !== "signup";
  loginView.hidden = !isLogin;
  signupView.hidden = isLogin;
}

function openLegacyAuthModal(mode, nextPath) {
  const backdrop = document.getElementById("legacy-auth-backdrop");
  if (!backdrop) {
    return;
  }

  legacyAuthNextOverride = nextPath || "";

  setLegacyAuthStatus("legacy-auth-login-status", "", "");
  setLegacyAuthStatus("legacy-auth-signup-status", "", "");
  setLegacyAuthMode(mode);
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLegacyAuthModal() {
  const backdrop = document.getElementById("legacy-auth-backdrop");
  if (!backdrop) {
    return;
  }

  backdrop.hidden = true;
  document.body.style.overflow = "";
  legacyAuthNextOverride = "";
}

async function submitLegacyLogin() {
  const email = (document.getElementById("legacy-login-email")?.value || "").trim();
  const password = document.getElementById("legacy-login-password")?.value || "";
  const btn = document.getElementById("legacy-login-submit");

  if (!email || !password) {
    setLegacyAuthStatus("legacy-auth-login-status", "Preencha email e senha.", "error");
    return;
  }

  try {
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Entrando...";
    }

    setLegacyAuthStatus("legacy-auth-login-status", "", "");
    const supabaseClient = await getLegacySupabaseClient();
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      setLegacyAuthStatus("legacy-auth-login-status", error.message || "Falha no login.", "error");
      return;
    }

    setLegacyAuthStatus("legacy-auth-login-status", "Login realizado com sucesso.", "success");
    localStorage.setItem(LEGACY_GUIDE_ACCESS_KEY, "1");
    window.location.href = getLegacyAuthNextPath();
  } catch (error) {
    setLegacyAuthStatus("legacy-auth-login-status", error.message || "Falha no login.", "error");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Entrar";
    }
  }
}

async function submitLegacySignup() {
  const fullName = (document.getElementById("legacy-signup-name")?.value || "").trim();
  const email = (document.getElementById("legacy-signup-email")?.value || "").trim();
  const password = document.getElementById("legacy-signup-password")?.value || "";
  const passwordConfirm = document.getElementById("legacy-signup-password-confirm")?.value || "";
  const btn = document.getElementById("legacy-signup-submit");

  if (!fullName || !email || !password || !passwordConfirm) {
    setLegacyAuthStatus("legacy-auth-signup-status", "Preencha nome, email e senha.", "error");
    return;
  }

  if (password !== passwordConfirm) {
    mostrarToast("As senhas não coincidem", "erro");
    setLegacyAuthStatus("legacy-auth-signup-status", "As senhas não coincidem.", "error");
    return;
  }

  try {
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Cadastrando...";
    }

    setLegacyAuthStatus("legacy-auth-signup-status", "", "");
    const supabaseClient = await getLegacySupabaseClient();
    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }
      }
    });

    if (error) {
      setLegacyAuthStatus("legacy-auth-signup-status", error.message, "error");
      return;
    }

    setLegacyAuthStatus("legacy-auth-signup-status", "Conta criada. Agora faça login.", "success");
    setLegacyAuthMode("login");
  } catch (error) {
    setLegacyAuthStatus("legacy-auth-signup-status", error.message || "Falha no cadastro.", "error");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Cadastrar";
    }
  }
}

async function submitLegacyLogout() {
  const logoutBtn = document.getElementById("legacy-logout-btn");

  try {
    if (logoutBtn) {
      logoutBtn.disabled = true;
      logoutBtn.textContent = "Saindo...";
    }

    const supabaseClient = await getLegacySupabaseClient();
    await supabaseClient.auth.signOut();

    localStorage.removeItem(LEGACY_GUIDE_ACCESS_KEY);
    window.location.href = `${window.location.pathname}?auth=login`;
  } catch (_) {
    localStorage.removeItem(LEGACY_GUIDE_ACCESS_KEY);
    window.location.href = `${window.location.pathname}?auth=login`;
  } finally {
    if (logoutBtn) {
      logoutBtn.disabled = false;
      logoutBtn.textContent = "Sair";
    }
  }
}

function initLegacyAuthModal() {
  const loginBtn = document.getElementById("sp-login-btn");
  const signupBtn = document.getElementById("sp-signup-btn");
  const logoutBtn = document.getElementById("legacy-logout-btn");
  const closeBtn = document.getElementById("legacy-auth-close");
  const backdrop = document.getElementById("legacy-auth-backdrop");
  const openSignupBtn = document.getElementById("legacy-open-signup");
  const openLoginBtn = document.getElementById("legacy-open-login");
  const loginSubmitBtn = document.getElementById("legacy-login-submit");
  const signupSubmitBtn = document.getElementById("legacy-signup-submit");

  if (loginBtn) {
    loginBtn.addEventListener("click", (event) => {
      event.preventDefault();
      openLegacyAuthModal("login", "/guia");
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", (event) => {
      event.preventDefault();
      openLegacyAuthModal("signup");
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", submitLegacyLogout);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeLegacyAuthModal);
  }

  if (backdrop) {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        closeLegacyAuthModal();
      }
    });
  }

  if (openSignupBtn) {
    openSignupBtn.addEventListener("click", () => {
      setLegacyAuthMode("signup");
    });
  }

  if (openLoginBtn) {
    openLoginBtn.addEventListener("click", () => {
      setLegacyAuthMode("login");
    });
  }

  if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener("click", submitLegacyLogin);
  }

  if (signupSubmitBtn) {
    signupSubmitBtn.addEventListener("click", submitLegacySignup);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLegacyAuthModal();
    }
  });

}

function initLegacyPasswordToggles() {
  document.querySelectorAll("[data-password-toggle]").forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", () => {
      const targetId = toggleBtn.getAttribute("data-password-toggle");
      const targetInput = targetId ? document.getElementById(targetId) : null;
      if (!targetInput) {
        return;
      }

      const showing = targetInput.type === "text";
      targetInput.type = showing ? "password" : "text";
      toggleBtn.textContent = showing ? "Mostrar" : "Ocultar";
      toggleBtn.setAttribute("aria-label", showing ? "Mostrar senha" : "Ocultar senha");
      toggleBtn.setAttribute("title", showing ? "Mostrar senha" : "Ocultar senha");
    });
  });
}

function setLegacyMedStatus(message, type) {
  const statusEl = document.getElementById("legacy-med-status");
  if (!statusEl) {
    return;
  }

  if (!message) {
    statusEl.hidden = true;
    statusEl.textContent = "";
    statusEl.classList.remove("error", "success");
    return;
  }

  statusEl.hidden = false;
  statusEl.textContent = message;
  statusEl.classList.remove("error", "success");
  statusEl.classList.add(type || "error");
}

function openLegacyMedModal() {
  const backdrop = document.getElementById("legacy-med-backdrop");
  if (!backdrop) {
    return;
  }
  setLegacyMedStatus("", "");
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLegacyMedModal() {
  const backdrop = document.getElementById("legacy-med-backdrop");
  if (!backdrop) {
    return;
  }
  backdrop.hidden = true;
  document.body.style.overflow = "";
}

function clearLegacyMedForm() {
  [
    "legacy-med-nome",
    "legacy-med-quantidade",
    "legacy-med-apresentacao",
    "legacy-med-indicacao",
    "legacy-med-respaldo"
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.value = "";
    }
  });

  const categoriaEl = document.getElementById("legacy-med-categoria");
  const unidadeEl = document.getElementById("legacy-med-unidade");
  if (categoriaEl) categoriaEl.value = "IST";
  if (unidadeEl) unidadeEl.value = "mg";
}

async function submitLegacyMedicamento() {
  const nome = (document.getElementById("legacy-med-nome")?.value || "").trim();
  const categoriaLabel = document.getElementById("legacy-med-categoria")?.value || "IST";
  const quantidadeRaw = document.getElementById("legacy-med-quantidade")?.value || "";
  const unidade = document.getElementById("legacy-med-unidade")?.value || "mg";
  const apresentacao = (document.getElementById("legacy-med-apresentacao")?.value || "").trim();
  const indicacao = (document.getElementById("legacy-med-indicacao")?.value || "").trim();
  const respaldoLegal = (document.getElementById("legacy-med-respaldo")?.value || "").trim();
  const submitBtn = document.getElementById("legacy-med-submit");

  if (!nome || !quantidadeRaw || !apresentacao || !indicacao || !respaldoLegal) {
    setLegacyMedStatus("Preencha todos os campos obrigatórios.", "error");
    return;
  }

  const quantidade = Number(quantidadeRaw);
  if (!Number.isFinite(quantidade)) {
    setLegacyMedStatus("Quantidade/concentração inválida.", "error");
    return;
  }

  try {
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Salvando...";
    }
    setLegacyMedStatus("", "");

    const supabaseClient = await getLegacySupabaseClient();
    const payload = {
      nome,
      categoria: categoriaLabel,
      quantidade,
      unidade,
      apresentacao,
      indicacao,
      respaldo_legal: respaldoLegal
    };

    const { error: insertError } = await supabaseClient.from("medicamentos").insert(payload);
    if (insertError) {
      setLegacyMedStatus(insertError.message || "Falha ao salvar no Supabase.", "error");
      return;
    }

    const categoriaId = MED_CATEGORIA_ID_MAP[categoriaLabel] || "Outros";
    const medViewModel = {
      n: nome,
      c: `${quantidadeRaw} ${unidade}`,
      a: apresentacao,
      u: indicacao,
      cat: categoriaId,
      r: respaldoLegal
    };

    MEDS.unshift(medViewModel);
    setFilter("Todos");
    searchInput.value = "";
    clearBtn.style.display = "none";
    renderizarMeds();
    clearLegacyMedForm();
    closeLegacyMedModal();
    mostrarToast("Medicamento cadastrado com sucesso!");
  } catch (error) {
    setLegacyMedStatus(error.message || "Erro inesperado ao cadastrar medicamento.", "error");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Salvar medicamento";
    }
  }
}

function initLegacyMedModal() {
  const openBtn = document.getElementById("open-med-modal-btn");
  const closeBtn = document.getElementById("legacy-med-close");
  const cancelBtn = document.getElementById("legacy-med-cancel");
  const submitBtn = document.getElementById("legacy-med-submit");
  const backdrop = document.getElementById("legacy-med-backdrop");

  if (openBtn) openBtn.addEventListener("click", openLegacyMedModal);
  if (closeBtn) closeBtn.addEventListener("click", closeLegacyMedModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeLegacyMedModal);
  if (submitBtn) submitBtn.addEventListener("click", submitLegacyMedicamento);

  if (backdrop) {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        closeLegacyMedModal();
      }
    });
  }
}

document.body.classList.add('splash-active');
if (getLegacyAuthQueryValue("skipSplash") === "1" || localStorage.getItem(LEGACY_GUIDE_ACCESS_KEY) === "1") {
  const splash = document.getElementById("splash");
  if (splash) {
    splash.style.display = "none";
  }
  document.body.classList.remove("splash-active");
}
initLegacyAuthModal();
initLegacyPasswordToggles();
initLegacyMedModal();
loadLegacyLocalCustomMeds();
renderizarMeds();
ensureLegacySupabaseMedsSeeded();