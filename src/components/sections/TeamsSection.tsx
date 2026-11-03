import React from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { teamChapters, juniorCareer } from '@/data/teams';
import { Zap, Award } from 'lucide-react';

export const TeamsSection: React.FC = () => {
  return (
    <SectionWrapper
      id="teams"
      badge="The Constructors"
      subtitle="Championship Dynasties"
      title="Three Legendary Chapters"
      description="Three historic racing outfits. Three distinct epochs in Formula 1 history. From the fearless rookie at McLaren to the record-shattering Mercedes era and the historic revival at Scuderia Ferrari."
    >
      {/* 3 Main Team Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {teamChapters.map((team) => (
          <div
            key={team.id}
            className="group relative p-8 rounded-card glass-panel border border-surface-border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-rosso/40 hover:shadow-xl"
          >
            {/* Top Accent Strip */}
            <div
              className="absolute top-0 left-8 right-8 h-1 rounded-full"
              style={{ backgroundColor: team.accentColor }}
            />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  {team.years}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-cream-200/60 dark:bg-raceDark text-text-primary">
                  {team.titles > 0 ? `${team.titles} World Title${team.titles > 1 ? 's' : ''}` : 'Active Chapter'}
                </span>
              </div>

              <h3 className="font-displayGrotesk font-black text-3xl text-text-primary tracking-tight mb-1">
                {team.name}
              </h3>
              <p className="font-serifTitle italic text-sm text-text-muted mb-4">
                {team.era}
              </p>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {team.summary}
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-cream-200/40 dark:bg-raceDark-card/50 border border-surface-border text-center mb-6">
                <div>
                  <span className="block text-[10px] font-mono text-text-muted uppercase">Wins</span>
                  <span className="text-xl font-displayGrotesk font-extrabold text-text-primary">
                    {team.wins}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-text-muted uppercase">Poles</span>
                  <span className="text-xl font-displayGrotesk font-extrabold text-text-primary">
                    {team.poles}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-text-muted uppercase">Titles</span>
                  <span className="text-xl font-displayGrotesk font-extrabold text-rosso">
                    {team.titles}
                  </span>
                </div>
              </div>

              {/* Teammates List */}
              <div className="mb-4">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-text-muted mb-1.5">
                  Teammates Raced Alongside
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {team.teammates.map((tm) => (
                    <span
                      key={tm}
                      className="px-2.5 py-1 rounded-md bg-cream-100 dark:bg-raceDark text-xs font-medium text-text-secondary border border-surface-border/50"
                    >
                      {tm}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Highlight Banner */}
            <div className="pt-4 border-t border-surface-border flex items-start gap-2.5 text-xs text-text-secondary">
              <Award className="w-4 h-4 text-rosso shrink-0 mt-0.5" />
              <span>{team.keyHighlight}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Junior Career Strip */}
      <div className="p-8 rounded-card glass-panel border border-surface-border">
        <div className="flex items-center gap-2 mb-6">
          <Zap className="w-4 h-4 text-ferrariYellow" />
          <h3 className="font-displayGrotesk font-black text-xl text-text-primary uppercase tracking-tight">
            The Junior Foundations (1993 – 2006)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {juniorCareer.slice(0, 4).map((item) => (
            <div
              key={item.year}
              className="p-4 rounded-xl bg-cream-100/60 dark:bg-raceDark-card/50 border border-surface-border"
            >
              <span className="font-mono font-bold text-xs text-rosso">{item.year}</span>
              <h4 className="font-displayGrotesk font-bold text-sm text-text-primary mt-1 mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
