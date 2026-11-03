import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/animation';

let lenisInstance: Lenis | null = null;

export function useLenis() {
  useEffect(() => {
    // Only initialize smooth scroll on client
    if (typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Detect touch device to ensure touch uses native momentum scrolling
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isTouch,
      syncTouch: false, // Critical Instruction 10: native momentum scrolling on mobile
      autoRaf: false,   // Driven by GSAP ticker
    });

    lenisInstance = lenis;

    // Link Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP ticker for frame-locked synchronization
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return lenisInstance;
}

export function scrollToElement(selector: string, offset = 0) {
  if (lenisInstance) {
    lenisInstance.scrollTo(selector, { offset });
  } else {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

