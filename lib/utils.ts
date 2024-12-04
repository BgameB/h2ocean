import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { LEVELS_XP } from "./constant";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export function getLevelFromXP(xp: number): number {
  for (let i = 0; i < LEVELS_XP.length; i++) {
    if (xp < LEVELS_XP[i]) {
      return i + 1;
    }
  }
  return LEVELS_XP.length + 1;
}

export function getXPToNextLevel(xp: number): number {
  const currentLevel = getLevelFromXP(xp);

  if (currentLevel > LEVELS_XP.length) {
    return 0;
  }

  const nextLevelXP = LEVELS_XP[currentLevel - 1];
  return nextLevelXP - xp;
}
