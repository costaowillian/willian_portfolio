import { TSkill } from "./Skill.type";

export type THardSkill = {
  id: number;
  type: string;
  img: string;
  skills: TSkill[];
};
