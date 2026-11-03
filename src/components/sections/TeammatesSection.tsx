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
            className="group p-6 rounded-2xl bg-[#111114] border border-white/10 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-rosso/50 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-telemetry text-xs text-zinc-500">{tm.years}</span>
                <span className="px-2 py-0.5 rounded-full bg-[#18181C] text-[10px] font-telemetry text-zinc-400 uppercase border border-white/5">
                  {tm.team}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-white tracking-tight group-hover:text-rosso transition-colors">
                {tm.name}
              </h3>

              <p className="text-xs text-zinc-400 mt-3 line-clamp-3 leading-relaxed font-sans">
                {tm.relationshipSummary}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs font-telemetry text-zinc-500 group-hover:text-rosso transition-colors">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/10 shadow-2xl text-white"
            >
              <button
                onClick={() => setSelectedTeammate(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-telemetry text-rosso uppercase mb-1">
                <Users className="w-4 h-4" />
                <span>Garage Partnership · {selectedTeammate.team}</span>
              </div>

              <h3 className="font-display font-black text-3xl text-white mb-2">
                {selectedTeammate.name}
              </h3>
              <span className="inline-block px-3 py-1 rounded-full bg-[#18181C] text-xs font-telemetry text-zinc-400 mb-4 border border-white/5">
                Years: {selectedTeammate.years}
              </span>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
                {selectedTeammate.relationshipSummary}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-center font-telemetry">
                <div className="p-3 rounded-xl bg-[#18181C] border border-white/5">
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase">Hamilton Titles</span>
                  <span className="text-xl font-black text-rosso">
                    {selectedTeammate.titlesDuringPartnership} Titles
                  </span>
                </div>
                {selectedTeammate.winsTogether !== undefined && (
                  <div className="p-3 rounded-xl bg-[#18181C] border border-white/5">
                    <span className="block text-[10px] font-mono text-zinc-500 uppercase">Wins as Teammates</span>
                    <span className="text-xl font-black text-white">
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
