'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const RIJECI: { rijec: string; kategorija: string }[] = [
  // Voće
  { rijec: 'JABUKA',       kategorija: 'Voće' },
  { rijec: 'NARANČA',      kategorija: 'Voće' },
  { rijec: 'BANANA',       kategorija: 'Voće' },
  { rijec: 'ŠLJIVA',       kategorija: 'Voće' },
  { rijec: 'GROŽĐE',       kategorija: 'Voće' },
  { rijec: 'JAGODA',       kategorija: 'Voće' },
  { rijec: 'LUBENICA',     kategorija: 'Voće' },
  { rijec: 'BRESKVA',      kategorija: 'Voće' },
  { rijec: 'KRUŠKA',       kategorija: 'Voće' },
  { rijec: 'TREŠNJA',      kategorija: 'Voće' },
  { rijec: 'MARELICA',     kategorija: 'Voće' },
  { rijec: 'KIWI',         kategorija: 'Voće' },
  // Povrće
  { rijec: 'MRKVA',        kategorija: 'Povrće' },
  { rijec: 'TIKVICA',      kategorija: 'Povrće' },
  { rijec: 'KRUMPIR',      kategorija: 'Povrće' },
  { rijec: 'PAPRIKA',      kategorija: 'Povrće' },
  { rijec: 'RAJČICA',      kategorija: 'Povrće' },
  { rijec: 'LUKA',         kategorija: 'Povrće' },
  { rijec: 'ŠPINAT',       kategorija: 'Povrće' },
  { rijec: 'BROKULA',      kategorija: 'Povrće' },
  { rijec: 'KUPUS',        kategorija: 'Povrće' },
  { rijec: 'KRASTAVAC',    kategorija: 'Povrće' },
  // Predmeti
  { rijec: 'MATEMATIKA',   kategorija: 'Predmet' },
  { rijec: 'POVIJEST',     kategorija: 'Predmet' },
  { rijec: 'GEOGRAFIJA',   kategorija: 'Predmet' },
  { rijec: 'BIOLOGIJA',    kategorija: 'Predmet' },
  { rijec: 'KEMIJA',       kategorija: 'Predmet' },
  { rijec: 'FIZIKA',       kategorija: 'Predmet' },
  { rijec: 'ENGLESKI',     kategorija: 'Predmet' },
  { rijec: 'GLAZBA',       kategorija: 'Predmet' },
  { rijec: 'LIKOVNA',      kategorija: 'Predmet' },
  // Životinje
  { rijec: 'LEPTIR',       kategorija: 'Životinja' },
  { rijec: 'MEDVJED',      kategorija: 'Životinja' },
  { rijec: 'VJEVERICA',    kategorija: 'Životinja' },
  { rijec: 'KORNJAČA',     kategorija: 'Životinja' },
  { rijec: 'ZEBRA',        kategorija: 'Životinja' },
  { rijec: 'PINGVIN',      kategorija: 'Životinja' },
  { rijec: 'KROKODIL',     kategorija: 'Životinja' },
  { rijec: 'SLON',         kategorija: 'Životinja' },
  { rijec: 'ŽIRAFA',       kategorija: 'Životinja' },
  { rijec: 'DELFIN',       kategorija: 'Životinja' },
  { rijec: 'ORAO',         kategorija: 'Životinja' },
  { rijec: 'VRANA',        kategorija: 'Životinja' },
  // Gradovi Hrvatske
  { rijec: 'ZAGREB',       kategorija: 'Grad' },
  { rijec: 'SPLIT',        kategorija: 'Grad' },
  { rijec: 'DUBROVNIK',    kategorija: 'Grad' },
  { rijec: 'RIJEKA',       kategorija: 'Grad' },
  { rijec: 'OSIJEK',       kategorija: 'Grad' },
  { rijec: 'ZADAR',        kategorija: 'Grad' },
  { rijec: 'PULA',         kategorija: 'Grad' },
  { rijec: 'ŠIBENIK',      kategorija: 'Grad' },
  // Priroda
  { rijec: 'SUNCE',        kategorija: 'Priroda' },
  { rijec: 'PLANINA',      kategorija: 'Priroda' },
  { rijec: 'OBLAK',        kategorija: 'Priroda' },
  { rijec: 'SNIJEG',       kategorija: 'Priroda' },
  { rijec: 'OCEAN',        kategorija: 'Priroda' },
  { rijec: 'ŠUMA',         kategorija: 'Priroda' },
  { rijec: 'VULKAN',       kategorija: 'Priroda' },
  { rijec: 'POTRES',       kategorija: 'Priroda' },
  // Dijelovi tijela
  { rijec: 'SRCE',         kategorija: 'Tijelo' },
  { rijec: 'MOZAK',        kategorija: 'Tijelo' },
  { rijec: 'KOLJENO',      kategorija: 'Tijelo' },
  { rijec: 'LAKAT',        kategorija: 'Tijelo' },
  { rijec: 'PRST',         kategorija: 'Tijelo' },
  { rijec: 'REBRO',        kategorija: 'Tijelo' },
  // Zanimanja
  { rijec: 'LIJEČNIK',     kategorija: 'Zanimanje' },
  { rijec: 'UČITELJ',      kategorija: 'Zanimanje' },
  { rijec: 'VATROGASAC',   kategorija: 'Zanimanje' },
  { rijec: 'PILOT',        kategorija: 'Zanimanje' },
  { rijec: 'ASTRONOM',     kategorija: 'Zanimanje' },
  { rijec: 'ARHITEKT',     kategorija: 'Zanimanje' },
  // Instrumenti
  { rijec: 'VIOLINA',      kategorija: 'Instrument' },
  { rijec: 'KLAVIR',       kategorija: 'Instrument' },
  { rijec: 'GITARA',       kategorija: 'Instrument' },
  { rijec: 'FLAUTA',       kategorija: 'Instrument' },
  { rijec: 'BUBANJ',       kategorija: 'Instrument' },
  { rijec: 'TRUBA',        kategorija: 'Instrument' },
  // Boje
  { rijec: 'LJUBIČASTA',   kategorija: 'Boja' },
  { rijec: 'NARANČASTA',   kategorija: 'Boja' },
  { rijec: 'TIRKIZNA',     kategorija: 'Boja' },
  { rijec: 'SMEĐA',        kategorija: 'Boja' },
  { rijec: 'SREBRNA',      kategorija: 'Boja' },
];

