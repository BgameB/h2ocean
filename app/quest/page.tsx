import QuestComponent from "@/ui/components/quest/Quest";
import VercelIcon from "@/public/vercel.svg";

export default function QuestsPage() {
  return (
    <div>
      <h1 className="text-xl mb-5 font-semibold">Quêtes du jour</h1>
      <div className="bg-tertiary p-4 rounded-xl border-2 border-[#37464F]">
        <QuestComponent
          id={1}
          className="border-b-2 border-[#28333a]"
          icon={VercelIcon}
          text="Finir le composant"
          color="#b61818"
          reward={50}
          current={16}
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
          text="Insulter Pouce Bleu"
          color="#18b629"
          reward={1000}
          current={100}
          max={100}
        />
      </div>
    </div>
  );
}
