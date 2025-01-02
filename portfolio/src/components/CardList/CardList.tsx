import { HARD_SKILLS } from "@/constants/hardSkills";
import Card from "@/components/Card/Card";

export default function CardList() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 md:flex-nowrap">
      {HARD_SKILLS.map((skill) => (
        <Card key={skill.id} skill={skill} />
      ))}
    </div>
  );
}
