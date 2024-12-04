"use client";

import { calculatePercentage } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: string;
  current: number;
  max: number;
  img: StaticImageData;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export const Chapter = ({
  title,
  description,
  current,
  max,
  img,
  alt,
  className = "",
  imgClassName = "",
}: Props) => {
  return current === max ? (
    <section
      className={cn(
        "rounded-[15px] grid grid-cols-2 p-[25px] bg-tertiary shadow-md border-gold border-[3px] max-w-[800px] gap-[20px] max-sm:flex max-sm:flex-col w-full backdrop-contrast-100",
        className
      )}
    >
      <div className="relative max-w-[320px] h-[220px] bg-black rounded-[5px] overflow-hidden max-sm:max-w-full">
        <Image
          src={img}
          alt={alt}
          className={cn("object-cover", imgClassName)}
          placeholder="blur"
          fill
        />
      </div>
      <div className="flex flex-col">
        <p className="mb-[10px] text-[25px] font-bold">{title}</p>
        <div className="h-[20px] rounded-full w-full bg-gray-200 relative overflow-hidden max-sm:mb-[20px]">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${calculatePercentage(current, max)}%` }}
          />
          <div className="absolute inset-0 flex justify-center items-center text-background font-bold text-[14px] max-sm:text-[12px]">
            {current} / {max}
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <button className="rounded-[8px] bg-[#1CB0F6] font-dinroundpro font-bold tracking-[1.5px] p-[10px] hover:opacity-90 cursor-pointer w-full">
            POURSUIVRE
          </button>
        </div>
      </div>
    </section>
  ) : (
    <section
      className={cn(
        "rounded-[15px] bg-tertiary grid grid-cols-2 p-[25px] border-[#37464F] border-[3px] max-w-[800px] gap-[20px] max-sm:flex max-sm:flex-col max-sm:gap-[10px] w-full",
        className
      )}
    >
      <div className="relative max-w-[320px] h-[220px] bg-black rounded-[5px] overflow-hidden max-sm:max-w-full">
        <Image
          src={img}
          alt={alt}
          className={cn("object-cover", imgClassName)}
          placeholder="blur"
          fill
        />
      </div>
      <div className="flex flex-col">
        <p className="mb-[10px] text-[25px] font-bold">{title}</p>
        <div className="h-[20px] rounded-full w-full bg-gray-200 relative overflow-hidden max-sm:mb-[10px]">
          <div
            className="h-full bg-green transition-all duration-300"
            style={{ width: `${calculatePercentage(current, max)}%` }}
          />
          <div className="absolute inset-0 flex justify-center items-center text-background font-bold text-[14px] max-sm:text-[12px]">
            {current} / {max}
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <a href="/lesson" className="w-full">
            <button className="rounded-[8px] bg-[#1CB0F6] font-dinroundpro font-bold tracking-[1.5px] p-[10px] hover:opacity-90 cursor-pointer w-full">
              POURSUIVRE
            </button>
          </a>
        </div>
      </div>
      <div className="bg-primary p-[10px] text-[18px] rounded-[10px] w-full col-span-2 border-b-[3px] border-[#37464F]">
        {description}
      </div>
    </section>
  );
};
