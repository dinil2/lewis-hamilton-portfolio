import { useLayoutEffect, useRef } from 'react';
import { gsap } from '@/lib/animation';

export function useGsapContext(
  func: (context: gsap.Context) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope?: React.RefObject<any>,
  deps: React.DependencyList = []
) {
  const isMounted = useRef(true);

  useLayoutEffect(() => {
    isMounted.current = true;
    const ctx = gsap.context(func, scope?.current || undefined);

    return () => {
      isMounted.current = false;
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

