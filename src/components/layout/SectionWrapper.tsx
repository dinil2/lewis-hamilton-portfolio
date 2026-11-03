import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  subtitle?: string;
  title?: string;
  description?: string;
  badge?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className = '',
  children,
  subtitle,
  title,
  description,
  badge,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-12 section-contained overflow-hidden',
        className
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {(title || subtitle || badge) && (
          <div className="mb-12 md:mb-16 max-w-3xl">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rosso/10 border border-rosso/20 text-rosso text-xs font-telemetry font-bold uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rosso animate-pulse" />
                <span>{badge}</span>
              </div>
            )}
            {subtitle && (
              <span className="block text-xs font-telemetry tracking-widest text-zinc-500 uppercase mb-1">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

