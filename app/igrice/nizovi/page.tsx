'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { spremiRezultatIgre } from '@/lib/napredak';

type Tezina = 'lako' | 'srednje' | 'tesko';

const UKUPNO = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface Niz {
  prikaz: (number | null)[];
  opcije: number[];
  tocno: number;
}

function generirajNiz(t: Tezina): Niz {
  let niz: number[];

  if (t === 'lako') {
    const start = Math.floor(Math.random() * 10) + 1;
    const korak = Math.random() < 0.5 ? 1 : 2;
    niz = Array.from({ length: 5 }, (_, i) => start + i * korak);
  } else if (t === 'srednje') {
    const tip = Math.floor(Math.random() * 4);
    if (tip === 0) {
      const start = (Math.floor(Math.random() * 6) + 1) * 5;
      niz = Array.from({ length: 5 }, (_, i) => start + i * 5);
    } else if (tip === 1) {
      const start = (Math.floor(Math.random() * 5) + 1) * 10;
      niz = Array.from({ length: 5 }, (_, i) => start + i * 10);
    } else if (tip === 2) {
      const start = Math.floor(Math.random() * 8) + 3;
      const korak = Math.floor(Math.random() * 3) + 3;
      niz = Array.from({ length: 5 }, (_, i) => start + i * korak);
    } else {
      const start = 20 + Math.floor(Math.random() * 20);
      const korak = Math.floor(Math.random() * 3) + 2;
      niz = Array.from({ length: 5 }, (_, i) => start - i * korak);
    }
  } else {
    const tip = Math.floor(Math.random() * 4);
    if (tip === 0) {
      const baza = [1, 2, 3][Math.floor(Math.random() * 3)];
      niz = Array.from({ length: 5 }, (_, i) => baza * Math.pow(2, i));
    } else if (tip === 1) {
      const start = Math.floor(Math.random() * 4) + 1;
      niz = Array.from({ length: 5 }, (_, i) => Math.pow(start + i, 2));
    } else if (tip === 2) {
      const start = 50 + Math.floor(Math.random() * 50);
      const korak = [4, 5, 6, 7][Math.floor(Math.random() * 4)];
      niz = Array.from({ length: 5 }, (_, i) => start - i * korak);
    } else {
      const start = Math.floor(Math.random() * 5) + 2;
      const korak = Math.floor(Math.random() * 4) + 4;
      niz = Array.from({ length: 5 }, (_, i) => start + i * korak);
    }
  }

  const pos = 1 + Math.floor(Math.random() * 3);
  const tocno = niz[pos];

  const pogresne = new Set<number>();
  let pokusaji = 0;
  while (pogresne.size < 3 && pokusaji < 30) {
    pokusaji++;
    const delta = Math.floor(Math.random() * 5) + 1;
    const v = tocno + (Math.random() < 0.5 ? delta : -delta);
    if (v !== tocno && v > 0 && !pogresne.has(v)) pogresne.add(v);
  }

  const opcije = shuffle([tocno, ...Array.from(pogresne)]);
  const prikaz: (number | null)[] = niz.map((v, i) => (i === pos ? null : v));

  return { prikaz, opcije, tocno };
}

