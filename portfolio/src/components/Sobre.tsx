import React from "react";
import CardHobbies from "./CardHobbies";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Sobre = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <div className="hero min-h-screen">
      <div className="absolute left-0 top-50 transform -translate-y-1/2h-full w-[183px] h-[600px] flex items-center justify-center bg-custom-green rounded-r-lg hidden ms:hidden lg:flex">
        <p className="text-3xl transform -rotate-90 text-white font-bold tracking-widest">
          Quem sou?
        </p>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-content text-center mx-[20px]">
          <div className="">
            <h1 className="text-5xl font-bold">Um pouco sobre o Willian</h1>
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <CardHobbies />

                <div>
                  <p className="py-6 font-bold text-start">
                    Tem 28 anos, pai de pet que ama ouvir música, praias, jogar
                    nas horas vagas e mora em Feira de Santana, Ba.
                    <br />
                    <br />
                    Desenvolvedor full stack com formação em Desenvolvimento de
                    Sistemas, especializado em desenvolvimento front-end e UI
                    Design. Tenho habilidades em Node.js, React.js, Java, Spring
                    Boot, TypeScript/JavaScript, Docker, Microserviços, bancos
                    de dado. Conto também com formação em Marketing e um MBA em
                    Marketing Estratégico Digital.
                    <br />
                    <br />
                    Seu objetivo é crescer profissionalmente, focando no
                    desenvolvimento de sistemas e contribuindo para a criação de
                    produtos digitais inovadores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sobre;
