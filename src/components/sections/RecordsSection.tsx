import React from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { milestoneRecords } from '@/data/records';
import { CheckCircle2 } from 'lucide-react';

export const RecordsSection: React.FC = () => {
  return (
    <SectionWrapper
      id="records"
      badge="All-Time Records"
      subtitle="The Benchmark of Greatness"
      title="Records & Milestones Wall"
      description="Records rewritten across two decades. From the greatest rookie campaign in modern history to century benchmarks that may never be surpassed."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestoneRecords.map((record, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-card glass-panel border border-surface-border flex flex-col justify-between hover:-translate-y-1 hover:border-rosso/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-rosso/10 text-rosso text-[10px] font-mono font-bold uppercase tracking-wider">
                  {record.tag}
                </span>
                <span className="text-xs font-mono text-text-muted">#0{index + 1}</span>
              </div>

              <span className="block font-displayGrotesk font-black text-3xl sm:text-4xl text-text-primary tracking-tight my-2">
                {record.metric}
              </span>

              <h3 className="font-displayGrotesk font-extrabold text-base text-text-primary mb-2">
                {record.title}
              </h3>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {record.description}
              </p>
            </div>

            <div className="pt-4 border-t border-surface-border/60 mt-4 flex items-center gap-2 text-xs font-mono text-text-muted">
              <CheckCircle2 className="w-3.5 h-3.5 text-rosso" />
              <span>Verified FIA World Championship Record</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
