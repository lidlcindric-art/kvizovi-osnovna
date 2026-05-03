'use client';

import { useState, useEffect } from 'react';
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

function izracunajOcjenu(posto: number): { broj: number; naziv: string; boja: string; emoji: string } {
  if (posto >= 88) return { broj: 5, naziv: 'Odličan', boja: 'emerald', emoji: '🏆' };
  if (posto >= 75) return { broj: 4, naziv: 'Vrlo dobar', boja: 'blue', emoji: '🎉' };
  if (posto >= 62) return { broj: 3, naziv: 'Dobar', boja: 'yellow', emoji: '👍' };
  if (posto >= 50) return { broj: 2, naziv: 'Dovoljan', boja: 'orange', emoji: '📚' };
  return { broj: 1, naziv: 'Nedovoljan', boja: 'red', emoji: '💪' };
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

const ocjenaBoja: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  blue: 'bg-blue-100 text-blue-800 border-blue-300',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  orange: 'bg-orange-100 text-orange-800 border-orange-300',
  red: 'bg-red-100 text-red-800 border-red-300',
};

export default function TestView({ tema }: { tema: Tema }) {
  const [pitanja, setPitanja] = useState<Pitanje[]>([]);
  const [odabrani, setOdabrani] = useState<(number | null)[]>([]);
  const [poslano, setPoslano] = useState(false);

  useEffect(() => {
    const p = shuffle(tema.pitanja).map(shuffleOptions);
    setPitanja(p);
    setOdabrani(new Array(p.length).fill(null));
  }, [tema]);

  const ukupno = pitanja.length;
  const odgovoreno = odabrani.filter(v => v !== null).length;

  const odaberi = (pitanjeIdx: number, opcijIdx: number) => {
    if (poslano) return;
    setOdabrani(prev => { const next = [...prev]; next[pitanjeIdx] = opcijIdx; return next; });
  };

  const predaj = () => { if (odgovoreno === ukupno) setPoslano(true); };

  const restart = () => {
    const p = shuffle(tema.pitanja).map(shuffleOptions);
    setPitanja(p);
    setOdabrani(new Array(p.length).fill(null));
    setPoslano(false);
  };

  if (pitanja.length === 0) return <main className="min-h-screen flex items-center justify-center"><div className="text-4xl animate-spin">⏳</div></main>;

  // ── REZULTATI ──────────────────────────────────────────────────────────────
  if (poslano) {
    const tocno = pitanja.filter((p, i) => odabrani[i] === p.t).length;
    const posto = Math.round((tocno / ukupno) * 100);
    const ocjena = izracunajOcjenu(posto);
    const pogresna = pitanja.map((p, i) => ({ p, odabran: odabrani[i] })).filter(({ p, odabran }) => odabran !== p.t);

    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
        <div className="w-full max-w-2xl mx-auto pt-6">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center mb-6">
            <div className="text-6xl mb-3">{ocjena.emoji}</div>
            <h2 className="text-3xl font-black text-slate-800 mb-1">Rezultat testa</h2>
            <p className="text-slate-500 mb-6">{tema.naziv}</p>

            <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl border-2 mb-4 ${ocjenaBoja[ocjena.boja]}`}>
              <span className="text-5xl font-black">{ocjena.broj}</span>
              <span className="text-xl font-bold">{ocjena.naziv}</span>
            </div>

            <div className="text-slate-600 mt-2">{tocno} / {ukupno} točnih · {posto}%</div>

            <div className="flex gap-3 mt-6">
              <button onClick={restart} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors">Pokušaj opet 🔄</button>
              <Link href={`/tema/${tema.id}`} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors text-center">← Natrag</Link>
            </div>
          </div>

          {/* Greške s objašnjenjima */}
          {pogresna.length > 0 && (
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="font-black text-slate-800 text-lg mb-4">❌ Krivi odgovori ({pogresna.length})</h3>
              <div className="space-y-4">
                {pogresna.map(({ p, odabran }, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-4">
                    <p className="font-bold text-slate-800 mb-2">{p.p}</p>
                    {odabran !== null && (
                      <p className="text-sm text-red-600 mb-1">✗ Tvoj odgovor: {p.o[odabran]}</p>
                    )}
                    <p className="text-sm text-emerald-700 font-semibold mb-2">✓ Točan odgovor: {p.o[p.t]}</p>
                    {p.hint && <p className="text-xs text-slate-500 italic">💡 {p.hint}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }

  // ── TEST FORMA ─────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="w-full max-w-2xl mx-auto pt-6">
        {/* Header */}
        <div className={`bg-gradient-to-r ${gradijent[tema.boja]} rounded-2xl p-5 mb-6 text-white`}>
          <div className="flex items-center justify-between mb-2">
            <Link href={`/tema/${tema.id}`} className="text-white/80 hover:text-white text-sm font-semibold">← Natrag</Link>
            <span className="font-black">📝 Test — {tema.naziv}</span>
            <span className="text-sm font-bold">{odgovoreno}/{ukupno}</span>
          </div>
          <div className="bg-white/30 rounded-full h-2 overflow-hidden">
            <div className="bg-white h-2 rounded-full transition-all duration-300" style={{ width: `${Math.round((odgovoreno / ukupno) * 100)}%` }} />
          </div>
        </div>

        <div className="space-y-6 mb-8">
          {pitanja.map((pit, pi) => (
            <div key={pi} className="bg-white rounded-2xl shadow-sm p-5">
              <p className="font-black text-slate-800 mb-4 leading-snug">
                <span className="text-slate-400 text-sm mr-2">{pi + 1}.</span>{pit.p}
              </p>
              <div className="grid grid-cols-1 gap-2">
                {pit.o.map((opcija, oi) => (
                  <button
                    key={oi}
                    onClick={() => odaberi(pi, oi)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 font-semibold text-sm transition-all ${
                      odabrani[pi] === oi
                        ? 'bg-indigo-600 border-indigo-600 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-md text-xs font-black flex items-center justify-center ${odabrani[pi] === oi ? 'bg-white/20' : 'bg-white'}`}>
                        {['A', 'B', 'C', 'D'][oi]}
                      </span>
                      {opcija}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={predaj}
          disabled={odgovoreno < ukupno}
          className={`w-full py-4 rounded-2xl font-black text-lg transition-all mb-8 ${
            odgovoreno === ukupno
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {odgovoreno < ukupno ? `Odgovori na sva pitanja (${ukupno - odgovoreno} preostalo)` : 'Predaj test →'}
        </button>
      </div>
    </main>
  );
}
