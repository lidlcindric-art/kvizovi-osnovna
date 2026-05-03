'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { getTemeZaRazred } from '@/lib/pitanja';

const UKUPNO_PITANJA = 15;
const SEKUNDI_PO_PITANJU = 20;
const BODOVI_TOCNO = 10;
const BODOVI_POGRESNO = -3;

interface PitanjeUtrke {
  tekst: string;
  opcije: string[];
  tocniIndex: number;
}

function fisherYates<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function izgradiPitanjaZaRazred(razred: number): PitanjeUtrke[] {
  const teme = getTemeZaRazred(razred);
  const svaPitanja: PitanjeUtrke[] = [];

  for (const tema of teme) {
    for (const p of tema.pitanja) {
      if (p.o.length >= 2) {
        const tocniOdgovor = p.o[p.t];
        // Build a pool of wrong answers, shuffled
        const pogresni = fisherYates(p.o.filter((_, idx) => idx !== p.t));
        // Take up to 3 wrong answers, then add the correct one, then shuffle all 4
        const cetiri = fisherYates([tocniOdgovor, ...pogresni.slice(0, 3)]);
        const noviTocniIndex = cetiri.indexOf(tocniOdgovor);
        svaPitanja.push({
          tekst: p.p,
          opcije: cetiri,
          tocniIndex: noviTocniIndex,
        });
      }
    }
  }

  return fisherYates(svaPitanja);
}

function izracunajOcjenu(bodovi: number): { slovo: string; emoji: string; poruka: string } {
  if (bodovi >= 120) return { slovo: 'A', emoji: '🏆', poruka: 'Izvrsno! Ti si prvak kviza!' };
  if (bodovi >= 90)  return { slovo: 'B', emoji: '🎉', poruka: 'Odlično! Jako dobro znanje!' };
  if (bodovi >= 60)  return { slovo: 'C', emoji: '👍', poruka: 'Dobro! Vježbaj za još bolje!' };
  return { slovo: 'D', emoji: '💪', poruka: 'Ne odustaj — pokušaj opet!' };
}

type FazaIgre = 'odabir' | 'igra' | 'rezultat';

