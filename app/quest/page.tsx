"use client";

import QuestComponent from "@/ui/components/quest/Quest";
import PlayerProfileQuests from "@/ui/components/playerProfile/PlayerProfileQuests";
import Achievement from "@/ui/components/achievements/Achievements";

import { motion } from "framer-motion";

import VercelIcon from "@/public/vercel.svg";
import { Brain, Trophy, Zap, Target } from "lucide-react";
import PlayerProfile from "@/ui/components/playerProfile/PlayerProfile";
import { useUser } from "@/context/UserContext";
import { getLevelFromXP } from "@/lib/utils";
import { LEVELS_XP } from "@/lib/constant";

export default function QuestsPage() {
  const { getProgress, user } = useUser();

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-row gap-[40px]">
        <div className="flex flex-col justify-center gap-[40px] max-md:mb-[100px] w-full">
          <div className="border-[#37464F] border-[3px] p-[20px] rounded-[20px] bg-tertiary">
            <h1 className="text-3xl font-bold text-center mb-6">Quêtes</h1>
            <QuestComponent
              id={1}
              className="border-b-2 border-[#37464F]"
              text="Avoir 5 bonnes réponses"
              color="#93d333"
              reward={"Badge"}
              current={user.xp > 500 ? 5 : user.xp / 100}
              max={5}
            />
            <QuestComponent
              id={2}
              className="border-b-2 border-[#37464F]"
              icon={VercelIcon}
              text="Terminer le chapitre n°1"
              color="#93d333"
              reward={"Rien"}
              current={0}
              max={10}
            />
            <QuestComponent
              id={3}
              className=""
              icon={VercelIcon}
              text="Finir le jeu"
              color="#93d333"
              reward={"Badge"}
              current={29}
              max={100}
            />
          </div>
          <div className="border-[#37464F] border-[3px]  p-[20px] rounded-[20px] bg-tertiary w-full">
            <h1 className="text-3xl font-bold text-center mb-6">Succès</h1>
            <div className="flex flex-col gap-[20px]">
              <Achievement
                className="border-b-2 border-[#37464F]"
                icon={Brain}
                title="Néophyte du Savoir"
                description="Répondez correctement à 1 question"
                color="#93d333"
                progress={user.xp > 0 ? 100 : 0}
              />
              <Achievement
                className="border-b-2 border-[#37464F]"
                icon={Trophy}
                title="Champion du Quiz"
                description="Gagnez 10 quiz consécutifs"
                color="#93d333"
                progress={40}
              />
              <Achievement
                className="border-b-2 border-[#37464F]"
                icon={Zap}
                title="Éclair de Génie"
                description="Répondez à 5 questions en moins de 10 secondes chacune"
                color="#93d333"
                progress={80}
              />
              <Achievement
                icon={Target}
                title="Précision Parfaite"
                description="Obtenez un score parfait dans un quiz de 20 questions"
                color="#93d333"
                progress={20}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col min-w-[450px] mr-auto max-xl:hidden">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <div className="border-[#37464F] border-[3px] p-[10px] rounded-[20px] flex flex-col bg-tertiary">
              <div className="text-[16px] flex flex-col gap-[5px]">
                <PlayerProfile
                  level={getLevelFromXP(user.xp)}
                  maxLevel={LEVELS_XP.length + 1}
                  xp={user.xp}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
