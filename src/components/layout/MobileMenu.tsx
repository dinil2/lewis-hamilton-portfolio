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
          className="fixed inset-0 z-50 flex flex-col justify-between bg-cream-100/98 dark:bg-raceDark/98 backdrop-blur-xl px-6 py-8"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-surface-border pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rosso animate-ping" />
              <span className="font-displayGrotesk font-black text-xl tracking-tight text-text-primary">
                LH44 ARCHIVE
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleDark}
                className="p-2.5 rounded-full bg-cream-200/80 dark:bg-raceDark-card text-text-primary border border-surface-border"
                aria-label="Toggle Night Race theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-ferrariYellow" /> : <Moon className="w-5 h-5 text-text-primary" />}
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-cream-200/80 dark:bg-raceDark-card text-text-primary border border-surface-border"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 text-text-primary" />
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
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-cream-200/60 dark:hover:bg-raceDark-card/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-rosso group-hover:scale-110 transition-transform" />
                    <span className="font-displayGrotesk font-extrabold text-2xl tracking-tight text-text-primary group-hover:text-rosso transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-text-muted">
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
