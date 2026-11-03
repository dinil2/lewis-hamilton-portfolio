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
      const tl = gsap.timeline({ delay: 0.1 });

      tl.from('.hero-wordmark-sub', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
        .from(
          '.hero-name-lewis',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          '-=0.5'
        )
        .from(
          '.hero-name-hamilton',
          {
            scale: 0.96,
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'power4.out',
          },
          '-=0.6'
        )
        .from(
          portraitWrapRef.current,
          {
            y: 50,
            opacity: 0,
            scale: 0.97,
            duration: 1.0,
            ease: 'power3.out',
          },
          '-=0.7'
        )
        .from(
          '.hero-stagger-item',
          {
            y: 25,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.6'
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
            x: moveX * 12,
            y: moveY * 8,
            duration: 1.2,
            ease: 'power2.out',
          });

          gsap.to(wordmarkRef.current, {
            x: moveX * -6,
            y: moveY * -4,
            duration: 1.2,
            ease: 'power2.out',
          });

          gsap.to(cardsWrapRef.current, {
            x: moveX * 6,
            y: moveY * 4,
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
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#080809] text-white carbon-grid-bg transition-colors duration-500"
    >
      <HeroBackdrop />

      {/* Main Hero Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Wordmark & Bio */}
        <div ref={wordmarkRef} className="lg:col-span-6 flex flex-col items-start justify-center">
          {/* Scuderia Ferrari Tag */}
          <div className="hero-wordmark-sub inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-[#161619] border border-white/10 text-xs font-telemetry text-zinc-300 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-rosso animate-pulse" />
            <span>SCUDERIA FERRARI HP · #44</span>
          </div>

          {/* High-contrast Precision Typography Lockup */}
          <div className="flex flex-col select-none mb-4">
            <span className="hero-name-lewis font-telemetry font-bold text-2xl sm:text-3xl lg:text-4xl tracking-widest uppercase text-rosso">
              SIR LEWIS
            </span>
            <span className="hero-name-hamilton font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-compressed uppercase text-white leading-[0.88] mt-1">
              HAMILTON
            </span>
          </div>

          {/* Punchy Bio */}
          <p className="hero-stagger-item text-base sm:text-lg text-zinc-300 max-w-xl mb-6 font-normal leading-relaxed">
            Seven World Championships. 106 Grand Prix victories. 105 pole positions. Entering his second season piloting the Rosso Corsa scarlet of Scuderia Ferrari, redefining speed and motorsport history.
          </p>

          {/* Key Accolade Badges */}
          <div className="hero-stagger-item flex flex-wrap gap-2.5 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161619] border border-white/10 text-xs font-semibold text-white">
              <Trophy className="w-3.5 h-3.5 text-ferrariYellow" />
              <span>7× World Champion</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161619] border border-white/10 text-xs font-semibold text-white">
              <Zap className="w-3.5 h-3.5 text-rosso" />
              <span>106 F1 Wins (All-Time Record)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161619] border border-white/10 text-xs font-semibold text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
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
          className="group inline-flex flex-col items-center gap-1.5 text-[11px] font-mono tracking-widest text-zinc-500 hover:text-rosso transition-colors"
        >
          <span className="uppercase text-[10px]">SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-rosso" />
        </a>
      </div>
    </section>
  );
};
