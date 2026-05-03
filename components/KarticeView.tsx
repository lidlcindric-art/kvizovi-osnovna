'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Tema } from '@/lib/pitanja';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const gradijent: Record<string, string> = {
  amber:  'from-amber-400 to-orange-500',
  green:  'from-emerald-400 to-green-500',
  blue:   'from-blue-400 to-indigo-500',
  violet: 'from-violet-400 to-purple-500',
  teal:   'from-teal-400 to-cyan-500',
};

const karticaBoja: Record<string, string> = {
  amber:  'from-amber-50 to-orange-50 border-amber-200',
  green:  'from-emerald-50 to-green-50 border-emerald-200',
  blue:   'from-blue-50 to-indigo-50 border-blue-200',
  violet: 'from-violet-50 to-purple-50 border-violet-200',
  teal:   'from-teal-50 to-cyan-50 border-teal-200',
};

export default function KarticeView({ tema }: { tema: Tema }) {
  const [kartice, setKartice] = useState(tema.kartice);
  const [index, setIndex] = useState(0);
  const [okrenuta, setOkrenuta] = useState(false);
  const [zavrseno, setZavrseno] = useState(false);

  const kartica = kartice[index];
  const ukupno = kartice.length;

  const sljedeca = () => {
    setOkrenuta(false);
    setTimeout(() => {
      if (index + 1 >= ukupno) { setZavrseno(true); }
      else { setIndex(v => v + 1); }
    }, 150);
  };

  const prethodna = () => {
    if (index === 0) return;
    setOkrenuta(false);
    setTimeout(() => setIndex(v => v - 1), 150);
  };

  const promijesaj = () => {
    setKartice(shuffle(tema.kartice));
    setIndex(0);
    setOkrenuta(false);
    setZavrseno(false);
  };

  const restart = () => {
    setKartice(tema.kartice);
    setIndex(0);
    setOkrenuta(false);
    setZavrseno(false);
  };

  if (zavrseno) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">🎊</div>
          <h2 className="text-2xl font-black text-slate-800 mb-2">Sve kartice pregledane!</h2>
          <p className="text-slate-500 mb-8">Prošao/la si kroz svih {ukupno} pojmova.</p>
          <div className="flex flex-col gap-3">
            <button onClick={restart} className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-xl transition-colors">Počni ispočetka</button>
            <button onClick={promijesaj} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors">Promiješaj 🔀</button>
            <Link href={`/tema/${tema.id}`} className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold py-3 rounded-xl transition-colors text-center">← Natrag na temu</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className={`bg-gradient-to-r ${gradijent[tema.boja]} rounded-2xl p-4 mb-6 text-white`}>
          <div className="flex items-center justify-between mb-2">
            <Link href={`/tema/${tema.id}`} className="text-white/80 hover:text-white text-sm font-semibold">← Natrag</Link>
            <span className="font-black">🃏 Kartice — {tema.naziv}</span>
            <button onClick={promijesaj} className="text-white/80 hover:text-white text-sm font-semibold">🔀</button>
          </div>
          <div className="bg-white/30 rounded-full h-2 overflow-hidden">
            <div className="bg-white h-2 rounded-full transition-all duration-300" style={{ width: `${Math.round(((index + 1) / ukupno) * 100)}%` }} />
          </div>
          <div className="text-white/90 text-xs mt-1 text-right">{index + 1} / {ukupno}</div>
        </div>

        {/* Kartica */}
        <div
          className="cursor-pointer select-none mb-6"
          style={{ perspective: '1000px' }}
          onClick={() => setOkrenuta(v => !v)}
        >
          <div
            className="relative transition-transform duration-500"
            style={{ transformStyle: 'preserve-3d', transform: okrenuta ? 'rotateY(180deg)' : 'rotateY(0deg)', minHeight: '220px' }}
          >
            {/* Prednja strana — pojam */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${karticaBoja[tema.boja]} border-2 rounded-3xl shadow-lg flex flex-col items-center justify-center p-8`}
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Pojam</div>
              <div className="text-2xl font-black text-slate-800 text-center leading-tight">{kartica.pojam}</div>
              <div className="text-slate-400 text-sm mt-6">Klikni za objašnjenje →</div>
            </div>

            {/* Stražnja strana — opis */}
            <div
              className="absolute inset-0 bg-white border-2 border-slate-200 rounded-3xl shadow-lg flex flex-col items-center justify-center p-8"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
            >
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Objašnjenje</div>
              <div className="text-lg font-bold text-slate-700 text-center leading-relaxed">{kartica.opis}</div>
              <div className="text-slate-400 text-sm mt-6">← Klikni za pojam</div>
            </div>
          </div>
        </div>

        {/* Navigacija */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={prethodna}
            disabled={index === 0}
            className="flex-1 py-3 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Natrag
          </button>
          <button
            onClick={sljedeca}
            className="flex-1 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-colors"
          >
            {index + 1 < ukupno ? 'Sljedeća →' : 'Završi ✓'}
          </button>
        </div>
      </div>
    </main>
  );
}
