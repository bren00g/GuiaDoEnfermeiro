# ADR-001: escopo dos dados armazenados

- Status: aceito
- Data: 2026-07-11

## Decisao

O Guia do Enfermeiro APS armazenara somente modelos privados e reutilizaveis de evolucao, favoritos e medicamentos personalizados do profissional.

O produto nao e prontuario eletronico e nao deve receber nome, CPF, CNS, data de nascimento, endereco, telefone ou qualquer outra informacao que identifique um paciente. O texto salvo deve funcionar como rascunho generico para posterior copia ao sistema oficial da unidade de saude.

## Motivo

O sistema atual nao possui assinatura eletronica, trilha de auditoria clinica, imutabilidade, identificacao profissional estruturada, politica de retencao ou os demais controles necessarios para operar como prontuario digital. Limitar o escopo reduz o tratamento de dados pessoais sensiveis e corresponde ao uso ja existente dos modelos SOAP.

## Consequencias

- A interface deve avisar que dados de pacientes nao podem ser inseridos.
- A documentacao e a comunicacao do produto devem usar “modelo” ou “rascunho”, nunca “prontuario”.
- A funcionalidade nao substitui PEC, e-SUS APS ou outro sistema oficial.
- Qualquer futura decisao de armazenar registros de atendimento exigira uma nova ADR, revisao juridica e de seguranca e implementacao previa dos controles clinicos aplicaveis.
