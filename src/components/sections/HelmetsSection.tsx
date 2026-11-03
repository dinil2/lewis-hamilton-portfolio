import React, { useState } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { eraHelmets } from '@/data/helmets';
import { Sparkles, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HelmetsSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentHelmet = eraHelmets[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % eraHelmets.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + eraHelmets.length) % eraHelmets.length);
  };

  return (
    <SectionWrapper
      id="helmets"
      badge="Visual Identity"
      subtitle="Armor & Symbolism"
      title="Helmets & Number 44"
      description="The iconic protective armor of Lewis Hamilton. From the bright yellow Senna homage chosen by his father so he could spot him on track, to the modern fluorescent yellow on Ferrari scarlet."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Illustrated Helmet Display Stage */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-square rounded-card glass-panel border border-surface-border p-8 flex items-center justify-center overflow-hidden">
            {/* Ambient Back Glow according to current era colors */}
            <div
              className="absolute w-64 h-64 rounded-full blur-3xl opacity-30 transition-colors duration-700"
              style={{ backgroundColor: currentHelmet.colors[0] }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentHelmet.id}
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                transition={{ duration: 0.45 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                {/* SVG Helmet Render */}
                <svg
                  viewBox="0 0 300 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-[280px] drop-shadow-2xl"
                >
                  {/* Helmet Shell Dome */}
                  <path
                    d="M50 160 C 45 70, 90 20, 160 20 C 230 20, 265 70, 260 160 C 260 220, 230 245, 160 245 C 90 245, 50 220, 50 160 Z"
                    fill={currentHelmet.colors[0]}
                    stroke="#111"
                    strokeWidth="3"
                  />

                  {/* Era-Specific Livery Details */}
                  {currentHelmet.id === 'mclaren-era' && (
                    <>
                      {/* Senna Green & Blue Bands */}
                      <path d="M52 140 C 90 145, 230 145, 258 140" stroke="#002B7F" strokeWidth="12" />
                      <path d="M54 152 C 90 157, 230 157, 256 152" stroke="#00843D" strokeWidth="8" />
                      <path d="M56 160 C 90 165, 230 165, 254 160" stroke="#E10600" strokeWidth="6" />
                    </>
                  )}

                  {currentHelmet.id === 'mercedes-era' && (
                    <>
                      {/* Regal Purple with Neon accents */}
                      <path
                        d="M70 40 C 120 70, 200 70, 250 40"
                        stroke="#B500E0"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path d="M60 140 C 110 160, 210 160, 260 140" stroke="#00E5FF" strokeWidth="6" />
                      <text
                        x="160"
                        y="65"
                        fill="#00E5FF"
                        fontFamily="'Syne', sans-serif"
                        fontWeight="900"
                        fontSize="14"
                        textAnchor="middle"
                      >
                        STILL I RISE
                      </text>
                    </>
                  )}

                  {currentHelmet.id === 'ferrari-era' && (
                    <>
                      {/* Fluo Yellow racing stripes on Rosso Corsa */}
                      <path
                        d="M120 22 C 135 100, 135 120, 125 130 L 195 130 C 185 120, 185 100, 200 22 Z"
                        fill="#FFF200"
                      />
                      <text
                        x="160"
                        y="80"
                        fill="#111"
                        fontFamily="'Syne', sans-serif"
                        fontWeight="900"
                        fontSize="28"
                        textAnchor="middle"
                      >
                        44
                      </text>
                    </>
                  )}

                  {/* Visor Cutout */}
                  <path
                    d="M65 130 C 65 95, 90 85, 160 85 C 230 85, 250 95, 250 130 C 250 165, 225 175, 160 175 C 95 175, 65 165, 65 130 Z"
                    fill="#151515"
                  />
                  <path
                    d="M70 130 C 70 100, 95 92, 160 92 C 225 92, 245 100, 245 130 C 245 158, 220 168, 160 168 C 100 168, 70 158, 70 130 Z"
                    fill="#282828"
                  />
                  {/* Visor Glare */}
                  <path
                    d="M85 105 Q 160 95 235 105 Q 220 120 95 120 Z"
                    fill="#FFF"
                    opacity="0.3"
                  />

                  {/* Chin Spoiler and Air vents */}
                  <rect x="135" y="210" width="50" height="14" rx="3" fill="#111" />
                  <circle cx="145" cy="217" r="2" fill="#888" />
                  <circle cx="160" cy="217" r="2" fill="#888" />
                  <circle cx="175" cy="217" r="2" fill="#888" />
                </svg>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Era Navigation Controls */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full glass-panel hover:bg-cream-200 dark:hover:bg-raceDark text-text-primary transition-colors"
              aria-label="Previous Era Helmet"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {eraHelmets.map((h, i) => (
                <button
                  key={h.id}
                  onClick={() => setSelectedIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    selectedIndex === i ? 'w-8 bg-rosso' : 'w-2 bg-surface-border'
                  }`}
                  aria-label={`Select ${h.name}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full glass-panel hover:bg-cream-200 dark:hover:bg-raceDark text-text-primary transition-colors"
              aria-label="Next Era Helmet"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right: Era Details & The Story of #44 */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="p-8 rounded-card glass-panel border border-surface-border mb-6">
            <span className="text-xs font-mono text-rosso font-bold uppercase tracking-wider block mb-1">
              {currentHelmet.era}
            </span>
            <h3 className="font-displayGrotesk font-black text-2xl sm:text-3xl text-text-primary mb-3">
              {currentHelmet.name}
            </h3>

            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              {currentHelmet.description}
            </p>

            {currentHelmet.quote && (
              <div className="p-4 rounded-xl bg-cream-100/80 dark:bg-raceDark-card border-l-2 border-rosso flex items-start gap-3">
                <Quote className="w-4 h-4 text-rosso shrink-0 mt-0.5" />
                <p className="font-serifTitle italic text-xs sm:text-sm text-text-primary">
                  {currentHelmet.quote}
                </p>
              </div>
            )}
          </div>

          {/* Why #44 Feature Card */}
          <div className="p-6 rounded-card bg-rosso/10 border border-rosso/30">
            <div className="flex items-center gap-2 mb-2 text-rosso">
              <Sparkles className="w-4 h-4" />
              <h4 className="font-displayGrotesk font-black text-sm uppercase tracking-wide">
                Why Number 44?
              </h4>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              When eight-year-old Lewis entered his first kart race in 1993, his father Anthony chose #44 from his red Vauxhall Cavalier registration plate (F44). Throughout seven championship seasons, Hamilton famously declined the champion’s #1, ensuring the #44 remained motorsport's most celebrated racing number.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
