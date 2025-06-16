import { words } from "@/constants/words";
import { shuffleWords } from "./shuffleWords";

const generateLongText = () => {
  const shuffledWords = shuffleWords([...words]);
  return shuffledWords.join(" ");
};

export { generateLongText };
