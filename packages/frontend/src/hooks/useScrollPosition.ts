import { useState, useEffect, useCallback } from 'react';

interface UseScrollPositionResult {
  isPastThreshold: boolean;
  scrollY: number;
}

/**
 * Custom hook for detecting scroll position relative to a threshold.
 * Properly manages event listeners to prevent memory leaks.
 *
 * @param threshold - The scroll position threshold to detect (default: 0)
 * @returns Object with isPastThreshold boolean and current scrollY position
 */
export const useScrollPosition = (threshold: number = 0): UseScrollPositionResult => {
  const [scrollY, setScrollY] = useState(0);
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setIsPastThreshold(currentScrollY >= threshold);
  }, [threshold]);

  useEffect(() => {
    // Check initial position
    handleScroll();

    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { isPastThreshold, scrollY };
};

export default useScrollPosition;
