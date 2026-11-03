import React from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { offTrackProjects } from '@/data/offtrack';
import { Heart, Film, Globe, Shield, Music, Leaf, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Philanthropy & Social Justice': Heart,
  'Research & Equity': Shield,
  'Film & Media': Film,
  'Sports Enterprise': Globe,
  'Sustainable Motorsport': Sparkles,
  'Creative Expression': Music,
  'Lifestyle & Sustainability': Leaf,
};

export const OffTrackSection: React.FC = () => {
  return (
    <SectionWrapper
      id="offtrack"
      badge="Beyond The Apex"
      subtitle="Purpose & Cultural Impact"
      title="Off The Track"
      description="Lewis Hamilton has transcended the role of athlete to become a global catalyst for equity, representation, high fashion, and environmental responsibility."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offTrackProjects.map((project) => {
          const Icon = iconMap[project.category] || Globe;
          return (
            <div
              key={project.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between hover:-translate-y-1 hover:border-rosso/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-[#18181C] text-rosso border border-white/5">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-telemetry text-xs text-zinc-500">{project.year}</span>
                </div>

                <span className="text-[11px] font-telemetry uppercase tracking-wider text-rosso font-bold block mb-1">
                  {project.category}
                </span>

                <h3 className="font-display font-black text-xl text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-zinc-400 flex items-start gap-2 font-sans">
                <span className="font-telemetry font-bold text-rosso uppercase text-[10px] shrink-0 mt-0.5">
                  Impact:
                </span>
                <span className="text-zinc-300">{project.impact}</span>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
