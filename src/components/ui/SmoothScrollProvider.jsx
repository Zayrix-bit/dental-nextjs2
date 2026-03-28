'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.2,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: true, // Automatically handles RequestAnimationFrame
    });

    // Handle scroll events if needed
    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
