import { useEffect, useState } from "react";

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [YOffset, setYOffset] = useState(0);

  const handleScrollProgress = () => {
    const progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    setYOffset(window.pageYOffset);
    setScrollProgress(progress);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScrollProgress);
    return () => {
      document.removeEventListener("scroll", handleScrollProgress);
    };
  }, []);

  return { scrollProgress, YOffset };
};
