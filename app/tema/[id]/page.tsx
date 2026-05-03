import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTema, TEMA_IDS } from '@/lib/pitanja';

interface Props { params: Promise<{ id: string }> }

const gradijent: Record<string, string> = {
  amber:  'from-amber-400 to-orange-500',
  green:  'from-emerald-400 to-green-500',
  blue:   'from-blue-400 to-indigo-500',
  violet: 'from-violet-400 to-purple-500',
  teal:   'from-teal-400 to-cyan-500',
};

const modovi = [
  { slug: 'skripta',  ikona: '📖', naziv: 'Skripta',  opis: 'Nauči gradivo',            boja: 'bg-slate-700 hover:bg-slate-800' },
  { slug: 'kartice',  ikona: '🃏', naziv: 'Kartice',  opis: 'Ponovi pojmove flip-karticama', boja: 'bg-violet-600 hover:bg-violet-700' },
  { slug: 'kviz',     ikona: '🧠', naziv: 'Kviz',     opis: 'Provjeri znanje uz objašnjenja', boja: 'bg-indigo-600 hover:bg-indigo-700' },
  { slug: 'test',     ikona: '📝', naziv: 'Test',     opis: 'Saznaj koju ocjenu zaslužuješ', boja: 'bg-rose-600 hover:bg-rose-700' },
];

export default async function TemaPage({ params }: Props) {
  const { id } = await params;
  const tema = getTema(id);
  if (!tema) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="max-w-xl mx-auto pt-4">
        <Link href="/" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Sve teme</Link>

        {/* Hero */}
        <div className={`bg-gradient-to-r ${gradijent[tema.boja]} rounded-3xl p-8 mt-4 mb-8 text-white`}>
          <div className="text-5xl mb-3">{tema.ikona}</div>
          <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">{tema.predmet}</div>
          <h1 className="text-3xl font-black mb-2">{tema.naziv}</h1>
          <p className="text-white/80 text-sm leading-relaxed">{tema.opis}</p>
          <div className="flex gap-4 mt-4 text-white/90 text-sm font-semibold">
            <span>📚 {tema.skripta.length} sekcija</span>
            <span>🃏 {tema.kartice.length} kartica</span>
            <span>❓ {tema.pitanja.length} pitanja</span>
          </div>
        </div>

        {/* 4 moda */}
        <div className="grid grid-cols-2 gap-4">
          {modovi.map((mod) => (
            <Link
              key={mod.slug}
              href={`/tema/${tema.id}/${mod.slug}`}
              className={`${mod.boja} text-white rounded-2xl p-5 transition-colors shadow-sm hover:shadow-md flex flex-col gap-2`}
            >
              <span className="text-3xl">{mod.ikona}</span>
              <span className="font-black text-lg">{mod.naziv}</span>
              <span className="text-white/80 text-xs leading-snug">{mod.opis}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return TEMA_IDS.map(id => ({ id }));
}
