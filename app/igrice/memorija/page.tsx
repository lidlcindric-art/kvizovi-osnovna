'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { spremiRezultatIgre } from '@/lib/napredak';

type Tezina = 'lako' | 'srednje' | 'tesko';

const PAROVI_LAKO = [
  { a: '🐶', b: 'pas' },
  { a: '🐱', b: 'mačka' },
  { a: '🐸', b: 'žaba' },
  { a: '🦋', b: 'leptir' },
];

const PAROVI_SREDNJE = [
  ...PAROVI_LAKO,
  { a: '🐝', b: 'pčela' },
  { a: '🦁', b: 'lav' },
  { a: '🐘', b: 'slon' },
  { a: '🦊', b: 'lisica' },
];

const PAROVI_TESKO = [
  ...PAROVI_SREDNJE,
  { a: '🌍', b: 'Zemlja' },
  { a: '⭐', b: 'zvijezda' },
  { a: '🌊', b: 'val' },
  { a: '🏔️', b: 'planina' },
];

const SKUPOVI: Record<Tezina, typeof PAROVI_LAKO> = {
  lako: PAROVI_LAKO,
  srednje: PAROVI_SREDNJE,
  tesko: PAROVI_TESKO,
};

const MAKS_BODOVI: Record<Tezina, number> = {
  lako: 100,
  srednje: 200,
  tesko: 400,
};

const STUPCI: Record<Tezina, number> = {
  lako: 4,
  srednje: 4,
  tesko: 6,
};

interface Kartica {
  id: number;
  sadrzaj: string;
  parId: number;
  okrenuta: boolean;
  pronaden: boolean;
}

function stvoriKartice(parovi: typeof PAROVI_LAKO): Kartica[] {
  const kartice: Kartica[] = [];
  parovi.forEach((par, i) => {
    kartice.push({ id: i * 2,     sadrzaj: par.a, parId: i, okrenuta: false, pronaden: false });
    kartice.push({ id: i * 2 + 1, sadrzaj: par.b, parId: i, okrenuta: false, pronaden: false });
  });
  for (let i = kartice.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kartice[i], kartice[j]] = [kartice[j], kartice[i]];
  }
  return kartice;
}

