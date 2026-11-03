import React from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { worldTitles } from '@/data/titles';
import { Trophy, CheckCircle2 } from 'lucide-react';

export const TitlesSection: React.FC = () => {
  return (
    <SectionWrapper
      id="titles"
      badge="The Hall of Glory"
      subtitle="Championship Immortality"
      title="Seven World Championships"
      description="Equalling Michael Schumacher's record of seven crowns. Each title achieved through mechanical synergy, ferocious racecraft, and historic determination."
    >
      {/* Stacking Card Container */}
      <div className="relative flex flex-col gap-8 max-w-4xl mx-auto pb-12">
        {worldTitles.map((title, index) => (
          <div
            key={title.year}
            className="sticky rounded-card glass-panel border border-surface-border p-6 sm:p-10 shadow-xl transition-all duration-300"
            style={{
              top: `calc(100px + ${index * 20}px)`,
              zIndex: index + 1,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border pb-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="font-displayGrotesk font-black text-5xl sm:text-6xl text-rosso tracking-tight">
                  {title.year}
                </span>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rosso/10 text-rosso text-xs font-mono font-bold uppercase">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Crown #{index + 1}</span>
                  </span>
                  <h3 className="font-displayGrotesk font-black text-xl sm:text-2xl text-text-primary mt-1">
                    {title.team}
                  </h3>
                </div>
              </div>

              {/* Chassis Mark */}
              <div className="text-left sm:text-right font-mono text-xs text-text-muted">
                <span className="block uppercase text-[10px] tracking-wider">Chassis</span>
                <span className="font-bold text-text-primary text-sm">{title.car}</span>
              </div>
            </div>

            {/* Content & Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-7">
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
                  {title.notes}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-rosso" />
                  <span>World Drivers' Championship Confirmed</span>
                </div>
              </div>

              {/* Wins & Points Tiles */}
              <div className="sm:col-span-5 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-cream-100/70 dark:bg-raceDark-card/70 border border-surface-border text-center">
                  <span className="block text-[10px] font-mono text-text-muted uppercase">Season Wins</span>
                  <span className="text-3xl font-displayGrotesk font-black text-text-primary">
                    {title.wins}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-cream-100/70 dark:bg-raceDark-card/70 border border-surface-border text-center">
                  <span className="block text-[10px] font-mono text-text-muted uppercase">Points</span>
                  <span className="text-3xl font-displayGrotesk font-black text-rosso">
                    {title.points}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
