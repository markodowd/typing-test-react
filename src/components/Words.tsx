import type { FC } from "react";
import { isMobileDevice } from "@/utils/isMobileDevice";

interface WordsProps {
  textArray: string[];
  totalTyped: string;
}

const Words: FC<WordsProps> = ({ textArray, totalTyped }) => {
  if (isMobileDevice()) {
    return "Desktop Only";
  }

  return (
    <>
      {textArray.map((item, index) => {
        return (
          <span
            className={`min-w-3 ${
              totalTyped[index] && totalTyped[index] !== item
                ? "text-red-500"
                : totalTyped[index] === item
                ? "text-green-500"
                : ""
            }`}
          >
            {item}
          </span>
        );
      })}
    </>
  );
};

export { Words };
