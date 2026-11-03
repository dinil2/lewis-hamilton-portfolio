import React, { useState } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { season2026 } from '@/data/season2026';
import { siteConfig } from '@/data/site';
import { Flame } from 'lucide-react';

export const Season2026Section: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'drivers' | 'constructors'>('drivers');
  const {
    podiumsCount,
    lastRace,
    nextRace,
    driverStandings,
    constructorStandings,
    podiums,
    remainingRounds,
  } = season2026;

  return (
    <SectionWrapper
      id="season2026"
      badge="Live Telemetry"
      subtitle="The 2026 Formula 1 Season"
      title="2026 Season Hub · Scuderia Ferrari"
      description={`Official season standings and verified race ledger. Snapshot captured ${siteConfig.snapshotLabel} (${siteConfig.lastUpdated}).`}
    >
      {/* Top Ledger: Last Race & Next Race Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Last Race: Mexico City GP */}
        <div className="p-6 sm:p-8 rounded-card glass-panel border border-rosso/30 relative overflow-hidden">
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rosso/10 text-rosso text-xs font-mono font-bold uppercase">
            Last Grand Prix
          </div>
          <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
            Round 19 Result
          </span>
          <h3 className="font-displayGrotesk font-black text-2xl sm:text-3xl text-text-primary mb-2">
            {lastRace.name}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            {lastRace.description}
          </p>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-surface-border text-center">
            <div className="bg-cream-200/50 dark:bg-raceDark-card/50 p-2.5 rounded-xl">
              <span className="block text-[10px] font-mono text-text-muted uppercase">Qualifying</span>
              <span className="text-lg font-black text-rosso">POLE (105)</span>
            </div>
            <div className="bg-cream-200/50 dark:bg-raceDark-card/50 p-2.5 rounded-xl">
              <span className="block text-[10px] font-mono text-text-muted uppercase">Race Finish</span>
              <span className="text-lg font-black text-text-primary">P2 (Podium)</span>
            </div>
            <div className="bg-cream-200/50 dark:bg-raceDark-card/50 p-2.5 rounded-xl">
              <span className="block text-[10px] font-mono text-text-muted uppercase">Gap to P1</span>
              <span className="text-lg font-black text-text-secondary">{lastRace.gapToWinner}</span>
            </div>
          </div>
        </div>

        {/* Next Race: São Paulo GP */}
        <div className="p-6 sm:p-8 rounded-card glass-panel border border-surface-border relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-ferrariYellow/20 text-text-primary text-xs font-mono font-bold uppercase">
            Up Next
          </div>
          <div>
            <span className="text-xs font-mono text-rosso font-bold uppercase tracking-wider block mb-1">
              Round 20 · 8 Nov 2026
            </span>
            <h3 className="font-displayGrotesk font-black text-2xl sm:text-3xl text-text-primary mb-2">
              {nextRace.name}
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
              Returning to the sacred tarmac of Interlagos, where Hamilton claimed his first World Championship in 2008 and scored his legendary 2021 penalty recovery victory.
            </p>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-cream-200/40 dark:bg-raceDark-card/50 border border-surface-border text-xs font-mono">
            <span className="text-text-secondary">{nextRace.circuit}</span>
            <span className="font-bold text-rosso">{nextRace.city}, {nextRace.country}</span>
          </div>
        </div>
      </div>

      {/* Head to Head with Charles Leclerc (Instruction 13) */}
      <div className="p-6 rounded-card glass-panel border border-surface-border mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-rosso" />
            <h4 className="font-displayGrotesk font-black text-lg text-text-primary uppercase tracking-tight">
              Scuderia Ferrari Intra-Team Head-to-Head
            </h4>
          </div>
          <span className="text-xs font-mono text-text-muted">2026 Points Duel</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-rosso/10 border border-rosso/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-rosso font-bold block">Lewis Hamilton #44</span>
              <span className="font-displayGrotesk font-black text-3xl text-text-primary">259 PTS</span>
              <span className="text-[11px] text-text-secondary block mt-0.5">1 Win (Barcelona) · 1 Pole (Mexico) · 7 Podiums</span>
            </div>
            <span className="text-2xl font-black text-rosso">P3</span>
          </div>

          <div className="p-4 rounded-xl bg-cream-200/50 dark:bg-raceDark-card/50 border border-surface-border flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-text-muted font-bold block">Charles Leclerc #16</span>
              <span className="font-displayGrotesk font-black text-3xl text-text-primary">245 PTS</span>
              <span className="text-[11px] text-text-secondary block mt-0.5">Solid point finishes across 19 rounds</span>
            </div>
            <span className="text-2xl font-black text-text-secondary">P5</span>
          </div>
        </div>
      </div>

      {/* Standings & Podiums Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Standings Table */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-card glass-panel border border-surface-border">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-displayGrotesk font-black text-xl text-text-primary">
              2026 Official Standings
            </h4>

            {/* Toggle Tab */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-cream-200 dark:bg-raceDark text-xs font-mono">
              <button
                onClick={() => setActiveTab('drivers')}
                className={`px-3 py-1 rounded-full transition-all ${
                  activeTab === 'drivers'
                    ? 'bg-rosso text-white font-bold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Drivers Top 7
              </button>
              <button
                onClick={() => setActiveTab('constructors')}
                className={`px-3 py-1 rounded-full transition-all ${
                  activeTab === 'constructors'
                    ? 'bg-rosso text-white font-bold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Constructors Top 4
              </button>
            </div>
          </div>

          {activeTab === 'drivers' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-surface-border text-[11px] font-mono uppercase text-text-muted">
                    <th className="py-2.5 pr-2">Pos</th>
                    <th className="py-2.5 px-3">Driver</th>
                    <th className="py-2.5 px-3">Team</th>
                    <th className="py-2.5 pl-3 text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border/50">
                  {driverStandings.map((driver) => (
                    <tr
                      key={driver.pos}
                      className={
                        driver.isLewis
                          ? 'bg-rosso/10 font-bold text-text-primary'
                          : 'hover:bg-cream-200/30 dark:hover:bg-raceDark-card/30'
                      }
                    >
                      <td className="py-3 pr-2 font-mono text-xs">
                        {driver.pos === 1 ? '👑 P1' : `P${driver.pos}`}
                      </td>
                      <td className="py-3 px-3 flex items-center gap-2">
                        <span>{driver.driver}</span>
                        {driver.isLewis && (
                          <span className="px-1.5 py-0.2 rounded bg-rosso text-white text-[10px] font-mono">
                            #44
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-text-secondary text-xs">{driver.team}</td>
                      <td className="py-3 pl-3 text-right font-mono font-bold">{driver.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-surface-border text-[11px] font-mono uppercase text-text-muted">
                    <th className="py-2.5 pr-2">Pos</th>
                    <th className="py-2.5 px-3">Constructor</th>
                    <th className="py-2.5 pl-3 text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border/50">
                  {constructorStandings.map((team) => (
                    <tr
                      key={team.pos}
                      className={
                        team.isFerrari
                          ? 'bg-rosso/10 font-bold text-text-primary'
                          : 'hover:bg-cream-200/30 dark:hover:bg-raceDark-card/30'
                      }
                    >
                      <td className="py-3 pr-2 font-mono text-xs">P{team.pos}</td>
                      <td className="py-3 px-3 flex items-center gap-2">
                        <span>{team.team}</span>
                        {team.isFerrari && (
                          <span className="px-1.5 py-0.2 rounded bg-rosso text-white text-[10px] font-mono">
                            SCUDERIA
                          </span>
                        )}
                      </td>
                      <td className="py-3 pl-3 text-right font-mono font-bold">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Right Column: 2026 Podiums List */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-card glass-panel border border-surface-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-displayGrotesk font-black text-xl text-text-primary">
                2026 Podiums ({podiumsCount})
              </h4>
              <span className="text-xs font-mono text-rosso font-bold">1 Win · 7 Rostrums</span>
            </div>

            <div className="flex flex-col gap-3">
              {podiums.map((pod, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-cream-100/70 dark:bg-raceDark-card/70 border border-surface-border flex items-start justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-displayGrotesk font-extrabold text-sm text-text-primary">
                        {pod.round}
                      </span>
                      {pod.verify && (
                        <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-cream-300 dark:bg-raceDark text-text-muted">
                          verify
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-secondary mt-0.5 leading-snug">{pod.note}</p>
                  </div>
                  <span
                    className={`font-mono text-xs font-black px-2 py-1 rounded ${
                      pod.position === 'P1'
                        ? 'bg-ferrariYellow text-raceDark'
                        : pod.position === 'P2'
                        ? 'bg-cream-300 dark:bg-raceDark-border text-text-primary'
                        : 'bg-amber-700/20 text-amber-700 dark:text-amber-400'
                    }`}
                  >
                    {pod.position}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Remaining Rounds Footer */}
          <div className="pt-6 border-t border-surface-border mt-6">
            <span className="block text-[11px] font-mono text-text-muted uppercase tracking-wider mb-2">
              Remaining Calendar: 4 Grand Prix
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {remainingRounds.map((rnd, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 rounded-md border ${
                    rnd.next
                      ? 'border-rosso bg-rosso/10 text-rosso font-bold'
                      : 'border-surface-border bg-cream-200/50 dark:bg-raceDark-card text-text-secondary'
                  }`}
                >
                  {rnd.round}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
