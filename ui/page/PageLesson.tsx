"use client";

import { useUser } from "@/context/UserContext";
import { IParcours } from "@/lib/type";
import VercelIcon from "@/public/vercel.svg";
import QCorrect from "@/ui/components/quiz/QCorrect";
import { useEffect, useState } from "react";
import { VictoryPopup } from "../components/pop-up/Victory-popup";
import Quiz from "../components/quiz/Quiz";

export default function PageLesson({ data }: { data: IParcours }) {
  const parcours = data;
  const { addXp, updateProgress, getProgress } = useUser();

  const [maxStep] = useState(data.allQuizzes?.length || 0);

  const [currentStep, setCurrentStep] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(0);
  const [BadAnswer, setBadAnswer] = useState(0);

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [isQuizCorrect, setIsQuizCorrect] = useState(false);

  const currentQuiz = parcours.allQuizzes[currentQuizIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setIsQuizCorrect(true);
      setGoodAnswer(goodAnswer + 1);
    } else {
      setBadAnswer(BadAnswer + 1);
    }
    setTimeout(() => {
      setIsQuizCorrect(false);
      setCurrentStep((prev) => Math.min(prev + 1, maxStep));
      setCurrentQuizIndex((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    if (currentStep === maxStep) {
      if (getProgress(parcours.id) < goodAnswer) {
        updateProgress(parcours.id, goodAnswer);
      }

      addXp(100);
    }
  }, [
    currentStep,
    addXp,
    maxStep,
    parcours.id,
    updateProgress,
    getProgress,
    goodAnswer,
  ]);
  return (
    <div className="p-4 max-md:mb-[100px]">
      {maxStep !== currentStep && (
        <>
          <div className="w-full bg-gray-200 h-4 my-4 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-4 transition-all"
              style={{ width: `${(currentStep / maxStep) * 100}%` }}
            ></div>
          </div>
          <p className="font-semibold">
            Progression : {currentStep} / {maxStep}
          </p>
          <p className="font-semibold">
            Bonne réponce : {goodAnswer} / {maxStep}
          </p>
          <p className="font-semibold">
            Mauvaise réponce : {BadAnswer} / {maxStep}
          </p>
        </>
      )}

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
            onAnswer={handleAnswer}
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
            onAnswer={handleAnswer}
          />
        ) : (
          <>
            <VictoryPopup
              isOpen={!currentQuiz}
              totalQuestions={maxStep}
              correctAnswers={goodAnswer}
              wrongAnswers={BadAnswer}
              xpGained={goodAnswer * 100} // 100 XP per correct answer
            />
          </>
        )}
      </div>

      {/* Indicateur de bonne réponse */}
      {isQuizCorrect && <p className="text-green-500 mt-4">Bonne réponse !</p>}
    </div>
  );
}
