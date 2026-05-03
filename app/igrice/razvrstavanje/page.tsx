'use client';

import { useState } from 'react';
import Link from 'next/link';

interface IgraSkup {
  naziv: string;
  opis: string;
  kategorije: { naziv: string; ikona: string }[];
  pojmovi: { tekst: string; kategorija: string }[];
}

const SKUPOVI: IgraSkup[] = [
  {
    naziv: 'Živa bića',
    opis: 'Razvrstaj prema vrsti živog bića',
    kategorije: [
      { naziv: 'Biljka', ikona: '🌿' },
      { naziv: 'Životinja', ikona: '🐾' },
      { naziv: 'Gljiva', ikona: '🍄' },
    ],
    pojmovi: [
      { tekst: 'Hrast', kategorija: 'Biljka' },
      { tekst: 'Ruža', kategorija: 'Biljka' },
      { tekst: 'Kaktus', kategorija: 'Biljka' },
      { tekst: 'Lav', kategorija: 'Životinja' },
      { tekst: 'Riba', kategorija: 'Životinja' },
      { tekst: 'Orao', kategorija: 'Životinja' },
      { tekst: 'Šampinjon', kategorija: 'Gljiva' },
      { tekst: 'Vrganj', kategorija: 'Gljiva' },
      { tekst: 'Lisičarka', kategorija: 'Gljiva' },
    ],
  },
  {
    naziv: 'Godišnja doba',
    opis: 'Svrstaj pojave u odgovarajuće godišnje doba',
    kategorije: [
      { naziv: 'Proljeće', ikona: '🌸' },
      { naziv: 'Ljeto', ikona: '☀️' },
      { naziv: 'Jesen', ikona: '🍂' },
      { naziv: 'Zima', ikona: '❄️' },
    ],
    pojmovi: [
      { tekst: 'Krokus cvjeta', kategorija: 'Proljeće' },
      { tekst: 'Lastavice se vraćaju', kategorija: 'Proljeće' },
      { tekst: 'Kupanje na moru', kategorija: 'Ljeto' },
      { tekst: 'Jagode sazrijevaju', kategorija: 'Ljeto' },
      { tekst: 'Lišće pada', kategorija: 'Jesen' },
      { tekst: 'Berba grožđa', kategorija: 'Jesen' },
      { tekst: 'Sankanje', kategorija: 'Zima' },
      { tekst: 'Medvjed spava', kategorija: 'Zima' },
    ],
  },
  {
    naziv: 'Matematika',
    opis: 'Razvrstaj operacije i pojmove',
    kategorije: [
      { naziv: 'Zbrajanje', ikona: '➕' },
      { naziv: 'Oduzimanje', ikona: '➖' },
      { naziv: 'Množenje', ikona: '✖️' },
      { naziv: 'Dijeljenje', ikona: '➗' },
    ],
    pojmovi: [
      { tekst: 'Zbroj', kategorija: 'Zbrajanje' },
      { tekst: 'Pribrojnik', kategorija: 'Zbrajanje' },
      { tekst: 'Razlika', kategorija: 'Oduzimanje' },
      { tekst: 'Umanjenik', kategorija: 'Oduzimanje' },
      { tekst: 'Umnožak', kategorija: 'Množenje' },
      { tekst: 'Množilac', kategorija: 'Množenje' },
      { tekst: 'Količnik', kategorija: 'Dijeljenje' },
      { tekst: 'Djelilac', kategorija: 'Dijeljenje' },
    ],
  },
];

