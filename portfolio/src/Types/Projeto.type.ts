import { TTecnologia } from "./tecnologia.type";

export type TProjeto = {
  id: number;
  title: string;
  link: string;
  descricao: string;
  img: string;
  tecnologias: TTecnologia[];
};
