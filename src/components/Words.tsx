import {isMobileDevice} from "@/utils/isMobileDevice"
import type { FC } from "react"

interface WordsProps {
    textArray: string[]
    totalTyped: string
}

const Words: FC<WordsProps> = ({ textArray, totalTyped }) => {

    if (isMobileDevice()) {
        return 'Desktop Only'
    }

    return (
        <>
        {textArray.map((item, index) => {
            if (totalTyped[index] === item) {
                return <span className="text-green-500">{item}</span>
            }

            if (totalTyped[index] && totalTyped[index] !== item) {
                return <span className="text-red-500">{item}</span>
            }

            return <span>{item}</span>
        }
                      )}
                      </>
    )
}

export { Words }
