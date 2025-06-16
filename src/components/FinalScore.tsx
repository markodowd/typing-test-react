import type { FC } from "react";
import { calculateWPM } from "@/utils/calculateWPM";

interface FinalScoreProps {
  totalTyped: string;
  errors: number;
}

const FinalScore: FC<FinalScoreProps> = ({ totalTyped, errors }) => (
  <div>Final WPM: {calculateWPM(totalTyped, errors)}</div>
);

export { FinalScore };
