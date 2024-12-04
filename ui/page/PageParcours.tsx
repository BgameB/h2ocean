"use client";

import { useUser } from "@/context/UserContext";
import landscape from "@/img/picture/landscape.jpg";
import { IParcours } from "@/lib/type";
import { Chapter } from "@/ui/components/chapter/Chapter";
import { motion } from "framer-motion";

import { LEVELS_XP } from "@/lib/constant";
import { getLevelFromXP } from "@/lib/utils";
import PlayerProfile from "@/ui/components/playerProfile/PlayerProfile";

export default function PageParcours({ data }: IParcours[]) {
  const { getProgress, user } = useUser();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="flex gap-[40px] max-md:mb-[100px] overflow-hidden">
      <div className="flex gap-[40px] flex-col w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {data.map((parcour: IParcours) => {
            return (
              <motion.div
                key={parcour.id}
                variants={itemVariants}
                className="mb-8 "
              >
                <Chapter
                  parcour={parcour}
                  className="mx-auto"
                  title={parcour.name}
                  img={landscape}
                  alt="picto"
                  description={parcour.description}
                  current={getProgress(parcour.id)}
                  max={parcour.quizCorrectList.length + parcour.quizList.length}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* <Chapter
          title="Chapitre 1"
          img={landscape}
          alt="picto"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam."
          }
          current={10}
          max={10}
        />
        <Chapter
          title="Chapitre 1"
          img={landscape}
          alt="picto"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam."
          }
          current={5}
          max={10}
        /> */}
      </div>
      <div className="flex flex-col min-w-[450px] mr-auto max-xl:hidden">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <div className="border-[#37464F] border-[3px] p-[10px] rounded-[20px] flex flex-col bg-tertiary">
            <div className="text-[16px] flex flex-col gap-[5px]">
              <PlayerProfile
                level={getLevelFromXP(user.xp)}
                maxLevel={LEVELS_XP.length + 1}
                xp={user.xp}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
