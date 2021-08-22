import { RefObject, useEffect } from "react";

export const useInfiniteScroll = (
  refContainer: RefObject<HTMLElement>,
  onLoad: Function
): void => {
  useEffect(() => {
    const refValue = refContainer.current;
    if (refContainer?.current && onLoad) {
      const handleScroll = (): void => {
        const { scrollHeight, clientHeight, scrollTop } = refContainer.current!;

        const containerScrollTop = scrollHeight - clientHeight - 5;
        const currentScrollPosition = Math.ceil(Math.abs(scrollTop));

        if (currentScrollPosition >= containerScrollTop) {
          onLoad();
        }
      };

      refContainer.current!.addEventListener("scroll", handleScroll);

      return () => refValue!.removeEventListener("scroll", handleScroll);
    }
  }, [refContainer, onLoad]);
};
