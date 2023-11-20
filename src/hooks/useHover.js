import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [isHovered, setHovered] = useState(false);
  const targetRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    const node = targetRef.current;

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [targetRef]);

  return [isHovered, targetRef];
};

export default useHover;
