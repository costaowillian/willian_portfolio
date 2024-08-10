import React from "react";
import { HARD_SKILLS } from "../constants/HardSkills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero bg-custom-green min-w-[50vh] min-h-[25vh] rounded-lg min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold text-white">Programing Skills</h1>
            <p className="py-6 text-white text-xl">
              Durrante minha jornada tive a oportunidade de aprender e utilizar
              tecnologias que moldam minhas Skills.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:flex-nowrap">
              {HARD_SKILLS.map((skill) => (
                <div
                  key={skill.id}
                  className="card card-compact bg-base-100 w-96 shadow-xl h-[220px]"
                >
                  <div className="card-body">
                    <img
                      className="w-[72px]"
                      src={skill.img}
                      alt={skill.type}
                    />
                    <h2 className="card-title font-bold">{skill.type}</h2>
                    <div className="flex gap-2 flex-wrap">
                      {skill.skills.map((el) => (
                        <div
                          key={el.id}
                          className="badge badge-primary bg-custom-purple border-0"
                        >
                          {el.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
