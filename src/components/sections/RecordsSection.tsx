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
            className="p-6 sm:p-8 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between hover:-translate-y-1 hover:border-rosso/50 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-rosso/15 text-rosso text-[10px] font-telemetry font-bold uppercase tracking-wider">
                  {record.tag}
                </span>
                <span className="text-xs font-mono text-zinc-500">#0{index + 1}</span>
              </div>

              <span className="block font-display font-black text-3xl sm:text-4xl text-white tracking-tight my-2">
                {record.metric}
              </span>

              <h3 className="font-display font-bold text-base text-white mb-2">
                {record.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                {record.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-rosso" />
              <span>Verified FIA World Championship Record</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
