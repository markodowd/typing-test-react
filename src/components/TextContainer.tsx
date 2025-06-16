import type { FC } from 'react'
import { useContainerScroll } from '@/hooks/useContainerScroll'
import { Words } from './Words'

interface TextContainerProps {
  textContainerRef: any
  textArray: string[]
  totalTyped: string
}

const TextContainer: FC<TextContainerProps> = ({
  textContainerRef,
  textArray,
  totalTyped
}) => {
  useContainerScroll(totalTyped, textContainerRef)

  return (
    <div
      ref={textContainerRef}
      id='text-container'
    >
      <Words
        textArray={textArray}
        totalTyped={totalTyped}
      />
    </div>
  )
}

export { TextContainer }
