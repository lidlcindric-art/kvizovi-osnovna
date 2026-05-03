export interface RezultatKviza {
  temaId: string;
  temaNaziv: string;
  predmet: string;
  vrsta: 'kviz' | 'test';
  tocno: number;
  ukupno: number;
  posto: number;
  datum: string;
}

export interface RezultatIgre {
  igra: 'memorija' | 'matematika' | 'vjesanje' | 'razvrstavanje' | 'kviz-utrka';
  bodovi: number;
  detalj: string;
  datum: string;
}

export interface NapredakUcenik {
  ime: string;
  razred: number;
  rezultati: RezultatKviza[];
  igre: RezultatIgre[];
}

const KLJUC = 'kvizovi-napredak';

export function ucitajNapredak(): NapredakUcenik {
  if (typeof window === 'undefined') return { ime: '', razred: 0, rezultati: [], igre: [] };
  try {
    const raw = localStorage.getItem(KLJUC);
    if (!raw) return { ime: '', razred: 0, rezultati: [], igre: [] };
    const parsed = JSON.parse(raw) as Partial<NapredakUcenik>;
    return {
      ime: parsed.ime ?? '',
      razred: parsed.razred ?? 0,
      rezultati: parsed.rezultati ?? [],
      igre: parsed.igre ?? [],
    };
  } catch {
    return { ime: '', razred: 0, rezultati: [], igre: [] };
  }
}

function spremi(napredak: NapredakUcenik): void {
  localStorage.setItem(KLJUC, JSON.stringify(napredak));
}

export function spremiIme(ime: string): void {
  if (typeof window === 'undefined') return;
  const napredak = ucitajNapredak();
  napredak.ime = ime;
  spremi(napredak);
}

export function spremiRazred(razred: number): void {
  if (typeof window === 'undefined') return;
  const napredak = ucitajNapredak();
  napredak.razred = razred;
  spremi(napredak);
}

export function spremiRezultat(r: Omit<RezultatKviza, 'datum'>): void {
  if (typeof window === 'undefined') return;
  const napredak = ucitajNapredak();
  napredak.rezultati.push({ ...r, datum: new Date().toISOString() });
  if (napredak.rezultati.length > 200) {
    napredak.rezultati = napredak.rezultati.slice(-200);
  }
  spremi(napredak);
}

export function spremiRezultatIgre(r: Omit<RezultatIgre, 'datum'>): void {
  if (typeof window === 'undefined') return;
  const napredak = ucitajNapredak();
  napredak.igre.push({ ...r, datum: new Date().toISOString() });
  if (napredak.igre.length > 100) {
    napredak.igre = napredak.igre.slice(-100);
  }
  spremi(napredak);
}

export function obrisiNapredak(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(KLJUC);
}

export function prosjecniRezultatPoPredemtu(rezultati: RezultatKviza[]): Record<string, number> {
  const grupirani: Record<string, number[]> = {};
  for (const r of rezultati) {
    if (!grupirani[r.predmet]) grupirani[r.predmet] = [];
    grupirani[r.predmet].push(r.posto);
  }
  const prosjeci: Record<string, number> = {};
  for (const [pred, postoci] of Object.entries(grupirani)) {
    prosjeci[pred] = Math.round(postoci.reduce((a, b) => a + b, 0) / postoci.length);
  }
  return prosjeci;
}

export function najboljiBodIgre(igre: RezultatIgre[], igra: RezultatIgre['igra']): number {
  const filtered = igre.filter(i => i.igra === igra);
  if (filtered.length === 0) return 0;
  return Math.max(...filtered.map(i => i.bodovi));
}
