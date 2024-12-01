import chestIcon from "@/img/icon/chestIcon.png";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface Props {
  className?: string;
  imgClassName?: string;
}

export const ChestIcon = ({ className = "", imgClassName = "" }: Props) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <Image
        src={chestIcon}
        alt="Pictogramme de coffre"
        fill
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
};
