import Link from 'next/link';
import type { Tema } from '@/lib/pitanja';

const gradijent: Record<string, string> = {
  amber:  'from-amber-400 to-orange-500',
  green:  'from-emerald-400 to-green-500',
  blue:   'from-blue-400 to-indigo-500',
  violet: 'from-violet-400 to-purple-500',
  teal:   'from-teal-400 to-cyan-500',
  sky:    'from-sky-400 to-blue-500',
  rose:   'from-rose-400 to-pink-500',
  indigo: 'from-indigo-500 to-blue-600',
  orange: 'from-orange-400 to-amber-500',
};

export default function SkriptaView({ tema }: { tema: Tema }) {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header traka */}
      <div className={`bg-gradient-to-r ${gradijent[tema.boja]} text-white`}>
        <div className="max-w-2xl mx-auto px-4 py-5">
          <Link href={`/tema/${tema.id}`} className="text-white/80 hover:text-white text-sm font-semibold">← Natrag</Link>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-3xl">{tema.ikona}</span>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">{tema.predmet}</div>
              <h1 className="text-xl font-black">{tema.naziv} — Skripta</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Sadržaj */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {tema.skripta.map((sekcija, i) => (
            <section key={i} className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-black text-slate-500">{i + 1}</span>
                {sekcija.naslov}
              </h2>
              <div className="space-y-3">
                {sekcija.sadrzaj
                  ? sekcija.sadrzaj.map((r, j) => (
                      <div key={j} className="flex items-start gap-2 text-slate-600 leading-relaxed">
                        <span className="text-slate-400 mt-0.5 shrink-0">•</span>
                        <span>{r}</span>
                      </div>
                    ))
                  : (sekcija.tekst ?? '').split('\n').map((odlomak, j) => {
                      if (!odlomak.trim()) return null;
                      if (odlomak.startsWith('•')) {
                        return (
                          <div key={j} className="flex items-start gap-2 text-slate-600 leading-relaxed">
                            <span className="text-slate-400 mt-0.5 shrink-0">•</span>
                            <span>{odlomak.slice(1).trim()}</span>
                          </div>
                        );
                      }
                      return <p key={j} className="text-slate-600 leading-relaxed">{odlomak}</p>;
                    })}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6 text-center">
          <p className="text-slate-500 mb-4">Naučio/la si gradivo? Provjeri znanje!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={`/tema/${tema.id}/kartice`} className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-colors">🃏 Kartice</Link>
            <Link href={`/tema/${tema.id}/kviz`} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors">🧠 Kviz</Link>
            <Link href={`/tema/${tema.id}/test`} className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-colors">📝 Test</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
