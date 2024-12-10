import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Willian Costa | portfólio",
  description:
    "Sou um desenvolvedor apaixonado por criar soluções web. Com experiência em React, Next.js e outras tecnologias modernas, busco sempre entregar projetos funcionais, escaláveis e com excelente usabilidade."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased flex flex-col pb-[90px] sm:pb-0`}
      >
        {children}
      </body>
    </html>
  );
}
