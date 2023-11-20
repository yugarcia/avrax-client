import { useEffect, useRef, useState } from "react";

export const useBottomVisible = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
  const observerRef = useRef(null); // Utiliza una ref para mantener la referencia mutable

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, options);
    const targetCurrent = targetRef.current;

    if (targetCurrent) {
      observerRef.current.observe(targetCurrent);
    }

    return () => {
      if (targetCurrent) {
        observerRef.current.unobserve(targetCurrent);
      }
    };
  }, [options]);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current && observerRef.current) {
        observerRef.current.observe(targetRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible, targetRef };
};
