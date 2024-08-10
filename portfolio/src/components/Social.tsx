import React from "react";
import { SOCIAL_MEDIA } from "../constants/RedesSociais";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Social = () => {
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
      <div className="flex items-center justify-center">
        {SOCIAL_MEDIA.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-8 text-gray-700 hover:text-custom-purple transition-colors duration-300"
            aria-label={item.name}
          >
            <FontAwesomeIcon icon={item.icon} size="4x" />
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Social;
