import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kvizovi — 5. razred',
  description: 'Edukativni kvizovi za 5. razred osnovne škole: Rimsko društvo, Priroda – Tlo, Hrvatski – Pridjevi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr" className={nunito.variable}>
      <body className="bg-slate-50 min-h-screen antialiased font-[family-name:var(--font-nunito)]">
        {children}
      </body>
    </html>
  );
}
