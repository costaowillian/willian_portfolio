import { render, screen } from "@testing-library/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Sobre from "../../components/Sobre";

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

jest.mock("../../components/CardHobbies", () => () => (
  <div data-testid="card-hobbies" />
));

describe("Sobre Componet", () => {
  test("Deve rendereizar o componente Sobre com todos os elementos, incluindo o parágrafo", () => {
    render(<Sobre />);

    const cardHobbies = screen.getByTestId("card-hobbies");
    expect(cardHobbies).toBeInTheDocument();

    const sideTitle = screen.getByText("Quem sou?");
    const title = screen.getByText("Um pouco sobre o Willian");
    const paragraph = screen.getByText(
      /Tem 28 anos, pai de pet que ama ouvir música, praias/i
    );
    const paragraph2 = screen.getByText(
      /Seu objetivo é crescer profissionalmente, focando no desenvolvimento/i
    );

    expect(sideTitle).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });
});
