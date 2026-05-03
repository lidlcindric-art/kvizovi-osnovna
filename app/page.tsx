import Link from 'next/link';

const razredi = [
  {
    razred: 1,
    naziv: '1. razred',
    opis: 'Matematika · Priroda i društvo',
    ikona: '🌱',
    teme: 3,
    boja: 'from-green-400 to-teal-500',
  },
  {
    razred: 2,
    naziv: '2. razred',
    opis: 'Matematika · Hrvatski jezik · Priroda i društvo',
    ikona: '📚',
    teme: 3,
    boja: 'from-blue-400 to-violet-500',
  },
  {
    razred: 5,
    naziv: '5. razred',
    opis: 'Povijest · Priroda · Hrvatski · Matematika · Geografija',
    ikona: '🎓',
    teme: 18,
    boja: 'from-indigo-400 to-purple-500',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🏫</div>
          <h1 className="text-4xl font-black text-slate-800 mb-2">Osnovna škola</h1>
          <p className="text-slate-500 text-lg">Odaberi razred i počni učiti!</p>
        </div>

        <div className="flex flex-col gap-5">
          {razredi.map((r) => (
            <Link
              key={r.razred}
              href={`/razred/${r.razred}`}
              className={`bg-gradient-to-r ${r.boja} rounded-3xl p-7 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-5">
                <span className="text-5xl">{r.ikona}</span>
                <div className="flex-1">
                  <h2 className="text-2xl font-black mb-1">{r.naziv}</h2>
                  <p className="text-white/80 text-sm">{r.opis}</p>
                  <div className="mt-2 text-white/90 text-sm font-semibold">{r.teme} {r.teme === 1 ? 'tema' : 'tema'} · 4 načina učenja</div>
                </div>
                <span className="text-3xl opacity-60">→</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          Osnovna škola · Hrvatska
        </p>
      </div>
    </main>
  );
}
