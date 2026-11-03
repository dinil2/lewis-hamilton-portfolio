import { Season2026Data } from '@/types';

export const season2026: Season2026Data = {
  standing: 3,
  points: 259,
  wins: 1,
  poles: 1,
  podiumsCount: 7,
  lastRace: {
    name: 'Mexico City Grand Prix',
    pole: true,
    result: 'P2',
    gapToWinner: '+0.799s',
    winner: 'Max Verstappen',
    description:
      'Started from his 105th career pole position—his first for Ferrari and oldest polesitter since Nigel Mansell in 1994. Finished P2 just 0.799s behind Verstappen in a thrilling desert charge.',
  },
  nextRace: {
    name: 'São Paulo Grand Prix',
    date: '8 Nov 2026',
    circuit: 'Autódromo José Carlos Pace (Interlagos)',
    city: 'São Paulo',
    country: 'Brazil',
  },
  driverStandings: [
    { pos: 1, driver: 'Kimi Antonelli', team: 'Mercedes', points: 380 },
    { pos: 2, driver: 'Max Verstappen', team: 'Red Bull Racing', points: 261 },
    { pos: 3, driver: 'Lewis Hamilton', team: 'Scuderia Ferrari HP', points: 259, isLewis: true },
    { pos: 4, driver: 'George Russell', team: 'Mercedes', points: 250 },
    { pos: 5, driver: 'Charles Leclerc', team: 'Scuderia Ferrari HP', points: 245 },
    { pos: 6, driver: 'Lando Norris', team: 'McLaren', points: 221 },
    { pos: 7, driver: 'Oscar Piastri', team: 'McLaren', points: 150 },
  ],
  constructorStandings: [
    { pos: 1, team: 'Mercedes', points: 630 },
    { pos: 2, team: 'Ferrari', points: 504, isFerrari: true },
    { pos: 3, team: 'Red Bull Racing', points: 382 },
    { pos: 4, team: 'McLaren', points: 365 },
  ],
  podiums: [
    {
      round: 'Chinese GP (Shanghai)',
      position: 'P3',
      note: 'First podium in 16 months, first Grand Prix podium for Scuderia Ferrari.',
    },
    {
      round: 'Canadian GP (Montreal)',
      position: 'P2',
      note: 'Mastery around Circuit Gilles Villeneuve in changing conditions.',
    },
    {
      round: 'Monaco GP (Monte Carlo)',
      position: 'P2',
      note: 'Superb qualifying execution and defensive masterclass around the streets.',
    },
    {
      round: 'Spanish GP (Barcelona-Catalunya)',
      position: 'P1',
      note: 'His 106th career victory and maiden Grand Prix win in Ferrari red.',
    },
    {
      round: 'British GP (Silverstone)',
      position: 'P3',
      note: 'Record 15th Silverstone podium in front of 160,000 home fans.',
    },
    {
      round: 'Bahrain GP round',
      position: 'P3',
      note: 'Resilient drive through high degradation.',
      verify: true,
    },
    {
      round: 'Mexico City GP',
      position: 'P2',
      note: 'Qualified on pole position and finished just 0.799s behind the leader.',
    },
  ],
  remainingRounds: [
    {
      round: 'Round 20: São Paulo GP',
      circuit: 'Autódromo José Carlos Pace (Interlagos)',
      date: '8 Nov 2026',
      next: true,
    },
    {
      round: 'Round 21: Las Vegas GP',
      circuit: 'Las Vegas Strip Circuit',
      date: '21 Nov 2026',
      verify: true,
    },
    {
      round: 'Round 22: Qatar GP',
      circuit: 'Lusail International Circuit',
      date: '29 Nov 2026',
      verify: true,
    },
    {
      round: 'Round 23: Abu Dhabi GP',
      circuit: 'Yas Marina Circuit',
      date: '6 Dec 2026',
      verify: true,
    },
  ],
  carName: 'Ferrari SF-26',
  teamPrincipal: 'Frederic Vasseur',
  teammate: 'Charles Leclerc',
  regulationEra: 'Active Aerodynamics & 50/50 Turbo Hybrid Era',
};

