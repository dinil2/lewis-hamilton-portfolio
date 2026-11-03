export interface ScheduledRace {
  roundNumber: number;
  name: string;
  officialName: string;
  date: string;
  raceTimestampUtc: string; // ISO 8601 string for precise calculation
  circuit: string;
  city: string;
  country: string;
  laps?: number;
  highlightText: string;
  verify?: boolean;
}

export const remainingRounds2026: ScheduledRace[] = [
  {
    roundNumber: 20,
    name: 'São Paulo Grand Prix',
    officialName: 'Formula 1 Grande Prêmio de São Paulo 2026',
    date: '8 Nov 2026',
    raceTimestampUtc: '2026-11-08T17:00:00Z',
    circuit: 'Autódromo José Carlos Pace (Interlagos)',
    city: 'São Paulo',
    country: 'Brazil',
    laps: 71,
    highlightText:
      'Returning to the sacred tarmac of Interlagos, where Hamilton claimed his first World Championship in 2008 and delivered his legendary 2021 penalty recovery masterclass.',
  },
  {
    roundNumber: 21,
    name: 'Las Vegas Grand Prix',
    officialName: 'Formula 1 Heineken Silver Las Vegas Grand Prix 2026',
    date: '21 Nov 2026',
    raceTimestampUtc: '2026-11-22T06:00:00Z', // Saturday night local / Sunday morning UTC
    circuit: 'Las Vegas Strip Circuit',
    city: 'Las Vegas',
    country: 'United States',
    laps: 50,
    highlightText:
      'High-speed night warfare down the iconic Strip at 350+ km/h, demanding peak low-drag aerodynamic efficiency from the Ferrari SF-26.',
    verify: true,
  },
  {
    roundNumber: 22,
    name: 'Qatar Grand Prix',
    officialName: 'Formula 1 Qatar Airways Qatar Grand Prix 2026',
    date: '29 Nov 2026',
    raceTimestampUtc: '2026-11-29T17:00:00Z',
    circuit: 'Lusail International Circuit',
    city: 'Lusail',
    country: 'Qatar',
    laps: 57,
    highlightText:
      'High-G sweeping corners under the Lusail desert floodlights, testing tyre degradation and high-speed downforce.',
    verify: true,
  },
  {
    roundNumber: 23,
    name: 'Abu Dhabi Grand Prix',
    officialName: 'Formula 1 Etihad Airways Abu Dhabi Grand Prix 2026',
    date: '6 Dec 2026',
    raceTimestampUtc: '2026-12-06T13:00:00Z',
    circuit: 'Yas Marina Circuit',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    laps: 58,
    highlightText:
      'The twilight season finale at Yas Marina, concluding Lewis Hamilton’s second campaign piloting the Scuderia Ferrari HP scarlet.',
    verify: true,
  },
];

/**
 * Returns the currently active upcoming race based on current real-world time.
 * If a race's timestamp + 3 hours has passed, it automatically rolls over
 * to the next scheduled Grand Prix.
 */
export function getActiveNextRace(referenceDate = new Date()): ScheduledRace {
  const raceDurationMs = 3 * 60 * 60 * 1000; // Assume race is concluded ~3 hours after start

  for (const race of remainingRounds2026) {
    const raceEndTime = new Date(race.raceTimestampUtc).getTime() + raceDurationMs;
    if (referenceDate.getTime() < raceEndTime) {
      return race;
    }
  }

  // If all 2026 rounds have passed, return the season finale
  return remainingRounds2026[remainingRounds2026.length - 1];
}

/**
 * Computes remaining time breakdown to a given ISO timestamp.
 */
export function calculateTimeRemaining(targetUtc: string, fromDate = new Date()) {
  const totalMs = Math.max(0, new Date(targetUtc).getTime() - fromDate.getTime());

  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  const seconds = Math.floor((totalMs / 1000) % 60);

  return {
    totalMs,
    isStarted: totalMs <= 0,
    days,
    hours,
    minutes,
    seconds,
  };
}

