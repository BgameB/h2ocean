"use client";

import { IParcours } from "@/lib/type";
import VercelIcon from "@/public/vercel.svg";
import QCorrect from "@/ui/components/quiz/QCorrect";
import { useState } from "react";
import Quiz from "../components/quiz/Quiz";

export default function PageLesson({ data }: { data: IParcours }) {
  const parcours = data;

  const [maxStep] = useState(data.allQuizzes?.length || 0);

  const [currentStep, setCurrentStep] = useState(1);

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [isQuizCorrect, setIsQuizCorrect] = useState(false);


  const currentQuiz = parcours.allQuizzes[currentQuizIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setIsQuizCorrect(true);

      setTimeout(() => {
        setIsQuizCorrect(false);
        setCurrentStep((prev) => Math.min(prev + 1, maxStep));
        setCurrentQuizIndex((prev) => prev + 1);
      }, 1000);
    }
  };
  return (
    <div className="p-4">
      <div className="w-full bg-gray-200 rounded-full h-4 my-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all"
          style={{ width: `${(currentStep / maxStep) * 100}%` }}
        ></div>
      </div>
      <p>
        Progression : {currentStep} / {maxStep}
      </p>

      <div className="mt-6">
        {currentQuiz && currentQuiz.type === "quiz" ? (
          <Quiz
            id={currentQuiz.id}
            image={VercelIcon}
            answer1={currentQuiz.answer1}
            answer2={currentQuiz.answer2}
            answer3={currentQuiz.answer3!}
            correctAnswer={currentQuiz.correctAnswer}
            color="#0F121E"
            onAnswer={(answer) => handleAnswer(true)}
          />
        ) : currentQuiz ? (
          <QCorrect
            question={currentQuiz.question}
            answer1={currentQuiz.answer1}
            answer2={currentQuiz.answer2}
            answer3={currentQuiz.answer3!}
            answer4={currentQuiz.answer4}
            correctAnswer1={currentQuiz.correctAnswers[0]}
            correctAnswer2={currentQuiz.correctAnswers[1]}
            color="#0F121E"
            onAnswer={(answer) => handleAnswer(true)}
          />
        ) : (
          <p>Félicitations, vous avez terminé le parcours !</p>
        )}
      </div>

      {/* Indicateur de bonne réponse */}
      {isQuizCorrect && <p className="text-green-500 mt-4">Bonne réponse !</p>}
    </div>
  );
}
