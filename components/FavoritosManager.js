"use client";

import { useState } from "react";
import { createClient } from "../lib/supabaseBrowser";

const favoriteDefaults = { item_type: "medicamento", item_ref: "", title: "", notes: "" };
const medDefaults = { nome: "", concentracao: "", apresentacao: "", indicacao: "", protocolo: "" };

export function FavoritosManager({ initialFavorites, initialMedicamentos }) {
  const supabase = createClient();
  const [favorites, setFavorites] = useState(initialFavorites || []);
  const [meds, setMeds] = useState(initialMedicamentos || []);
  const [favoriteForm, setFavoriteForm] = useState(favoriteDefaults);
  const [medForm, setMedForm] = useState(medDefaults);
  const [status, setStatus] = useState("");

  function updateFavorite(event) {
    setFavoriteForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function updateMed(event) {
    setMedForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function addFavorite(event) {
    event.preventDefault();
    setStatus("Salvando favorito...");

    const { data, error } = await supabase
      .from("favoritos")
      .insert(favoriteForm)
      .select()
      .single();

    if (error) {
      setStatus(error.message);
      return;
    }

    setFavorites((current) => [data, ...current]);
    setFavoriteForm(favoriteDefaults);
    setStatus("Favorito salvo.");
  }

  async function addMed(event) {
    event.preventDefault();
    setStatus("Salvando medicamento...");

    const { data, error } = await supabase
      .from("custom_medicamentos")
      .insert(medForm)
      .select()
      .single();

    if (error) {
      setStatus(error.message);
      return;
    }

    setMeds((current) => [data, ...current]);
    setMedForm(medDefaults);
    setStatus("Medicamento salvo.");
  }

  async function remove(table, id) {
    setStatus("Excluindo...");
    const { error } = await supabase.from(table).delete().eq("id", id);

    if (error) {
      setStatus(error.message);
      return;
    }

    if (table === "favoritos") {
      setFavorites((current) => current.filter((item) => item.id !== id));
    } else {
      setMeds((current) => current.filter((item) => item.id !== id));
    }
    setStatus("Excluido.");
  }

  return (
    <div className="crud-layout two-forms">
      <section className="data-form">
        <h2>Novo favorito</h2>
        <form onSubmit={addFavorite}>
          <label>
            Tipo
            <select name="item_type" value={favoriteForm.item_type} onChange={updateFavorite}>
              <option value="medicamento">Medicamento</option>
              <option value="evolucao">Evolucao</option>
              <option value="protocolo">Protocolo</option>
            </select>
          </label>
          <label>
            Referencia
            <input name="item_ref" value={favoriteForm.item_ref} onChange={updateFavorite} />
          </label>
          <label>
            Titulo
            <input name="title" value={favoriteForm.title} onChange={updateFavorite} required />
          </label>
          <label>
            Notas
            <textarea name="notes" rows={5} value={favoriteForm.notes} onChange={updateFavorite} />
          </label>
          <button className="btn primary" type="submit">Salvar favorito</button>
        </form>
      </section>

      <section className="data-form">
        <h2>Medicamento personalizado</h2>
        <form onSubmit={addMed}>
          <label>Nome<input name="nome" value={medForm.nome} onChange={updateMed} required /></label>
          <label>Concentracao<input name="concentracao" value={medForm.concentracao} onChange={updateMed} /></label>
          <label>Apresentacao<input name="apresentacao" value={medForm.apresentacao} onChange={updateMed} /></label>
          <label>Indicacao<textarea name="indicacao" rows={4} value={medForm.indicacao} onChange={updateMed} /></label>
          <label>Protocolo<input name="protocolo" value={medForm.protocolo} onChange={updateMed} /></label>
          <button className="btn primary" type="submit">Salvar medicamento</button>
        </form>
      </section>

      <section className="data-list wide">
        {status ? <p className="form-status">{status}</p> : null}
        <h2>Favoritos</h2>
        {favorites.map((item) => (
          <article className="data-card" key={item.id}>
            <span className="chip">{item.item_type}</span>
            <h3>{item.title}</h3>
            <p>{item.notes || item.item_ref}</p>
            <button className="btn danger" type="button" onClick={() => remove("favoritos", item.id)}>Excluir</button>
          </article>
        ))}

        <h2>Medicamentos personalizados</h2>
        {meds.map((item) => (
          <article className="data-card" key={item.id}>
            <h3>{item.nome}</h3>
            <p>{[item.concentracao, item.apresentacao, item.indicacao].filter(Boolean).join(" · ")}</p>
            <small>{item.protocolo}</small>
            <button className="btn danger" type="button" onClick={() => remove("custom_medicamentos", item.id)}>Excluir</button>
          </article>
        ))}
      </section>
    </div>
  );
}
