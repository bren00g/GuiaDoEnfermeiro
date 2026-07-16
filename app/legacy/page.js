export default async function LegacyPage({ searchParams }) {
  const params = await searchParams;
  const query = new URLSearchParams();

  if (params?.auth) {
    query.set("auth", params.auth);
  }
  if (params?.next) {
    query.set("next", params.next);
  }

  const src = query.toString()
    ? `/legacy/index.html?${query.toString()}`
    : "/legacy/index.html";

  return (
    <section className="legacy-frame">
      <iframe title="Versao legada do Guia do Enfermeiro APS" src={src} />
    </section>
  );
}
