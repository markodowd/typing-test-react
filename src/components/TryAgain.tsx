import type { FC } from "react";

interface TryAgainProps {
  onClick: () => void;
}

const TryAgain: FC<TryAgainProps> = ({ onClick }) => (
  <button
    type="button"
    className="w-40 bg-black text-white border-none p-2.5 rounded-lg hover:brightness-125 cursor-pointer text-xl"
    onClick={onClick}
  >
    Try Again
  </button>
);

export { TryAgain };
