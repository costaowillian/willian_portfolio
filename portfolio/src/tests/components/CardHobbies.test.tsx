import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { motion, useInView } from "framer-motion";
import CardHobbies from "../../components/CardHobbies";
import {
  faSpotify
} from "@fortawesome/free-brands-svg-icons";
import {
  faDumbbell as faDumbbellSolid,
  faCompass as faCompassSolid,
  faPalette as faPaletteSolid
} from "@fortawesome/free-solid-svg-icons";

jest.mock("framer-motion", () => ({
  ...jest.requireActual("framer-motion"),
  motion: {
    ul: ({ children }: { children: React.ReactNode }) => <ul>{children}</ul>,
    li: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
  }
}));

jest.mock("react-intersection-observer", () => ({
  useInView: () => ({
    ref: jest.fn(),
    inView: true
  })
}));

describe("CardHobies Component", () => {
  test("eve renderizar o componente CardHobbies e todos os itens de hobbies com seus ícones e badges", () => {
    render(<CardHobbies />);
    const title = screen.getByText(/Hobbies/i);
    expect(title).toBeInTheDocument();

    const badges = ["Jogar", "Pintura", "Viajar", "Malhar"];
    badges.forEach((badge) => {
      const badgeElement = screen.getByText(badge);
      expect(badgeElement).toBeInTheDocument();
    });

    const icons = [faDumbbellSolid, faSpotify, faPaletteSolid, faCompassSolid];
    icons.forEach((icon) => {
        const iconElement = screen.getByTestId(icon.iconName);
        expect(iconElement).toBeInTheDocument();
    })
  });
});
