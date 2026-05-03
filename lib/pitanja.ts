export type { Pitanje, Kartica, SekcijaSkripte, Tema } from './types';

import { povijest } from './data/povijest';
import { priroda } from './data/priroda';
import { hrvatskeТeme } from './data/hrvatski';
import { matematickeTeme } from './data/matematika';
import { geografijaTeme } from './data/geografija';
import { razred1Teme } from './data/razred1';
import { razred2Teme } from './data/razred2';
import { razred3Teme } from './data/razred3';
import { razred4Teme } from './data/razred4';
import { razred6Teme } from './data/razred6';
import { razred7Teme } from './data/razred7';
import { razred8Teme } from './data/razred8';
import { njemackiTeme } from './data/njemacki';
import { engleskiTeme } from './data/engleski';
import { domacinstvo } from './data/domacinstvo';
import { glazbaTeme } from './data/glazba';
import { likovnaTeme } from './data/likovna';
import { tehnickaТeme } from './data/tehnicka';
import { informatikaTeme } from './data/informatika';
import { vjeronauk } from './data/vjeronauk';

const [njemacki4, njemacki5, njemacki6, njemacki7, njemacki8] = njemackiTeme;
const [engleski1, engleski2, engleski3, engleski4, engleski5, engleski6, engleski7, engleski8] = engleskiTeme;

const razred5Teme = [...povijest, ...priroda, ...hrvatskeТeme, ...matematickeTeme, ...geografijaTeme, engleski5, njemacki5];

export const temePoRazredu: Record<number, typeof razred1Teme> = {
  1: [...razred1Teme, engleski1, ...glazbaTeme, ...likovnaTeme, ...vjeronauk],
  2: [...razred2Teme, engleski2, ...glazbaTeme, ...likovnaTeme, ...vjeronauk],
  3: [...razred3Teme, engleski3, ...glazbaTeme, ...likovnaTeme, ...vjeronauk],
  4: [...razred4Teme, engleski4, njemacki4, ...glazbaTeme, ...likovnaTeme, ...vjeronauk],
  5: [...razred5Teme, ...domacinstvo, ...glazbaTeme, ...likovnaTeme, ...tehnickaТeme, ...informatikaTeme, ...vjeronauk],
  6: [...razred6Teme, engleski6, njemacki6, ...domacinstvo, ...glazbaTeme, ...likovnaTeme, ...tehnickaТeme, ...informatikaTeme, ...vjeronauk],
  7: [...razred7Teme, engleski7, njemacki7, ...domacinstvo, ...glazbaTeme, ...likovnaTeme, ...tehnickaТeme, ...informatikaTeme, ...vjeronauk],
  8: [...razred8Teme, engleski8, njemacki8, ...domacinstvo, ...glazbaTeme, ...likovnaTeme, ...tehnickaТeme, ...informatikaTeme, ...vjeronauk],
};

export const teme = Object.values(temePoRazredu).flat();

export function getTema(id: string) {
  return teme.find((t) => t.id === id);
}

export function getTemeZaRazred(razred: number) {
  return temePoRazredu[razred] ?? [];
}

export function getRazredZaTemu(temaId: string): number | null {
  for (const [razredStr, teme] of Object.entries(temePoRazredu)) {
    if (teme.some(t => t.id === temaId)) return Number(razredStr);
  }
  return null;
}

export const TEMA_IDS = teme.map((t) => t.id);
export const RAZRED_IDS = [1, 2, 3, 4, 5, 6, 7, 8];