export default function NizoviPage() {
  const [tezina, setTezina] = useState<Tezina | null>(null);
  const [pitanje, setPitanje] = useState(0);
  const [tocnoOdg, setTocnoOdg] = useState(0);
  const [odgovor, setOdgovor] = useState<number | null>(null);
  const [gotovo, setGotovo] = useState(false);
  const [trenutni, setTrenutni] = useState<Niz | null>(null);

  function novoPitanje(t: Tezina) {
    setTrenutni(generirajNiz(t));
    setOdgovor(null);
  }

  function pocni(t: Tezina) {
    setTezina(t);
    setPitanje(1);
    setTocnoOdg(0);
    setGotovo(false);
    novoPitanje(t);
  }

  function odaberiOdgovor(op: number) {
    if (odgovor !== null || !trenutni || !tezina) return;
    setOdgovor(op);
    if (op === trenutni.tocno) setTocnoOdg(p => p + 1);
    setTimeout(() => {
      if (pitanje >= UKUPNO) {
        setGotovo(true);
      } else {
        setPitanje(p => p + 1);
        novoPitanje(tezina);
      }
    }, 900);
  }

  useEffect(() => {
    if (!gotovo || !tezina) return;
    const bodovi = tocnoOdg * 10;
    spremiRezultatIgre({ igra: 'nizovi', bodovi, detalj: `${tezina} · ${tocnoOdg}/${UKUPNO} točno` });
  }, [gotovo]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!tezina || !trenutni) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-teal-100 via-emerald-50 to-cyan-100 p-4">
        <div className="max-w-md mx-auto pt-4">
          <div className="flex items-center justify-between mb-6">
            <Link href="/igrice" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Igrice</Link>
            <span className="font-black text-slate-700">🔢 Nizovi</span>
            <span />
          </div>
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔢</div>
            <h1 className="text-2xl font-black text-slate-800">Nizovi brojeva</h1>
            <p className="text-slate-500 mt-2 text-sm">Pronađi koji broj nedostaje u nizu</p>
          </div>
          <div className="space-y-3">
            {([
              { t: 'lako' as Tezina,    label: 'Lako',    opis: 'Broj po broj (+1, +2)',         boja: 'from-emerald-400 to-teal-500',  ikona: '🌱' },
              { t: 'srednje' as Tezina, label: 'Srednje', opis: 'Veći koraci, silazni nizovi',    boja: 'from-cyan-400 to-sky-500',      ikona: '⭐' },
              { t: 'tesko' as Tezina,   label: 'Teško',   opis: 'Kvadrati, množenje, padajući',  boja: 'from-rose-400 to-red-500',      ikona: '🔥' },
            ]).map(({ t, label, opis, boja, ikona }) => (
              <button
                key={t}
                onClick={() => pocni(t)}
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
    <main className="min-h-screen bg-gradient-to-br from-teal-100 via-emerald-50 to-cyan-100 p-4">
      <div className="max-w-md mx-auto pt-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setTezina(null)} className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Natrag</button>
          <span className="font-black text-slate-700">🔢 Nizovi</span>
          <span className="text-sm font-bold text-teal-600">✓ {tocnoOdg} točno</span>
        </div>

        <div className="bg-teal-500 rounded-2xl px-4 py-2 text-white text-center mb-4">
          <div className="flex justify-center gap-1">
            {Array.from({ length: UKUPNO }, (_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  i < pitanje - 1 ? 'bg-white' : i === pitanje - 1 ? 'bg-white/60' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <p className="text-xs mt-1 opacity-80">Pitanje {pitanje} od {UKUPNO}</p>
        </div>

        {gotovo ? (
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
            <div className="text-5xl mb-3">{tocnoOdg >= 8 ? '🏆' : tocnoOdg >= 5 ? '👍' : '💪'}</div>
            <h2 className="text-2xl font-black text-slate-800">Gotovo!</h2>
            <p className="text-4xl font-black text-teal-600 my-3">{tocnoOdg}/{UKUPNO}</p>
            <p className="text-slate-500 text-sm">
              {tocnoOdg >= 8 ? 'Odlično! Poznaješ nizove!' : tocnoOdg >= 5 ? 'Dobro! Vježbaj još malo.' : 'Pokušaj opet, možeš bolje!'}
            </p>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setTezina(null)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors">
                Razine
              </button>
              <button onClick={() => pocni(tezina)} className="flex-1 bg-teal-500 hover:bg-teal-600 text-white font-black py-3 rounded-xl transition-colors">
                Igraj opet 🔄
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-3xl p-6 shadow-sm mb-4">
              <p className="text-center text-slate-500 text-sm font-semibold mb-5">Koji broj nedostaje?</p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {trenutni.prikaz.map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {i > 0 && <span className="text-slate-300 font-bold text-lg">,</span>}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl ${
                        v === null
                          ? 'bg-teal-100 border-2 border-teal-400 border-dashed text-teal-400'
                          : 'bg-slate-100 text-slate-800'
                      }`}
                    >
                      {v === null ? '?' : v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {trenutni.opcije.map(op => (
                <button
                  key={op}
                  onClick={() => odaberiOdgovor(op)}
                  disabled={odgovor !== null}
                  className={`py-5 rounded-2xl font-black text-3xl transition-all ${
                    odgovor === null
                      ? 'bg-white text-slate-800 shadow-sm hover:bg-teal-50 hover:scale-105 active:scale-95'
                      : op === trenutni.tocno
                      ? 'bg-emerald-500 text-white scale-105 shadow-lg'
                      : op === odgovor
                      ? 'bg-red-400 text-white'
                      : 'bg-white text-slate-300'
                  }`}
                >
                  {op}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
