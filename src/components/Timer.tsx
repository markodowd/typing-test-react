import type { FC } from 'react'

interface TimerProps {
  timeLeft: number
}

const Timer: FC<TimerProps> = ({ timeLeft }) => (
  <div>{timeLeft <= 0 ? "Time's Up!" : `Time left: ${timeLeft}s`}</div>
)

export { Timer }
