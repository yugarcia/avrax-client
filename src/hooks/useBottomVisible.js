import React, { useEffect, useRef, useState } from 'react';

export const useBottomVisible = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
  const observerRef = useRef(null); // Utiliza una ref para mantener la referencia mutable

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      console.log('is intersecting', entry.isIntersecting);
      console.log('intersection ratio', entry.intersectionRatio);
      
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observerRef.current.unobserve(targetRef.current);
      }
    };
  }, [options]);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current && observerRef.current) {
        observerRef.current.observe(targetRef.current);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isVisible, targetRef };
};
