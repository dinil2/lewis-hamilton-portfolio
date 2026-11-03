import React from 'react';
import { siteConfig } from '@/data/site';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { scrollToElement } from '@/hooks/useLenis';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    scrollToElement('#hero');
  };

  return (
    <footer className="relative w-full bg-cream-200/80 dark:bg-raceDark-surface pt-16 pb-12 px-4 sm:px-6 lg:px-12 border-t border-surface-border text-text-primary transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Top Row: Brand & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-surface-border">
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-rosso" />
              <span className="font-displayGrotesk font-black text-2xl tracking-tight">
                LEWIS HAMILTON
              </span>
            </div>
            <p className="text-sm text-text-secondary max-w-sm mb-4 leading-relaxed">
              Seven-time Formula 1 World Drivers’ Champion. 106 victories, 105 pole positions. Scuderia Ferrari driver #44.
            </p>
            <div className="font-mono text-xs text-text-muted">
              Snapshot: {siteConfig.snapshotLabel} ({siteConfig.lastUpdated})
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-sm">
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs uppercase text-text-muted tracking-wider font-semibold">
                Chapters
              </span>
              <a href="#numbers" className="text-text-secondary hover:text-rosso transition-colors">Career Numbers</a>
              <a href="#story" className="text-text-secondary hover:text-rosso transition-colors">The Story</a>
              <a href="#teams" className="text-text-secondary hover:text-rosso transition-colors">Teams</a>
              <a href="#titles" className="text-text-secondary hover:text-rosso transition-colors">World Titles</a>
              <a href="#car" className="text-text-secondary hover:text-rosso transition-colors">The SF-26 Car</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs uppercase text-text-muted tracking-wider font-semibold">
                Archive
              </span>
              <a href="#season2026" className="text-text-secondary hover:text-rosso transition-colors">2026 Season Hub</a>
              <a href="#teammates" className="text-text-secondary hover:text-rosso transition-colors">Teammates</a>
              <a href="#records" className="text-text-secondary hover:text-rosso transition-colors">Records</a>
              <a href="#helmets" className="text-text-secondary hover:text-rosso transition-colors">Era Helmets</a>
              <a href="#faq" className="text-text-secondary hover:text-rosso transition-colors">FAQ</a>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <button
              onClick={handleScrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-rosso hover:text-white transition-all text-xs font-mono font-semibold"
              aria-label="Back to grid (top of page)"
            >
              <span>BACK TO GRID</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="https://www.instagram.com/lewishamilton/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-mono text-rosso hover:underline font-semibold"
            >
              <span>OFFICIAL INSTAGRAM @LEWISHAMILTON</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Giant Monolithic Wordmark */}
        <div className="py-8 select-none overflow-hidden text-center">
          <span className="font-displayGrotesk font-black text-[12vw] tracking-tighter text-text-primary/[0.06] dark:text-cream-100/[0.04] leading-none block">
            STILL I RISE
          </span>
        </div>

        {/* Mandatory Legal & Developer Credits */}
        <div className="pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p className="max-w-xl text-center sm:text-left leading-normal">
            Fan project. Not affiliated with or endorsed by Lewis Hamilton, Scuderia Ferrari or Formula 1. All trademarks belong to their owners.
          </p>

          <div className="flex items-center gap-2">
            <span>Designed and built by</span>
            <a
              href={siteConfig.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-text-primary hover:text-rosso transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-rosso" />
              <span>{siteConfig.developer}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
