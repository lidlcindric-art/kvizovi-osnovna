import Link from 'next/link';

const niziBoje = [
  { razred: 1, naziv: '1. razred', opis: 'Matematika · Hrvatski · Engleski · Priroda i društvo', ikona: '🌱', boja: 'from-green-400 to-teal-500' },
  { razred: 2, naziv: '2. razred', opis: 'Matematika · Hrvatski · Engleski · Priroda i društvo', ikona: '📚', boja: 'from-blue-400 to-violet-500' },
  { razred: 3, naziv: '3. razred', opis: 'Matematika · Hrvatski · Engleski · Priroda i društvo', ikona: '📐', boja: 'from-violet-400 to-purple-500' },
  { razred: 4, naziv: '4. razred', opis: 'Matematika · Hrvatski · Engleski · Njemački · Priroda i društvo', ikona: '🌍', boja: 'from-amber-400 to-orange-500' },
];

const visiBoje = [
  { razred: 5, naziv: '5. razred', opis: 'Matematika · Hrvatski · Engleski · Njemački · Geografija · Povijest', ikona: '🎓', boja: 'from-indigo-400 to-purple-500' },
  { razred: 6, naziv: '6. razred', opis: 'Biologija · Geografija · Engleski · Njemački · Domaćinstvo', ikona: '🔬', boja: 'from-green-500 to-teal-600' },
  { razred: 7, naziv: '7. razred', opis: 'Fizika · Kemija · Biologija · Engleski · Njemački · Geografija', ikona: '⚡', boja: 'from-sky-400 to-blue-600' },
  { razred: 8, naziv: '8. razred', opis: 'Fizika · Kemija · Biologija · Engleski · Njemački · Povijest', ikona: '🏛️', boja: 'from-rose-400 to-pink-600' },
];

function RazredKartica({ razred, naziv, opis, ikona, boja }: { razred: number; naziv: string; opis: string; ikona: string; boja: string }) {
  return (
    <Link
      href={`/razred/${razred}`}
      className={`bg-gradient-to-r ${boja} rounded-2xl p-5 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]`}
    >
      <div className="flex items-center gap-4">
        <span className="text-4xl">{ikona}</span>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-black">{naziv}</h2>
          <p className="text-white/75 text-xs mt-0.5 leading-snug">{opis}</p>
        </div>
        <span className="text-2xl opacity-50">→</span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🏫</div>
          <h1 className="text-4xl font-black text-slate-800 mb-2">Osnovna škola</h1>
          <p className="text-slate-500">Odaberi razred i počni učiti!</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">Niži razredi (1–4)</h2>
          <div className="flex flex-col gap-3">
            {niziBoje.map(r => <RazredKartica key={r.razred} {...r} />)}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">Viši razredi (5–8)</h2>
          <div className="flex flex-col gap-3">
            {visiBoje.map(r => <RazredKartica key={r.razred} {...r} />)}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <Link href="/profil" className="flex items-center gap-2 px-5 py-2.5 bg-white/80 hover:bg-white rounded-2xl shadow-sm text-slate-600 font-bold text-sm transition-all hover:shadow-md">
            📊 Moj napredak
          </Link>
          <Link href="/igrice" className="flex items-center gap-2 px-5 py-2.5 bg-white/80 hover:bg-white rounded-2xl shadow-sm text-slate-600 font-bold text-sm transition-all hover:shadow-md">
            🎮 Igrice
          </Link>
        </div>
        <p className="text-center text-slate-400 text-sm mt-4">
          Osnovna škola · Hrvatska · Razredi 1–8
        </p>
      </div>
    </main>
  );
}