export default function MemorijaPage() {
  const [tezina, setTezina] = useState<Tezina | null>(null);
  const [kartice, setKartice] = useState<Kartica[]>([]);
  const [odabrane, setOdabrane] = useState<number[]>([]);
  const [potezi, setPotezi] = useState(0);
  const [gotovo, setGotovo] = useState(false);
  const [blokirano, setBlokirano] = useState(false);
  const [vrijemeStart, setVrijemeStart] = useState<number>(Date.now());
  const [sekunde, setSekunde] = useState(0);

  useEffect(() => {
    if (gotovo) return;
    const t = setInterval(() => setSekunde(Math.floor((Date.now() - vrijemeStart) / 1000)), 500);
    return () => clearInterval(t);
  }, [gotovo, vrijemeStart]);

  useEffect(() => {
    if (!gotovo || !tezina || potezi === 0) return;
    const maks = MAKS_BODOVI[tezina];
    const bodovi = Math.max(0, maks - potezi * 5 - Math.floor(sekunde / 2));
    spremiRezultatIgre({ igra: 'memorija', bodovi, detalj: `${tezina} · ${potezi} poteza · ${sekunde}s` });
  }, [gotovo]); // eslint-disable-line react-hooks/exhaustive-deps

  function pocniIgru(t: Tezina) {
    setTezina(t);
    setKartice(stvoriKartice(SKUPOVI[t]));
    setOdabrane([]);
    setPotezi(0);
    setGotovo(false);
    setBlokirano(false);
    setVrijemeStart(Date.now());
    setSekunde(0);
  }

  function okrenuti(id: number) {
    if (blokirano) return;
    const k = kartice.find(c => c.id === id);
    if (!k || k.okrenuta || k.pronaden) return;
    if (odabrane.includes(id)) return;

    const novaOdabrana = [...odabrane, id];
    setKartice(prev => prev.map(c => c.id === id ? { ...c, okrenuta: true } : c));
    setOdabrane(novaOdabrana);

    if (novaOdabrana.length === 2) {
      setBlokirano(true);
      setPotezi(p => p + 1);
      const [id1, id2] = novaOdabrana;
      const k1 = kartice.find(c => c.id === id1)!;
      const k2 = kartice.find(c => c.id === id2)!;

      if (k1.parId === k2.parId) {
        setKartice(prev => prev.map(c =>
          c.id === id1 || c.id === id2 ? { ...c, pronaden: true } : c
        ));
        setOdabrane([]);
        setBlokirano(false);
        const svi = kartice.map(c => (c.id === id1 || c.id === id2) ? { ...c, pronaden: true } : c);
        if (svi.every(c => c.pronaden)) setGotovo(true);
      } else {
        setTimeout(() => {
          setKartice(prev => prev.map(c =>
            c.id === id1 || c.id === id2 ? { ...c, okrenuta: false } : c
          ));
          setOdabrane([]);
          setBlokirano(false);
        }, 1000);
      }
    }
  }

  const brParova = tezina ? SKUPOVI[tezina].length : 0;
  const pronadeni = kartice.filter(c => c.pronaden).length / 2;

  if (!tezina) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-100 p-4">
        <div className="max-w-md mx-auto pt-4">
          <div className="flex items-center justify-between mb-6">
            <Link href="/igrice" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Igrice</Link>
            <span className="font-black text-slate-700">🃏 Memorija</span>
            <span />
          </div>
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🃏</div>
            <h1 className="text-2xl font-black text-slate-800">Igra memorije</h1>
            <p className="text-slate-500 mt-2 text-sm">Pronađi sve parove kartica</p>
          </div>
          <div className="space-y-3">
            {([
              { t: 'lako' as Tezina,    label: 'Lako',    opis: '4 para · veliki grid',  boja: 'from-emerald-400 to-green-500', ikona: '🌱' },
              { t: 'srednje' as Tezina, label: 'Srednje', opis: '8 parova · klasično',    boja: 'from-blue-400 to-indigo-500',   ikona: '⭐' },
              { t: 'tesko' as Tezina,   label: 'Teško',   opis: '12 parova · izazov!',   boja: 'from-rose-400 to-red-500',      ikona: '🔥' },
            ]).map(({ t, label, opis, boja, ikona }) => (
              <button
                key={t}
                onClick={() => pocniIgru(t)}
                className={`w-full bg-gradient-to-r ${boja} text-white rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform`}
              >
                <span className="text-3xl">{ikona}</span>
                <div className="text-left">
                  <div className="font-black text-lg">{label}</div>
                  <div className="text-white/80 text-sm">{opis}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-md mx-auto pt-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setTezina(null)} className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Natrag</button>
          <span className="font-black text-slate-700">🃏 Memorija</span>
          <button onClick={() => pocniIgru(tezina)} className="text-sm font-bold text-violet-600 hover:text-violet-800">Nova igra 🔄</button>
        </div>

        <div className="bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl p-4 text-white mb-4 flex justify-around">
          <div className="text-center">
            <div className="text-2xl font-black">{potezi}</div>
            <div className="text-xs opacity-80">Potezi</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">{pronadeni}/{brParova}</div>
            <div className="text-xs opacity-80">Parovi</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">{sekunde}s</div>
            <div className="text-xs opacity-80">Vrijeme</div>
          </div>
        </div>

        {gotovo ? (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl mb-3">🏆</div>
            <h2 className="text-2xl font-black text-slate-800">Pronašao/la si sve parove!</h2>
            <p className="text-slate-500 mt-2">{potezi} poteza · {sekunde} sekundi</p>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setTezina(null)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors">
                Razine
              </button>
              <button onClick={() => pocniIgru(tezina)} className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-black py-3 rounded-xl transition-colors">
                Igraj opet 🔄
              </button>
            </div>
          </div>
        ) : (
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: `repeat(${STUPCI[tezina]}, minmax(0, 1fr))` }}
          >
            {kartice.map(k => (
              <button
                key={k.id}
                onClick={() => okrenuti(k.id)}
                className={`aspect-square rounded-xl font-black transition-all duration-300 ${tezina === 'tesko' ? 'text-base' : 'text-lg'} ${
                  k.pronaden
                    ? 'bg-emerald-100 border-2 border-emerald-400 scale-95 text-emerald-700'
                    : k.okrenuta
                    ? 'bg-white border-2 border-violet-400 text-slate-800 shadow-md'
                    : 'bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-violet-600 text-white hover:scale-105 cursor-pointer'
                }`}
              >
                {k.okrenuta || k.pronaden ? k.sadrzaj : '?'}
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
