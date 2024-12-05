"use client";

import { useUser } from "@/context/UserContext";
import { IParcours } from "@/lib/type";
import VercelIcon from "@/public/vercel.svg";
import QCorrect from "@/ui/components/quiz/QCorrect";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Heart, OctagonXIcon, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { VictoryPopup } from "../components/pop-up/Victory-popup";
import Quiz from "../components/quiz/Quiz";

export default function PageLesson({ data }: { data: IParcours }) {
  const parcours = data;
  const { addXp, updateProgress, getProgress } = useUser();

  const [maxStep] = useState(data.allQuizzes?.length || 0);

  const [currentStep, setCurrentStep] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(0);
  const [BadAnswer, setBadAnswer] = useState(0);
  const [streak, setStreak] = useState(0);
  const [xpReward, setXpReward] = useState(0);
  const [hasGainedXP, setHasGainedXP] = useState(false);

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [isQuizCorrect, setIsQuizCorrect] = useState(false);
  const [isQuizInCorrect, setIsQuizInCorrect] = useState(false);

  const currentQuiz = parcours.allQuizzes[currentQuizIndex];
  const progressPercentage = (currentStep / maxStep) * 100;
  const remainingLives = 3 - BadAnswer;

  const initialProgress = useMemo(
    () => getProgress(parcours.id),
    [parcours.id, getProgress]
  );

  const handleAddXp = (xpGained: number) => {
    if (!hasGainedXP) {
      addXp(xpGained);
      setHasGainedXP(true);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setIsQuizCorrect(true);
      setGoodAnswer(goodAnswer + 1);
      setStreak(streak + 1);
    } else {
      setIsQuizInCorrect(true);
      setBadAnswer(BadAnswer + 1);
      setStreak(0);
    }
    setTimeout(() => {
      setIsQuizCorrect(false);
      setIsQuizInCorrect(false);

      setCurrentStep((prevStep) => {
        const nextStep = Math.min(prevStep + 1, maxStep);

        if (nextStep === maxStep && !hasGainedXP) {
          const updatedGoodAnswer = isCorrect ? goodAnswer + 1 : goodAnswer;
          const progressDifference = updatedGoodAnswer - initialProgress;

          if (progressDifference > 0) {
            const xpGained = progressDifference * 100;
            setXpReward(xpGained);

            handleAddXp(xpGained / 2);

            updateProgress(parcours.id, updatedGoodAnswer);
          }
        }

        return nextStep;
      });
      setCurrentQuizIndex((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className="p-4 max-md:mb-[100px] overflow-hidden">
      {maxStep !== currentStep && (
        <>
          <div className="w-full bg-gray-200 h-8 my-4 rounded-full overflow-hidden relative">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black font-bold">
              {currentStep} / {maxStep}
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              {[...Array(3)].map((_, index) => (
                <Heart
                  key={index}
                  className={`w-6 h-6 ${
                    index < remainingLives
                      ? "text-red-500 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <span className="font-bold">{goodAnswer}</span>
            </div>
          </div>
          <div className="text-center mb-4">
            <p className="text-lg font-semibold">
              Série de bonnes réponses : {streak} {streak > 0 && "🔥"}
            </p>
          </div>
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuizIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          {currentQuiz && currentQuiz.type === "quiz" ? (
            <Quiz
              id={currentQuiz.id}
              image={currentQuiz.image}
              question={currentQuiz.question}
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
                xpGained={xpReward}
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Indicateur réponse */}
      <AnimatePresence>
        {isQuizCorrect && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="inset-[0px]  max-md:left-[0px] left-[300px] flex items-center justify-center bg-opacity-50 z-50 fixed"
          >
            <div className="p-8 text-center bg-tertiary/80 rounded-[15px] border-[#37464F] border-[3px]">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Check className="w-16 h-16 text-green 0 mx-auto mb-4" />
              </motion.div>
              <p className="text-2xl font-bold text-green-500">
                Bonne réponse ! 🎉
              </p>
            </div>
          </motion.div>
        )}
        {isQuizInCorrect && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="inset-[0px]  max-md:left-[0px] left-[300px] flex items-center justify-center bg-opacity-50 z-50 fixed"
          >
            <div className="p-8 text-center bg-tertiary/80 rounded-[15px] border-[#37464F] border-[3px]">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <OctagonXIcon className="w-16 h-16 text-red mx-auto mb-4" />
              </motion.div>
              <p className="text-2xl font-bold text-red">
                Mauvaise réponse ! 😔
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
