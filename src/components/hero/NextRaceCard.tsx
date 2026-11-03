import React from 'react';
import { season2026 } from '@/data/season2026';
import { useRaceCountdown } from '@/hooks/useRaceCountdown';
import { Calendar, Flag, Trophy, Clock } from 'lucide-react';

export const NextRaceCard: React.FC = () => {
  const { standing, points, wins, poles } = season2026;
  const { activeRace, days, hours, minutes, seconds, isStarted } = useRaceCountdown();

  return (
    <div className="flex flex-col gap-2.5 max-w-sm">
      {/* Ferrari Status Badge */}
      <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-rosso/10 border border-rosso/20 text-rosso text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-rosso animate-ping" />
        <span>Scuderia Ferrari HP · #44</span>
      </div>

      {/* Mini Card */}
      <div className="p-4 rounded-2xl glass-panel shadow-lg border border-surface-border transition-transform hover:-translate-y-0.5 duration-300">
        <div className="flex items-center justify-between gap-4 mb-2 pb-2 border-b border-surface-border">
          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary uppercase tracking-wider">
            <Flag className="w-3.5 h-3.5 text-rosso" />
            <span>Next Round · Round {activeRace.roundNumber}</span>
          </div>
          <span className="text-xs font-mono font-bold text-rosso bg-rosso/10 px-2 py-0.5 rounded-full border border-rosso/20">
            {activeRace.date}
          </span>
        </div>

        <h4 className="text-base font-extrabold text-text-primary tracking-tight">
          {activeRace.name}
        </h4>
        <p className="text-xs text-text-muted mb-3 flex items-center gap-1.5 mt-0.5">
          <Calendar className="w-3 h-3 text-rosso/70 flex-shrink-0" />
          <span className="truncate">{activeRace.circuit}, {activeRace.country}</span>
        </p>

        {/* Live Countdown to Lights Out */}
        <div className="mb-3 p-2 rounded-xl bg-black/40 border border-rosso/20 flex items-center justify-between text-center">
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-zinc-400 font-semibold pl-1">
            <Clock className="w-3 h-3 text-rosso animate-pulse" />
            <span>Lights Out</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-xs font-bold text-white pr-1">
            {isStarted ? (
              <span className="text-ferrariYellow animate-pulse text-[11px]">RACE UNDERWAY</span>
            ) : (
              <>
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-white">{days}d</span>
                <span className="text-zinc-500">:</span>
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-white">{String(hours).padStart(2, '0')}h</span>
                <span className="text-zinc-500">:</span>
                <span className="bg-white/10 px-1.5 py-0.5 rounded text-white">{String(minutes).padStart(2, '0')}m</span>
                <span className="text-zinc-500">:</span>
                <span className="bg-rosso/20 border border-rosso/40 px-1.5 py-0.5 rounded text-rosso">{String(seconds).padStart(2, '0')}s</span>
              </>
            )}
          </div>
        </div>

        {/* 2026 Season Quick Stats */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
          <div className="bg-[#18181C] py-1.5 px-2 rounded-xl border border-white/5">
            <span className="block text-[10px] font-mono text-zinc-500 uppercase">Rank</span>
            <span className="text-sm font-extrabold text-white">P{standing}</span>
          </div>
          <div className="bg-[#18181C] py-1.5 px-2 rounded-xl border border-white/5">
            <span className="block text-[10px] font-mono text-zinc-500 uppercase">Points</span>
            <span className="text-sm font-extrabold text-rosso">{points}</span>
          </div>
          <div className="bg-[#18181C] py-1.5 px-2 rounded-xl border border-white/5">
            <span className="block text-[10px] font-mono text-zinc-500 uppercase">Win / Pole</span>
            <span className="text-sm font-extrabold text-white">{wins} / {poles}</span>
          </div>
        </div>

        <div className="mt-2 text-[10px] font-mono text-text-muted flex items-center justify-between">
          <span className="flex items-center gap-1 text-text-secondary font-semibold">
            <Trophy className="w-3 h-3 text-ferrariYellow" />
            Last Win: Barcelona 2026
          </span>
          <span className="text-rosso font-semibold">Pole: Mexico 2026</span>
        </div>
      </div>
    </div>
  );
};
