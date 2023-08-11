import { useState } from "react";

// Custom hook for hover state
export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd,
  };
}
