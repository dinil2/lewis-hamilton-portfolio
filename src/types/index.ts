export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  developer: string;
  developerUrl: string;
  lastUpdated: string;
  snapshotLabel: string;
  currentYear: number;
}

export interface CareerTotals {
  starts: number;
  worldTitles: number;
  wins: number;
  poles: number;
  podiums: number;
  points: number;
  debut: string;
  firstWin: string;
  lastWin: string;
  latestPole: string;
  silverstoneWins: number;
  hungaryWins: number;
}

export interface WorldTitle {
  year: number;
  team: string;
  car: string;
  wins: number;
  points: number;
  notes?: string;
}

export interface TeamChapter {
  id: string;
  name: string;
  fullName: string;
  era: string;
  years: string;
  wins: number;
  poles: number;
  titles: number;
  teammates: string[];
  keyHighlight: string;
  summary: string;
  accentColor: string;
}

export interface JuniorMilestone {
  year: string;
  title: string;
  description: string;
}

export interface DriverStanding {
  pos: number;
  driver: string;
  team: string;
  points: number;
  isLewis?: boolean;
}

export interface ConstructorStanding {
  pos: number;
  team: string;
  points: number;
  isFerrari?: boolean;
}

export interface PodiumFinish2026 {
  round: string;
  position: 'P1' | 'P2' | 'P3';
  note: string;
  verify?: boolean;
}

export interface RemainingRound2026 {
  round: string;
  circuit: string;
  date: string;
  next?: boolean;
  verify?: boolean;
}

export interface Season2026Data {
  standing: number;
  points: number;
  wins: number;
  poles: number;
  podiumsCount: number;
  lastRace: {
    name: string;
    pole: boolean;
    result: string;
    gapToWinner: string;
    winner: string;
    description: string;
  };
  nextRace: {
    name: string;
    date: string;
    circuit: string;
    city: string;
    country: string;
  };
  driverStandings: DriverStanding[];
  constructorStandings: ConstructorStanding[];
  podiums: PodiumFinish2026[];
  remainingRounds: RemainingRound2026[];
  carName: string;
  teamPrincipal: string;
  teammate: string;
  regulationEra: string;
}

export interface Teammate {
  name: string;
  years: string;
  team: string;
  titlesDuringPartnership: number;
  relationshipSummary: string;
  winsTogether?: number;
}

export interface MilestoneRecord {
  title: string;
  metric: string;
  description: string;
  tag: string;
}

export interface EraHelmet {
  id: string;
  era: string;
  name: string;
  years: string;
  colors: string[];
  description: string;
  quote?: string;
}

export interface CarHotspot {
  id: string;
  name: string;
  tag: string;
  x: number; // percentage coordinates (0-100)
  y: number;
  explodeX: number; // offset in px for exploded view
  explodeY: number;
  shortDesc: string;
  fullDesc: string;
}

export interface OffTrackProject {
  title: string;
  category: string;
  year: string;
  description: string;
  impact: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  year: string;
  aspectRatio: string;
  caption: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Career' | 'Ferrari' | 'Records' | 'Personal';
}

export interface TimelineEvent {
  year: string;
  age?: number;
  title: string;
  category: 'Karting' | 'Junior' | 'McLaren' | 'Mercedes' | 'Ferrari';
  description: string;
  statsHighlight?: string;
}
