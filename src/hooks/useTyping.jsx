import { useState, useEffect } from "react";

const breakpointTime = {
  10: 150,
  20: 300,
  40: 600,
  80: 800,
  120: 1200,
};

const useTyping = ({ text, enabled = true } = {}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const animationTime = Object.entries(breakpointTime).reduce(
    (acc, [len, time]) => (text.length <= len && time < acc ? time : acc),
    1000,
  );

  const delay = animationTime / text.length;

  useEffect(() => {
    if (enabled && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [currentIndex, delay, text, enabled]);

  return currentText;
};

export default useTyping;
