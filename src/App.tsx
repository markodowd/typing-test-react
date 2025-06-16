import { useState, useRef, useMemo } from 'react'
import './index.css'
import { generateLongText } from './utils/generateLongText'
import { useCountdown } from './hooks/useCountdown'
import { useHandleKeyPress } from './hooks/useHandleKeyPress'
import {TextContainer} from './components/TextContainer'

const INITIAL_TIME = 3

const App = () => {
  const [totalTyped, setTotalTyped] = useState('')
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [errors, setErrors] = useState(0)
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME)
  const [typingStarted, setTypingStarted] = useState(false)
  const timerIntervalRef = useRef<any>(null)
  const longText = useMemo(() => generateLongText(), [])

  const textContainerRef = useRef<any>(null)
  const textArray = longText.split('')

  useHandleKeyPress(
    typingStarted,
    setTypingStarted,
    setTimeLeft,
    INITIAL_TIME,
    totalTyped,
    setCurrentCharIndex,
    currentCharIndex,
    setTotalTyped
  )
  useCountdown(typingStarted, setTimeLeft, timeLeft, timerIntervalRef, setTypingStarted)

  return (
    <>
      <h1>Typing Test</h1>
      <TextContainer 
        textContainerRef={textContainerRef}
        textArray={textArray}
        totalTyped={totalTyped}
      />

      <div id='timer' className='m-2.5'>Time left: {timeLeft}s</div>
      <div id='final-score' />

      {timeLeft <= 0 && (
        <button type='button' id='try-again' className='p-2.5 rounded-lg hover:brightness-125 mt-5 cursor-pointer'>Try Again</button>
      )}
    </>
  )
}

export { App }
