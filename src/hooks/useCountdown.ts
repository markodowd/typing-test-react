import { useEffect } from "react";

const useCountdown = (
  typingStarted: boolean,
  setTimeLeft: (time: number) => void,
  timeLeft: number,
  timerIntervalRef: any,
  setTypingStarted: (typing: boolean) => void
) => {
  useEffect(() => {
    if (typingStarted && timeLeft > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerIntervalRef.current);
      setTypingStarted(false);
    }

    return () => {
      clearInterval(timerIntervalRef.current);
    };
  }, [typingStarted, timeLeft]);
};

export { useCountdown };
