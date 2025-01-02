import { Skills } from "./hardSkills";

export type ExperiencesContent = {
  id: number;
  title: string;
  image: string;
  duration: Content;
  experience: Content;
  tecnologies: Tecnlogies;
  learnings: Content;
};

export type Content = {
  title: string;
  content: string[];
};

export type Tecnlogies = {
  title: string;
  skills: Skills[];
};

export const EXPERIENCES_CONTENT: ExperiencesContent[] = [
  {
    id: 1,
    title: "Desenvolvedor Front-End | Gipsyy, FCamara",
    image: "/images/fcamara.jpg",

    duration: {
      title: "Atuação",
      content: ["08/2024 - Até o Momento"]
    },

    experience: {
      title: "Minha experiência:",
      content: [
        "Atuei no desenvolvimento de ecommerces, sites e interfaces intuitivas para plataformas como Totem seguindo os designs propostos, garantindo uma experiência de usuário eficiente e alinhada às expectativas do cliente. Realizei integrações com APIs, testes unitários para assegurar a qualidade do código e participei de reuniões para levantamento de requisitos e alinhamento técnico. Contribuí para a entrega de soluções escaláveis e bem documentadas, sempre focando na colaboração e melhoria contínua."
      ]
    },

    tecnologies: {
      title: "Tecnologias que utilizei:",
      skills: [
        { id: 1, name: "Next.js" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "React.js" },
        { id: 4, name: "Tailwind CSS" },
        { id: 5, name: "Vitest" },
        { id: 6, name: "Ky.js" },
        { id: 7, name: "Git" },
        { id: 8, name: "Jira" },
        { id: 9, name: "React Hook Forms" },
        { id: 10, name: "Framer Motion" }
      ]
    },

    learnings: {
      title: "Aprendizados:",
      content: [
        "Aprofundei meu conhecimento em desenvolvimento de interfaces de usuário com Next.js e React.js, aplicando boas práticas para garantir usabilidade e performance.",
        "Aprendi a realizar integrações eficientes com APIs utilizando Ky.js, melhorando a comunicação entre serviços.",
        "Desenvolvi habilidades em metodologias ágeis, participando ativamente de dailies, plannings, reviews e retrospectivas para alinhar metas e esforços do time.",
        "Ganhei experiência em colaboração de equipes utilizando Git e Jira, assegurando organização e transparência ao longo de todas as etapas do desenvolvimento."
      ]
    }
  },
  {
    id: 2,
    title: "Desenvolvedor Full Stack Trainee | Fcamara",
    image: "/images/trainee.jpg",

    duration: {
      title: "Atuação",
      content: ["04/2024 - Até o Momento"]
    },

    experience: {
      title: "Minha experiência:",
      content: [
        "Participei do programa de formação da empresa, com foco no aprendizado intensivo de tecnologias do ecossistema Java, React e na aplicação prática do conhecimento em projetos desafiadores. Durante o programa, contribui para o desenvolvimento de um projeto interno que visava melhorar o cotidiano dos colaboradores, aplicando conceitos de inovação e eficiência."
      ]
    },

    tecnologies: {
      title: "Tecnologias que utilizei:",
      skills: [
        { id: 1, name: "Java" },
        { id: 2, name: "Jakarta EE" },
        { id: 3, name: "Spring Boot" },
        { id: 4, name: "Spring Data" },
        { id: 5, name: "Spring Security" },
        { id: 6, name: "Flyway" },
        { id: 7, name: "Docker" },
        { id: 8, name: "MySQL" },
        { id: 9, name: "MongoDB" },
        { id: 10, name: "Test Containers" },
        { id: 11, name: "React.js" },
        { id: 12, name: "Next.js" },
        { id: 13, name: "Vitest" },
        { id: 14, name: "Git" },
        { id: 13, name: "Jest" }
      ]
    },

    learnings: {
      title: "Aprendizados:",
      content: [
        "Aprendi a desenvolver APIs RESTful robustas utilizando tecnologias como Java, Jakarta EE, Spring Boot, Spring Data e Spring Security.",
        "Ganhei experiência no uso de ferramentas de migração de banco de dados com Flyway, além de trabalhar com bancos relacionais (MySQL) e não relacionais (MongoDB).",
        "Fortaleci habilidades práticas em Docker para virtualização de aplicações e em Test Containers para testes integrados com bancos de dados.",
        "Participei de eventos técnicos, como guildas e workshops, ampliando meu conhecimento em áreas como QA, Frontend/Backend, Agile e UI/UX Design.",
        "Recebi acompanhamento personalizado de um mentor, permitindo uma troca rica de experiências e o desenvolvimento de soft e hard skills."
      ]
    }
  },
  {
    id: 3,
    title: "Desenvolvedor Web Front-end | Conexão Azul",
    image: "/images/conexao_azul.jpg",

    duration: {
      title: "Atuação",
      content: ["04/2023 - 03/2024"]
    },

    experience: {
      title: "Minha experiência:",
      content: [
        "Atuei no desenvolvimento de interfaces de usuário responsivas e funcionais, utilizando tecnologias front-end para criar experiências de usuário intuitivas e eficientes. Realizei testes de usabilidade para coletar feedback dos usuários e otimizei fluxos de usuário para garantir que tarefas pudessem ser concluídas com facilidade."
      ]
    },

    tecnologies: {
      title: "Tecnologias que utilizei:",
      skills: [
        { id: 1, name: "Python" },
        { id: 2, name: "HTML" },
        { id: 3, name: "XML" },
        { id: 4, name: "CSS" },
        { id: 5, name: "JavaScript" }
      ]
    },

    learnings: {
      title: "Aprendizados:",
      content: [
        "Adquiri habilidades avançadas no desenvolvimento de interfaces de usuário utilizando HTML, CSS, XML, JavaScript e Python.",
        "Fortaleci minha capacidade de realizar testes de usabilidade, coletar feedback dos usuários e implementar melhorias com base nos resultados.",
        "Desenvolvi expertise na criação de fluxos de usuário, garantindo que as interfaces fossem intuitivas e eficientes.",
        "Ganhei experiência na personalização de campos, modelos e visões para melhorar a usabilidade e a satisfação dos usuários.",
        "Aprimorei práticas de design de UI, mantendo consistência em todos os projetos e garantindo integração eficaz com APIs e serviços de back-end.",
        "Resolvi problemas técnicos e funcionais relacionados às interfaces, assegurando alta qualidade e funcionalidade."
      ]
    }
  }
];
