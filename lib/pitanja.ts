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

const razred5Teme = [...povijest, ...priroda, ...hrvatskeТeme, ...matematickeTeme, ...geografijaTeme];

export const temePoRazredu: Record<number, typeof razred1Teme> = {
  1: razred1Teme,
  2: razred2Teme,
  3: razred3Teme,
  4: razred4Teme,
  5: razred5Teme,
  6: razred6Teme,
  7: razred7Teme,
  8: razred8Teme,
};

export const teme = [
  ...razred1Teme,
  ...razred2Teme,
  ...razred3Teme,
  ...razred4Teme,
  ...razred5Teme,
  ...razred6Teme,
  ...razred7Teme,
  ...razred8Teme,
];

export function getTema(id: string) {
  return teme.find((t) => t.id === id);
}

export function getTemeZaRazred(razred: number) {
  return temePoRazredu[razred] ?? [];
}

export const TEMA_IDS = teme.map((t) => t.id);
export const RAZRED_IDS = [1, 2, 3, 4, 5, 6, 7, 8];
