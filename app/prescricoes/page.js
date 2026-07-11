import Link from "next/link";

const categories = [
  "IST",
  "Contracepcao",
  "PrEP / PEP",
  "Saude da Mulher",
  "Pre-natal",
  "Crianca",
  "Tuberculose",
  "Cronicas",
  "Tabagismo",
  "Dengue",
  "Curativos"
];

export default function PrescricoesPage() {
  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="eyebrow">Conteudo publico · estatico</span>
        <h1>Prescricoes</h1>
        <p>
          Nesta fase da migracao, a base completa de medicamentos permanece na
          versao legada para evitar perda de conteudo. O novo CRUD para
          medicamentos personalizados fica protegido em Favoritos.
        </p>
      </div>

      <div className="chip-row">
        {categories.map((item) => <span className="chip" key={item}>{item}</span>)}
      </div>

      <div className="notice-card">
        <h2>Migracao progressiva</h2>
        <p>
          A proxima etapa tecnica e extrair `MEDS` do arquivo antigo para uma
          fonte versionada em `lib/data` ou para uma tabela publica do Supabase.
        </p>
        <Link className="btn primary" href="/legacy">Abrir prescricoes completas</Link>
      </div>
    </section>
  );
}
