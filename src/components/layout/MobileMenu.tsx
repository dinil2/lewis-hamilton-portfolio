import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Moon, Sun, Trophy, Flag, Wrench, Shield, BookOpen, Layers } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  toggleDark: () => void;
}

const navLinks = [
  { href: '#numbers', label: 'Career Numbers', icon: Trophy },
  { href: '#story', label: 'The Story', icon: BookOpen },
  { href: '#teams', label: 'Team Chapters', icon: Layers },
  { href: '#titles', label: 'World Titles', icon: Trophy },
  { href: '#car', label: 'The SF-26 Car', icon: Wrench },
  { href: '#season2026', label: '2026 Season Hub', icon: Flag },
  { href: '#teammates', label: 'Teammates', icon: Shield },
  { href: '#offtrack', label: 'Off The Track', icon: ExternalLink },
  { href: '#gallery', label: 'Gallery Archive', icon: Layers },
  { href: '#faq', label: 'FAQ', icon: BookOpen },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  isDark,
  toggleDark,
}) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#080809]/98 backdrop-blur-xl px-6 py-8"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5 select-none">
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-rosso shadow-[0_0_8px_#E10600]" />
                <span className="absolute w-4 h-4 rounded-full bg-rosso/40 animate-ping pointer-events-none" />
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[10px] font-telemetry font-bold tracking-[0.22em] text-rosso uppercase">
                    LH
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">/</span>
                  <span className="font-display font-bold text-base tracking-[0.16em] uppercase text-white">
                    HAMILTON
                  </span>
                </div>
                <span className="text-[8.5px] font-mono tracking-[0.22em] text-zinc-400 uppercase mt-0.5">
                  SCUDERIA FERRARI #44
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleDark}
                className="p-2.5 rounded-full bg-[#18181C] text-white border border-white/10"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-ferrariYellow" /> : <Moon className="w-5 h-5 text-white" />}
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-[#18181C] text-white border border-white/10"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Links list with staggered motion */}
          <nav className="flex flex-col gap-3 my-auto overflow-y-auto py-4">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.04, duration: 0.4 }}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-rosso group-hover:scale-110 transition-transform" />
                    <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-rosso transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    0{index + 1}
                  </span>
                </motion.a>
              );
            })}
          </nav>

          {/* Bottom CTAs */}
          <div className="pt-4 border-t border-surface-border flex flex-col gap-3">
            <a
              href="https://www.instagram.com/lewishamilton/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-rosso hover:bg-rosso-dark text-white font-displayGrotesk font-bold text-center tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <span>FOLLOW @LEWISHAMILTON</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <div className="text-center font-mono text-[10px] text-text-muted">
              SCUDERIA FERRARI HP · CAR NUMBER 44
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

