// src/hooks/useResizeObserver.js
import { useEffect } from 'react';

const useResizeObserver = (ref, callback) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        callback(entry.contentRect);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback]);
};

export default useResizeObserver;
