import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Mobile optimization per Instruction 10
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
}

export const ANIM_CONFIG = {
  ease: {
    expoOut: 'power4.out',
    smooth: 'power3.out',
    elastic: 'elastic.out(1, 0.6)',
    snappy: 'power2.inOut',
    circOut: 'circ.out',
  },
  duration: {
    fast: 0.35,
    normal: 0.7,
    slow: 1.2,
    loader: 4.0,
    loaderReduced: 1.2,
  },
  breakpoints: {
    mobile: '(max-width: 767px)',
    desktop: '(min-width: 768px)',
    wide: '(min-width: 1440px)',
  },
};

export { gsap, ScrollTrigger };
