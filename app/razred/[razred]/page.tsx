import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTemeZaRazred, RAZRED_IDS } from '@/lib/pitanja';

interface Props { params: Promise<{ razred: string }> }

const pozadina: Record<string, string> = {
  amber:  'bg-amber-50 hover:bg-amber-100 border-amber-200 hover:border-amber-400',
  green:  'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 hover:border-emerald-400',
  blue:   'bg-blue-50 hover:bg-blue-100 border-blue-200 hover:border-blue-400',
  violet: 'bg-violet-50 hover:bg-violet-100 border-violet-200 hover:border-violet-400',
  teal:   'bg-teal-50 hover:bg-teal-100 border-teal-200 hover:border-teal-400',
  sky:    'bg-sky-50 hover:bg-sky-100 border-sky-200 hover:border-sky-400',
  rose:   'bg-rose-50 hover:bg-rose-100 border-rose-200 hover:border-rose-400',
};

const textBoja: Record<string, string> = {
  amber:  'text-amber-700',
  green:  'text-emerald-700',
  blue:   'text-blue-700',
  violet: 'text-violet-700',
  teal:   'text-teal-700',
  sky:    'text-sky-700',
  rose:   'text-rose-700',
};

const badge: Record<string, string> = {
  amber:  'bg-amber-200 text-amber-800',
  green:  'bg-emerald-200 text-emerald-800',
  blue:   'bg-blue-200 text-blue-800',
  violet: 'bg-violet-200 text-violet-800',
  teal:   'bg-teal-200 text-teal-800',
  sky:    'bg-sky-200 text-sky-800',
  rose:   'bg-rose-200 text-rose-800',
};

const predmetBadge: Record<string, string> = {
  amber:  'bg-amber-100 text-amber-600',
  green:  'bg-emerald-100 text-emerald-600',
  blue:   'bg-blue-100 text-blue-600',
  violet: 'bg-violet-100 text-violet-600',
  teal:   'bg-teal-100 text-teal-600',
  sky:    'bg-sky-100 text-sky-600',
  rose:   'bg-rose-100 text-rose-600',
};

const razredInfo: Record<number, { naziv: string; opis: string; ikona: string; boja: string }> = {
  1: { naziv: '1. razred', opis: 'Matematika · Hrvatski · Priroda i društvo', ikona: '🌱', boja: 'from-green-400 to-teal-500' },
  2: { naziv: '2. razred', opis: 'Matematika · Hrvatski · Priroda i društvo', ikona: '📚', boja: 'from-blue-400 to-violet-500' },
  3: { naziv: '3. razred', opis: 'Matematika · Hrvatski · Priroda i društvo', ikona: '📐', boja: 'from-violet-400 to-purple-500' },
  4: { naziv: '4. razred', opis: 'Matematika · Hrvatski · Priroda i društvo', ikona: '🌍', boja: 'from-amber-400 to-orange-500' },
  5: { naziv: '5. razred', opis: 'Povijest · Priroda · Hrvatski · Matematika · Geografija', ikona: '🎓', boja: 'from-indigo-400 to-purple-500' },
  6: { naziv: '6. razred', opis: 'Biologija · Geografija · Povijest · Matematika', ikona: '🔬', boja: 'from-green-500 to-teal-600' },
  7: { naziv: '7. razred', opis: 'Fizika · Kemija · Biologija · Geografija · Povijest', ikona: '⚡', boja: 'from-sky-400 to-blue-600' },
  8: { naziv: '8. razred', opis: 'Fizika · Kemija · Biologija · Geografija · Povijest', ikona: '🏛️', boja: 'from-rose-400 to-pink-600' },
};

export default async function RazredPage({ params }: Props) {
  const { razred: razredStr } = await params;
  const razred = parseInt(razredStr, 10);
  if (!RAZRED_IDS.includes(razred)) notFound();

  const teme = getTemeZaRazred(razred);
  const info = razredInfo[razred];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="max-w-2xl mx-auto pt-4">
        <Link href="/" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Odabir razreda</Link>

        <div className={`bg-gradient-to-r ${info.boja} rounded-3xl p-8 mt-4 mb-8 text-white`}>
          <div className="text-5xl mb-3">{info.ikona}</div>
          <h1 className="text-3xl font-black mb-1">{info.naziv}</h1>
          <p className="text-white/80 text-sm">{info.opis}</p>
          <div className="mt-3 text-white/90 text-sm font-semibold">{teme.length} tema · {teme.reduce((s, t) => s + t.pitanja.length, 0)} pitanja</div>
        </div>

        <div className="flex flex-col gap-4">
          {teme.map((tema) => (
            <Link
              key={tema.id}
              href={`/tema/${tema.id}`}
              className={`flex items-center gap-5 p-6 rounded-2xl border-2 transition-all duration-200 shadow-sm hover:shadow-md ${pozadina[tema.boja] ?? pozadina.violet}`}
            >
              <span className="text-5xl">{tema.ikona}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className={`text-xl font-black ${textBoja[tema.boja] ?? textBoja.violet}`}>{tema.naziv}</h2>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${predmetBadge[tema.boja] ?? predmetBadge.violet}`}>{tema.predmet}</span>
                </div>
                <p className="text-slate-500 text-sm">{tema.opis}</p>
                <div className="flex gap-2 mt-3">
                  {['📖 Skripta', '🃏 Kartice', '🧠 Kviz', '📝 Test'].map(m => (
                    <span key={m} className="text-xs bg-white/70 text-slate-500 font-semibold px-2 py-0.5 rounded-lg">{m}</span>
                  ))}
                </div>
              </div>
              <span className={`text-sm font-bold px-3 py-1 rounded-full shrink-0 ${badge[tema.boja] ?? badge.violet}`}>
                {tema.pitanja.length} pit.
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return RAZRED_IDS.map(razred => ({ razred: String(razred) }));
}
