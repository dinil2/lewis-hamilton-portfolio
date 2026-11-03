import React, { useRef } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { careerTotals } from '@/data/career';
import { useGsapContext } from '@/hooks/useGsapContext';
import { gsap } from '@/lib/animation';

interface StatItem {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
  description: string;
  highlight?: boolean;
}

const stats: StatItem[] = [
  {
    label: 'World Championships',
    value: careerTotals.worldTitles,
    description: 'Equalled Michael Schumacher for the all-time record.',
    highlight: true,
  },
  {
    label: 'Grand Prix Wins',
    value: careerTotals.wins,
    description: 'All-time Formula 1 record holder. Surpassed 100 in 2021.',
    highlight: true,
  },
  {
    label: 'Pole Positions',
    value: careerTotals.poles,
    description: 'Most poles in history. Latest at 2026 Mexico City GP.',
    highlight: true,
  },
  {
    label: 'Podium Finishes',
    value: careerTotals.podiums,
    description: 'Finished top 3 in 52.4% of every Grand Prix started.',
  },
  {
    label: 'Race Starts',
    value: careerTotals.starts,
    description: 'Across 20 uninterrupted seasons at the pinnacle of racing.',
  },
  {
    label: 'Career Points',
    value: careerTotals.points,
    decimals: 1,
    description: 'All-time highest points tally accumulated in F1 history.',
  },
];

const marqueeWords = [
  '7X WORLD CHAMPION',
  'SCUDERIA FERRARI HP',
  '106 GRAND PRIX VICTORIES',
  'CAR NUMBER 44',
  '105 POLE POSITIONS',
  'STILL I RISE',
  '209 PODIUMS',
  'SILVERSTONE RECORD HOLDER',
  'CENTURY CLUB PIONEER',
];

export const NumbersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGsapContext(
    () => {
      // Counter count-up animations triggered on scroll
      const statCards = gsap.utils.toArray<HTMLElement>('.stat-card');

      statCards.forEach((card) => {
        const numEl = card.querySelector('.stat-number');
        const targetVal = parseFloat(numEl?.getAttribute('data-target') || '0');
        const decimals = parseInt(numEl?.getAttribute('data-decimals') || '0', 10);

        const counterObj = { val: 0 };

        gsap.to(counterObj, {
          val: targetVal,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            if (numEl) {
              numEl.textContent = counterObj.val.toLocaleString('en-US', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              });
            }
          },
        });
      });
    },
    sectionRef,
    []
  );

  return (
    <div ref={sectionRef} className="relative">
      <SectionWrapper
        id="numbers"
        badge="Career Telemetry"
        subtitle="Unmatched Milestones"
        title="Career in Numbers"
        description="The statistical benchmark of modern motorsport. Two decades of relentless speed, consistency, and record-shattering mastery across Formula 1."
      >
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`stat-card relative p-6 sm:p-8 rounded-2xl bg-[#111114] border transition-all duration-300 hover:-translate-y-1 shadow-xl ${
                stat.highlight
                  ? 'border-rosso/40 shadow-rosso/5'
                  : 'border-white/10'
              }`}
            >
              {stat.highlight && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-rosso animate-pulse" />
              )}
              <span className="block text-xs font-telemetry font-bold uppercase tracking-wider text-zinc-500 mb-2">
                {stat.label}
              </span>

              <div className="flex items-baseline gap-1 my-1">
                <span
                  className="stat-number font-display font-black text-5xl sm:text-6xl text-white tracking-tight tabular-nums"
                  data-target={stat.value}
                  data-decimals={stat.decimals || 0}
                >
                  0
                </span>
                {stat.suffix && (
                  <span className="font-display font-bold text-2xl text-rosso">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-sans">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Marquee Strip */}
      <div className="relative w-full overflow-hidden bg-rosso py-3 text-white select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeWords.concat(marqueeWords).map((word, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 mx-4 font-displayGrotesk font-black text-sm tracking-widest uppercase"
            >
              <span>{word}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
