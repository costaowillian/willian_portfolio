import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { motion, useInView } from "framer-motion";
import Projetos from "../../components/Projetos";
import { PROJETOS } from "../../constants/ProjetosConstant";

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

describe("Projetos Componet", () => {
  test("Deve renderizar o component Projetos e todos os projetos com suas respectivas tecnologias", () => {
    render(<Projetos />);

    const title = screen.getByText("Últimos projetos desenvolvidos");
    expect(title).toBeInTheDocument();

    PROJETOS.forEach((projeto) => {
      const projectTitle = screen.getByText(projeto.title);
      expect(projectTitle).toBeInTheDocument();

      const projectDecription = screen.getByText(projeto.descricao);
      expect(projectDecription).toBeInTheDocument();

      projeto.tecnologias.forEach((tech) => {
        const techBadges = screen.getAllByText(tech.name);
        expect(techBadges.length).toBeGreaterThan(0);
      });
    });
  });
});
