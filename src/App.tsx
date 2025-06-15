import { useState, useEffect, useRef, useMemo } from "react"
import "./index.css";
import {generateLongText} from "./utils/generateLongText";
import {isMobileDevice} from "./utils/isMobileDevice";

const INITIAL_TIME = 60

const App = () => {
    const [totalTyped, setTotalTyped] = useState('')
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [errors, setErrors] = useState(0)
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME)
    const [typingStarted, setTypingStarted] = useState(false)
    const timerIntervalRef = useRef(null);
    const longText = useMemo(() => generateLongText(), [])
    const [scrollAmount, setScrollAmount] = useState(0)

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
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

    return (
        <>
        <h1>Typing Test</h1>
        <div id="text-container"> {isMobileDevice() ? 'Desktop Only' : longText} </div>

        <div id="timer" className="m-2.5">Time left: {timeLeft}s</div>
        <div id="final-score"></div>

        {timeLeft <= 0 && (
            <button type="button" id="try-again" className="p-2.5 rounded-lg hover:brightness-125 mt-5 cursor-pointer">Try Again</button>
        )}
        </>
    )
}

export { App }
