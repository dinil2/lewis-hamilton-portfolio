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
            className="group relative p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-rosso/50 shadow-xl"
          >
            {/* Top Accent Strip */}
            <div
              className="absolute top-0 left-8 right-8 h-1 rounded-full"
              style={{ backgroundColor: team.accentColor }}
            />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-telemetry text-xs uppercase tracking-wider text-zinc-500">
                  {team.years}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-telemetry font-bold uppercase tracking-wider bg-[#18181C] text-white border border-white/5">
                  {team.titles > 0 ? `${team.titles} World Title${team.titles > 1 ? 's' : ''}` : 'Active Chapter'}
                </span>
              </div>

              <h3 className="font-display font-black text-3xl text-white tracking-tight mb-1">
                {team.name}
              </h3>
              <p className="font-telemetry text-xs text-rosso uppercase font-bold tracking-wider mb-4">
                {team.era}
              </p>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
                {team.summary}
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#18181C] border border-white/5 text-center mb-6">
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase">Wins</span>
                  <span className="text-xl font-display font-black text-white">
                    {team.wins}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase">Poles</span>
                  <span className="text-xl font-display font-black text-white">
                    {team.poles}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase">Titles</span>
                  <span className="text-xl font-display font-black text-rosso">
                    {team.titles}
                  </span>
                </div>
              </div>

              {/* Teammates List */}
              <div className="mb-4">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5">
                  Teammates Raced Alongside
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {team.teammates.map((tm) => (
                    <span
                      key={tm}
                      className="px-2.5 py-1 rounded-md bg-[#18181C] text-xs font-medium text-zinc-300 border border-white/5"
                    >
                      {tm}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Highlight Banner */}
            <div className="pt-4 border-t border-white/10 flex items-start gap-2.5 text-xs text-zinc-400 font-sans">
              <Award className="w-4 h-4 text-rosso shrink-0 mt-0.5" />
              <span>{team.keyHighlight}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Junior Career Strip */}
      <div className="p-8 rounded-2xl bg-[#111114] border border-white/10 shadow-xl">
        <div className="flex items-center gap-2 mb-6">
          <Zap className="w-4 h-4 text-ferrariYellow" />
          <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
            The Junior Foundations (1993 – 2006)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {juniorCareer.slice(0, 4).map((item) => (
            <div
              key={item.year}
              className="p-4 rounded-xl bg-[#18181C] border border-white/5"
            >
              <span className="font-telemetry font-bold text-xs text-rosso">{item.year}</span>
              <h4 className="font-display font-bold text-sm text-white mt-1 mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
