"use client";

import { JSX } from "react/jsx-runtime";

import { ProfileContent } from "../ProfileContent/ProfileContent";
import { ExperienceContent } from "../ExperienceContent/ExperienceContent";
import { getExperienceById } from "@/utils/getExperienceById";

export const CONTENT_COMPONENTS: Record<
  string,
  ({ params }: { params?: string[] }) => JSX.Element
> = {
  profile: () => <ProfileContent />,
  experience: ({ params }) => {
    if (!params || params.length < 1) {
      return <p>Experiência não encontrada</p>;
    }

    const id = parseInt(params[0], 10);
    const experience = getExperienceById(id);

    if (!experience) {
      return <p>Experiência não encontrada</p>;
    }

    return <ExperienceContent data={experience} />;
  }
};
