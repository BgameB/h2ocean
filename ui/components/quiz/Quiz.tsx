"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/ui/design-system/quizDesign/QuizButton"
import { Card, CardTitle, CardContent } from "@/ui/design-system/quizDesign/QuizCard"

interface Props {
  id: number
  className?: string
  image: string
  answer1: string
  answer2: string
  answer3: string
  correctAnswer: string
  color?: string
}

export const Quiz = ({
  id,
  className,
  image,
  answer1,
  answer2,
  answer3,
  correctAnswer,
  color = "#ffffff",
}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setIsCorrect(answer === correctAnswer)
  }

  return (
    <Card className={`w-full max-w-md mx-auto ${className}`} style={{ backgroundColor: color }}>
      <CardTitle>
        Trouvez la Bonne réponse
      </CardTitle>

      <CardContent className="space-y-5 p-5">

        <div className="flex justify-center">
          <Image src={image} alt="Quiz Image" width={256} height={256} className="rounded-lg shadow-md" />
        </div>

        <div className="space-y-3">
          {[answer1, answer2, answer3].map((answer, index) => (
            <Button
              key={index}
              variant={selectedAnswer === answer ? (isCorrect ? "goodanswer" : "badanswer") : "default"}
              className="w-full justify-start text-left"
              onClick={() => handleAnswer(answer)}
              disabled={selectedAnswer !== null}
            >
              {answer}
            </Button>
          ))}
        </div>
        {selectedAnswer && (
          <div className={`text-center font-semibold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
            {isCorrect ? "Correct !" : "Incorrect. Réessayez !"}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default Quiz

