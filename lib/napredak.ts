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

export interface NapredakUcenik {
  rezultati: RezultatKviza[];
}

const KLJUC = 'kvizovi-napredak';

export function ucitajNapredak(): NapredakUcenik {
  if (typeof window === 'undefined') return { rezultati: [] };
  try {
    const raw = localStorage.getItem(KLJUC);
    if (!raw) return { rezultati: [] };
    return JSON.parse(raw) as NapredakUcenik;
  } catch {
    return { rezultati: [] };
  }
}

export function spremiRezultat(r: Omit<RezultatKviza, 'datum'>): void {
  if (typeof window === 'undefined') return;
  const napredak = ucitajNapredak();
  napredak.rezultati.push({ ...r, datum: new Date().toISOString() });
  if (napredak.rezultati.length > 200) {
    napredak.rezultati = napredak.rezultati.slice(-200);
  }
  localStorage.setItem(KLJUC, JSON.stringify(napredak));
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