export default function KvizUtrkaPage() {
  const [faza, setFaza] = useState<FazaIgre>('odabir');
  const [odabraniRazred, setOdabraniRazred] = useState<number>(4);
  const [pitanja, setPitanja] = useState<PitanjeUtrke[]>([]);
  const [trenutnoIndex, setTrenutnoIndex] = useState(0);
  const [bodovi, setBodovi] = useState(0);
  const [preostalo, setPreostalo] = useState(SEKUNDI_PO_PITANJU);
  const [odabranoI, setOdabranoI] = useState<number | null>(null);
  const [animacijaKartica, setAnimacijaKartica] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const obradaRef = useRef(false);
  const bodoviRef = useRef(0);

  const trenutnoPitanje: PitanjeUtrke | undefined = pitanja[trenutnoIndex];

  const ocisti = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const sljedecePitanje = useCallback(
    () => {
      ocisti();
      const sljedeci = trenutnoIndex + 1;
      if (sljedeci >= UKUPNO_PITANJA) {
        setBodovi(bodoviRef.current);
        setFaza('rezultat');
      } else {
        setTrenutnoIndex(sljedeci);
        setOdabranoI(null);
        setAnimacijaKartica('');
        obradaRef.current = false;
        setPreostalo(SEKUNDI_PO_PITANJU);
      }
    },
    [trenutnoIndex, ocisti],
  );

  const obradiOdgovor = useCallback(
    (indeks: number | null) => {
      if (obradaRef.current) return;
      obradaRef.current = true;
      ocisti();

      const jeTocno =
        indeks !== null &&
        trenutnoPitanje !== undefined &&
        indeks === trenutnoPitanje.tocniIndex;
      const promjenaBodova = jeTocno ? BODOVI_TOCNO : BODOVI_POGRESNO;

      bodoviRef.current = bodoviRef.current + promjenaBodova;
      setBodovi(bodoviRef.current);
      setOdabranoI(indeks ?? -1);
      setAnimacijaKartica(jeTocno ? 'animate-bounce-once' : 'animate-shake');

      setTimeout(() => sljedecePitanje(), jeTocno ? 300 : 1500);
    },
    [trenutnoPitanje, ocisti, sljedecePitanje],
  );

  useEffect(() => {
    if (faza !== 'igra' || odabranoI !== null) return;

    timerRef.current = setInterval(() => {
      setPreostalo((prev) => {
        if (prev <= 1) {
          obradiOdgovor(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return ocisti;
  }, [faza, trenutnoIndex, odabranoI, obradiOdgovor, ocisti]);

  function pokreniIgru() {
    const sva = izgradiPitanjaZaRazred(odabraniRazred);
    const odabrana = sva.slice(0, UKUPNO_PITANJA);
    setPitanja(odabrana);
    setTrenutnoIndex(0);
    setBodovi(0);
    bodoviRef.current = 0;
    setPreostalo(SEKUNDI_PO_PITANJU);
    setOdabranoI(null);
    setAnimacijaKartica('');
    obradaRef.current = false;
    setFaza('igra');
  }

  function ponovi() {
    setFaza('odabir');
  }

  const postotak = (preostalo / SEKUNDI_PO_PITANJU) * 100;
  const bojaVremena = preostalo > 5 ? 'bg-rose-500' : 'bg-red-600';

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 p-4">
      <div className="max-w-sm mx-auto pt-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/igrice" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">
            ← Igrice
          </Link>
          <span className="font-black text-slate-700">🏁 Kviz utrka</span>
          <div />
        </div>

        {/* Odabir razreda */}
        {faza === 'odabir' && (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg animate-pop-in">
            <div className="text-5xl mb-4">🏁</div>
            <h2 className="text-2xl font-black text-slate-800 mb-1">Kviz utrka</h2>
            <p className="text-slate-500 text-sm mb-6">
              Odgovaraj brzo — imaš {SEKUNDI_PO_PITANJU} sekundi po pitanju!
              <br />
              {UKUPNO_PITANJA} pitanja · +{BODOVI_TOCNO} točno · {BODOVI_POGRESNO} pogrešno
            </p>

            <p className="text-slate-600 font-bold text-sm mb-3">Odaberi razred:</p>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((r) => (
                <button
                  key={r}
                  onClick={() => setOdabraniRazred(r)}
                  className={`px-4 py-2 rounded-full font-black text-sm transition-all ${
                    odabraniRazred === r
                      ? 'bg-rose-500 text-white shadow-md scale-110'
                      : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                  }`}
                >
                  {r}. razred
                </button>
              ))}
            </div>

            <button
              onClick={pokreniIgru}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-black py-4 rounded-xl text-lg transition-colors"
            >
              Kreni! 🚀
            </button>
          </div>
        )}

        {/* Igra */}
        {faza === 'igra' && trenutnoPitanje && (
          <>
            {/* Status traka */}
            <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-600 text-sm">
                  Pitanje {trenutnoIndex + 1}/{UKUPNO_PITANJA}
                </span>
                <span className="font-black text-rose-600 text-sm">{bodovi} bodova</span>
                <span
                  className={`font-bold text-sm ${preostalo <= 5 ? 'text-red-600' : 'text-slate-600'}`}
                >
                  ⏱ {preostalo}s
                </span>
              </div>
              <div className="bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ${bojaVremena}`}
                  style={{ width: `${postotak}%` }}
                />
              </div>
            </div>

            {/* Kartica pitanja */}
            <div
              key={trenutnoIndex}
              className={`bg-white rounded-2xl p-6 text-center shadow-lg mb-4 ${animacijaKartica}`}
            >
              <p className="text-lg font-bold text-slate-800 leading-snug">
                {trenutnoPitanje.tekst}
              </p>
              {odabranoI !== null && (
                <p
                  className={`mt-3 text-base font-black ${
                    odabranoI === trenutnoPitanje.tocniIndex
                      ? 'text-emerald-500'
                      : 'text-red-500'
                  }`}
                >
                  {odabranoI === trenutnoPitanje.tocniIndex
                    ? '✓ Točno!'
                    : `✗ Točan odgovor: ${trenutnoPitanje.opcije[trenutnoPitanje.tocniIndex]}`}
                </p>
              )}
            </div>

            {/* Opcije odgovora */}
            <div className="grid grid-cols-1 gap-3">
              {trenutnoPitanje.opcije.map((opcija, i) => {
                const jeOdabran = odabranoI === i;
                const jeTocni = i === trenutnoPitanje.tocniIndex;
                const prikazujeRezultat = odabranoI !== null;

                let klasa = '';
                if (prikazujeRezultat) {
                  if (jeTocni) {
                    klasa = 'bg-emerald-100 border-2 border-emerald-500 text-emerald-700';
                  } else if (jeOdabran) {
                    klasa = 'bg-red-100 border-2 border-red-400 text-red-700';
                  } else {
                    klasa = 'bg-white border-2 border-slate-200 text-slate-400 opacity-50';
                  }
                } else {
                  klasa =
                    'bg-white border-2 border-slate-200 hover:border-rose-400 hover:bg-rose-50 text-slate-800 hover:scale-[1.02] cursor-pointer';
                }

                return (
                  <button
                    key={i}
                    onClick={() => odabranoI === null && obradiOdgovor(i)}
                    disabled={odabranoI !== null}
                    className={`py-4 px-5 rounded-xl text-base font-bold text-left transition-all ${klasa}`}
                  >
                    <span className="text-slate-400 font-black mr-2">
                      {(['A', 'B', 'C', 'D'] as const)[i]}.
                    </span>
                    {opcija}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* Rezultati */}
        {faza === 'rezultat' &&
          (() => {
            const { slovo, emoji, poruka } = izracunajOcjenu(bodovi);
            return (
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg animate-pop-in">
                <div className="text-6xl mb-3">{emoji}</div>
                <h2 className="text-2xl font-black text-slate-800 mb-1">Kraj utrke!</h2>
                <p className="text-slate-500 text-sm mb-6">{poruka}</p>

                <div className="bg-rose-50 rounded-2xl p-6 mb-6">
                  <div className="text-6xl font-black text-rose-600 mb-1">{bodovi}</div>
                  <div className="text-slate-500 text-sm mb-4">
                    bodova od maks. {UKUPNO_PITANJA * BODOVI_TOCNO}
                  </div>
                  <div className="inline-block bg-rose-500 text-white font-black text-4xl px-6 py-2 rounded-xl">
                    {slovo}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={ponovi}
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white font-black py-3 rounded-xl transition-colors"
                  >
                    Pokušaj opet 🔄
                  </button>
                  <Link
                    href="/igrice"
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-colors text-center block"
                  >
                    ← Natrag na igrice
                  </Link>
                </div>
              </div>
            );
          })()}
      </div>
    </main>
  );
}
