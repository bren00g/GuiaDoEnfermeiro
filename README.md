# Guia do Enfermeiro APS - Estrategia Final de Entrega

Data de referencia: 2026-07-16.

Este README oficializa a estrategia de encerramento do projeto.

## 1. Estrategia final definida

O projeto sera finalizado com a versao legacy/estatica como produto oficial.

Alvo de producao:
1. GitHub Pages (arquivos estaticos na raiz)
2. Interface e comportamento baseados na versao legacy

## 2. Fonte de verdade do frontend

A fonte de verdade de desenvolvimento fica em:
1. [public/legacy/index.html](public/legacy/index.html)
2. [public/legacy/main.js](public/legacy/main.js)
3. [public/legacy/style.css](public/legacy/style.css)

Para deploy no GitHub Pages, a raiz deve estar sincronizada com essa versao:
1. [index.html](index.html)
2. [main.js](main.js)
3. [style.css](style.css)

## 3. Escopo funcional de fechamento

Escopo previsto para conclusao:
1. Prescricoes com busca, filtros e copia para PEC
2. Calendario vacinal
3. Calculadora de risco gestacional
4. Evolucoes SOAP
5. Fluxo de autenticacao no frontend legado (login/cadastro/logout)
6. Novo medicamento via modal legado

Observacao importante:
1. Como o alvo final e estatico, qualquer funcionalidade que dependa de API server-side do Next so funciona se houver backend ativo fora do GitHub Pages.

## 4. Situacao da arquitetura Next/Supabase

A camada Next/Supabase permanece no repositorio como trilha tecnica secundaria, mas nao e o canal oficial de entrega desta fase.

Arquivos que continuam existindo para referencia/evolucao futura:
1. [app](app)
2. [app/api](app/api)
3. [lib](lib)
4. [proxy.js](proxy.js)
5. [supabase](supabase)

## 5. O que falta para considerar migracao encerrada

Pendencias finais de operacao:
1. Garantir sincronizacao consistente public/legacy -> raiz antes de cada release
2. Revisar README/docs para remover ambiguidade de deploy
3. Executar checklist de smoke test na versao raiz publicada
4. Confirmar que o GitHub Pages esta publicando o commit correto

Pendencias opcionais (pos-entrega):
1. Limpeza de codigo duplicado entre raiz e public/legacy
2. Arquivamento formal da trilha Next/Supabase em documento tecnico separado

## 6. Fluxo de release (oficial)

Antes do push:
1. Atualizar arquivos em [public/legacy/index.html](public/legacy/index.html), [public/legacy/main.js](public/legacy/main.js), [public/legacy/style.css](public/legacy/style.css)
2. Sincronizar para [index.html](index.html), [main.js](main.js), [style.css](style.css)
3. Revisar diff final apenas na raiz e no legacy

Validacao manual minima:
1. Abrir Prescricoes e testar busca/filtro/copia
2. Abrir modal Novo medicamento
3. Testar login/cadastro/logout
4. Testar Calculadora e impressao
5. Testar Evolucoes SOAP

Publicacao:
1. Commit
2. Push na branch de publicacao
3. Aguardar build do GitHub Pages
4. Hard refresh no navegador

## 7. Riscos conhecidos

1. Divergencia entre raiz e public/legacy pode fazer funcionalidades parecerem "sumir" no deploy
2. Recursos dependentes de backend podem ter comportamento parcial em hospedagem puramente estatica

## 8. Definicao de sucesso (Done)

A migracao sera considerada concluida quando:
1. A versao publicada no GitHub Pages reproduzir integralmente o comportamento esperado da versao legacy
2. O processo public/legacy -> raiz estiver estavel e documentado
3. O time puder publicar novas alteracoes sem regressao de ambiente
