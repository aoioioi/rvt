import { useState, useRef } from "react";

const images = Array.from({ length: 36 }, (_, i) => i + 1);

export const ImageViewer360 = () => {
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const startXRef = useRef<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Set starting X position
    startXRef.current = e.clientX;
    setIsPointerDown(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (startXRef.current === null) return;
    const deltaX = e.clientX - startXRef.current;
    // Set active index based on the horizontal movement
    if (Math.abs(deltaX) > 10) {
      // Check direction (left or right)
      const direction = deltaX > 0 ? -1 : 1;
      // Circular indexing/array
      setActiveIndex((prevIndex) => (prevIndex + direction + images.length) % images.length);
      // Update X position
      startXRef.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    startXRef.current = null;
    setIsPointerDown(false);
  };

  return (
    <div className="bg-slate-800/40 ">
      <p>360 Image Viewer</p>
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`h-[800px] flex items-center justify-center select-none ${isPointerDown ? "cursor-grabbing" : "cursor-pointer"}`}
      >
        <p>{images[activeIndex]}</p>
        {/* <img
        src={images[activeIndex]}
        alt={`360 view ${activeIndex + 1}`}
        className="max-h-full max-w-full"
        /> */}
      </div>
    </div>
  );
};