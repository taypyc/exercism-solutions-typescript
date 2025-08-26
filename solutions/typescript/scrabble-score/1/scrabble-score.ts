export function score(word: string): number {
  if (!word) return 0;

  const groups: Record<number, string> = {
    1: 'AEIOULNRST',
    2: 'DG',
    3: 'BCMP',
    4: 'FHVWY',
    5: 'K',
    8: 'JX',
    10: 'QZ',
  };

  const letterToPoints: Record<string, number> = {};
  for (const [pointsString, letters] of Object.entries(groups)) {
    const points = Number(pointsString);
    for (const letter of letters) {
      letterToPoints[letter] = points;
    }
  }

  let total = 0;
  for (const char of word) {
    const upper = char.toUpperCase();
    total += letterToPoints[upper] ?? 0;
  }

  return total;
}
