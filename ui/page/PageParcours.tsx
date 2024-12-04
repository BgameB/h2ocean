"use client";

import { useUser } from "@/context/UserContext";
import landscape from "@/img/picture/landscape.jpg";
import { IParcours } from "@/lib/type";
import { Chapter } from "@/ui/components/chapter/Chapter";

import PlayerProfile from "@/ui/components/playerProfile/PlayerProfile";

export default function PageParcours({ data }: IParcours[]) {
  const { getProgress } = useUser();

  return (
    <div className="flex gap-[40px] max-md:mb-[100px]">
      <div className="flex gap-[40px] flex-col w-full">
        {data.map((parcour: IParcours) => {
          return (
            <Chapter
              key={parcour.id}
              title={parcour.name}
              img={landscape}
              alt="picto"
              description={parcour.description}
              current={getProgress(parcour.id)}
              max={parcour.quizCorrectList.length + parcour.quizList.length}
            />
          );
        })}

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
      <div className="max-lg:hidden flex flex-col min-w-[450px]">
        <div className="border-[#37464F] border-[3px] p-[10px] rounded-[20px] flex flex-col bg-tertiary">
          <div className="text-[16px] flex flex-col gap-[5px]">
            <PlayerProfile level={9} maxLevel={15} xp={1500} />
          </div>
        </div>
      </div>
    </div>
  );
}
