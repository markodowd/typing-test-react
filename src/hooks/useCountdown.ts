import { useEffect } from "react";

const useCountdown = (
     typingStarted: boolean,
     setTimeLeft: any,
     timeLeft: number,
     timerIntervalRef: any,
     setTypingStarted: any
) => {
    // Effect to handle the timer logic
    useEffect(() => {
        if (typingStarted && timeLeft > 0) {
            timerIntervalRef.current = setInterval(() => {
                setTimeLeft((prevCount) => prevCount - 1);
            }, 1000); // Decrement every 1000ms (1 second)
        } else if (timeLeft === 0) {
            // Countdown finished
            clearInterval(timerIntervalRef.current);
            setTypingStarted(false);
            // Optionally, you can trigger an action here when countdown ends
            console.log("Countdown finished!");
        }

        // Cleanup function: This runs when the component unmounts or
        // when the dependencies of useEffect change (isRunning, count)
        return () => {
            clearInterval(timerIntervalRef.current);
        };
    }, [typingStarted, timeLeft]); // Dependencies: re-run effect if isRunning or count changes
}

export { useCountdown }
