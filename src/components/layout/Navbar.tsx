import React, { useState, useEffect, useRef } from 'react';
import { MobileMenu } from './MobileMenu';
import { Menu, Moon, Sun, ExternalLink } from 'lucide-react';
import { gsap } from '@/lib/animation';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const navItems = [
  { href: '#story', label: 'Story' },
  { href: '#teams', label: 'Teams' },
  { href: '#titles', label: 'Titles' },
  { href: '#car', label: 'Car' },
  { href: '#season2026', label: '2026 Hub' },
  { href: '#offtrack', label: 'Off-Track' },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleDark }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement | null>(null);

  // Auto-hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update navbar visibility with GSAP
  useEffect(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      duration: 0.35,
      ease: 'power3.out',
    });
  }, [isVisible]);

  // Section observer for active links
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-300"
      >
        <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-pill glass-panel shadow-lg border border-surface-border transition-all">
          {/* Brand Wordmark Lockup */}
          <a
            href="#hero"
            aria-label="Lewis Hamilton Home"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rosso group-hover:scale-125 transition-transform" />
            <div className="flex flex-col leading-none">
              <span className="font-displayGrotesk font-black text-base sm:text-lg tracking-tight text-text-primary">
                HAMILTON
              </span>
              <span className="text-[9px] font-mono tracking-widest text-text-muted">
                SCUDERIA #44
              </span>
            </div>
          </a>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'text-rosso bg-rosso/15'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rosso" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons: Theme Toggle + Follow CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Night Race Mode Toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle Theme Mode"
              className="p-2 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-ferrariYellow" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Follow Instagram Button (Desktop) */}
            <a
              href="https://www.instagram.com/lewishamilton/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill bg-rosso hover:bg-rosso-dark text-white text-xs font-bold font-displayGrotesk tracking-wide shadow-md transition-all active:scale-95"
            >
              <span>Follow</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden p-2 rounded-full hover:bg-cream-200/60 dark:hover:bg-raceDark-card text-text-primary transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isDark={isDark}
        toggleDark={toggleDark}
      />
    </>
  );
};

