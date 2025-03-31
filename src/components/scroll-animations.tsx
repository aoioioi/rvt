import { useElScrollProgress } from "@/hooks/use-el-scroll-progress";

export const ScrollAnimations = () => {
  const { elScrollRef, elScrollProgress } = useElScrollProgress();

  return (
    <div
      ref={elScrollRef}
      className="h-[1000px] bg-cyan-950 overflow-x-clip"
    >
      <p>Scroll Animations (without packages)</p>
      <p
        className={`text-[10rem] whitespace-nowrap -kf-translate-x animation-pause sticky top-0 w-fit`}
        style={{
          animationDelay: `${elScrollProgress * -1}s`,
        }}
      >
        🦓🐘🐃🦒
      </p>
    </div>
  );
};
