import React, { useState } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface RealHelmetItem {
  id: string;
  era: string;
  name: string;
  image: string;
  description: string;
  quote?: string;
  tags: string[];
}

const realHelmetsData: RealHelmetItem[] = [
  {
    id: 'ferrari-yellow',
    era: 'Scuderia Ferrari Era (2025–Present)',
    name: 'The Iconic Fluo Yellow Ferrari Edition',
    image: '/assets/helmets/yellow.webp',
    description:
      'The unmistakable neon yellow lid evolved for Maranello. Features high-visibility fluo yellow crown, the Prancing Horse shield on the crest, and Hamilton’s personal racing number 44 proudly emblazoned along the side.',
    quote: '"Wearing the red suit with my signature yellow helmet is childhood dreams made tangible."',
    tags: ['Rosso Corsa', 'Fluo Yellow 44', 'Ferrari Scuderia'],
  },
  {
    id: 'ferrari-silver',
    era: 'Special Grand Prix Edition',
    name: 'Glitter Silver & Prancing Horse Crest',
    image: '/assets/helmets/silver.webp',
    description:
      'A bespoke celebratory livery featuring sparkling metalflake silver lacquer, red carbon sunstrip, and Scuderia Ferrari badging. Worn under the floodlights for historic night races.',
    quote: '"Every helmet is a canvas for where I am in life, racing for the tifosi with my whole heart."',
    tags: ['Metalflake Silver', 'Night Race Spec', 'Custom Livery'],
  },
  {
    id: 'ferrari-celebration',
    era: 'Victory Edition',
    name: 'Parc Fermé Triumph',
    image: '/assets/helmets/celebration.webp',
    description:
      'Lewis Hamilton in full race-winning trim celebrating alongside the Scuderia pit crew. Demonstrating the union of Hamilton’s relentless drive and Ferrari’s historic racing spirit.',
    quote: '"Still I Rise isn’t just words. It’s what drives every victory in scarlet."',
    tags: ['Victory Trim', 'Race Winner', 'Tifosi'],
  },
];

export const HelmetsSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentHelmet = realHelmetsData[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % realHelmetsData.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + realHelmetsData.length) % realHelmetsData.length);
  };

  return (
    <SectionWrapper
      id="helmets"
      badge="Visual Identity"
      subtitle="Armor & Symbolism"
      title="Helmets & Number 44"
      description="The iconic protective armor of Lewis Hamilton. Photographed in real race trim—from his signature yellow homage to Ayrton Senna, to the bespoke silver glitter and Ferrari scarlet editions."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Real Photography Showcase */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-lg aspect-[4/5] rounded-2xl bg-[#0D0D10] border border-white/10 p-4 flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Ambient Back Glow */}
            <div className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 bg-rosso pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentHelmet.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full h-full rounded-xl overflow-hidden"
              >
                <img
                  src={currentHelmet.image}
                  alt={currentHelmet.name}
                  className="w-full h-full object-cover object-center"
                />

                {/* Bottom Tag overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-xs font-telemetry">
                  <span className="text-white font-bold">{currentHelmet.name}</span>
                  <span className="text-rosso font-mono">GENUINE PHOTO</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#121215] border border-white/10 hover:border-rosso text-white transition-all"
              aria-label="Previous Helmet"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {realHelmetsData.map((h, i) => (
                <button
                  key={h.id}
                  onClick={() => setSelectedIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    selectedIndex === i ? 'w-8 bg-rosso' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Select ${h.name}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#121215] border border-white/10 hover:border-rosso text-white transition-all"
              aria-label="Next Helmet"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right: Real Era Details & The Story of #44 */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="p-8 rounded-2xl bg-[#121215] border border-white/10 mb-6 shadow-xl">
            <span className="text-xs font-telemetry text-rosso font-bold uppercase tracking-wider block mb-1">
              {currentHelmet.era}
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">
              {currentHelmet.name}
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
              {currentHelmet.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {currentHelmet.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-[#18181C] text-[11px] font-mono text-zinc-300 border border-white/5"
                >
                  #{t}
                </span>
              ))}
            </div>

            {currentHelmet.quote && (
              <div className="p-4 rounded-xl bg-[#18181C] border-l-2 border-rosso flex items-start gap-3">
                <Quote className="w-4 h-4 text-rosso shrink-0 mt-0.5" />
                <p className="font-sans italic text-xs sm:text-sm text-zinc-200">
                  {currentHelmet.quote}
                </p>
              </div>
            )}
          </div>

          {/* Why #44 Feature Card */}
          <div className="p-6 rounded-2xl bg-rosso/10 border border-rosso/30">
            <div className="flex items-center gap-2 mb-2 text-rosso">
              <Sparkles className="w-4 h-4" />
              <h4 className="font-display font-black text-sm uppercase tracking-wide">
                Why Number 44?
              </h4>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              When eight-year-old Lewis entered his first kart race in 1993, his father Anthony chose #44 from his red Vauxhall Cavalier registration plate (F44). Throughout seven championship seasons, Hamilton famously declined the champion’s #1, ensuring the #44 remained motorsport's most celebrated racing number.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
