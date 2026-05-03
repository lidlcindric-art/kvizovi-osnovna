'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ucitajNapredak, obrisiNapredak, prosjecniRezultatPoPredemtu,
  najboljiBodIgre, spremiIme, spremiRazred,
  type RezultatKviza, type RezultatIgre,
} from '@/lib/napredak';

const bojePredmeta: Record<string, string> = {
  'Matematika':        'bg-violet-500',
  'Hrvatski jezik':    'bg-blue-500',
  'Engleski jezik':    'bg-indigo-500',
  'Njemački jezik':    'bg-orange-500',
  'Priroda i društvo': 'bg-green-500',
  'Priroda':           'bg-emerald-500',
  'Geografija':        'bg-teal-500',
  'Povijest':          'bg-amber-500',
  'Biologija':         'bg-lime-600',
  'Kemija':            'bg-red-500',
  'Fizika':            'bg-sky-500',
  'Domaćinstvo':       'bg-pink-500',
  'Glazbena kultura':  'bg-rose-500',
  'Likovna kultura':   'bg-fuchsia-500',
  'Tehnička kultura':  'bg-cyan-600',
  'Informatika':       'bg-blue-600',
};

const igraIkone: Record<string, string> = {
  memorija: '🃏',
  matematika: '⚡',
  vjesanje: '🔤',
  razvrstavanje: '🗂️',
  'kviz-utrka': '🏁',
  sat: '🕐',
  nizovi: '🔢',
};
const igraNazivi: Record<string, string> = {
  memorija: 'Memorija',
  matematika: 'Matematika',
  vjesanje: 'Vješanje',
  razvrstavanje: 'Razvrstavanje',
  'kviz-utrka': 'Kviz utrka',
  sat: 'Čitanje sata',
  nizovi: 'Nizovi',
};

function bojaPredmeta(predmet: string) {
  return bojePredmeta[predmet] ?? 'bg-slate-500';
}

