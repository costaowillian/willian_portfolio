import { Skills } from "@/constants/hardSkills";
import Badge from "../Badge/Badge";

interface Props {
  skills: Skills[];
}

export default function BadgeList({ skills }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill.id} skill={skill.name} />
      ))}
    </div>
  );
}
