import { HardSkills } from "@/constants/hardSkills";
import Badge from "@/components/Badge/Badge";
import Image from "next/image";

interface Props {
  skill: HardSkills;
}

export default function Card({ skill }: Props) {
  return (
    <div className="card card-compact bg-soft_white w-96 shadow-lg justify-between">
      <div className="card-body">
        <Image
          className="w-[72px]"
          width={72}
          height={72}
          src={skill.img}
          alt={skill.type}
        />

        <h2 className="card-title font-bold">{skill.type}</h2>

        <div className="flex gap-2 flex-wrap">
          {skill.skills.map((el) => (
            <Badge key={el.id} skill={el.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
