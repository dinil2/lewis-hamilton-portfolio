import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from '@/lib/animation';

interface UsePointerRevealOptions {
  maxRadius?: number;
  lerpFactor?: number;
  autoScan?: boolean;
}

export function usePointerReveal(options: UsePointerRevealOptions = {}) {
  const { maxRadius = 160, lerpFactor = 0.15, autoScan = true } = options;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const isHoveredRef = useRef(false);
  const isInteractingRef = useRef(false);

  // Mouse/touch target coordinates (percentages or pixels)
  const targetX = useRef(50); // percentage
  const targetY = useRef(45); // percentage
  const currentX = useRef(50);
  const currentY = useRef(45);

  const targetRadius = useRef(0);
  const currentRadius = useRef(0);

  const animFrameId = useRef<number | null>(null);
  const scanTimeRef = useRef(0);

  const setHoverActive = useCallback((active: boolean) => {
    isHoveredRef.current = active;
    if (active) {
      targetRadius.current = maxRadius;
    } else {
      targetRadius.current = 0;
    }
  }, [maxRadius]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Direct CSS variable setters using gsap.quickSetter for maximum 60fps performance
    const setCssX = gsap.quickSetter(container, '--reveal-x', '%');
    const setCssY = gsap.quickSetter(container, '--reveal-y', '%');
    const setCssR = gsap.quickSetter(container, '--reveal-r', 'px');

    const loop = () => {
      // Idle scanner mode if user hasn't interacted or is currently idle
      if (!isHoveredRef.current && !isInteractingRef.current && autoScan) {
        scanTimeRef.current += 0.02;
        // Subtle Lissajous scan across the face/helmet zone (35% - 65% X, 25% - 55% Y)
        targetX.current = 50 + Math.sin(scanTimeRef.current * 0.8) * 14;
        targetY.current = 40 + Math.cos(scanTimeRef.current * 1.1) * 12;
        // Pulse scanner radius softly between 80px and 120px
        targetRadius.current = 90 + Math.sin(scanTimeRef.current * 1.5) * 25;
      }

      // Linear interpolation (lerp)
      currentX.current += (targetX.current - currentX.current) * lerpFactor;
      currentY.current += (targetY.current - currentY.current) * lerpFactor;
      currentRadius.current += (targetRadius.current - currentRadius.current) * lerpFactor;

      // Apply to CSS variables
      setCssX(currentX.current);
      setCssY(currentY.current);
      setCssR(Math.max(0, currentRadius.current));

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    const updateFromPointer = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      const px = ((clientX - rect.left) / rect.width) * 100;
      const py = ((clientY - rect.top) / rect.height) * 100;

      targetX.current = Math.max(0, Math.min(100, px));
      targetY.current = Math.max(0, Math.min(100, py));
    };

    const handlePointerEnter = (e: PointerEvent) => {
      setHasInteracted(true);
      isInteractingRef.current = true;
      isHoveredRef.current = true;
      targetRadius.current = maxRadius;
      updateFromPointer(e);
    };

    const handlePointerMove = (e: PointerEvent) => {
      setHasInteracted(true);
      isInteractingRef.current = true;
      updateFromPointer(e);
    };

    const handlePointerLeave = () => {
      isHoveredRef.current = false;
      isInteractingRef.current = false;
      targetRadius.current = 0;
    };

    const handlePointerDown = (e: PointerEvent) => {
      setHasInteracted(true);
      isInteractingRef.current = true;
      isHoveredRef.current = true;
      targetRadius.current = maxRadius * 1.1; // Slight expand on tap/press
      updateFromPointer(e);
    };

    const handlePointerUp = () => {
      isInteractingRef.current = false;
      // If pointer is mouse, leave hover on; if touch, collapse radius
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (isTouch) {
        isHoveredRef.current = false;
        targetRadius.current = 0;
      }
    };

    container.addEventListener('pointerenter', handlePointerEnter);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [maxRadius, lerpFactor, autoScan, setHoverActive]);

  return { containerRef, hasInteracted };
}

