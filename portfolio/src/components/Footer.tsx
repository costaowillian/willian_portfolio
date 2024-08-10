import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-gray-100">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
