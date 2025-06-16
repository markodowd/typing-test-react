import { useEffect } from "react";

const useHandleKeyPress = (
    typingStarted: any,
    setTypingStarted: any,
    setTimeLeft: any,
    INITIAL_TIME: any,
    totalTyped: any,
    setCurrentCharIndex: any,
    currentCharIndex: any,
    setTotalTyped: any
) => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            event.preventDefault()

            if (!typingStarted) {
                setTypingStarted(true);
                setTimeLeft(INITIAL_TIME);
            }

            if (event.key === "Backspace") {
                if (totalTyped.length > 0) {
                    setCurrentCharIndex(Math.max(currentCharIndex - 1, 0))
                    setTotalTyped(totalTyped.slice(0, -1))
                }
            } 

            const specialKey = event.ctrlKey || event.metaKey

            if (event.key.length === 1 && !specialKey) {
                setTotalTyped(totalTyped + event.key)
                setCurrentCharIndex(currentCharIndex + 1)
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [totalTyped, typingStarted, INITIAL_TIME]);
}

export { useHandleKeyPress }
