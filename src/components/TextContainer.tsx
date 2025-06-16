import type { FC } from "react";
import { useContainerScroll } from "@/hooks/useContainerScroll";
import { Words } from "./Words";

interface TextContainerProps {
  textContainerRef: any;
  textArray: string[];
  totalTyped: string;
}

const TextContainer: FC<TextContainerProps> = ({
  textContainerRef,
  textArray,
  totalTyped,
}) => {
  useContainerScroll(totalTyped, textContainerRef);

  return (
    <div
      ref={textContainerRef}
      className="w-4xl h-auto overflow-hidden bg-white whitespace-nowrap rounded-md p-2.5 relative cursor-none my-5 mx-auto"
    >
      <Words textArray={textArray} totalTyped={totalTyped} />
    </div>
  );
};

export { TextContainer };
