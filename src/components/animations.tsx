import { BasicAnimations } from "./basic-animations";
import { IntersectionAnimations } from "./intersection-animations";
import { ScrollAnimations } from "./scroll-animations";

export const Animations = () => {
  return (
    <div>
      <h2>Animations</h2>
      <BasicAnimations />
      <ScrollAnimations />
      <IntersectionAnimations />
    </div>
  );
};
