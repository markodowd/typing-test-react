import { useEffect } from "react";

const useContainerScroll = (totalTyped: string, textContainerRef: any) => {
  useEffect(() => {
    if (totalTyped.length > 20) {
      const scrollAmount = (totalTyped.length - 20) * 14;
      textContainerRef.current.scrollLeft = scrollAmount;
    }
  }, [totalTyped]);
};

export { useContainerScroll };
