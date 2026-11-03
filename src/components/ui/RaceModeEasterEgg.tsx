import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export const RaceModeEasterEgg: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [lightsCount, setLightsCount] = useState(0); // 0 to 5
  const [isLightsOut, setIsLightsOut] = useState(false);

  const triggerRaceMode = useCallback(() => {
    if (isActive) return;
    setIsActive(true);
    setLightsCount(0);
    setIsLightsOut(false);

    // Sequence of 5 red lights
    const interval = setInterval(() => {
      setLightsCount((prev) => {
        if (prev >= 5) {
          clearInterval(interval);
          // Random pause before lights out (0.8s to 1.4s)
          setTimeout(() => {
            setIsLightsOut(true);
            setLightsCount(0);

            // Confetti celebration
            confetti({
              particleCount: 80,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#E10600', '#FFF200', '#FFFFFF', '#0E0E0E'],
            });

            // Auto dismiss after 2s
            setTimeout(() => {
              setIsActive(false);
            }, 2000);
          }, 1000);
          return 5;
        }
        return prev + 1;
      });
    }, 450);
  }, [isActive]);

  // Trigger on keydown '4' pressed twice within 600ms
  useEffect(() => {
    let lastFourTime = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '4') {
        const now = Date.now();
        if (now - lastFourTime < 600) {
          triggerRaceMode();
          lastFourTime = 0;
        } else {
          lastFourTime = now;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerRaceMode]);

  return (
    <>
      {/* Floating 44 Easter Egg Trigger Button in Bottom Left */}
      <button
        onClick={triggerRaceMode}
        title="Double-click 44 or press '4' twice for Race Mode"
        className="fixed bottom-6 left-6 z-30 w-11 h-11 rounded-full glass-panel border border-rosso/30 flex items-center justify-center font-displayGrotesk font-black text-sm text-rosso hover:scale-110 active:scale-95 transition-transform shadow-lg cursor-pointer"
        aria-label="Race Mode Easter Egg"
      >
        44
      </button>

      {/* Start Lights Overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center select-none"
          >
            {/* The 5 FIA Starting Lights Gantry */}
            <div className="flex items-center gap-3 bg-raceDark p-4 rounded-2xl border-2 border-rosso shadow-2xl">
              {[1, 2, 3, 4, 5].map((lightIndex) => {
                const isLit = lightsCount >= lightIndex;
                return (
                  <div key={lightIndex} className="flex flex-col gap-2 items-center">
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-surface-border transition-colors duration-150 ${
                        isLit
                          ? 'bg-rosso shadow-[0_0_20px_#E10600]'
                          : 'bg-[#220000]'
                      }`}
                    />
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-surface-border transition-colors duration-150 ${
                        isLit
                          ? 'bg-rosso shadow-[0_0_20px_#E10600]'
                          : 'bg-[#220000]'
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Banner Text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-3 px-4 py-1.5 rounded-full bg-raceDark text-white font-mono font-bold text-xs uppercase tracking-widest border border-surface-border"
            >
              {isLightsOut ? "IT'S LIGHTS OUT AND AWAY WE GO!" : 'STARTING GRID SEQUENCE'}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