const MAX_POGRESAKA = 6;
const SLOVA = 'ABCČĆDĐEFGHIJKLLJMNNJOPRSŠTUVZŽ'.split('');

function VjesalicaSvg({ pogresaka }: { pogresaka: number }) {
  return (
    <svg viewBox="0 0 120 140" className="w-32 h-36 mx-auto">
      <line x1="20" y1="130" x2="100" y2="130" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"/>
      <line x1="60" y1="130" x2="60" y2="10"  stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"/>
      <line x1="60" y1="10"  x2="90" y2="10"  stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"/>
      <line x1="90" y1="10"  x2="90" y2="30"  stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"/>
      {pogresaka >= 1 && <circle cx="90" cy="42" r="12" stroke="#ef4444" strokeWidth="3" fill="none"/>}
      {pogresaka >= 2 && <line x1="90" y1="54" x2="90" y2="85" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>}
      {pogresaka >= 3 && <line x1="90" y1="65" x2="72" y2="78" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>}
      {pogresaka >= 4 && <line x1="90" y1="65" x2="108" y2="78" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>}
      {pogresaka >= 5 && <line x1="90" y1="85" x2="72" y2="105" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>}
      {pogresaka >= 6 && <line x1="90" y1="85" x2="108" y2="105" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>}
    </svg>
  );
}

