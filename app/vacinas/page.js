import Link from "next/link";

const groups = ["Criancas", "Adolescentes", "Adultos", "Gestantes", "Idosos"];

export default function VacinasPage() {
  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="eyebrow">PNI · conteudo publico</span>
        <h1>Calendario vacinal</h1>
        <p>
          O calendario vacinal e um bom candidato a permanecer estatico no
          Next.js, aproveitando cache e entrega rapida pela Vercel.
        </p>
      </div>

      <div className="module-grid compact">
        {groups.map((group) => (
          <article className="module-card" key={group}>
            <h2>{group}</h2>
            <p>Grupo preparado para migracao do dataset PNI.</p>
          </article>
        ))}
      </div>

      <Link className="btn primary" href="/legacy">Abrir calendario completo legado</Link>
    </section>
  );
}
