import { useState, useRef, useMemo } from 'react'
import './index.css'
import { generateLongText } from './utils/generateLongText'
import { useCountdown } from './hooks/useCountdown'
import { useHandleKeyPress } from './hooks/useHandleKeyPress'
import { TextContainer } from './components/TextContainer'
import { FinalScore } from './components/FinalScore'
import { Timer } from './components/Timer'
import { TryAgain } from './components/TryAgain'
import {GAME_TIME} from './constants/constants'

const App = () => {
  const [totalTyped, setTotalTyped] = useState('')
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [errors, setErrors] = useState(0)
  const [timeLeft, setTimeLeft] = useState(GAME_TIME)
  const [typingStarted, setTypingStarted] = useState(false)
  const [longText, setLongText] = useState(generateLongText())
  const timerIntervalRef = useRef<any>(null)

  const textContainerRef = useRef<any>(null)
  const textArray = longText.split('')

  useHandleKeyPress(
    typingStarted,
    setTypingStarted,
    timeLeft,
    setTimeLeft,
    totalTyped,
    setCurrentCharIndex,
    currentCharIndex,
    setTotalTyped
  )

  useCountdown(typingStarted, setTimeLeft, timeLeft, timerIntervalRef, setTypingStarted)

  const handleTryAgainClick = () => {
    setTotalTyped('')
    setCurrentCharIndex(0)
    setErrors(0)
    setTimeLeft(GAME_TIME)
    setTypingStarted(false)
    setLongText(generateLongText())
  }

  return (
    <div className='flex flex-col gap-4 items-center'>
      <h1 className='text-6xl font-semibold text-center'>Typing Test</h1>

      {timeLeft > 0 && (
        <TextContainer
          textContainerRef={textContainerRef}
          textArray={textArray}
          totalTyped={totalTyped}
        />
      )}

      <Timer timeLeft={timeLeft} />

      {timeLeft <= 0 && (
        <FinalScore
          totalTyped={totalTyped}
          errors={errors}
        />
      )}

      {timeLeft <= 0 && (
        <TryAgain
          onClick={handleTryAgainClick}
        />
      )}
    </div>
  )
}

export { App }
