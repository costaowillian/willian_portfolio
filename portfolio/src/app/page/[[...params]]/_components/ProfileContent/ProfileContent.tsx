"use client";

import Image from "next/image";

import BadgeList from "@/components/BadgeList/BadgeList";

export function ProfileContent() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl sm:text-5xl font-bold">Quem é o Willian?</h2>

      <Image
        src="/images/hobbies.png"
        width={1198}
        height={440}
        alt="Imagem do Willian"
        className="rounded-2xl align-middle my-4"
      />

      <p className="text-sm">
        Olá! Sou Willian, tenho 29 anos e sou de Feira de Santana, Bahia. Minha
        jornada profissional é movida pela paixão por tecnologia, criatividade e
        inovação. Com formação em Desenvolvimento de Sistemas e experiência
        sólida em desenvolvimento front-end, trago comigo um olhar apurado para
        interfaces intuitivas e um grande interesse por UI Design.
      </p>

      <p className="text-sm">
        Além disso, sou formado em Marketing e concluí um MBA em Marketing
        Estratégico Digital, o que me proporciona uma visão ampla sobre como
        conectar tecnologia e experiência do usuário com objetivos de negócios.
      </p>

      <p className="text-sm">
        Atualmente, como Desenvolvedor Front-End no Grupo FCamara, estou
        mergulhado em projetos desafiadores, desenvolvendo e-commerces e
        soluções digitais inovadoras. Aqui, trabalho com tecnologias como
        Next.js, React.js e TypeScript, integrando APIs, escrevendo testes
        unitários e colaborando em metodologias ágeis para garantir entregas de
        alta qualidade.
      </p>

      <p className="text-sm">
        Minha trajetória também inclui experiências em desenvolvimento full
        stack e marketing, onde aprimorei habilidades técnicas e estratégicas,
        sempre com foco em resultados e aprendizado contínuo.
      </p>

      <p className="text-sm font-bold">Hobbies</p>

      <BadgeList
        skills={[
          { id: 1, name: "Pintura" },
          { id: 2, name: "Música" },
          { id: 3, name: "Jogos" }
        ]}
      />

      <p className="text-sm font-bold">Objetivos</p>

      <p className="text-sm">
        Meu objetivo é crescer profissionalmente no universo do desenvolvimento
        de sistemas, contribuindo para a criação de produtos digitais que façam
        a diferença.
      </p>

      <div className="w-full flex items-center justify-center mt-7">
        <Image
          src={"/icons/circles-green-sm.svg"}
          height={67}
          width={29}
          alt="Elemento de circulos"
        />
      </div>
    </div>
  );
}
