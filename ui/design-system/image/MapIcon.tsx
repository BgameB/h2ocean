import mapIcon from "@/img/icon/mapsIcon.svg";
import { cn } from "@/lib/utils";

import Image from "next/image";

interface Props {
  className?: string;
  imgClassName?: string;
}

export const MapIcon = ({ className = "", imgClassName = "" }: Props) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <Image
        src={mapIcon}
        alt="Pictogramme de carte"
        fill
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
};
