"use client";

import { Button } from "@/ui/design-system/quizDesign/QuizButton";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/ui/design-system/quizDesign/QuizCard";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  question: string;
  id: number;
  className?: string;
  image: string;
  answer1: string;
  answer2: string;
  answer3: string;
  correctAnswer: string;
  color?: string;
  onAnswer: (answer: boolean) => void;
}

export const Quiz = ({
  id,
  className,
  question,
  image,
  answer1,
  answer2,
  answer3,
  correctAnswer,
  color = "#ffffff",
  onAnswer,
}: Props) => {
  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [id]);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);
    if (answer === correctAnswer) {
      onAnswer(true);
    } else {
      onAnswer(false);
    }
  };

  return (
    <Card
      className={`w-full max-w-md mx-auto ${className}`}
      style={{ backgroundColor: color }}
    >
      <CardTitle className="text-center">{question}</CardTitle>

      <CardContent className="space-y-5 p-5">
        <div className="flex justify-center">
          <img
            src={image}
            alt="Quiz Image"
            width={256}
            height={256}
            className="rounded-lg shadow-md w-full h-full"
          />
        </div>

        <div className="space-y-3">
          {[answer1, answer2, answer3].map((answer, index) => (
            <Button
              key={index}
              variant={
                selectedAnswer === answer
                  ? isCorrect
                    ? "goodanswer"
                    : "badanswer"
                  : "default"
              }
              className="w-full justify-start text-left"
              onClick={() => handleAnswer(answer)}
              disabled={selectedAnswer !== null}
            >
              {answer}
            </Button>
          ))}
        </div>
        {/* {selectedAnswer && (
          <div
            className={`text-center font-semibold ${
              isCorrect ? "text-green-600" : "text-red-600"
            }`}
          >
            {isCorrect ? "Correct !" : "Incorrect. Réessayez !"}
          </div>
        )} */}
      </CardContent>
    </Card>
  );
};

export default Quiz;
