import Link from 'next/link';

const igrice = [
  {
    href: '/igrice/memorija',
    naziv: 'Igra memorije',
    opis: 'Pronađi parove skrivenih kartica — vježba pamćenje i pažnju',
    ikona: '🃏',
    boja: 'from-violet-400 to-purple-500',
  },
  {
    href: '/igrice/matematika',
    naziv: 'Matematički izazov',
    opis: 'Brzo računanje — zbroji, oduzmi, pomnoži dok sat otkucava',
    ikona: '⚡',
    boja: 'from-amber-400 to-orange-500',
  },
  {
    href: '/igrice/vjesanje',
    naziv: 'Vješanje',
    opis: 'Pogodi skrivenu riječ slovo po slovo — klasična igra riječima',
    ikona: '🔤',
    boja: 'from-blue-400 to-indigo-500',
  },
  {
    href: '/igrice/razvrstavanje',
    naziv: 'Razvrstaj pojmove',
    opis: 'Povuci pojmove u ispravnu kategoriju — uči razvrstavanjem',
    ikona: '🗂️',
    boja: 'from-green-400 to-teal-500',
  },
  {
    href: '/igrice/kviz-utrka',
    naziv: 'Kviz utrka',
    opis: 'Odgovaraj brzo — 20 sekundi po pitanju, skupljaj bodove!',
    ikona: '🏁',
    boja: 'from-rose-400 to-orange-500',
  },
];

export default function IgricePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="max-w-lg mx-auto pt-4">
        <Link href="/" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Početna</Link>

        <div className="text-center my-8">
          <div className="text-5xl mb-3">🎮</div>
          <h1 className="text-3xl font-black text-slate-800">Igrice</h1>
          <p className="text-slate-500 mt-1 text-sm">Uči kroz igru!</p>
        </div>

        <div className="flex flex-col gap-4">
          {igrice.map((igra) => (
            <Link
              key={igra.href}
              href={igra.href}
              className={`bg-gradient-to-r ${igra.boja} rounded-2xl p-5 text-white shadow-md hover:shadow-lg transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{igra.ikona}</span>
                <div className="flex-1">
                  <h2 className="text-xl font-black">{igra.naziv}</h2>
                  <p className="text-white/80 text-sm mt-0.5">{igra.opis}</p>
                </div>
                <span className="text-2xl opacity-50">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
