import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { motion, useInView } from "framer-motion";
import Skills from "../../components/Skills";
import { HARD_SKILLS } from "../../constants/HardSkills";

jest.mock("framer-motion", () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    div: ({ children }: { children: ReactNode }) => <div>{children}</div>
  }
}));

jest.mock("react-intersection-observer", () => ({
  useInView: () => ({
    ref: jest.fn(),
    inView: true
  })
}));

describe("Skills Component", () => {
  test("Deve rendereizar o componente Skills com todos os elementos", () => {
    render(<Skills />);
    const title = screen.getByText(/Programing Skills/i);
    expect(title).toBeInTheDocument();

    HARD_SKILLS.forEach((skill) => {
      const skillGif = screen.getByAltText(skill.type);
      expect(skillGif).toBeInTheDocument();

      const skillTitle = screen.getByText(skill.type);
      expect(skillTitle).toBeInTheDocument();

      skill.skills.forEach((el) => {
        const skillBadge = screen.getByText(el.name);
        expect(skillBadge).toBeInTheDocument();
      });
    });
  });
});
