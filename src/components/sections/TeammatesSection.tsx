import React, { useState } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { teammates } from '@/data/teammates';
import { Teammate } from '@/types';
import { Users, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TeammatesSection: React.FC = () => {
  const [selectedTeammate, setSelectedTeammate] = useState<Teammate | null>(null);

  return (
    <SectionWrapper
      id="teammates"
      badge="Intra-Team Battles"
      subtitle="Fierce Rivals & Comrades"
      title="The Teammates Grid"
      description="Across twenty seasons, Hamilton has shared garages with World Champions and hungry young stars. Each partnership pushed technical boundaries and shaped Formula 1 lore."
    >
      {/* 8 Teammates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teammates.map((tm) => (
          <div
            key={tm.name}
            onClick={() => setSelectedTeammate(tm)}
            className="group p-6 rounded-card glass-panel border border-surface-border flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-rosso/40 hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-text-muted">{tm.years}</span>
                <span className="px-2 py-0.5 rounded-full bg-cream-200 dark:bg-raceDark text-[10px] font-mono text-text-secondary uppercase">
                  {tm.team}
                </span>
              </div>

              <h3 className="font-displayGrotesk font-black text-2xl text-text-primary tracking-tight group-hover:text-rosso transition-colors">
                {tm.name}
              </h3>

              <p className="text-xs text-text-secondary mt-3 line-clamp-3 leading-relaxed">
                {tm.relationshipSummary}
              </p>
            </div>

            <div className="pt-4 border-t border-surface-border mt-4 flex items-center justify-between text-xs font-mono text-text-muted group-hover:text-rosso transition-colors">
              <span>View duel breakdown</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Detail Modal on Tap / Click */}
      <AnimatePresence>
        {selectedTeammate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeammate(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-raceDark/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-card bg-cream-50 dark:bg-raceDark-surface border border-surface-border shadow-2xl"
            >
              <button
                onClick={() => setSelectedTeammate(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream-200 dark:hover:bg-raceDark text-text-muted hover:text-text-primary"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-rosso uppercase mb-1">
                <Users className="w-4 h-4" />
                <span>Garage Partnership · {selectedTeammate.team}</span>
              </div>

              <h3 className="font-displayGrotesk font-black text-3xl text-text-primary mb-2">
                {selectedTeammate.name}
              </h3>
              <span className="inline-block px-3 py-1 rounded-full bg-cream-200 dark:bg-raceDark text-xs font-mono text-text-secondary mb-4">
                Years: {selectedTeammate.years}
              </span>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {selectedTeammate.relationshipSummary}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-surface-border text-center">
                <div className="p-3 rounded-xl bg-cream-100 dark:bg-raceDark-card">
                  <span className="block text-[10px] font-mono text-text-muted uppercase">Hamilton Titles</span>
                  <span className="text-xl font-black text-rosso">
                    {selectedTeammate.titlesDuringPartnership} Titles
                  </span>
                </div>
                {selectedTeammate.winsTogether !== undefined && (
                  <div className="p-3 rounded-xl bg-cream-100 dark:bg-raceDark-card">
                    <span className="block text-[10px] font-mono text-text-muted uppercase">Wins as Teammates</span>
                    <span className="text-xl font-black text-text-primary">
                      {selectedTeammate.winsTogether} Wins
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};
