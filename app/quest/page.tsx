import QuestComponent from "@/ui/components/quest/Quest"
import VercelIcon from "@/public/vercel.svg"


export default function AboutPage() {
  return (
    <div className="bg-slate-800/50 rounded-xl p-4 space-y-6">
      <h1>Composant Quest</h1>
      <QuestComponent text="Gagne un big bird duolingo" color="#ffffff" current={16} max={30} iconQuest={VercelIcon} iconBar={VercelIcon}></QuestComponent>

    </div>
  );
}
