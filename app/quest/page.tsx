import QuestComponent from "@/ui/components/quest/Quest";
import PlayerProfileQuests from "@/ui/components/playerProfile/PlayerProfileQuests";
import Achievement from "@/ui/components/achievements/Achievements";

import VercelIcon from "@/public/vercel.svg";
import { Brain, Trophy, Zap, Target } from "lucide-react";

export default function QuestsPage() {
  return (
    <div>
      <div className="flex flex-row gap-[40px]">
        <div className="flex flex-col justify-center gap-[40px] max-md:mb-[100px] w-full">
          <div className="border-gold border-[3px] p-[20px] rounded-[20px] bg-tertiary">
            <h1 className="text-3xl font-bold text-center mb-6">Quêtes</h1>
            <QuestComponent
              id={1}
              className="border-b-2 border-[#37464F]"
              icon={VercelIcon}
              text="Finir le composant"
              color="#93d333"
              reward={50}
              current={20}
              max={20}
            />
            <QuestComponent
              id={2}
              className="border-b-2 border-[#37464F]"
              icon={VercelIcon}
              text="Acheter 10 big birds"
              color="#93d333"
              reward={200}
              current={3}
              max={10}
            />
            <QuestComponent
              id={3}
              className=""
              icon={VercelIcon}
              text="Finir le jeu"
              color="#93d333"
              reward={1000}
              current={29}
              max={100}
            />
          </div>
          <div className="border-gold border-[3px] p-[20px] rounded-[20px] bg-tertiary w-full">
            <h1 className="text-3xl font-bold text-center mb-6">
              Succès
            </h1>
            <div className="flex flex-col gap-[20px]">
              <Achievement
                className="border-b-2 border-[#37464F]"
                icon={Brain}
                title="Maître du Savoir"
                description="Répondez correctement à 100 questions"
                color="#93d333"
                progress={65}
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

        <div className="border-[#37464F] border-[3px] p-[10px] rounded-[20px] h-[290px] w-[30vw] bg-tertiary">
          <PlayerProfileQuests level={9} maxLevel={15} xp={1500} />
        </div>
      </div>
    </div>
  );
}
