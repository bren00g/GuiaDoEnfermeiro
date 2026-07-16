"use client";

import { useMemo, useState } from "react";
import { createClient } from "../lib/supabaseBrowser";
import styles from "./NovoMedicamentoModal.module.css";

const CATEGORIAS = [
  "IST",
  "Contracepção",
  "PrEP / PEP",
  "Saúde da Mulher",
  "Pré-natal",
  "Criança",
  "Tuberculose",
  "Crônicas",
  "Tabagismo",
  "Dengue",
  "Curativos",
  "Outros"
];

const UNIDADES = ["mg", "ui", "g", "ml", "mcg", "mEq", "Outro"];

const INITIAL_FORM = {
  nome: "",
  categoria: CATEGORIAS[0],
  quantidade: "",
  unidade: UNIDADES[0],
  apresentacao: "",
  indicacao: "",
  respaldo_legal: ""
};

export function NovoMedicamentoModal({ onCreated }) {
  const supabase = useMemo(() => createClient(), []);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [form, setForm] = useState(INITIAL_FORM);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function closeModal() {
    if (loading) {
      return;
    }
    setOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setFeedback({ type: "", message: "" });

    const payload = {
      nome: form.nome.trim(),
      categoria: form.categoria,
      quantidade: form.quantidade ? Number(form.quantidade) : null,
      unidade: form.unidade,
      apresentacao: form.apresentacao.trim(),
      indicacao: form.indicacao.trim(),
      respaldo_legal: form.respaldo_legal.trim()
    };

    const { data, error } = await supabase
      .from("medicamentos")
      .insert(payload)
      .select()
      .single();

    if (error) {
      setFeedback({ type: "error", message: error.message || "Não foi possível cadastrar o medicamento." });
      setLoading(false);
      return;
    }

    setFeedback({ type: "success", message: "Medicamento cadastrado com sucesso." });
    setForm(INITIAL_FORM);
    setLoading(false);
    setOpen(false);

    if (typeof onCreated === "function") {
      onCreated(data);
    }
  }

  return (
    <>
      <button type="button" className={styles.triggerBtn} onClick={() => setOpen(true)}>
        + Novo medicamento
      </button>

      {feedback.message ? (
        <div className={`${styles.toast} ${feedback.type === "error" ? styles.error : styles.success}`}>
          {feedback.message}
        </div>
      ) : null}

      {open ? (
        <div className={styles.backdrop} role="presentation" onClick={closeModal}>
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label="Cadastrar novo medicamento"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.header}>
              <h2>Novo medicamento</h2>
              <button type="button" className={styles.closeBtn} onClick={closeModal} aria-label="Fechar modal">
                ×
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label>
                Nome
                <input name="nome" type="text" value={form.nome} onChange={updateField} required />
              </label>

              <label>
                Categoria
                <select name="categoria" value={form.categoria} onChange={updateField} required>
                  {CATEGORIAS.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </label>

              <div className={styles.row2}>
                <label>
                  Quantidade/Concentração
                  <input
                    name="quantidade"
                    type="number"
                    inputMode="decimal"
                    step="any"
                    min="0"
                    value={form.quantidade}
                    onChange={updateField}
                    required
                  />
                </label>

                <label>
                  Unidade
                  <select name="unidade" value={form.unidade} onChange={updateField} required>
                    {UNIDADES.map((unidade) => (
                      <option key={unidade} value={unidade}>
                        {unidade}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Apresentação
                <input
                  name="apresentacao"
                  type="text"
                  value={form.apresentacao}
                  onChange={updateField}
                  placeholder="Ex.: Comprimido, Ampola, Frasco"
                  required
                />
              </label>

              <label>
                Indicação
                <textarea name="indicacao" rows={4} value={form.indicacao} onChange={updateField} required />
              </label>

              <label>
                Respaldo Legal
                <textarea name="respaldo_legal" rows={3} value={form.respaldo_legal} onChange={updateField} required />
              </label>

              <div className={styles.actions}>
                <button type="button" className={styles.subtleBtn} onClick={closeModal} disabled={loading}>
                  Cancelar
                </button>
                <button type="submit" className={styles.primaryBtn} disabled={loading}>
                  {loading ? "Salvando..." : "Salvar medicamento"}
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