function BarChart({ prosjeci }: { prosjeci: Record<string, number> }) {
  const unosi = Object.entries(prosjeci);
  if (unosi.length === 0) return null;
  return (
    <div className="mt-4">
      <div className="flex items-end gap-2 h-40 px-2">
        {unosi.map(([predmet, posto]) => {
          const boja = posto >= 80 ? 'bg-emerald-500' : posto >= 60 ? 'bg-blue-500' : posto >= 40 ? 'bg-amber-500' : 'bg-red-500';
          return (
            <div key={predmet} className="flex-1 flex flex-col items-center gap-1 min-w-0">
              <span className="text-xs font-black text-slate-700">{posto}%</span>
              <div
                className={`w-full rounded-t-lg ${boja} transition-all duration-700`}
                style={{ height: `${(posto / 100) * 128}px` }}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 px-2 mt-1">
        {unosi.map(([predmet]) => (
          <div key={predmet} className="flex-1 min-w-0">
            <p className="text-center text-[10px] text-slate-500 font-semibold truncate" title={predmet}>
              {predmet.split(' ')[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDatum(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('hr-HR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
}

function izracunajStreak(rezultati: RezultatKviza[]): number {
  if (rezultati.length === 0) return 0;
  const dani = new Set(rezultati.map(r => r.datum.slice(0, 10)));
  const sortiraniDani = Array.from(dani).sort().reverse();
  const danas = new Date().toISOString().slice(0, 10);
  const jucer = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (sortiraniDani[0] !== danas && sortiraniDani[0] !== jucer) return 0;
  let streak = 1;
  for (let i = 1; i < sortiraniDani.length; i++) {
    const razlika = (new Date(sortiraniDani[i - 1]).getTime() - new Date(sortiraniDani[i]).getTime()) / 86400000;
    if (razlika === 1) streak++;
    else break;
  }
  return streak;
}

export default function ProfilPage() {
  const [rezultati, setRezultati] = useState<RezultatKviza[]>([]);
  const [igre, setIgre] = useState<RezultatIgre[]>([]);
  const [ime, setIme] = useState('');
  const [razred, setRazred] = useState(0);
  const [ureduje, setUreduje] = useState(false);
  const [imeInput, setImeInput] = useState('');
  const [ucitano, setUcitano] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const n = ucitajNapredak();
    setRezultati(n.rezultati);
    setIgre(n.igre);
    setIme(n.ime);
    setImeInput(n.ime);
    setRazred(n.razred);
    setUcitano(true);
  }, []);

  useEffect(() => {
    if (ureduje) inputRef.current?.focus();
  }, [ureduje]);

  const spremiImeHandler = () => {
    const novi = imeInput.trim();
    spremiIme(novi);
    setIme(novi);
    setUreduje(false);
  };

  const obrisi = () => {
    if (confirm('Jesi li siguran/na? Svi podaci o napretku bit će obrisani.')) {
      obrisiNapredak();
      setRezultati([]);
      setIgre([]);
    }
  };

  const prosjeci = prosjecniRezultatPoPredemtu(rezultati);
  const ukupnoKvizova = rezultati.length;
  const prosjecniPosto = ukupnoKvizova > 0
    ? Math.round(rezultati.reduce((s, r) => s + r.posto, 0) / ukupnoKvizova)
    : 0;
  const najboljiPredmet = Object.entries(prosjeci).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '—';
  const streak = izracunajStreak(rezultati);
  const zadnjih10 = [...rezultati].reverse().slice(0, 10);

  const igreStatistike = (['memorija', 'matematika', 'vjesanje', 'razvrstavanje', 'kviz-utrka', 'sat', 'nizovi'] as const)
    .map(igra => ({
      igra,
      najbolji: najboljiBodIgre(igre, igra),
      odigrano: igre.filter(i => i.igra === igra).length,
    }))
    .filter(s => s.odigrano > 0);

  if (!ucitano) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center">
        <div className="text-4xl animate-spin">⏳</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-xl mx-auto pt-4 pb-10 space-y-4">

        <div className="flex items-center justify-between mb-2">
          <Link href="/" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Početna</Link>
        </div>

        {/* Header s imenom i razredom */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-6 text-white">
          <div className="text-4xl mb-2">🎓</div>
          {ureduje ? (
            <div className="flex gap-2 items-center">
              <input
                ref={inputRef}
                value={imeInput}
                onChange={e => setImeInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && spremiImeHandler()}
                placeholder="Tvoje ime..."
                className="flex-1 rounded-xl px-3 py-2 text-slate-800 font-bold text-base outline-none"
                maxLength={30}
              />
              <button onClick={spremiImeHandler} className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded-xl font-black text-sm">
                ✓
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black">{ime || 'Moj napredak'}</h1>
              <button onClick={() => setUreduje(true)} className="text-white/60 hover:text-white text-lg">✏️</button>
            </div>
          )}
          {/* Odabir razreda */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {[1,2,3,4,5,6,7,8].map(r => (
              <button
                key={r}
                onClick={() => { setRazred(r); spremiRazred(r); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all ${
                  razred === r ? 'bg-white text-indigo-600' : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                {r}. r
              </button>
            ))}
          </div>
          <p className="text-white/60 text-xs mt-2">
            {razred ? `${razred}. razred` : 'Odaberi razred'}
          </p>
        </div>

        {/* Statistike */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white rounded-2xl p-3 text-center shadow-sm">
            <div className="text-2xl font-black text-indigo-600">{ukupnoKvizova}</div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-semibold">Odrađenih</div>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center shadow-sm">
            <div className={`text-2xl font-black ${prosjecniPosto >= 80 ? 'text-emerald-600' : prosjecniPosto >= 60 ? 'text-blue-600' : prosjecniPosto >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
              {ukupnoKvizova > 0 ? `${prosjecniPosto}%` : '—'}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-semibold">Prosjek</div>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center shadow-sm">
            <div className="text-2xl font-black text-amber-500">{streak > 0 ? `${streak}🔥` : '0'}</div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-semibold">Streak</div>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center shadow-sm overflow-hidden">
            <div className="text-xs font-black text-slate-700 leading-tight truncate" title={najboljiPredmet}>
              {najboljiPredmet === '—' ? '—' : najboljiPredmet.split(' ')[0]}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-semibold">Najbolji</div>
          </div>
        </div>

        {/* Graf po predmetima */}
        {Object.keys(prosjeci).length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="font-black text-slate-800 text-base mb-1">📊 Prosjek po predmetu</h2>
            <p className="text-xs text-slate-400 mb-2">
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded mr-1" />≥80%
              <span className="inline-block w-2 h-2 bg-blue-500 rounded ml-2 mr-1" />≥60%
              <span className="inline-block w-2 h-2 bg-amber-500 rounded ml-2 mr-1" />≥40%
              <span className="inline-block w-2 h-2 bg-red-500 rounded ml-2 mr-1" />&lt;40%
            </p>
            <BarChart prosjeci={prosjeci} />
          </div>
        )}

        {/* Rezultati igrica */}
        {igreStatistike.length > 0 && (
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="font-black text-slate-800 text-base mb-3">🎮 Rezultati igrica</h2>
            <div className="grid grid-cols-2 gap-2">
              {igreStatistike.map(s => (
                <div key={s.igra} className="bg-slate-50 rounded-xl p-3 flex items-center gap-3">
                  <span className="text-2xl">{igraIkone[s.igra]}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-black text-slate-800">{igraNazivi[s.igra]}</p>
                    <p className="text-xs text-slate-500">
                      Rekord: <span className="font-bold text-indigo-600">{s.najbolji}</span>
                      {' · '}{s.odigrano}×
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Zadnji rezultati */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h2 className="font-black text-slate-800 text-base mb-3">🕐 Zadnjih 10 rezultata</h2>
          {zadnjih10.length === 0 ? (
            <div className="text-center py-8 text-slate-400">
              <div className="text-4xl mb-2">📭</div>
              <p className="text-sm font-semibold">Još nema rezultata.</p>
              <p className="text-xs mt-1">Odradi kviz ili test da vidiš napredak!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {zadnjih10.map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${bojaPredmeta(r.predmet)}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-800 truncate">{r.temaNaziv}</p>
                    <p className="text-xs text-slate-400">{r.predmet} · {r.vrsta === 'kviz' ? '🧠 Kviz' : '📝 Test'} · {formatDatum(r.datum)}</p>
                  </div>
                  <div className={`text-sm font-black px-2 py-1 rounded-lg shrink-0 ${r.posto >= 80 ? 'bg-emerald-100 text-emerald-700' : r.posto >= 60 ? 'bg-blue-100 text-blue-700' : r.posto >= 40 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {r.posto}%
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Obriši podatke */}
        {(rezultati.length > 0 || igre.length > 0) && (
          <button
            onClick={obrisi}
            className="w-full py-3 rounded-2xl border-2 border-red-200 text-red-600 font-bold text-sm hover:bg-red-50 transition-colors"
          >
            🗑️ Obriši sve podatke
          </button>
        )}
      </div>
    </main>
  );
}
