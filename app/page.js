import Link from "next/link";

const modules = [
  {
    href: "/prescricoes",
    title: "Prescricoes",
    text: "Consulta rapida de medicamentos, protocolos e respaldo legal."
  },
  {
    href: "/vacinas",
    title: "Calendario vacinal",
    text: "Conteudo publico mantido estatico para velocidade e disponibilidade."
  },
  {
    href: "/calculadora",
    title: "Risco gestacional",
    text: "Estratificacao de risco com apoio a impressao e registro."
  },
  {
    href: "/evolucoes",
    title: "Evolucoes SOAP",
    text: "Area protegida para criar e gerenciar modelos por usuario."
  }
];

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">APS Maceio/AL · Next.js + Supabase</span>
        <h1>Guia do Enfermeiro APS</h1>
        <p>
          A nova arquitetura preserva o conteudo publico estatico e adiciona
          login, armazenamento em nuvem e isolamento de dados por usuario com RLS.
        </p>
        <div className="actions">
          <Link className="btn primary" href="/auth/login">Entrar</Link>
          <Link className="btn" href="/legacy">Abrir versao legada</Link>
        </div>
      </div>

      <div className="module-grid">
        {modules.map((module) => (
          <Link className="module-card" href={module.href} key={module.href}>
            <h2>{module.title}</h2>
            <p>{module.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
