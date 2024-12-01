import QuestComponent from "@/ui/components/quest/Quest";
import VercelIcon from "@/public/vercel.svg";

export default function AboutPage() {
  return (
    <div className="bg-primary p-4">
      <h1 className="text-xl mb-5 font-semibold">Quêtes du jour</h1>
      <div className="bg-tertiary p-4 rounded-xl">
        <QuestComponent
          id={1}
          className=""
          icon={VercelIcon}
          text="Finir le composant"
          color="#b61818"
          reward={50}
          current={16}
          max={20}
        ></QuestComponent>
        <QuestComponent
          id={2}
          className=""
          icon={VercelIcon}
          text="Acheter 10 big birds"
          color="#1871b6"
          reward={200}
          current={3}
          max={10}
        ></QuestComponent>
        <QuestComponent
          id={3}
          className=""
          icon={VercelIcon}
          text="Insulter Pouce Bleu"
          color="#18b629"
          reward={1000}
          current={100}
          max={100}
        ></QuestComponent>
      </div>
    </div>
  );
}
