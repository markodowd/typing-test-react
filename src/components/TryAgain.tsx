import type { FC } from 'react'

interface TryAgainProps {
  onClick: any
}

const TryAgain: FC<TryAgainProps> = ({ onClick }) => (
  <button
    type='button' id='try-again' className='p-2.5 rounded-lg hover:brightness-125 mt-5 cursor-pointer'
    onClick={onClick}
  >Try Again
  </button>
)

export { TryAgain }
