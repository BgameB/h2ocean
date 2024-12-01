"use client";

import { useUser } from "@/context/UserContext";
import landscape from "@/img/picture/landscape.jpg";
import { Chapter } from "@/ui/components/chapter/Chapter";

export default function LearnPage() {
  const { user } = useUser();

  return (
    <div className="flex gap-[40px] max-md:mb-[100px]">
      <div className="flex gap-[40px] flex-col">
        <Chapter
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
        />
      </div>
      <div className="max-lg:hidden flex flex-col min-w-[300px]">
        <div className="border-[#37464F] border-[3px] p-[10px] rounded-[20px] flex flex-col">
          <p className="font-bold text-[35px] mb-[20px]">Mon Profil</p>
          <div className="text-[16px] flex flex-col gap-[5px]">
            <p>Pseudo : {user.username}</p>
            <p>Pseudo : {""}</p>
            <p>Pseudo : {""}</p>
            <p>Pseudo : {""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
