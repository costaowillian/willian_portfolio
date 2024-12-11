"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import Button from "@/components/Button/Button";
import Social from "@/components/Social/Social";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import NavBar from "@/components/Navbar/NavBar";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="container">
      <section className="mx-4 sm:mx-0 ">
        <HomeBanner size="lg" />

        <div className="hidden sm:flex mb-20">
          <NavBar />
        </div>

        <section className="flex flex-col gap-20 mt-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.5 }}
          >
            <section className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="text-4xl sm:text-5xl">
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
                  Sou desenvolvedor full stack com formação em Desenvolvimento
                  de Sistemas e especialização em front-end e UI Design. Tenho
                  sólida experiência com tecnologias como Node.js, React.js,
                  Java, Spring Boot e TypeScript/JavaScript. Além disso, possuo
                  uma formação em Marketing e um MBA em Marketing Estratégico
                  Digital, o que me permite unir habilidades técnicas e visão
                  estratégica para entregar soluções inovadoras e impactantes.
                </p>
              </div>
            </section>
          </motion.div>

          <Social />

          <section>
            <div className="flex justify-between gap-10">
              <h2 className="text-4xl sm:text-5xl w-full">
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
          </section>
        </section>
      </section>
    </div>
  );
}
