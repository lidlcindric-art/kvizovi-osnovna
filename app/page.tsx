'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const RAZREDI_NIZI = [
  { razred: 1, naziv: '1. razred', opis: 'Matematika · Hrvatski · Engleski · Priroda i društvo', ikona: '🌱', boja: 'from-green-400 to-teal-500' },
  { razred: 2, naziv: '2. razred', opis: 'Matematika · Hrvatski · Engleski · Priroda i društvo', ikona: '📚', boja: 'from-blue-400 to-violet-500' },
  { razred: 3, naziv: '3. razred', opis: 'Matematika · Hrvatski · Engleski · Priroda i društvo', ikona: '📐', boja: 'from-violet-400 to-purple-500' },
  { razred: 4, naziv: '4. razred', opis: 'Matematika · Hrvatski · Engleski · Njemački · Priroda i društvo', ikona: '🌍', boja: 'from-amber-400 to-orange-500' },
];

const RAZREDI_VISI = [
  { razred: 5, naziv: '5. razred', opis: 'Matematika · Hrvatski · Engleski · Njemački · Geografija · Povijest', ikona: '🎓', boja: 'from-indigo-400 to-purple-500' },
  { razred: 6, naziv: '6. razred', opis: 'Biologija · Geografija · Engleski · Njemački · Domaćinstvo', ikona: '🔬', boja: 'from-green-500 to-teal-600' },
  { razred: 7, naziv: '7. razred', opis: 'Fizika · Kemija · Biologija · Engleski · Njemački · Geografija', ikona: '⚡', boja: 'from-sky-400 to-blue-600' },
  { razred: 8, naziv: '8. razred', opis: 'Fizika · Kemija · Biologija · Engleski · Njemački · Povijest', ikona: '🏛️', boja: 'from-rose-400 to-pink-600' },
];

const PARTICLE_EMOJIS = [
  '⭐','🌟','📚','✏️','🔢','🎯','🏆','🌈',
  '🦋','🎨','🎵','🔬','🌍','🎮','🧮','📐',
  '🚀','💡','🎈','💫','🌙','☀️','🍎','🐬',
];

interface Particle {
  id: number; emoji: string;
  x: number; y: number;
  size: number; depth: number;
  dur: number; delay: number;
  kind: number;
}

