// src/hooks/useResizeObserver.ts
import { useEffect } from 'react';

const useResizeObserver = (
  ref: React.RefObject<HTMLElement>,
  callback: (rect: DOMRectReadOnly) => void
) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
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
