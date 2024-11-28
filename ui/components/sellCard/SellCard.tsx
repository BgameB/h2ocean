"use client";

import clsx from "clsx";
import Image from "next/image";
import { HeartIcon } from "../../design-system/svg/HeartIcon";
import { Typography } from "../../design-system/typography/Typography";
import { useEffect, useState } from "react";


interface Props {
  favorie?: boolean;
  className?: string;
}

export const SellCard = ({ favorie = false, className }: Props) => {

  const [isFavorie, setIsFavorie] = useState(favorie);

  const handleToggleFavorie = () => {
    setIsFavorie(!isFavorie);
  };

  useEffect(() => {
   
  }, [isFavorie])
  

  return (
    <div
      className={clsx(
        "w-full h-[585px] max-xl:h-[485px] max-sm:h-[280px]",
        className
      )}
    >
      <div className="h-[500px] bg-[#F4F4F4] p-[22px] max-sm:p-[11px] flex flex-col max-xl:h-[400px] max-sm:h-[200px]">
        <div className="flex justify-end z-10">
          <button className="relative min-h-[24px]" onClick={handleToggleFavorie}>
            <HeartIcon filled={isFavorie}/>
          </button>
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/img/cidre-template.png"
            alt="Cidre breton parfumé à la poire"
            className="w-full h-full object-cover hover:scale-110 ease-in duration-150"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Typography font="quicksand" className="font-semibold pt-3 max-sm:text-[12px]">
          Cidre breton parfumé à la poire
        </Typography>
        <Typography font="outfit" color="black" className="font-light mb-1">
          2.50€
        </Typography>
      </div>
    </div>
  );
};
