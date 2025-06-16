import type { FC } from 'react'

interface TimerProps {
  timeLeft: number
}

const Timer: FC<TimerProps> = ({ timeLeft }) => {
  return (
    <div id='timer' className='m-2.5'>{timeLeft <= 0 ? "Time's Up!" : `Time left: ${timeLeft}s`}</div>
  )
}

export { Timer }
