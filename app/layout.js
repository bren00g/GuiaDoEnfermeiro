import "../styles/globals.css";
import { AppShell } from "../components/AppShell";

export const metadata = {
  title: "Guia do Enfermeiro APS",
  description: "Ferramentas clinicas para a APS com Next.js e Supabase."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
