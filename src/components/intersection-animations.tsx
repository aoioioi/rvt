import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const IntersectionAnimations = () => {
  const { elIntersectionRef, isInView } = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  return (
    <div>
      <p>Intersection Animations</p>
      <div ref={elIntersectionRef}>
        <p>Fade in down</p>
        <p className={`text-[10rem] w-fit ${isInView ? "kf-fade-in-down" : ""}`}>
          🐕
        </p>
        <p>Fade out up</p>
        <p className={`text-[10rem] w-fit ${isInView ? "kf-fade-out-up" : ""}`}>
          🐮
        </p>
        <p>Fade in right</p>
        <p className={`text-[10rem] w-fit ${isInView ? "kf-fade-in-right" : ""}`}>
          🐯
        </p>
      </div>
    </div>
  );
};