function makeParticles(): Particle[] {
  return Array.from({ length: 24 }, (_, i) => ({
    id: i,
    emoji: PARTICLE_EMOJIS[i % PARTICLE_EMOJIS.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 18 + Math.random() * 22,
    depth: 0.04 + Math.random() * 0.09,
    dur: 4 + Math.random() * 4,
    delay: Math.random() * 5,
    kind: i % 3,
  }));
}

const FLOAT_CLASS = ['animate-float-a', 'animate-float-b', 'animate-float-c'];

function AnimatedBg() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    setParticles(makeParticles());
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const dx = mouse.x - 0.5;
  const dy = mouse.y - 0.5;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200" />

      <div className="absolute -top-28 -left-28 w-[28rem] h-[28rem] rounded-full bg-violet-300/50 blur-3xl animate-blob-a" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-pink-300/50 blur-3xl animate-blob-b" />
      <div className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full bg-indigo-300/50 blur-3xl animate-blob-c" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-yellow-200/45 blur-3xl animate-blob-d" />

      {particles.map(p => (
        <div
          key={p.id}
          className={`absolute select-none ${FLOAT_CLASS[p.kind]}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            '--dur': `${p.dur}s`,
            '--delay': `${p.delay}s`,
          } as React.CSSProperties}
        >
          <div
            style={{
              fontSize: `${p.size}px`,
              transform: `translate(${dx * p.depth * 280}px, ${dy * p.depth * 200}px)`,
              transition: 'transform 0.12s ease-out',
              opacity: 0.5 + p.depth * 3.5,
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))',
            }}
          >
            {p.emoji}
          </div>
        </div>
      ))}
    </div>
  );
}

function RazredKartica({
  razred, naziv, opis, ikona, boja, index,
}: {
  razred: number; naziv: string; opis: string; ikona: string; boja: string; index: number;
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 10, ry: x * 10 });
  };

  return (
    <Link
      href={`/razred/${razred}`}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ rx: 0, ry: 0 }); }}
      className={`bg-gradient-to-r ${boja} rounded-2xl p-5 text-white block animate-fade-card`}
      style={{
        animationDelay: `${index * 0.07 + 0.45}s`,
        transform: `perspective(700px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hovered ? 1.04 : 1})`,
        transition: hovered
          ? 'transform 0.08s ease-out, box-shadow 0.2s'
          : 'transform 0.35s ease-out, box-shadow 0.2s',
        boxShadow: hovered
          ? '0 24px 48px rgba(0,0,0,0.22), 0 0 36px rgba(99,102,241,0.2)'
          : '0 4px 14px rgba(0,0,0,0.1)',
      }}
    >
      <div className="flex items-center gap-4">
        <span className="text-4xl">{ikona}</span>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-black">{naziv}</h2>
          <p className="text-white/75 text-xs mt-0.5 leading-snug">{opis}</p>
        </div>
        <span
          className="text-2xl opacity-60 transition-all duration-150"
          style={{ transform: hovered ? 'translateX(4px) scale(1.2)' : 'none' }}
        >
          →
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  const [heroAnim, setHeroAnim] = useState('opacity-0');

  useEffect(() => {
    setHeroAnim('animate-hero-enter');
    const t = setTimeout(() => setHeroAnim('animate-hero-float'), 850);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <AnimatedBg />

      <div className="relative z-10 flex flex-col items-center min-h-screen p-4 sm:p-6">
        <div className="w-full max-w-lg pt-10 pb-14">

          {/* Hero */}
          <div className="text-center mb-10">
            <div className={`text-8xl mb-4 inline-block ${heroAnim}`}>🏫</div>
            <h1 className="text-5xl sm:text-6xl font-black mb-2 animate-gradient-text leading-tight">
              Kvizovi
            </h1>
            <p
              className="text-slate-700 font-bold text-lg animate-fade-card"
              style={{ animationDelay: '0.3s' }}
            >
              za osnovnu školu
            </p>
            <p
              className="text-slate-500 text-sm mt-1 animate-fade-card"
              style={{ animationDelay: '0.45s' }}
            >
              Uči · Igraj se · Napreduj! 🚀
            </p>
          </div>

          {/* Niži razredi */}
          <div className="mb-5">
            <p
              className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 px-1 animate-fade-card"
              style={{ animationDelay: '0.5s' }}
            >
              Niži razredi (1–4)
            </p>
            <div className="flex flex-col gap-3">
              {RAZREDI_NIZI.map((r, i) => (
                <RazredKartica key={r.razred} {...r} index={i} />
              ))}
            </div>
          </div>

          {/* Viši razredi */}
          <div className="mb-8">
            <p
              className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 px-1 animate-fade-card"
              style={{ animationDelay: '0.82s' }}
            >
              Viši razredi (5–8)
            </p>
            <div className="flex flex-col gap-3">
              {RAZREDI_VISI.map((r, i) => (
                <RazredKartica key={r.razred} {...r} index={i + 4} />
              ))}
            </div>
          </div>

          {/* Bottom buttons */}
          <div
            className="flex gap-3 justify-center animate-fade-card"
            style={{ animationDelay: '1.2s' }}
          >
            <Link
              href="/profil"
              className="flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm hover:bg-white rounded-2xl shadow-md hover:shadow-xl text-slate-700 font-black text-sm transition-all duration-200 hover:scale-105 border border-white/60 animate-btn-glow"
            >
              📊 Moj napredak
            </Link>
            <Link
              href="/igrice"
              className="flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm hover:bg-white rounded-2xl shadow-md hover:shadow-xl text-slate-700 font-black text-sm transition-all duration-200 hover:scale-105 border border-white/60 animate-btn-glow"
              style={{ animationDelay: '0.4s' }}
            >
              🎮 Igrice
            </Link>
          </div>

          <p
            className="text-center text-slate-400 text-xs mt-6 animate-fade-card"
            style={{ animationDelay: '1.35s' }}
          >
            Osnovna škola · Hrvatska · Razredi 1–8
          </p>
        </div>
      </div>
    </main>
  );
}
