'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

type Operacija = '+' | '-' | '×';

interface Zadatak {
  a: number;
  b: number;
  op: Operacija;
  tocno: number;
}

function generirajZadatak(razina: number): Zadatak {
  const ops: Operacija[] = razina < 3 ? ['+', '-'] : ['+', '-', '×'];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a: number, b: number, tocno: number;
  if (op === '+') {
    const max = razina < 3 ? 20 : razina < 6 ? 100 : 1000;
    a = Math.floor(Math.random() * max) + 1;
    b = Math.floor(Math.random() * max) + 1;
    tocno = a + b;
  } else if (op === '-') {
    const max = razina < 3 ? 20 : razina < 6 ? 100 : 1000;
    a = Math.floor(Math.random() * max) + 1;
    b = Math.floor(Math.random() * a) + 1;
    tocno = a - b;
  } else {
    const max = razina < 6 ? 9 : 12;
    a = Math.floor(Math.random() * max) + 1;
    b = Math.floor(Math.random() * max) + 1;
    tocno = a * b;
  }
  return { a, b, op, tocno };
}

function generirajOpcije(tocno: number): number[] {
  const pogreske = new Set<number>();
  while (pogreske.size < 3) {
    const delta = Math.floor(Math.random() * 10) + 1;
    const v = Math.random() < 0.5 ? tocno + delta : tocno - delta;
    if (v !== tocno && v >= 0) pogreske.add(v);
  }
  const sve = [tocno, ...pogreske];
  for (let i = sve.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sve[i], sve[j]] = [sve[j], sve[i]];
  }
  return sve;
}

const TRAJANJE = 60;

export default function MatematikaPage() {
  const [zadatak, setZadatak] = useState<Zadatak | null>(null);
  const [opcije, setOpcije] = useState<number[]>([]);
  const [rezultat, setRezultat] = useState<boolean | null>(null);
  const [tocnih, setTocnih] = useState(0);
  const [ukupno, setUkupno] = useState(0);
  const [preostalo, setPreostalo] = useState(TRAJANJE);
  const [aktivan, setAktivan] = useState(false);
  const [zavrseno, setZavrseno] = useState(false);
  const [razina, setRazina] = useState(1);

  const noviZadatak = useCallback((r: number) => {
    const z = generirajZadatak(r);
    setZadatak(z);
    setOpcije(generirajOpcije(z.tocno));
    setRezultat(null);
  }, []);

  function pokreni() {
    setTocnih(0);
    setUkupno(0);
    setPreostalo(TRAJANJE);
    setAktivan(true);
    setZavrseno(false);
    setRazina(1);
    noviZadatak(1);
  }

  useEffect(() => {
    if (!aktivan) return;
    const t = setInterval(() => {
      setPreostalo(p => {
        if (p <= 1) {
          setAktivan(false);
          setZavrseno(true);
          clearInterval(t);
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [aktivan]);

  function odaberi(v: number) {
    if (!zadatak || rezultat !== null || !aktivan) return;
    const je_tocno = v === zadatak.tocno;
    setRezultat(je_tocno);
    setUkupno(u => u + 1);
    if (je_tocno) {
      setTocnih(t => {
        const novi = t + 1;
        const novaRazina = Math.min(10, Math.floor(novi / 5) + 1);
        setRazina(novaRazina);
        return novi;
      });
    }
    setTimeout(() => noviZadatak(razina), 500);
  }

  const postotak = preostalo / TRAJANJE * 100;
  const bojaVremena = preostalo > 30 ? 'bg-emerald-500' : preostalo > 10 ? 'bg-amber-500' : 'bg-red-500';

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 p-4">
      <div className="max-w-sm mx-auto pt-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/igrice" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Igrice</Link>
          <span className="font-black text-slate-700">⚡ Matematika</span>
          <div />
        </div>

        {!aktivan && !zavrseno && (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl mb-4">⚡</div>
            <h2 className="text-2xl font-black text-slate-800 mb-2">Matematički izazov</h2>
            <p className="text-slate-500 text-sm mb-6">Odgovaraj što brže možeš! Imaš {TRAJANJE} sekundi.</p>
            <button onClick={pokreni} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black py-4 rounded-xl text-lg transition-colors">
              Počni! 🚀
            </button>
          </div>
        )}

        {aktivan && zadatak && (
          <>
            <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-600 text-sm">⏱ {preostalo}s</span>
                <span className="font-bold text-slate-600 text-sm">{tocnih} točnih · Razina {razina}</span>
              </div>
              <div className="bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className={`h-3 rounded-full transition-all duration-1000 ${bojaVremena}`} style={{ width: `${postotak}%` }} />
              </div>
            </div>

            <div className={`bg-white rounded-2xl p-8 text-center shadow-lg mb-4 ${rezultat === true ? 'animate-bounce-once' : rezultat === false ? 'animate-shake' : ''}`}>
              <p className="text-4xl font-black text-slate-800">
                {zadatak.a} {zadatak.op} {zadatak.b} = ?
              </p>
              {rezultat !== null && (
                <p className={`mt-2 text-2xl font-black ${rezultat ? 'text-emerald-500' : 'text-red-500'}`}>
                  {rezultat ? '✓ Točno!' : `✗ Odgovor je ${zadatak.tocno}`}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {opcije.map((v, i) => (
                <button
                  key={i}
                  onClick={() => odaberi(v)}
                  disabled={rezultat !== null}
                  className={`py-5 rounded-2xl text-2xl font-black transition-all ${
                    rezultat !== null
                      ? v === zadatak.tocno
                        ? 'bg-emerald-100 border-2 border-emerald-500 text-emerald-700'
                        : 'bg-white border-2 border-slate-200 text-slate-400 opacity-50'
                      : 'bg-white border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50 text-slate-800 hover:scale-105 cursor-pointer'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </>
        )}

        {zavrseno && (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg animate-pop-in">
            <div className="text-5xl mb-3">{tocnih >= 20 ? '🏆' : tocnih >= 10 ? '🎉' : '💪'}</div>
            <h2 className="text-2xl font-black text-slate-800">Vrijeme je isteklo!</h2>
            <div className="my-6 bg-amber-50 rounded-2xl p-5">
              <div className="text-5xl font-black text-amber-600">{tocnih}</div>
              <div className="text-slate-500 text-sm">točnih od {ukupno}</div>
            </div>
            <p className="text-slate-500 text-sm mb-4">
              {tocnih >= 20 ? 'Nevjerojatno! Ti si matematički genijalac! ⭐⭐⭐' :
               tocnih >= 10 ? 'Bravo! Dobro poznavanje računanja! ⭐⭐' :
               'Vježbaj dalje i poboljšaj rezultat! ⭐'}
            </p>
            <button onClick={pokreni} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black py-3 rounded-xl transition-colors">
              Pokušaj opet 🔄
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
