import QuestComponent from "@/ui/components/quest/Quest";
import VercelIcon from "@/public/vercel.svg";

import PlayerProfileQuests from "@/ui/components/playerProfile/PlayerProfileQuests";

export default function QuestsPage() {
  return (
    <div>
      <h1 className="text-3xl mb-5 font-semibold">Quêtes</h1>
      <div className="flex justify-center gap-[40px] max-md:mb-[100px]">
        <div className="bg-tertiary p-4 rounded-xl border-2 border-[#37464F]">
          <QuestComponent
            id={1}
            className="border-b-2 border-[#28333a]"
            icon={VercelIcon}
            text="Finir le composant"
            color="#b61818"
            reward={50}
            current={20}
            max={20}
          />
          <QuestComponent
            id={2}
            className="border-b-2 border-[#28333a]"
            icon={VercelIcon}
            text="Acheter 10 big birds"
            color="#1871b6"
            reward={200}
            current={3}
            max={10}
          />
          <QuestComponent
            id={3}
            className=""
            icon={VercelIcon}
            text="Finir le jeu"
            color="#18b629"
            reward={1000}
            current={29}
            max={100}
          />
        </div>
        <div className="max-lg:hidden flex flex-col min-w-[450px]">
          <PlayerProfileQuests level={9} maxLevel={15} xp={1500} />
        </div>
      </div>
    </div>
  );
}
