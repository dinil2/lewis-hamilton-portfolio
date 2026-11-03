import { TeamChapter, JuniorMilestone } from '@/types';

export const teamChapters: TeamChapter[] = [
  {
    id: 'mclaren',
    name: 'McLaren',
    fullName: 'Vodafone McLaren Mercedes',
    era: 'The Prodigy & First Crown',
    years: '2007 – 2012',
    wins: 21,
    poles: 26,
    titles: 1,
    teammates: ['Fernando Alonso (2007)', 'Heikki Kovalainen (2008-09)', 'Jenson Button (2010-12)'],
    keyHighlight: 'Rookie sensation missing the title by 1 point in 2007, then winning the World Championship in 2008.',
    summary:
      'Entering Formula 1 with McLaren in 2007, Hamilton delivered the greatest rookie season in history with 9 consecutive podiums. In 2008, he clinched his first World Championship in dramatic fashion on the final corner at Interlagos.',
    accentColor: '#FF6600',
  },
  {
    id: 'mercedes',
    name: 'Mercedes-AMG',
    fullName: 'Mercedes-AMG Petronas F1 Team',
    era: 'The Era of Absolute Dominance',
    years: '2013 – 2024',
    wins: 84,
    poles: 78,
    titles: 6,
    teammates: ['Nico Rosberg (2013-16)', 'Valtteri Bottas (2017-21)', 'George Russell (2022-24)'],
    keyHighlight: '6 World Titles, 84 Grand Prix victories, and surpassing 100 wins and poles.',
    summary:
      'A historic partnership that redefined Formula 1 standards. Between 2014 and 2020, Hamilton secured six World Championships, breaking all-time records for wins and pole positions. Concluded with emotional victories at Silverstone and Spa in 2024 before announcing his dream move to Maranello.',
    accentColor: '#00A19B',
  },
  {
    id: 'ferrari',
    name: 'Scuderia Ferrari HP',
    fullName: 'Scuderia Ferrari HP',
    era: 'The Prancing Horse Chapter',
    years: '2025 – Present',
    wins: 1, // Barcelona 2026
    poles: 1, // Mexico City 2026
    titles: 0,
    teammates: ['Charles Leclerc (2025-present)'],
    keyHighlight: 'Victory at Barcelona 2026 and pole position at Mexico City 2026 under Frederic Vasseur.',
    summary:
      'Joining Scuderia Ferrari alongside Charles Leclerc in 2025, Hamilton took on the ultimate challenge. Following a transitional 2025 season marked by a Chinese GP Sprint win, the 2026 active-aerodynamics regulations brought his breakthrough Ferrari Grand Prix win at Barcelona and pole in Mexico City.',
    accentColor: '#E10600',
  },
];

export const juniorCareer: JuniorMilestone[] = [
  {
    year: '1993',
    title: 'Karting Beginnings',
    description: 'Started karting at age 8 with quick local success funded by his father Anthony working multiple jobs.',
  },
  {
    year: '1995',
    title: 'Autosport Awards with Ron Dennis',
    description: 'At age 10, approached McLaren chief Ron Dennis: "I want to race for you one day."',
  },
  {
    year: '1998',
    title: 'McLaren Young Driver Programme',
    description: 'Signed by McLaren and Mercedes-Benz at age 13, establishing a direct pipeline to Formula 1.',
  },
  {
    year: '2000',
    title: 'European Karting Champion',
    description: 'Crowned European Formula A Karting Champion with a perfect score in the championship.',
  },
  {
    year: '2003',
    title: 'Formula Renault UK Champion',
    description: 'Dominated the British Formula Renault championship with Manor Motorsport, taking 10 wins.',
  },
  {
    year: '2005',
    title: 'Formula 3 Euro Series Champion',
    description: 'Demolished the field with ASM, claiming 15 wins from 20 races in a masterclass campaign.',
  },
  {
    year: '2006',
    title: 'GP2 Series Champion',
    description: 'Won the GP2 title with ART Grand Prix, featuring an unforgettable charge from 8th to 2nd in Istanbul.',
  },
];

