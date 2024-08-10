import React from "react";
import banner from "../assets/_img/display_banner.png";
import gifCode from "../assets/_animacoes/responsivo.gif";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero min-h-[70vh] min-w-[70vh]">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img src={banner} className="max-w-lg" alt="banner_willian" />
          <div>
            <img src={gifCode} className="w-[62px]" alt="gif_code" />
            <h1 className="text-5xl font-bold">Willian Costa</h1>
            <h3 className="text-3xl">Desenvolvedor Full-Stack</h3>
            <p className="py-6">
              Sou desenvolvedor full-stack, com grande foco em Front-end e na
              criação de experiências centradas no usuário.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