function mijesaj<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RazvrstavanjeGame() {
  const [skupIdx, setSkupIdx] = useState(0);
  const [pojmovi, setPojmovi] = useState(() => mijesaj(SKUPOVI[0].pojmovi));
  const [odgovoreno, setOdgovoreno] = useState<Record<number, { kategorija: string; tocno: boolean }>>({});
  const [odabran, setOdabran] = useState<number | null>(null);
  const [gotovo, setGotovo] = useState(false);
  const [gresaka, setGresaka] = useState(0);

  const skup = SKUPOVI[skupIdx];

  function novaIgra(idx: number) {
    setSkupIdx(idx);
    setPojmovi(mijesaj(SKUPOVI[idx].pojmovi));
    setOdgovoreno({});
    setOdabran(null);
    setGotovo(false);
    setGresaka(0);
  }

  function odaberiPojam(i: number) {
    if (odgovoreno[i]) return;
    setOdabran(i);
  }

  function odaberiKategoriju(kat: string) {
    if (odabran === null) return;
    const tocno = pojmovi[odabran].kategorija === kat;
    const novoOdgovoreno = { ...odgovoreno, [odabran]: { kategorija: kat, tocno } };
    setOdgovoreno(novoOdgovoreno);
    if (!tocno) setGresaka(g => g + 1);
    setOdabran(null);
    if (Object.keys(novoOdgovoreno).length === pojmovi.length) setGotovo(true);
  }

  const tocnih = Object.values(odgovoreno).filter(v => v.tocno).length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 via-teal-50 to-cyan-100 p-4">
      <div className="max-w-lg mx-auto pt-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/igrice" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Igrice</Link>
          <span className="font-black text-slate-700">🗂️ Razvrstavanje</span>
          <div />
        </div>

        {/* Odabir teme */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {SKUPOVI.map((s, i) => (
            <button
              key={i}
              onClick={() => novaIgra(i)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-sm font-bold transition-all ${
                skupIdx === i ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 hover:bg-teal-50'
              }`}
            >
              {s.naziv}
            </button>
          ))}
        </div>

        <p className="text-sm text-slate-500 font-semibold mb-4 text-center">
          {gotovo ? '✅ Razvrstano!' : odabran !== null ? `Klikni kategoriju za: "${pojmovi[odabran].tekst}"` : 'Klikni pojam, zatim kategoriju →'}
        </p>

        {gotovo ? (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg animate-pop-in">
            <div className="text-5xl mb-3">{gresaka === 0 ? '🏆' : gresaka <= 2 ? '🎉' : '👍'}</div>
            <h2 className="text-2xl font-black text-slate-800">Razvrstano!</h2>
            <p className="text-slate-500 mt-2">{tocnih}/{pojmovi.length} točnih · {gresaka} grešaka</p>
            <button onClick={() => novaIgra(skupIdx)} className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white font-black py-3 rounded-xl transition-colors">
              Igraj opet 🔄
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Pojmovi */}
            <div className="flex flex-wrap gap-2 justify-center">
              {pojmovi.map((p, i) => {
                const ans = odgovoreno[i];
                return (
                  <button
                    key={i}
                    onClick={() => odaberiPojam(i)}
                    disabled={!!ans}
                    className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                      ans
                        ? ans.tocno
                          ? 'bg-emerald-100 border-2 border-emerald-400 text-emerald-700 opacity-60'
                          : 'bg-red-100 border-2 border-red-400 text-red-700 opacity-60'
                        : odabran === i
                        ? 'bg-teal-600 border-2 border-teal-600 text-white scale-105'
                        : 'bg-white border-2 border-slate-200 hover:border-teal-400 hover:bg-teal-50 text-slate-700 cursor-pointer'
                    }`}
                  >
                    {p.tekst}
                    {ans && (ans.tocno ? ' ✓' : ' ✗')}
                  </button>
                );
              })}
            </div>

            {/* Kategorije */}
            <div className="grid grid-cols-2 gap-3">
              {skup.kategorije.map(k => (
                <button
                  key={k.naziv}
                  onClick={() => odaberiKategoriju(k.naziv)}
                  disabled={odabran === null}
                  className={`p-4 rounded-2xl border-2 font-bold text-center transition-all ${
                    odabran !== null
                      ? 'border-teal-400 bg-teal-50 hover:bg-teal-100 hover:scale-[1.02] cursor-pointer text-teal-800'
                      : 'border-slate-200 bg-white opacity-60 text-slate-500'
                  }`}
                >
                  <div className="text-2xl mb-1">{k.ikona}</div>
                  <div>{k.naziv}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
