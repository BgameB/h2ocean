// ICI ON MET TOUTES LES FONCTIONS RÉUTILISABLE SUR NOTRE PROJET (EXEMPLE FONCTION MOYENNE OÙ CALCULE DE PROGRESSION)

export function calculatePercentage(current: number, max: number): number {
  if (max === 0) {
    throw new Error("La valeur maximale (max) ne peut pas être 0.");
  }
  return (current / max) * 100;
}

export const LEVELS_XP = [100, 500, 1000, 2000, 3500, 5500, 8000, 11000];
