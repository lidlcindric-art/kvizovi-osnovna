'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const PAROVI = [
  { a: '🐶', b: 'pas' },
  { a: '🐱', b: 'mačka' },
  { a: '🐸', b: 'žaba' },
  { a: '🦋', b: 'leptir' },
  { a: '🐝', b: 'pčela' },
  { a: '🦁', b: 'lav' },
  { a: '🐘', b: 'slon' },
  { a: '🦊', b: 'lisica' },
];

interface Kartica {
  id: number;
  sadrzaj: string;
  parId: number;
  okrenuta: boolean;
  pronaden: boolean;
}

function stvoriKartice(parovi: typeof PAROVI): Kartica[] {
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
  const [kartice, setKartice] = useState<Kartica[]>([]);
  const [odabrane, setOdabrane] = useState<number[]>([]);
  const [potezi, setPotezi] = useState(0);
  const [gotovo, setGotovo] = useState(false);
  const [blokirano, setBlokirano] = useState(false);
  const [vrijemeStart, setVrijemeStart] = useState<number>(Date.now());
  const [sekunde, setSekunde] = useState(0);

  useEffect(() => {
    novaIgra();
  }, []);

  useEffect(() => {
    if (gotovo) return;
    const t = setInterval(() => setSekunde(Math.floor((Date.now() - vrijemeStart) / 1000)), 500);
    return () => clearInterval(t);
  }, [gotovo, vrijemeStart]);

  function novaIgra() {
    setKartice(stvoriKartice(PAROVI));
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

  const pronadeni = kartice.filter(c => c.pronaden).length / 2;

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-md mx-auto pt-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/igrice" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Igrice</Link>
          <span className="font-black text-slate-700">🃏 Memorija</span>
          <button onClick={novaIgra} className="text-sm font-bold text-violet-600 hover:text-violet-800">Nova igra 🔄</button>
        </div>

        <div className="bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl p-4 text-white mb-4 flex justify-around">
          <div className="text-center">
            <div className="text-2xl font-black">{potezi}</div>
            <div className="text-xs opacity-80">Potezi</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">{pronadeni}/{PAROVI.length}</div>
            <div className="text-xs opacity-80">Parovi</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">{sekunde}s</div>
            <div className="text-xs opacity-80">Vrijeme</div>
          </div>
        </div>

        {gotovo ? (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg animate-pop-in">
            <div className="text-5xl mb-3">🏆</div>
            <h2 className="text-2xl font-black text-slate-800">Pronašao/la si sve parove!</h2>
            <p className="text-slate-500 mt-2">{potezi} poteza · {sekunde} sekundi</p>
            <button onClick={novaIgra} className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white font-black py-3 rounded-xl transition-colors">
              Igraj opet 🔄
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {kartice.map(k => (
              <button
                key={k.id}
                onClick={() => okrenuti(k.id)}
                className={`aspect-square rounded-xl font-black text-lg transition-all duration-300 ${
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
