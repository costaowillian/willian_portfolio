import React from "react";
import tecnologiasGif from "../assets/_animacoes/computador-portatil.gif";
import framworksGif from "../assets/_animacoes/configuracoes.gif";
import libsIcon from "../assets/_animacoes/navegador.gif";

export const HARD_SKILLS = [
  {
    id: 1,
    type: "Tecnologias",
    img: tecnologiasGif,
    skills: [
      { id: 1, name: "Java" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "HTML5" },
      { id: 4, name: "CSS3" },
      { id: 5, name: "JavaScript" },
      { id: 6, name: "Node.js" },
      { id: 7, name: "MySQL" },
      { id: 8, name: "Docker" },
      { id: 9, name: "RabbitMQ" }
    ]
  },
  {
    id: 2,
    type: "Frameworks",
    img: framworksGif,
    skills: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Express" },
      { id: 3, name: "Spring Boot" },
      { id: 4, name: "Spring Cloud" },
      { id: 5, name: "Sass" },
      { id: 6, name: "JUnit" },
      { id: 7, name: "React Native" }
    ]
  },
  {
    id: 3,
    type: "Bibliotecas",
    img: libsIcon,
    skills: [
      { id: 1, name: "React Js" },
      { id: 2, name: "Axios" },
      { id: 3, name: "Bootstrap" },
      { id: 4, name: "Redux" },
      { id: 5, name: "Tailwind" }
    ]
  }
];
