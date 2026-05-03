export interface Pitanje {
  p: string;
  o: string[];
  t: number;
  hint?: string;
}

export interface Kartica {
  pojam: string;
  opis: string;
}

export interface SekcijaSkripte {
  naslov: string;
  tekst?: string;
  sadrzaj?: string[];
}

export interface Tema {
  id: string;
  naziv: string;
  predmet: string;
  opis: string;
  ikona: string;
  boja: string;
  skripta: SekcijaSkripte[];
  kartice: Kartica[];
  pitanja: Pitanje[];
}
