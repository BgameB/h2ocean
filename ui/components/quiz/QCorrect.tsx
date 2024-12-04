"use client";

import { Button } from "@/ui/design-system/quizDesign/QuizButton";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/ui/design-system/quizDesign/QuizCard";
import { useState } from "react";

interface Props {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer1: string;
  correctAnswer2: string;
  className?: string;
  color?: string;
  onAnswer: (answer: boolean) => void;
}

export const QCorrect = ({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  correctAnswer1,
  correctAnswer2,
  className,
  color = "#ffffff",
  onAnswer,
}: Props) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const answers = [answer1, answer2, answer3, answer4];
  const correctAnswers = [correctAnswer1, correctAnswer2];

  const handleItemClick = (answer: string) => {
    if (isSubmitted) return;

    setSelectedItems((prev) => {
      if (prev.includes(answer)) {
        return prev.filter((item) => item !== answer);
      } else if (prev.length < 2) {
        return [...prev, answer];
      }
      return [prev[0], answer];
    });
  };

  const isCorrect =
    isSubmitted &&
    selectedItems.length === 2 &&
    selectedItems.every((item) => correctAnswers.includes(item)) &&
    correctAnswers.every((item) => selectedItems.includes(item));

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (
      selectedItems.length === 2 &&
      selectedItems.every((item) => correctAnswers.includes(item)) &&
      correctAnswers.every((item) => selectedItems.includes(item))
    ) {
      onAnswer(true);
    } else {
      onAnswer(false);
    }
  };

  return (
    <Card
      className={`w-full max-w-2xl mx-auto ${className}`}
      style={{ backgroundColor: color }}
    >
      <CardContent className="space-y-5 p-5">
        <CardTitle>Deux réponses sont possibles, sélectionnez les !</CardTitle>
        <div className="grid grid-cols-2 gap-4">
          {answers.map((answer, index) => (
            <Button
              key={index}
              variant="default"
              selected={selectedItems.includes(answer)}
              onClick={() => handleItemClick(answer)}
              className="h-40 flex items-center justify-center"
              disabled={isSubmitted}
            >
              <span className="text-lg">{answer}</span>
            </Button>
          ))}
        </div>
        <div className="text-center text-lg font-semibold">{question}</div>
        <Button
          onClick={handleSubmit}
          disabled={selectedItems.length === 0 || isSubmitted}
          className="w-full"
        >
          {isSubmitted
            ? "Vous avez répondu"
            : `Répondre (${selectedItems.length}/2 selectionné)`}
        </Button>
        {/* {isSubmitted && (
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

export default QCorrect;
