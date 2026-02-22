import { useEffect, useRef } from 'react';

/**
 * Custom hook for setting up an interval that properly cleans up.
 * Based on Dan Abramov's useInterval implementation.
 *
 * @param callback - The function to call at each interval
 * @param delay - The delay in milliseconds (null to pause)
 * @param pause - Optional flag to pause the interval
 */
export function useInterval(
  callback: () => void,
  delay: number | null,
  pause: boolean = false
): void {
  const savedCallback = useRef<() => void>(callback);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (pause || delay === null) {
      return;
    }

    const tick = () => {
      savedCallback.current();
    };

    const id = setInterval(tick, delay);

    // Cleanup function to prevent memory leaks
    return () => {
      clearInterval(id);
    };
  }, [delay, pause]);
}

export default useInterval;
