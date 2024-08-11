import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardHobbies = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
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
    <div className="card bg-custom-green w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <div className="bg-base-100 w-[350px] h-[230px] rounded-lg relative">
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={item}>
              {" "}
              <div className="badge badge-outline p-4 w-[112px] transform rotate-12 absolute top-12 left-6">
                Jogar
              </div>
            </motion.li>
            <motion.li variants={item}>
              {" "}
              <div className="w-[112px] transform rotate-12 absolute top-4 left-20">
                <FontAwesomeIcon icon={faDumbbell} size="2x" data-testid="dumbbell" />
              </div>
            </motion.li>
            <motion.li variants={item}>
              {" "}
              <div className="badge badge-outline p-4 w-[112px] transform -rotate-6 absolute top-12 left-34">
                Pintura
              </div>
            </motion.li>
            <motion.li variants={item}>
              {" "}
              <div className="badge badge-outline p-4 w-[112px] transform rotate-2 absolute top-32 left-6">
                Viajar
              </div>
            </motion.li>
            <motion.li variants={item}>
              {" "}
              <div className="w-[112px] transform rotate-3 absolute top-24 left-24">
                <FontAwesomeIcon icon={faSpotify} size="2x" data-testid="spotify" />
              </div>
            </motion.li>
            <motion.li variants={item}>
              {" "}
              <div className="badge badge-outline p-4 w-[112px] transform -rotate-45 absolute top-32 left-34">
                Malhar
              </div>
            </motion.li>
            <motion.li variants={item}>
              {" "}
              <div className="w-[112px] transform absolute top-44 left-4">
                <FontAwesomeIcon icon={faPalette} size="2x" data-testid="palette"/>
              </div>
            </motion.li>
            <motion.li variants={item}>
              {" "}
              <div className="w-[112px] transform -rotate-12 absolute top-44 left-52">
                <FontAwesomeIcon icon={faCompass} size="2x" data-testid="compass" />
              </div>
            </motion.li>
          </motion.ul>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-white">Hobbies</h2>
      </div>
    </div>
  );
};

export default CardHobbies;
