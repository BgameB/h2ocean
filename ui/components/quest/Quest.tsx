import clsx from "clsx";
import Image from "next/image";

interface Props {
  /* Props Case globale */
  className?: string;
  text?: string;
  color?: string;
  iconQuest?: any;
  /* Props Barre de progression */
  iconBar?: any;
  current?: number;
  max?: number;
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
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-700">
      <div
        className="absolute left-0 top-0 h-full transition-all"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  );
};

export const Quest = ({
  className,
  text,
  color = "#ffffff",
  iconQuest,
  iconBar,
  current = 0,
  max = 10,
}: Props) => {
  return (
    <div className={clsx("space-y-2", className)}>
      <div className="flex items-center gap-3">
        {/* Icone de Quête */}
        {iconQuest && (
          <Image src={iconQuest} alt="iconQuest" width={32} height={32} />
        )}
        {/* Texte */}
        <div className="text-white font-medium">{text}</div>
      </div>
      {/* Barre de progression */}
      <div className="relative">
        <ProgressBar current={current} max={max} color={color} />
        {iconBar && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="rounded-lg p-1">
              <Image src={iconBar} alt="iconBar" width={16} height={16} />
            </div>
          </div>
        )}
        {/* Infos sur la progression */}
        <div className="text-slate-400 text-sm mt-1">
          {current}/{max}
        </div>
      </div>
    </div>
  );
};

export default Quest;
