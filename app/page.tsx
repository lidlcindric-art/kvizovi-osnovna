import Link from 'next/link';
import { teme } from '@/lib/pitanja';

const bojaPozadina: Record<string, string> = {
  amber: 'bg-amber-50 hover:bg-amber-100 border-amber-200 hover:border-amber-400',
  green: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 hover:border-emerald-400',
  blue: 'bg-blue-50 hover:bg-blue-100 border-blue-200 hover:border-blue-400',
};

const bojaText: Record<string, string> = {
  amber: 'text-amber-700',
  green: 'text-emerald-700',
  blue: 'text-blue-700',
};

const bojaBadge: Record<string, string> = {
  amber: 'bg-amber-200 text-amber-800',
  green: 'bg-emerald-200 text-emerald-800',
  blue: 'bg-blue-200 text-blue-800',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-4xl font-black text-slate-800 mb-2">Kvizovi — 5. razred</h1>
          <p className="text-slate-500 text-lg">Odaberi temu i provjeri znanje!</p>
        </div>

        <div className="flex flex-col gap-4">
          {teme.map((tema) => (
            <Link
              key={tema.id}
              href={`/kviz/${tema.id}`}
              className={`flex items-center gap-5 p-6 rounded-2xl border-2 transition-all duration-200 shadow-sm hover:shadow-md ${bojaPozadina[tema.boja]}`}
            >
              <span className="text-5xl">{tema.ikona}</span>
              <div className="flex-1">
                <h2 className={`text-xl font-black ${bojaText[tema.boja]}`}>{tema.naziv}</h2>
                <p className="text-slate-500 text-sm mt-1">{tema.opis}</p>
              </div>
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${bojaBadge[tema.boja]}`}>
                {tema.pitanja.length} pit.
              </span>
            </Link>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          Osnovna škola · Hrvatska · 5. razred
        </p>
      </div>
    </main>
  );
}
