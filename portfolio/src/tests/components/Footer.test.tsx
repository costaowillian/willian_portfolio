import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer Component", () => {
  test("Deve exibir o texto de copyright corretamente", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright © ${currentYear} - Todos os direitos reservados`;

    expect(screen.getByText(copyrightText)).toBeInTheDocument();
  });
});
