import React, { useRef } from 'react';
import { timelineEvents } from '@/data/timeline';
import { useGsapContext } from '@/hooks/useGsapContext';
import { gsap } from '@/lib/animation';
import { Trophy, Zap } from 'lucide-react';

export const StorySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGsapContext(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: Pinned horizontal scroll
      mm.add('(min-width: 1024px)', () => {
        if (!containerRef.current || !trackRef.current) return;

        const totalWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth + 160;

        gsap.to(trackRef.current, {
          x: -scrollDistance,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      // Mobile / Tablet: Clean vertical fade-in reveals
      mm.add('(max-width: 1023px)', () => {
        const items = gsap.utils.toArray<HTMLElement>('.timeline-mobile-card');
        items.forEach((item) => {
          gsap.from(item, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              once: true,
            },
          });
        });
      });
    },
    containerRef,
    []
  );

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full py-20 lg:py-0 overflow-hidden bg-cream-50 dark:bg-raceDark-surface transition-colors"
    >
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 lg:pt-24 mb-8 lg:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rosso/10 border border-rosso/20 text-rosso text-xs font-mono font-semibold uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-rosso" />
          <span>Origin to Eternity</span>
        </div>
        <span className="block text-xs font-mono tracking-widest text-text-muted uppercase mb-1">
          Chronicles of a Champion
        </span>
        <h2 className="font-displayGrotesk font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
          The Story of Lewis Hamilton
        </h2>
        <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
          From cold winter weekends in Stevenage with a second-hand kart to conquering the globe and donning the sacred scarlet of Scuderia Ferrari.
        </p>
      </div>

      {/* Desktop Horizontal Track (Pinned on >=1024px) */}
      <div className="hidden lg:block w-full pb-24 overflow-visible">
        <div
          ref={trackRef}
          className="flex gap-8 px-12 will-change-transform items-stretch"
        >
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="w-[380px] shrink-0 p-8 rounded-card glass-panel border border-surface-border flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
            >
              <div>
                <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4">
                  <span className="font-displayGrotesk font-black text-3xl text-rosso">
                    {event.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-cream-200 dark:bg-raceDark text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                    {event.category}
                  </span>
                </div>

                {event.statsHighlight && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-rosso font-semibold mb-2">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{event.statsHighlight}</span>
                  </div>
                )}

                <h3 className="font-displayGrotesk font-extrabold text-xl text-text-primary tracking-tight mb-3">
                  {event.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span>Phase {index + 1} of {timelineEvents.length}</span>
                {event.age && <span>Age {event.age}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Vertical Stack */}
      <div className="lg:hidden max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="timeline-mobile-card p-6 rounded-2xl glass-panel border border-surface-border flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-surface-border pb-2.5 mb-3">
              <span className="font-displayGrotesk font-black text-2xl text-rosso">
                {event.year}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-cream-200 dark:bg-raceDark text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                {event.category}
              </span>
            </div>

            {event.statsHighlight && (
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-rosso font-semibold mb-1.5">
                <Trophy className="w-3.5 h-3.5" />
                <span>{event.statsHighlight}</span>
              </div>
            )}

            <h3 className="font-displayGrotesk font-extrabold text-lg text-text-primary tracking-tight mb-2">
              {event.title}
            </h3>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
              {event.description}
            </p>

            <div className="pt-2.5 border-t border-surface-border/60 flex items-center justify-between text-[10px] font-mono text-text-muted">
              <span>Chapter {index + 1}</span>
              {event.age && <span>Age {event.age}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
