import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/animation';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const setDotX = gsap.quickSetter(cursorDotRef.current, 'x', 'px');
    const setDotY = gsap.quickSetter(cursorDotRef.current, 'y', 'px');
    const setRingX = gsap.quickSetter(cursorRingRef.current, 'x', 'px');
    const setRingY = gsap.quickSetter(cursorRingRef.current, 'y', 'px');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotX(mouseX);
      setDotY(mouseY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth lerp for outer ring
    let rafId: number;
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      setRingX(ringX);
      setRingY(ringY);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-rosso pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      />
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-rosso/60 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 will-change-transform transition-[width,height] duration-200"
      />
    </>
  );
};