export default function VjesanjePage() {
  const [rijec, setRijec] = useState('');
  const [kategorija, setKategorija] = useState('');
  const [odabrana, setOdabrana] = useState<Set<string>>(new Set());
  const [pogresaka, setPogresaka] = useState(0);
  const [stanje, setStanje] = useState<'igra' | 'pobjeda' | 'poraz' | 'start'>('start');
  const [odigrano, setOdigrano] = useState<Set<number>>(new Set());

  function novaIgra() {
    const dostupni = RIJECI.map((_, i) => i).filter(i => !odigrano.has(i));
    const pool = dostupni.length > 0 ? dostupni : RIJECI.map((_, i) => i);
    const idx = pool[Math.floor(Math.random() * pool.length)];
    const odabir = RIJECI[idx];
    setOdigrano(prev => {
      const next = new Set(prev);
      next.add(idx);
      if (next.size >= RIJECI.length) return new Set();
      return next;
    });
    setRijec(odabir.rijec);
    setKategorija(odabir.kategorija);
    setOdabrana(new Set());
    setPogresaka(0);
    setStanje('igra');
  }

  useEffect(() => {
    if (stanje !== 'igra' || !rijec) return;
    const slova = rijec.replace(/ /g, '').split('');
    if (slova.every(s => odabrana.has(s))) setStanje('pobjeda');
  }, [odabrana, rijec, stanje]);

  function odaberiSlovo(s: string) {
    if (stanje !== 'igra' || odabrana.has(s)) return;
    const novaOdabrana = new Set([...odabrana, s]);
    setOdabrana(novaOdabrana);
    if (!rijec.includes(s)) {
      const novePogresaka = pogresaka + 1;
      setPogresaka(novePogresaka);
      if (novePogresaka >= MAX_POGRESAKA) setStanje('poraz');
    }
  }

  const prikazRijeci = rijec.split('').map((s, i) =>
    s === ' ' ? (
      <span key={i} className="w-4" />
    ) : (
      <div key={i} className="flex flex-col items-center">
        <span className={`text-2xl font-black min-w-[32px] text-center ${odabrana.has(s) ? 'text-slate-800' : 'text-slate-200'}`}>
          {odabrana.has(s) ? s : '_'}
        </span>
      </div>
    )
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-violet-100 p-4">
      <div className="max-w-md mx-auto pt-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/igrice" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Igrice</Link>
          <span className="font-black text-slate-700">🔤 Vješanje</span>
          <div />
        </div>

        {stanje === 'start' && (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="text-5xl mb-4">🔤</div>
            <h2 className="text-2xl font-black text-slate-800 mb-2">Vješanje</h2>
            <p className="text-slate-500 text-sm mb-6">Pogodi skrivenu hrvatsku riječ slovo po slovo. Imaš {MAX_POGRESAKA} pokušaja. Baza: {RIJECI.length} riječi!</p>
            <button onClick={novaIgra} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl text-lg transition-colors">
              Počni! 🎯
            </button>
          </div>
        )}

        {stanje === 'igra' && (
          <>
            <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
              <div className="flex justify-between items-center text-sm text-slate-500 font-semibold">
                <span>Kategorija: <strong className="text-slate-700">{kategorija}</strong></span>
                <span className="text-red-500">{pogresaka}/{MAX_POGRESAKA} grešaka</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg mb-4">
              <VjesalicaSvg pogresaka={pogresaka} />
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {prikazRijeci}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 justify-center">
              {SLOVA.map(s => {
                const isOdabrano = odabrana.has(s);
                const isGreska = isOdabrano && !rijec.includes(s);
                return (
                  <button
                    key={s}
                    onClick={() => odaberiSlovo(s)}
                    disabled={isOdabrano}
                    className={`w-9 h-9 rounded-lg text-sm font-black transition-all ${
                      isGreska ? 'bg-red-100 text-red-400 border border-red-200' :
                      isOdabrano ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' :
                      'bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-400 text-slate-700 hover:scale-110 cursor-pointer'
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {(stanje === 'pobjeda' || stanje === 'poraz') && (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg animate-pop-in">
            <div className="text-5xl mb-3">{stanje === 'pobjeda' ? '🎉' : '😢'}</div>
            <h2 className="text-2xl font-black text-slate-800">
              {stanje === 'pobjeda' ? 'Bravo! Pogodio/la si!' : 'Nisi uspio/la'}
            </h2>
            <div className="my-4 text-3xl font-black text-indigo-600 tracking-widest">{rijec}</div>
            <p className="text-slate-500 text-sm mb-6">Kategorija: {kategorija}</p>
            <button onClick={novaIgra} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-3 rounded-xl transition-colors">
              Nova riječ 🔄
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
