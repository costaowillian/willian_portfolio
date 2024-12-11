"use client";

import Image from "next/image";

import Button from "@/components/Button/Button";
import Social from "@/components/Social/Social";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import NavBar from "@/components/Navbar/NavBar";
import Stack from "@/components/Stack/Stack";
import CardList from "@/components/CardList/CardList";
import Contact from "@/components/Contact/Contact";
import { SOCIAL_MEDIA } from "@/constants/contact";
import CustomIconLink from "@/components/CustomIconLink/CustomIconLink";

export default function Home() {
  return (
    <div className="container">
      <section className="mx-4 sm:mx-0 ">
        <HomeBanner size="lg" />

        <div className="hidden sm:flex mb-20">
          <NavBar />
        </div>

        <section className="flex flex-col gap-20 mt-10">
          <section className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="text-4xl sm:text-5xl font-bold">
                Descubra um pouco sobre o Willian
              </h2>
              <Button
                title={"Saiba mais"}
                iconSlot="/icons/arrow.svg"
                click={() => {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="w-[535px] hidden sm:flex items-center justify-center">
                <Image
                  src={"/icons/circles-green.svg"}
                  width={136}
                  height={51}
                  alt="Elemento de circulos"
                />
              </div>

              <p className="w-full text-xl">
                Sou desenvolvedor full stack com formação em Desenvolvimento de
                Sistemas e especialização em front-end e UI Design. Tenho sólida
                experiência com tecnologias como Node.js, React.js, Java, Spring
                Boot e TypeScript/JavaScript. Além disso, possuo uma formação em
                Marketing e um MBA em Marketing Estratégico Digital, o que me
                permite unir habilidades técnicas e visão estratégica para
                entregar soluções inovadoras e impactantes.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-center">
              {SOCIAL_MEDIA.map((item) => (
                <CustomIconLink key={item.id} data={item} />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl w-full font-bold">
                Empresas e Projetos onde Deixei minha Marca
              </h2>

              <p className="text-xl w-full">
                Contribuí para projetos estratégicos em empresas de destaque,
                desenvolvendo soluções digitais. Meu trabalho sempre foi
                orientado pela criação de interfaces intuitivas e sistemas
                robustos, com foco em aprimorar a experiência do usuário e
                otimizar a eficiência.
              </p>
            </div>

            <Stack />
          </section>

          <section className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Image
                src={"/icons/circles-green.svg"}
                width={136}
                height={51}
                alt="Elemento de circulos"
              />

              <h2 className="text-4xl sm:text-5xl font-bold">Hard Skills</h2>
            </div>

            <p className="w-full text-xl text-center sm:text-left">
              Durante minha jornada, tive a oportunidade de aprender e aplicar
              tecnologias inovadoras que têm moldado e aprimorado minhas
              habilidades continuamente.
            </p>

            <CardList />
          </section>

          <Contact />
        </section>
      </section>
    </div>
  );
}
