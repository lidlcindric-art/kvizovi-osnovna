'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ucitajNapredak, obrisiNapredak, prosjecniRezultatPoPredemtu, type RezultatKviza } from '@/lib/napredak';

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
};

function BojaPredmeta(predmet: string) {
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

export default function ProfilPage() {
  const [rezultati, setRezultati] = useState<RezultatKviza[]>([]);
  const [ucitano, setUcitano] = useState(false);

  useEffect(() => {
    setRezultati(ucitajNapredak().rezultati);
    setUcitano(true);
  }, []);

  const obrisi = () => {
    if (confirm('Jesi li siguran/na? Svi podaci o napretku bit će obrisani.')) {
      obrisiNapredak();
      setRezultati([]);
    }
  };

  const prosjeci = prosjecniRezultatPoPredemtu(rezultati);
  const ukupnoKvizova = rezultati.length;
  const prosjecniPosto = ukupnoKvizova > 0
    ? Math.round(rezultati.reduce((s, r) => s + r.posto, 0) / ukupnoKvizova)
    : 0;
  const najboljiPredmet = Object.entries(prosjeci).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '—';
  const zadnjih10 = [...rezultati].reverse().slice(0, 10);

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

        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <Link href="/" className="text-slate-500 hover:text-slate-700 font-semibold text-sm">← Početna</Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-6 text-white">
          <div className="text-4xl mb-2">🎓</div>
          <h1 className="text-2xl font-black">Moj napredak</h1>
          <p className="text-white/75 text-sm mt-1">Prati svoje rezultate i napredak</p>
        </div>

        {/* Statistike */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <div className="text-3xl font-black text-indigo-600">{ukupnoKvizova}</div>
            <div className="text-xs text-slate-500 mt-1 font-semibold">Odrađenih</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <div className={`text-3xl font-black ${prosjecniPosto >= 80 ? 'text-emerald-600' : prosjecniPosto >= 60 ? 'text-blue-600' : prosjecniPosto >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
              {ukupnoKvizova > 0 ? `${prosjecniPosto}%` : '—'}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-semibold">Prosjek</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <div className="text-xs font-black text-slate-700 leading-tight">{najboljiPredmet === '—' ? '—' : najboljiPredmet.split(' ')[0]}</div>
            <div className="text-xs text-slate-500 mt-1 font-semibold">Najboljii</div>
          </div>
        </div>

        {/* Graf */}
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
                  <div className={`w-2 h-2 rounded-full shrink-0 ${BojaPredmeta(r.predmet)}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-800 truncate">{r.temaNaziv}</p>
                    <p className="text-xs text-slate-400">{r.predmet} · {r.vrsta === 'kviz' ? '🧠 Kviz' : '📝 Test'} · {formatDatum(r.datum)}</p>
                  </div>
                  <div className={`text-sm font-black px-2 py-1 rounded-lg ${r.posto >= 80 ? 'bg-emerald-100 text-emerald-700' : r.posto >= 60 ? 'bg-blue-100 text-blue-700' : r.posto >= 40 ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {r.posto}%
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Obriši podatke */}
        {rezultati.length > 0 && (
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
