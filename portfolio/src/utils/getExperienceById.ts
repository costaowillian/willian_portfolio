import { EXPERIENCES_CONTENT } from "@/constants/experiencesContent";

export function getExperienceById(id: number) {
  return EXPERIENCES_CONTENT.find((exp) => exp.id === id) || null;
}
