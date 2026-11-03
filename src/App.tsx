import { useState, useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Loader } from '@/components/loader/Loader';
import { Hero } from '@/components/hero/Hero';
import { NumbersSection } from '@/components/sections/NumbersSection';
import { StorySection } from '@/components/sections/StorySection';
import { TeamsSection } from '@/components/sections/TeamsSection';
import { TitlesSection } from '@/components/sections/TitlesSection';
import { InteractiveCar } from '@/components/car/InteractiveCar';
import { Season2026Section } from '@/components/sections/Season2026Section';
import { TeammatesSection } from '@/components/sections/TeammatesSection';
import { RecordsSection } from '@/components/sections/RecordsSection';
import { HelmetsSection } from '@/components/sections/HelmetsSection';
import { OffTrackSection } from '@/components/sections/OffTrackSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { RaceModeEasterEgg } from '@/components/ui/RaceModeEasterEgg';

export function App() {
  // Initialize buttery-smooth Lenis scroll synchronized with GSAP
  useLenis();

  // Dark mode ("Night Race") state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false; // Default light per Instruction 4
  });

  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Loading screen management (Instruction 5)
  const [showLoader, setShowLoader] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('loader') === '1') return true;

    try {
      const hasLoaded = sessionStorage.getItem('lh44_loaded');
      return !hasLoaded;
    } catch {
      return false;
    }
  });

  const handleLoaderComplete = () => {
    try {
      sessionStorage.setItem('lh44_loaded', 'true');
    } catch {
      // ignore
    }
    setShowLoader(false);
  };

  return (
    <div className="relative min-h-screen bg-cream-100 dark:bg-raceDark text-text-primary selection:bg-rosso selection:text-white transition-colors duration-500">
      {/* 4-Second Cinematic F1 Loader */}
      {showLoader && <Loader onComplete={handleLoaderComplete} />}

      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Oval Pill Navbar */}
      <Navbar isDark={isDark} toggleDark={toggleDark} />

      {/* Main Page Landmark */}
      <main id="main-content">
        <Hero />
        <NumbersSection />
        <StorySection />
        <TeamsSection />
        <TitlesSection />
        <InteractiveCar />
        <Season2026Section />
        <TeammatesSection />
        <RecordsSection />
        <HelmetsSection />
        <OffTrackSection />
        <GallerySection />
        <FaqSection />
      </main>

      {/* Footer & Legal */}
      <Footer />

      {/* Race Mode Easter Egg ('4' twice or tap 44 badge) */}
      <RaceModeEasterEgg />
    </div>
  );
}

export default App;
