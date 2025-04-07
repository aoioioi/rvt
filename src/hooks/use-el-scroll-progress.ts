import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "./use-scroll-progress";

type ElScrollRef =
  | HTMLDivElement
  | HTMLParagraphElement
  | HTMLHeadingElement;

export const useElScrollProgress = () => {
  const [elScrollProgress, setElScrollProgress] = useState(0);

  const elScrollRef = useRef<ElScrollRef>(null);
  const { YOffset } = useScrollProgress();

  useEffect(() => {
    if (elScrollRef.current) {
      const elementDetails = elScrollRef.current.getBoundingClientRect();
      const { height, top, bottom } = elementDetails;

      if (top <= 0) {
        const elScrolledPx = height - bottom;
        const progress = elScrolledPx / height;
        setElScrollProgress(progress);
      }

      if (top > 0) {
        setElScrollProgress(0);
      }
    }
  }, [YOffset]);

  return { elScrollRef, elScrollProgress, YOffset };
};
