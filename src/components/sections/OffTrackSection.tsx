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
              className="p-6 sm:p-8 rounded-card glass-panel border border-surface-border flex flex-col justify-between hover:-translate-y-1 hover:border-rosso/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-cream-200/60 dark:bg-raceDark-card text-rosso">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-mono text-xs text-text-muted">{project.year}</span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-rosso font-bold block mb-1">
                  {project.category}
                </span>

                <h3 className="font-displayGrotesk font-black text-xl text-text-primary mb-3">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-border text-xs text-text-muted flex items-start gap-2">
                <span className="font-mono font-bold text-rosso uppercase text-[10px] shrink-0 mt-0.5">
                  Impact:
                </span>
                <span className="text-text-secondary">{project.impact}</span>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
