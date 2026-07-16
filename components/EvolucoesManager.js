"use client";

import { useState } from "react";
import { createClient } from "../lib/supabaseBrowser";

const emptyForm = {
  title: "",
  category: "SOAP",
  content: ""
};

export function EvolucoesManager({ initialRows }) {
  const supabase = createClient();
  const [rows, setRows] = useState(initialRows || []);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("");

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function edit(row) {
    setEditingId(row.id);
    setForm({
      title: row.title || "",
      category: row.category || "SOAP",
      content: row.content || ""
    });
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("Salvando...");

    const payload = {
      title: form.title,
      category: form.category,
      content: form.content,
      updated_at: new Date().toISOString()
    };

    const query = editingId
      ? supabase.from("evolucoes").update(payload).eq("id", editingId).select().single()
      : supabase.from("evolucoes").insert(payload).select().single();

    const { data, error } = await query;

    if (error) {
      setStatus(error.message);
      return;
    }

    setRows((current) => {
      if (editingId) {
        return current.map((row) => (row.id === editingId ? data : row));
      }
      return [data, ...current];
    });
    setForm(emptyForm);
    setEditingId(null);
    setStatus("Salvo.");
  }

  async function remove(id) {
    setStatus("Excluindo...");
    const { error } = await supabase.from("evolucoes").delete().eq("id", id);

    if (error) {
      setStatus(error.message);
      return;
    }

    setRows((current) => current.filter((row) => row.id !== id));
    setStatus("Excluido.");
  }

  return (
    <div className="crud-layout">
      <form className="data-form" onSubmit={submit}>
        <h2>{editingId ? "Editar evolucao" : "Nova evolucao"}</h2>
        <label>
          Titulo
          <input name="title" value={form.title} onChange={updateField} required />
        </label>
        <label>
          Categoria
          <select name="category" value={form.category} onChange={updateField}>
            <option>SOAP</option>
            <option>Hiperdia</option>
            <option>Puericultura</option>
            <option>Pre-natal</option>
            <option>Urgencia</option>
            <option>Curativo</option>
            <option>CCO</option>
            <option>Teste rapido</option>
          </select>
        </label>
        <label>
          Conteudo
          <textarea name="content" rows={12} value={form.content} onChange={updateField} required />
        </label>
        <div className="form-actions">
          <button className="btn primary" type="submit">Salvar</button>
          {editingId ? (
            <button className="btn subtle" type="button" onClick={() => { setEditingId(null); setForm(emptyForm); }}>
              Cancelar
            </button>
          ) : null}
        </div>
        {status ? <p className="form-status">{status}</p> : null}
      </form>

      <div className="data-list">
        {rows.length === 0 ? (
          <div className="empty-state">Nenhuma evolucao salva ainda.</div>
        ) : rows.map((row) => (
          <article className="data-card" key={row.id}>
            <span className="chip">{row.category}</span>
            <h3>{row.title}</h3>
            <p>{row.content}</p>
            <div className="card-actions">
              <button className="btn subtle" type="button" onClick={() => edit(row)}>Editar</button>
              <button className="btn danger" type="button" onClick={() => remove(row.id)}>Excluir</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
