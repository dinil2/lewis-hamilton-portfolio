import React, { useRef } from 'react';
import { HeroBackdrop } from './HeroBackdrop';
import { RevealPortrait } from './RevealPortrait';
import { NextRaceCard } from './NextRaceCard';
import { useGsapContext } from '@/hooks/useGsapContext';
import { gsap } from '@/lib/animation';
import { ChevronDown, Trophy, Zap, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const wordmarkRef = useRef<HTMLDivElement | null>(null);
  const portraitWrapRef = useRef<HTMLDivElement | null>(null);
  const cardsWrapRef = useRef<HTMLDivElement | null>(null);

  // Entrance animation & parallax setup
  useGsapContext(
    () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      // Master entrance timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from('.hero-wordmark-sub', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(
          '.hero-name-lewis',
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power4.out',
          },
          '-=0.6'
        )
        .from(
          '.hero-name-hamilton',
          {
            scale: 0.95,
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.7'
        )
        .from(
          portraitWrapRef.current,
          {
            y: 70,
            opacity: 0,
            scale: 0.96,
            duration: 1.1,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .from(
          '.hero-stagger-item',
          {
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.7'
        );

      // Desktop Mouse Parallax
      if (!isMobile && heroRef.current) {
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          const moveX = (clientX - centerX) / centerX;
          const moveY = (clientY - centerY) / centerY;

          gsap.to(portraitWrapRef.current, {
            x: moveX * 14,
            y: moveY * 10,
            duration: 1.2,
            ease: 'power2.out',
          });

          gsap.to(wordmarkRef.current, {
            x: moveX * -8,
            y: moveY * -6,
            duration: 1.2,
            ease: 'power2.out',
          });

          gsap.to(cardsWrapRef.current, {
            x: moveX * 8,
            y: moveY * 6,
            duration: 1.2,
            ease: 'power2.out',
          });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
    },
    heroRef,
    []
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden bg-cream-100 dark:bg-raceDark transition-colors duration-500"
    >
      <HeroBackdrop />

      {/* Main Hero Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Wordmark & Bio */}
        <div ref={wordmarkRef} className="lg:col-span-6 flex flex-col items-start justify-center">
          {/* Era Tag */}
          <div className="hero-wordmark-sub inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-cream-200/80 dark:bg-raceDark-card/80 border border-surface-border text-xs font-mono text-text-secondary tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-rosso" />
            <span>Formula 1 World Champion · 2007–2026</span>
          </div>

          {/* High-contrast Editorial Wordmark Lockup */}
          <div className="flex flex-col select-none mb-4">
            <span className="hero-name-lewis font-serifTitle italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-wide">
              Sir Lewis
            </span>
            <span className="hero-name-hamilton font-displayGrotesk font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-compressed uppercase text-text-primary leading-[0.88] mt-1">
              Hamilton
            </span>
          </div>

          {/* Punchy Editorial Subhead */}
          <p className="hero-stagger-item text-base sm:text-lg text-text-secondary max-w-xl mb-6 font-normal leading-relaxed">
            Seven World Titles. 106 victories. 105 poles. Entering his second season piloting the
            Rosso Corsa scarlet of Scuderia Ferrari, redefining speed, culture, and motorsport immortality.
          </p>

          {/* Key Accolade Badges */}
          <div className="hero-stagger-item flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-200/60 dark:bg-raceDark-card/60 border border-surface-border text-xs font-semibold text-text-primary">
              <Trophy className="w-3.5 h-3.5 text-ferrariYellow" />
              <span>7× World Champion</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-200/60 dark:bg-raceDark-card/60 border border-surface-border text-xs font-semibold text-text-primary">
              <Zap className="w-3.5 h-3.5 text-rosso" />
              <span>106 F1 Wins (Record)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-200/60 dark:bg-raceDark-card/60 border border-surface-border text-xs font-semibold text-text-primary">
              <ShieldCheck className="w-3.5 h-3.5 text-text-muted" />
              <span>MBE · Knight Bachelor</span>
            </div>
          </div>

          {/* Next Race Card (Desktop placement) */}
          <div ref={cardsWrapRef} className="hero-stagger-item hidden md:block w-full">
            <NextRaceCard />
          </div>
        </div>

        {/* Right Column: Signature Interactive Reveal Portrait */}
        <div
          ref={portraitWrapRef}
          className="lg:col-span-6 flex flex-col items-center justify-center relative w-full"
        >
          <RevealPortrait />

          {/* Mobile Only: Next Race Card below portrait */}
          <div className="hero-stagger-item md:hidden w-full mt-6">
            <NextRaceCard />
          </div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="relative z-10 w-full flex justify-center items-center pt-4">
        <a
          href="#numbers"
          aria-label="Scroll to Career in Numbers section"
          className="group inline-flex flex-col items-center gap-1.5 text-[11px] font-mono tracking-widest text-text-muted hover:text-rosso transition-colors"
        >
          <span className="uppercase text-[10px]">Explore Legacy</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-rosso" />
        </a>
      </div>
    </section>
  );
};
