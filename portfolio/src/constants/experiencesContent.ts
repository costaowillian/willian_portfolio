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
    title: "Desenvolvedor front-End | Gipsyy, FCamara",
    image: "/images/image 3.jpg",

    duration: {
      title: "Atuação",
      content: ["04/2024 - Até o Momento"]
    },

    experience: {
      title: "Minha experiência:",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sit amet arcu id imperdiet. Ut porttitor metus a suscipit lobortis. Mauris ut commodo nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut quam dignissim, vehicula lectus et, bibendum massa. Suspendisse tincidunt auctor leo vitae bibendum. Pellentesque quis augue at quam fringilla vehicula ut nec leo. Pellentesque et felis condimentum, vulputate turpis a, lobortis ipsum.",
        " Quisque turpis velit, pulvinar eget dignissim sit amet, eleifend id est. Nullam lacinia sit amet leo ac vestibulum. Ut tempor libero sed semper semper. Morbi eu risus at lectus faucibus varius eu at risus. Nunc vehicula nunc nec augue pretium, ut eleifend sem semper. Morbi mattis eget ipsum mollis consequat. Nam dolor magna, convallis eu metus pellentesque, placerat lacinia augue. Morbi lobortis eros convallis mauris aliquet scelerisque. Mauris convallis diam nulla, at imperdiet diam tincidunt non. Vestibulum ac sagittis dolor. Cras aliquam diam et justo vulputate dapibus. Nunc porta accumsan vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut neque neque. Donec dapibus faucibus leo, non finibus nibh commodo id."
      ]
    },

    tecnologies: {
      title: "Tencologias que utilizei:",
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

    learnings: {
      title: "Aprendizados:",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sit amet arcu id imperdiet. Ut porttitor metus a suscipit lobortis. Mauris ut commodo nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut quam dignissim, vehicula lectus et, bibendum massa. Suspendisse tincidunt auctor leo vitae bibendum. Pellentesque quis augue at quam fringilla vehicula ut nec leo. Pellentesque et felis condimentum, vulputate turpis a, lobortis ipsum.",
        "Quisque turpis velit, pulvinar eget dignissim sit amet, eleifend id est. Nullam lacinia sit amet leo ac vestibulum. Ut tempor libero sed semper semper. Morbi eu risus at lectus faucibus varius eu at risus. Nunc vehicula nunc nec augue pretium, ut eleifend sem semper. Morbi mattis eget ipsum mollis consequat. Nam dolor magna, convallis eu metus pellentesque, placerat lacinia augue. Morbi lobortis eros convallis mauris aliquet scelerisque. Mauris convallis diam nulla, at imperdiet diam tincidunt non. Vestibulum ac sagittis dolor. Cras aliquam diam et justo vulputate dapibus. Nunc porta accumsan vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut neque neque. Donec dapibus faucibus leo, non finibus nibh commodo id."
      ]
    }
  },
  {
    id: 2,
    title: "Desenvolvedor full stack na FCamara",
    image: "/images/image 3.jpg",

    duration: {
      title: "Atuação",
      content: ["04/2024 - Até o Momento"]
    },

    experience: {
      title: "Minha experiência:",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sit amet arcu id imperdiet. Ut porttitor metus a suscipit lobortis. Mauris ut commodo nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut quam dignissim, vehicula lectus et, bibendum massa. Suspendisse tincidunt auctor leo vitae bibendum. Pellentesque quis augue at quam fringilla vehicula ut nec leo. Pellentesque et felis condimentum, vulputate turpis a, lobortis ipsum.",
        " Quisque turpis velit, pulvinar eget dignissim sit amet, eleifend id est. Nullam lacinia sit amet leo ac vestibulum. Ut tempor libero sed semper semper. Morbi eu risus at lectus faucibus varius eu at risus. Nunc vehicula nunc nec augue pretium, ut eleifend sem semper. Morbi mattis eget ipsum mollis consequat. Nam dolor magna, convallis eu metus pellentesque, placerat lacinia augue. Morbi lobortis eros convallis mauris aliquet scelerisque. Mauris convallis diam nulla, at imperdiet diam tincidunt non. Vestibulum ac sagittis dolor. Cras aliquam diam et justo vulputate dapibus. Nunc porta accumsan vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut neque neque. Donec dapibus faucibus leo, non finibus nibh commodo id."
      ]
    },

    tecnologies: {
      title: "Tencologias que utilizei:",
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

    learnings: {
      title: "Aprendizados:",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sit amet arcu id imperdiet. Ut porttitor metus a suscipit lobortis. Mauris ut commodo nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut quam dignissim, vehicula lectus et, bibendum massa. Suspendisse tincidunt auctor leo vitae bibendum. Pellentesque quis augue at quam fringilla vehicula ut nec leo. Pellentesque et felis condimentum, vulputate turpis a, lobortis ipsum.",
        "Quisque turpis velit, pulvinar eget dignissim sit amet, eleifend id est. Nullam lacinia sit amet leo ac vestibulum. Ut tempor libero sed semper semper. Morbi eu risus at lectus faucibus varius eu at risus. Nunc vehicula nunc nec augue pretium, ut eleifend sem semper. Morbi mattis eget ipsum mollis consequat. Nam dolor magna, convallis eu metus pellentesque, placerat lacinia augue. Morbi lobortis eros convallis mauris aliquet scelerisque. Mauris convallis diam nulla, at imperdiet diam tincidunt non. Vestibulum ac sagittis dolor. Cras aliquam diam et justo vulputate dapibus. Nunc porta accumsan vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut neque neque. Donec dapibus faucibus leo, non finibus nibh commodo id."
      ]
    }
  },
  {
    id: 3,
    title: "Desenvolvedor web front-end | Conexão Azul",
    image: "/images/image 3.jpg",

    duration: {
      title: "Atuação",
      content: ["04/2024 - 03/2024"]
    },

    experience: {
      title: "Minha experiência:",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sit amet arcu id imperdiet. Ut porttitor metus a suscipit lobortis. Mauris ut commodo nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut quam dignissim, vehicula lectus et, bibendum massa. Suspendisse tincidunt auctor leo vitae bibendum. Pellentesque quis augue at quam fringilla vehicula ut nec leo. Pellentesque et felis condimentum, vulputate turpis a, lobortis ipsum.",
        " Quisque turpis velit, pulvinar eget dignissim sit amet, eleifend id est. Nullam lacinia sit amet leo ac vestibulum. Ut tempor libero sed semper semper. Morbi eu risus at lectus faucibus varius eu at risus. Nunc vehicula nunc nec augue pretium, ut eleifend sem semper. Morbi mattis eget ipsum mollis consequat. Nam dolor magna, convallis eu metus pellentesque, placerat lacinia augue. Morbi lobortis eros convallis mauris aliquet scelerisque. Mauris convallis diam nulla, at imperdiet diam tincidunt non. Vestibulum ac sagittis dolor. Cras aliquam diam et justo vulputate dapibus. Nunc porta accumsan vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut neque neque. Donec dapibus faucibus leo, non finibus nibh commodo id."
      ]
    },

    tecnologies: {
      title: "Tencologias que utilizei:",
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

    learnings: {
      title: "Aprendizados:",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sit amet arcu id imperdiet. Ut porttitor metus a suscipit lobortis. Mauris ut commodo nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ut quam dignissim, vehicula lectus et, bibendum massa. Suspendisse tincidunt auctor leo vitae bibendum. Pellentesque quis augue at quam fringilla vehicula ut nec leo. Pellentesque et felis condimentum, vulputate turpis a, lobortis ipsum.",
        "Quisque turpis velit, pulvinar eget dignissim sit amet, eleifend id est. Nullam lacinia sit amet leo ac vestibulum. Ut tempor libero sed semper semper. Morbi eu risus at lectus faucibus varius eu at risus. Nunc vehicula nunc nec augue pretium, ut eleifend sem semper. Morbi mattis eget ipsum mollis consequat. Nam dolor magna, convallis eu metus pellentesque, placerat lacinia augue. Morbi lobortis eros convallis mauris aliquet scelerisque. Mauris convallis diam nulla, at imperdiet diam tincidunt non. Vestibulum ac sagittis dolor. Cras aliquam diam et justo vulputate dapibus. Nunc porta accumsan vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut neque neque. Donec dapibus faucibus leo, non finibus nibh commodo id."
      ]
    }
  }
];
