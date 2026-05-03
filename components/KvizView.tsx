'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { Tema, Pitanje } from '@/lib/pitanja';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleOptions(p: Pitanje): Pitanje {
  const correct = p.o[p.t];
  const shuffled = shuffle([...p.o]);
  return { ...p, o: shuffled, t: shuffled.indexOf(correct) };
}

const gradijent: Record<string, string> = {
  amber:  'from-amber-400 to-orange-500',
  green:  'from-emerald-400 to-green-500',
  blue:   'from-blue-400 to-indigo-500',
  violet: 'from-violet-400 to-purple-500',
  teal:   'from-teal-400 to-cyan-500',
  sky:    'from-sky-400 to-blue-500',
  rose:   'from-rose-400 to-pink-500',
};

interface AnswerState { selected: number; correct: boolean }

export default function KvizView({ tema }: { tema: Tema }) {
  const [pitanja, setPitanja] = useState<Pitanje[]>([]);
  const [index, setIndex] = useState(0);
  const [odgovor, setOdgovor] = useState<AnswerState | null>(null);
  const [tocno, setTocno] = useState(0);
  const [gotovo, setGotovo] = useState(false);
  const [cekaDalje, setCekaDalje] = useState(false);

  useEffect(() => { setPitanja(shuffle(tema.pitanja).map(shuffleOptions)); }, [tema]);

  const trenutno = pitanja[index];
  const ukupno = pitanja.length;
  const postotak = ukupno > 0 ? Math.round((index / ukupno) * 100) : 0;

  const odgovori = useCallback((i: number) => {
    if (odgovor) return;
    const correct = i === trenutno.t;
    if (correct) setTocno(v => v + 1);
    setOdgovor({ selected: i, correct });
    if (!trenutno.hint) {
      setTimeout(() => {
        if (index + 1 >= ukupno) { setGotovo(true); } else { setIndex(v => v + 1); setOdgovor(null); }
      }, 1200);
    } else {
      setCekaDalje(true);
    }
  }, [odgovor, trenutno, index, ukupno]);

  const dalje = () => {
    setCekaDalje(false);
    if (index + 1 >= ukupno) { setGotovo(true); } else { setIndex(v => v + 1); setOdgovor(null); }
  };

  const restart = () => {
    setPitanja(shuffle(tema.pitanja).map(shuffleOptions));
    setIndex(0); setOdgovor(null); setTocno(0); setGotovo(false); setCekaDalje(false);
  };

  const ocjenaPosto = ukupno > 0 ? Math.round((tocno / ukupno) * 100) : 0;

  if (gotovo) {
    const emoji = ocjenaPosto >= 90 ? '🏆' : ocjenaPosto >= 70 ? '🎉' : ocjenaPosto >= 50 ? '👍' : '💪';
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-7xl mb-4">{emoji}</div>
          <h2 className="text-3xl font-black text-slate-800 mb-1">Kviz završen!</h2>
          <p className="text-slate-500 mb-6">{tema.naziv}</p>
          <div className="bg-slate-50 rounded-2xl p-6 mb-6">
            <div className="text-6xl font-black text-slate-800">{ocjenaPosto}%</div>
            <div className="text-slate-500 mt-1">{tocno} / {ukupno} točnih</div>
          </div>
          <div className="text-slate-600 mb-8 text-sm">
            {ocjenaPosto >= 90 && 'Izvrsno! Pravi znalac! ⭐⭐⭐'}
            {ocjenaPosto >= 70 && ocjenaPosto < 90 && 'Vrlo dobro! Još malo vježbe! ⭐⭐'}
            {ocjenaPosto >= 50 && ocjenaPosto < 70 && 'Dobro! Ponovi gradivo i pokušaj opet! ⭐'}
            {ocjenaPosto < 50 && 'Ponovi gradivo i pokušaj opet! 📚'}
          </div>
          <div className="flex flex-col gap-3">
            <button onClick={restart} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors">Pokušaj opet 🔄</button>
            <Link href={`/tema/${tema.id}`} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors text-center">← Natrag na temu</Link>
          </div>
        </div>
      </main>
    );
  }

  if (!trenutno) return <main className="min-h-screen flex items-center justify-center"><div className="text-4xl animate-spin">⏳</div></main>;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className={`bg-gradient-to-r ${gradijent[tema.boja]} rounded-2xl p-5 mb-4 text-white`}>
          <div className="flex items-center justify-between mb-3">
            <Link href={`/tema/${tema.id}`} className="text-white/80 hover:text-white text-sm font-semibold">← Natrag</Link>
            <span className="text-sm font-bold">🧠 Kviz</span>
            <span className="text-sm font-bold">{tocno} ✓</span>
          </div>
          <div className="bg-white/30 rounded-full h-3 overflow-hidden">
            <div className="bg-white h-3 rounded-full transition-all duration-300" style={{ width: `${postotak}%` }} />
          </div>
          <div className="text-white/90 text-xs mt-1 text-right">{index + 1} / {ukupno}</div>
        </div>

        {/* Pitanje */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <p className="text-lg md:text-xl font-black text-slate-800 leading-snug">{trenutno.p}</p>
        </div>

        {/* Odgovori */}
        <div className="grid grid-cols-1 gap-3">
          {trenutno.o.map((opcija, i) => {
            let klasa = 'w-full text-left p-4 rounded-2xl border-2 font-bold text-slate-700 transition-all duration-200 text-sm md:text-base ';
            if (!odgovor) klasa += 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer';
            else if (i === trenutno.t) klasa += 'bg-emerald-100 border-emerald-500 text-emerald-800';
            else if (i === odgovor.selected && !odgovor.correct) klasa += 'bg-red-100 border-red-400 text-red-700';
            else klasa += 'bg-white border-slate-200 opacity-50';
            const slovo = ['A', 'B', 'C', 'D'][i];
            return (
              <button key={i} className={klasa} onClick={() => odgovori(i)} disabled={!!odgovor}>
                <span className="inline-flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-black shrink-0">
                    {odgovor ? (i === trenutno.t ? '✓' : i === odgovor.selected ? '✗' : slovo) : slovo}
                  </span>
                  {opcija}
                </span>
              </button>
            );
          })}
        </div>

        {/* Hint + Dalje */}
        {odgovor && trenutno.hint && (
          <div className={`mt-4 p-4 rounded-2xl text-sm font-semibold ${odgovor.correct ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}`}>
            <span className="font-black mr-1">💡 Objašnjenje:</span>{trenutno.hint}
            {cekaDalje && (
              <button onClick={dalje} className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-2.5 rounded-xl transition-colors block">
                Dalje →
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
