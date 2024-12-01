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

export const QIncorrect = ({
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
    <div className={clsx("space-y-2 p-4", className)}>
      
    </div>
  );
};

export default QIncorrect;
