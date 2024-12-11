"use client";

import { useParams } from "next/navigation";
import { CONTENT_COMPONENTS } from "./_components/ComponentsRegister/ComponentsRegister";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import NavBar from "@/components/Navbar/NavBar";
import Image from "next/image";
import Contact from "@/components/Contact/Contact";

export default function Page() {
  const { params } = useParams();

  // Verifica se o parâmetro principal está presente
  const ContentComponent = params && CONTENT_COMPONENTS[params[0]];

  // Garante que params é um array ou undefined
  let paramsArray: string[] | undefined;

  if (Array.isArray(params)) {
    paramsArray = params;
  } else if (params) {
    paramsArray = [params];
  } else {
    paramsArray = undefined;
  }

  if (!ContentComponent) {
    return <p>Conteúdo não encontrado</p>;
  }

  return (
    <section className="container">
      <section className="mx-4 sm:mx-0">
        <HomeBanner size="sm" classNames="hidden sm:flex" />

        <div className="hidden sm:flex mb-10">
          <NavBar />
        </div>

        <div className="flex sm:flex-row flex-col gap-10 items-start mb-10 sm:mb-10">
          <Image
            src={"/icons/circles-green-portrait.svg"}
            width={51}
            height={136}
            alt="Elemento de circulos"
            className="sm:flex hidden"
          />

          <Image
            src={"/icons/circles-green.svg"}
            width={136}
            height={51}
            alt="Elemento de circulos"
            className="sm:hidden"
          />

          <ContentComponent params={paramsArray?.slice(1)} />
        </div>

        <Contact />
      </section>
    </section>
  );
}
