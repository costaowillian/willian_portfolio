import powerCredtioImg from "../assets/_img/power_credito.jpg";
import orantePortfolioImg from "../assets/_img/orange_portfolio.jpg";
import alpacaFilmesImg from "../assets/_img/alpaca_filmes.jpg";
import filmesApiImg from "../assets/_img/filmes_api.jpg";

export const PROJETOS = [
  {
    id: 1,
    title: "Orange Portfólio",
    link: "https://github.com/costaowillian/Hackathon-Orange-Juice-2024",
    descricao:
      "Aplicação web para gestão de portfolios para a comunidade de designers.",
    img: orantePortfolioImg,
    tecnologias: [
      { id: 1, name: "NodeJs" },
      { id: 2, name: "Angular" },
      { id: 3, name: "Express" },
      { id: 4, name: "Docker" },
      { id: 5, name: "MySql" }
    ]
  },
  {
    id: 2,
    title: "Power Crédito",
    descricao: "Sistema de emissão de cartões de crédito com Micro Serviços",
    link: "https://github.com/costaowillian/power_credtio",
    img: powerCredtioImg,
    tecnologias: [
      { id: 1, name: "Java" },
      { id: 2, name: "Docker" },
      { id: 3, name: "RabbitMQ" },
      { id: 4, name: "Spring Cloud" },
      { id: 5, name: "Spring Boot" }
    ]
  },
  {
    id: 4,
    title: "Filmes Api",
    link: "https://github.com/costaowillian/Filmes_api",
    descricao: "API para registro e gestão de filmes cadastrados.",
    img: filmesApiImg,
    tecnologias: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Express" },
      { id: 3, name: "Docker" },
      { id: 4, name: "NodeJs" },
      { id: 5, name: "Mongo DB" }
    ]
  },
  {
    id: 5,
    title: "Alpaca Filmes",
    descricao: "Aplicação web, para venda de ingressos de cimena.",
    link: "https://github.com/costaowillian/fullstack-challenge/tree/develop",
    img: alpacaFilmesImg,
    tecnologias: [
      { id: 1, name: "Java" },
      { id: 1, name: "Spring Boot" },
      { id: 2, name: "React" },
      { id: 2, name: "Axios" },
      { id: 2, name: "Redux" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "JUnit" },
      { id: 5, name: "MySql" },
      { id: 5, name: "Docker" }
    ]
  }
];
