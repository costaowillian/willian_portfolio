"use client";

import Image from "next/image";

import BadgeList from "@/components/BadgeList/BadgeList";
import { ExperiencesContent } from "@/constants/experiencesContent";
import ContentList from "@/components/ContentList/ContentList";

type ExperienceProps = {
  data: ExperiencesContent;
};

export function ExperienceContent({ data }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl sm:text-5xl font-bold">{data.title}</h2>

      <Image
        src={data.image}
        width={1198}
        height={440}
        alt="Imagem do Willian"
        className="rounded-2xl align-middle my-4"
      />

      <p className="text-sm font-bold">{data.duration.title}</p>

      <ContentList content={data.duration.content} />

      <p className="text-sm font-bold">{data.experience.title}</p>

      <ContentList content={data.experience.content} />

      <p className="text-sm font-bold">{data.tecnologies.title}</p>

      <BadgeList skills={data.tecnologies.skills} />

      <p className="text-sm font-bold">{data.learnings.title}</p>

      <ContentList content={data.learnings.content} />

      <div className="w-full flex items-center justify-center mt-7">
        <Image
          src={"/icons/circles-green-sm.svg"}
          height={67}
          width={29}
          alt="Elemento de circulos"
        />
      </div>
    </div>
  );
}
