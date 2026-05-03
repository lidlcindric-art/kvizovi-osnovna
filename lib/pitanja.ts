export type { Pitanje, Kartica, SekcijaSkripte, Tema } from './types';

import { povijest } from './data/povijest';
import { priroda } from './data/priroda';
import { hrvatskeТeme } from './data/hrvatski';
import { matematickeTeme } from './data/matematika';
import { geografijaTeme } from './data/geografija';

export const teme = [
  ...povijest,
  ...priroda,
  ...hrvatskeТeme,
  ...matematickeTeme,
  ...geografijaTeme,
];

export function getTema(id: string) {
  return teme.find((t) => t.id === id);
}

export const TEMA_IDS = teme.map((t) => t.id);
