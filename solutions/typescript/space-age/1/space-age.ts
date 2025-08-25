// Orbital periods in Earth years (relative to Earth = 1)
const ORBITAL_PERIODS: Record<string, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

const EARTH_YEAR_SECONDS = 31557600; // Earth year in seconds (365.25 days)

export function age(planet: unknown, seconds: unknown): unknown {
  // Type guards and validation
  if (typeof planet !== 'string') {
    throw new Error('Planet must be a string');
  }
  
  if (typeof seconds !== 'number' || seconds < 0) {
    throw new Error('Seconds must be a non-negative number');
  }
  
  const planetLower = planet.toLowerCase();
  
  if (!(planetLower in ORBITAL_PERIODS)) {
    throw new Error(`Unknown planet: ${planet}. Valid planets are: ${Object.keys(ORBITAL_PERIODS).join(', ')}`);
  }
  
  // Convert seconds to Earth years
  const earthYears = seconds / EARTH_YEAR_SECONDS;
  
  // Convert Earth years to planet years
  const planetYears = earthYears / ORBITAL_PERIODS[planetLower];
  
  // Round to 2 decimal places
  return Math.round(planetYears * 100) / 100;
}