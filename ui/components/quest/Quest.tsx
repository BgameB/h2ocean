import clsx from "clsx";
import Image from "next/image";

import defaultIcon from "@/public/next.svg";

interface Props {
  /* Props Case globale */
  id: number;
  className?: string;
  text: string;
  reward: number;
  current: number;
  max: number;

  color?: string;
  icon?: any;
}

const ProgressBar = ({
  current,
  max,
  color,
}: {
  current: number;
  max: number;
  color: string;
}) => {
  const percentage = (Math.min(Math.max(current, 0), max) / max) * 100;

  return (
    <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className="absolute left-0 top-0 h-full transition-all rounded-full"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  );
};

export const Quest = ({
  id,
  className,
  text,
  color = "#ffffff",
  icon = { defaultIcon },
  reward,
  current,
  max,
}: Props) => {

  return (
    <div className={clsx("space-y-2 p-4")}>
      <div className="flex items-center gap-3">
        {/* Icon */}
        <Image src={icon} alt="iconQuest" width={32} height={32} />
        {/* Texte */}
        <div className="text-white font-medium">Quête n°{id} :</div>
        <div className="text-white font-normal">{text}</div>
      </div>
      {/* Barre de progression */}
      <div className="relative">
        <ProgressBar current={current} max={max} color={color} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className={`badge ${current === max ? "bg-green-600" : "bg-gray-600"} text-white text-sm rounded-sm px-3 mt-3 py-1`}>
            {current === max ? "🎉 Quête Terminée" : "Quête en cours"}
          </div>
        </div>
        {/* Infos sur la progression */}
        <div className="text-slate-300 text-sm mt-2">
          {current}/{max}
        </div>
        <div className="text-slate-200 font-medium text-sm mt-2">
          Récompense : {reward} XP
        </div>
      </div>
    </div>
  );
};

export default Quest;
