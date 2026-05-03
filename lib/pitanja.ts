export type { Pitanje, Kartica, SekcijaSkripte, Tema } from './types';

import { povijest } from './data/povijest';
import { priroda } from './data/priroda';
import { hrvatskeТeme } from './data/hrvatski';
import { matematickeTeme } from './data/matematika';
import { geografijaTeme } from './data/geografija';
import { razred1Teme } from './data/razred1';
import { razred2Teme } from './data/razred2';

const razred5Teme = [...povijest, ...priroda, ...hrvatskeТeme, ...matematickeTeme, ...geografijaTeme];

export const temePoRazredu: Record<number, typeof razred1Teme> = {
  1: razred1Teme,
  2: razred2Teme,
  5: razred5Teme,
};

export const teme = [...razred1Teme, ...razred2Teme, ...razred5Teme];

export function getTema(id: string) {
  return teme.find((t) => t.id === id);
}

export function getTemeZaRazred(razred: number) {
  return temePoRazredu[razred] ?? [];
}

export const TEMA_IDS = teme.map((t) => t.id);
export const RAZRED_IDS = [1, 2, 5];
