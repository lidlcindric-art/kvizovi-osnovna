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
  title: 'Kvizovi — Osnovna škola',
  description: 'Edukativni kvizovi za osnovnu školu (razredi 1–8): Matematika, Hrvatski, Engleski, Njemački, Priroda i društvo, Geografija, Povijest i još mnogo toga.',
  manifest: '/manifest.json',
  themeColor: '#6366f1',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Kvizovi' },
  viewport: { width: 'device-width', initialScale: 1, viewportFit: 'cover' },
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
