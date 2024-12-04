"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Brain, Check, Trophy, X } from "lucide-react";

interface VictoryPopupProps {
  isOpen: boolean;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  xpGained: number;
}

export function VictoryPopup({
  isOpen,
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  xpGained,
}: VictoryPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 max-md:bottom-[80px] max-md:left-[0px] left-[300px] "
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="w-full max-w-md bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20">
              <div className="pt-6 px-6 pb-8 text-center">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                  <h2 className="text-2xl font-bold mb-6">Félicitations !</h2>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <Check className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Bonnes réponses
                      </p>
                      <p className="text-2xl font-bold">
                        {correctAnswers}/{totalQuestions}
                      </p>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <X className="w-6 h-6 text-red-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Erreurs</p>
                      <p className="text-2xl font-bold">
                        {wrongAnswers}/{totalQuestions}
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <Brain className="w-6 h-6 text-blue-500 mx-auto mb-2 max-md:hidden" />
                    <p className="text-sm text-muted-foreground">XP Gagné</p>
                    <motion.p
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className="text-2xl font-bold text-blue-500"
                    >
                      +{xpGained}
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6"
                >
                  <a href="/learn">
                    <button className="rounded-[8px] bg-[#1CB0F6] font-dinroundpro font-bold tracking-[1.5px] p-[10px] hover:opacity-90 cursor-pointer w-full">
                      Continuer
                    </button>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
