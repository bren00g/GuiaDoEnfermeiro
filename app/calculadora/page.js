import Link from "next/link";

export default function CalculadoraPage() {
  return (
    <section className="page-panel">
      <div className="page-heading">
        <span className="eyebrow">SESAU/AL · NT 06/2025</span>
        <h1>Risco gestacional</h1>
        <p>
          A calculadora existente ja esta funcional e foi preservada em
          `/legacy`. A migracao React completa deve vir depois da estabilizacao
          do Supabase, pois envolve muitos criterios e regras de pontuacao.
        </p>
      </div>

      <div className="notice-card">
        <h2>Plano tecnico</h2>
        <p>
          Converter os 6 grupos e 67 criterios para um modulo de dados testavel,
          criar componente React controlado e manter impressao/PDF.
        </p>
        <Link className="btn primary" href="/legacy">Abrir calculadora atual</Link>
      </div>
    </section>
  );
}
