"use client";
import { cn } from "@/lib/utils";
import { ChestIcon } from "@/ui/design-system/image/ChestIcon";
import { GlobalIcon } from "@/ui/design-system/image/GlobalIcon";
import { MapIcon } from "@/ui/design-system/image/MapIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

import teamIcon from "@/img/icon/teamIcon.svg";
import FaqIcon from "@/img/icon/faqIcon.png";

interface Props {
  className: string;
}

export const Navbar = ({ className = "" }: Props) => {
  const path = usePathname();
  const navItems = [
    {
      href: "/learn",
      text: "PARCOURS",
      icon: <MapIcon />,
    },
    {
      href: "/quest",
      text: "QUETES",
      icon: <ChestIcon />,
    },
    {
      href: "/team",
      text: "EQUIPE",
      icon: <GlobalIcon img={teamIcon} alt="Pictogramme d'équipe" />,
    },
    {
      href: "/faq",
      text: "EQUIPE",
      icon: <GlobalIcon img={FaqIcon} alt="Pictogramme d'équipe" />,
    },
  ];

  return (
    <nav
      className={cn(
        "fixed flex-col h-screen px-[40px] pt-[20px] border-r-2 border-[#37464F] max-md:flex-row max-md:max-h-[100px] max-md:w-full max-md:border-r-0 max-md:border-t-2 max-md:bottom-0 z-[999] bg-tertiary",
        className
      )}
    >
      <h1 className="font-black text-[40px] mb-[50px] max-md:hidden text-center">
        H2OCEAN
      </h1>

      <section className="flex flex-col gap-[20px] max-md:flex-row max-md:justify-evenly">
        {navItems.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "flex gap-[20px] w-full rounded-[10px] p-[10px] hover:bg-primary duration-200 cursor-pointer max-md:justify-center items-center max-md:w-fit tracking-[1.2px]",
                path === item.href &&
                  "outline outline-[3px] outline-[#3F85A7] bg-tertiary"
              )}
            >
              <div className="relative w-[35px] h-[35px]">{item.icon}</div>
              <p className="font-black text-[18px] mr-[50px] max-md:hidden">
                {item.text}
              </p>
            </Link>
          );
        })}
      </section>
    </nav>
  );
};
