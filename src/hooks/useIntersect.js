/* eslint-disable consistent-return, no-shadow */
import { useState, useRef, useEffect } from 'react';

export const useIntersect = ({ threshold = 0 } = {}) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  const observerRef = useRef(null);

  useEffect(() => {
    if (!window.IntersectionObserver) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      threshold,
    });

    const { current: currentObserver } = observerRef;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, threshold]);

  return [setNode, entry];
};
