import { useRef, useState } from "react";

export const useCarousel = (itemSize: number) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [leftPosition, setLeftPosition] = useState(0)
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(0);

  const handlePrevClick = () => {
    if (leftPosition > 0) {
      setLeftPosition(leftPosition - itemSize);
    }
  };

  const handleNextClick = () => {
    if (
      leftPosition <
      (7350 - window.innerWidth + 100) 
    ) {
      setLeftPosition(leftPosition + itemSize);
    } 
  };

  const handleTouchStart = (e: any) => {
    setStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    let touch = e.touches[0];
    setChange(start - touch.clientX);
  };

  const handleTouchEnd = () => {
    if (
      change > 0 &&
      leftPosition <
        trackRef.current!.offsetWidth -
          trackRef.current!.parentElement!.offsetWidth
    ) {
      trackRef.current!.style.left = `${-1 * (leftPosition + itemSize)}px`;
      setLeftPosition(leftPosition + itemSize);
    } else if (leftPosition > 0) {
      trackRef.current!.style.left = `${-1 * (leftPosition - itemSize)}px`;
      setLeftPosition(leftPosition - itemSize);
    }
  };

  return {
    handleNextClick,
    handlePrevClick,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    trackRef,
    leftPosition
  };
};
