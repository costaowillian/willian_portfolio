import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../../components/Banner";
import { motion } from "framer-motion";

jest.mock("framer-motion", () => ({
    ...jest.requireActual("framer-motion"),
    motion: {
      div: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    },
  }));

test("deve renderizar o componente Banner com todos os elementos", () => {
  render(<Banner />);

  const bannerImage = screen.getByAltText("banner_willian");
  const gifImage = screen.getByAltText("gif_code");

  expect(bannerImage).toBeInTheDocument();
  expect(gifImage).toBeInTheDocument();

  const heading = screen.getByText("Willian Costa");
  const subheading = screen.getByText("Desenvolvedor Full-Stack");
  const paragraph = screen.getByText(
    /Sou desenvolvedor full-stack, com grande foco em Front-end/i
  );

  expect(heading).toBeInTheDocument();
  expect(subheading).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
