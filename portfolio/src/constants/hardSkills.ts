export type HardSkills = {
  id: number;
  type: string;
  img: string;
  skills: Skills[];
};

export type Skills = {
  id: number;
  name: string;
};
export const HARD_SKILLS: HardSkills[] = [
  {
    id: 1,
    type: "Tecnologias",
    img: "/animacoes/computer.gif",
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
    img: "/animacoes/config.gif",
    skills: [
      { id: 1, name: "Next.JS" },
      { id: 2, name: "Express" },
      { id: 3, name: "Spring Boot" },
      { id: 4, name: "Spring Cloud" },
      { id: 5, name: "Sass" },
      { id: 6, name: "JUnit" },
      { id: 8, name: "Jest" },
      { id: 9, name: "Vitest" }
    ]
  },
  {
    id: 3,
    type: "Bibliotecas",
    img: "/animacoes/navegation.gif",
    skills: [
      { id: 1, name: "React Js" },
      { id: 2, name: "Axios" },
      { id: 3, name: "Bootstrap" },
      { id: 4, name: "Redux" },
      { id: 5, name: "Tailwind" }
    ]
  }
];
