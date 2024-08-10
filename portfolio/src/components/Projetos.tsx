import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJETOS } from "../constants/ProjetosConstant";

const Projetos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero mt-[100px]">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">
              Últimos projetos desenvolvidos
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {PROJETOS.map((projeto) => (
                <a key={projeto.id} href={projeto.link}>
                  <div className="card bg-base-100 w-96 shadow-xl bg-custom-green h-[440px]">
                    <figure className="px-10 pt-10">
                      <img
                        src={projeto.img}
                        alt={projeto.title}
                        className="rounded-xl"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-white font-bold">
                        {projeto.title}
                      </h2>
                      <p className="text-white">{projeto.descricao}</p>
                      <div className="flex gap-2 flex-wrap">
                        {projeto.tecnologias.map((el) => (
                          <div
                            key={el.id}
                            className="badge badge-outline text-white"
                          >
                            {el.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projetos;
