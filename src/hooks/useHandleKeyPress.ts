import { GAME_TIME } from '@/constants/constants'
import { useEffect } from 'react'

const useHandleKeyPress = (
  typingStarted: boolean,
  setTypingStarted: any,
  timeLeft: number,
  setTimeLeft: any,
  totalTyped: string,
  setCurrentCharIndex: any,
  currentCharIndex: number,
  setTotalTyped: any
) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault()

      if (!typingStarted && timeLeft !== 0) {
        setTypingStarted(true)
        setTimeLeft(GAME_TIME)
      }

      if (event.key === 'Backspace') {
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
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [totalTyped, typingStarted])
}

export { useHandleKeyPress }
