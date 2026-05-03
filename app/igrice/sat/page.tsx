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

function generirajVrijeme(t: Tezina): { sati: number; minute: number } {
  const sati = Math.floor(Math.random() * 12) + 1;
  let minute: number;
  if (t === 'lako') {
    minute = Math.random() < 0.5 ? 0 : 30;
  } else if (t === 'srednje') {
    minute = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
  } else {
    minute = Math.floor(Math.random() * 12) * 5;
  }
  return { sati, minute };
}

function formatVrijeme(sati: number, minute: number) {
  return `${sati}:${minute.toString().padStart(2, '0')}`;
}

function generirajOpcije(tocno: { sati: number; minute: number }, t: Tezina): string[] {
  const tocnoStr = formatVrijeme(tocno.sati, tocno.minute);
  const opcije = new Set<string>([tocnoStr]);
  let pokusaji = 0;
  while (opcije.size < 4 && pokusaji < 50) {
    pokusaji++;
    const v = generirajVrijeme(t);
    const f = formatVrijeme(v.sati, v.minute);
    if (f !== tocnoStr) opcije.add(f);
  }
  return shuffle(Array.from(opcije));
}

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function SatSVG({ sati, minute }: { sati: number; minute: number }) {
  const CX = 100, CY = 100;
  const kutMinuta = (minute / 60) * 360 - 90;
  const kutSati = ((sati % 12) / 12) * 360 + (minute / 60) * 30 - 90;
  const minX = CX + 72 * Math.cos(toRad(kutMinuta));
  const minY = CY + 72 * Math.sin(toRad(kutMinuta));
  const satX = CX + 48 * Math.cos(toRad(kutSati));
  const satY = CY + 48 * Math.sin(toRad(kutSati));

  return (
    <svg viewBox="0 0 200 200" className="w-44 h-44 mx-auto drop-shadow-lg">
      <circle cx={CX} cy={CY} r={92} fill="white" stroke="#6366f1" strokeWidth="5" />
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * 360 - 90;
        const x1 = CX + 78 * Math.cos(toRad(angle));
        const y1 = CY + 78 * Math.sin(toRad(angle));
        const x2 = CX + 90 * Math.cos(toRad(angle));
        const y2 = CY + 90 * Math.sin(toRad(angle));
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />;
      })}
      {[12,1,2,3,4,5,6,7,8,9,10,11].map((n, i) => {
        const angle = (i / 12) * 360 - 90;
        const x = CX + 63 * Math.cos(toRad(angle));
        const y = CY + 63 * Math.sin(toRad(angle));
        return (
          <text key={n} x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="bold" fill="#1e293b">
            {n}
          </text>
        );
      })}
      <line x1={CX} y1={CY} x2={satX} y2={satY} stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
      <line x1={CX} y1={CY} x2={minX} y2={minY} stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
      <circle cx={CX} cy={CY} r="5" fill="#1e293b" />
    </svg>
  );
}

export default function SatPage() {
  const [tezina, setTezina] = useState<Tezina | null>(null);
  const [pitanje, setPitanje] = useState(0);
  const [tocnoOdg, setTocnoOdg] = useState(0);
  const [odgovor, setOdgovor] = useState<string | null>(null);
  const [gotovo, setGotovo] = useState(false);
  const [trenutno, setTrenutno] = useState<{ sati: number; minute: number } | null>(null);
  const [opcije, setOpcije] = useState<string[]>([]);

  function novoPitanje(t: Tezina) {
    const v = generirajVrijeme(t);
    setTrenutno(v);
    setOpcije(generirajOpcije(v, t));
    setOdgovor(null);
  }

  function pocni(t: Tezina) {
    setTezina(t);
    setPitanje(1);
    setTocnoOdg(0);
    setGotovo(false);
    novoPitanje(t);
  }

  function odaberiOdgovor(op: string) {
    if (odgovor !== null || !trenutno || !tezina) return;
    setOdgovor(op);
    const tocno = formatVrijeme(trenutno.sati, trenutno.minute);
    const jetocno = op === tocno;
    if (jetocno) setTocnoOdg(p => p + 1);

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
    spremiRezultatIgre({ igra: 'sat', bodovi, detalj: `${tezina} · ${tocnoOdg}/${UKUPNO} točno` });
  }, [gotovo]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!tezina || !trenutno) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto pt-4">
          <div className="flex items-center justify-between mb-6">
            <Link href="/igrice" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Igrice</Link>
            <span className="font-black text-slate-700">🕐 Čitanje sata</span>
            <span />
          </div>
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🕐</div>
            <h1 className="text-2xl font-black text-slate-800">Čitanje sata</h1>
            <p className="text-slate-500 mt-2 text-sm">Odaberi točno digitalno vrijeme za prikazani sat</p>
          </div>
          <div className="space-y-3">
            {([
              { t: 'lako' as Tezina,    label: 'Lako',    opis: 'Puni sati i pola sata',         boja: 'from-emerald-400 to-green-500',  ikona: '🌱' },
              { t: 'srednje' as Tezina, label: 'Srednje', opis: 'Četvrtine sata (00, 15, 30, 45)', boja: 'from-sky-400 to-blue-500',        ikona: '⭐' },
              { t: 'tesko' as Tezina,   label: 'Teško',   opis: 'Svake 5 minuta',                 boja: 'from-rose-400 to-red-500',        ikona: '🔥' },
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

  const tocnoVrijeme = formatVrijeme(trenutno.sati, trenutno.minute);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto pt-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setTezina(null)} className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Natrag</button>
          <span className="font-black text-slate-700">🕐 Čitanje sata</span>
          <span className="text-sm font-bold text-sky-600">✓ {tocnoOdg} točno</span>
        </div>

        <div className="bg-sky-500 rounded-2xl px-4 py-2 text-white text-center mb-4">
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
            <p className="text-4xl font-black text-sky-600 my-3">{tocnoOdg}/{UKUPNO}</p>
            <p className="text-slate-500 text-sm">
              {tocnoOdg >= 8 ? 'Odlično! Znaš čitati sat!' : tocnoOdg >= 5 ? 'Dobro! Vježbaj još malo.' : 'Pokušaj opet, možeš bolje!'}
            </p>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setTezina(null)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors">
                Razine
              </button>
              <button onClick={() => pocni(tezina)} className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-black py-3 rounded-xl transition-colors">
                Igraj opet 🔄
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-3xl p-6 shadow-sm mb-4">
              <p className="text-center text-slate-500 text-sm font-semibold mb-4">Koliko je sati?</p>
              <SatSVG sati={trenutno.sati} minute={trenutno.minute} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {opcije.map(op => (
                <button
                  key={op}
                  onClick={() => odaberiOdgovor(op)}
                  disabled={odgovor !== null}
                  className={`py-5 rounded-2xl font-black text-3xl transition-all ${
                    odgovor === null
                      ? 'bg-white text-slate-800 shadow-sm hover:bg-sky-50 hover:scale-105 active:scale-95'
                      : op === tocnoVrijeme
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
