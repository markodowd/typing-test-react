import { useState, useEffect, useRef } from 'react';

const useCountdownOnKeyPress = (initialCountdownValue = 10) => {
  const [countdown, setCountdown] = useState(0);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const intervalRef = useRef(null);

  // Effect to set up and clean up the global keydown listener
  useEffect(() => {
    const handleKeyPress = () => {
      if (!countdownStarted) {
        setCountdownStarted(true);
        setCountdown(initialCountdownValue); // Use the provided initial value
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [countdownStarted, initialCountdownValue]); // Add initialCountdownValue to dependencies

  // Effect to manage the countdown timer
  useEffect(() => {
    if (countdownStarted && countdown > 0) {
      intervalRef.current = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0 && countdownStarted) {
      clearInterval(intervalRef.current);
      setCountdownStarted(false);
      // You might want to provide a callback here for when it finishes
      // For now, let's just log or keep it internal to the hook
      console.log("Countdown Finished!");
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [countdown, countdownStarted]);

  // Expose the necessary state and potentially functions
  return { countdown, countdownStarted, setCountdownStarted, setCountdown };
};

export { useCountdownOnKeyPress }
