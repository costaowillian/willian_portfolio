import React, { ReactNode } from "react";
import { getByRole, render, screen } from "@testing-library/react";
import { motion, useInView } from "framer-motion";
import Social from "../../components/Social";
import { SOCIAL_MEDIA } from "../../constants/RedesSociais";

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

describe("Social Component", () => {
  test("Deve rendereizar o componente Social Component", () => {
    render(<Social />);
    SOCIAL_MEDIA.forEach((item) => {
      const icon = screen.getByLabelText(item.name);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute("href", item.url);
    });
  });
});
