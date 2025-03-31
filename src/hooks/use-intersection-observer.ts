import { useEffect, useRef, useState } from "react";

type Options = {
  root: Element | null;
  rootMargin: string;
  threshold: number;
};

type ElIntersectionRef =
  | HTMLDivElement
  | HTMLParagraphElement
  | HTMLHeadingElement;

const defaultOptions = {
  // Set an element as viewport from where to observe. null is browser viewport. Default is browser/null.
  root: null,
  // Trigger observer when 1px (0 value) of the element is visible. 1.0 trigger observer when every pixel is visible. Default 0.
  threshold: 0,
  // Offset when to trigger observe. Default "0px 0px 0px 0px".
  rootMargin: "0px"
};

export const useIntersectionObserver = (options: Options = defaultOptions) => {
  const [isInView, setIsInView] = useState(false);
  const elIntersectionRef = useRef<ElIntersectionRef>(null);

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };

  useEffect(() => {
    let container = null;
    const observer = new IntersectionObserver(handleIntersect, options);

    if (elIntersectionRef.current) {
      container = elIntersectionRef.current;
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [options]);

  return { elIntersectionRef, isInView };
};
