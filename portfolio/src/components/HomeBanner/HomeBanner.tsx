import Image from "next/image";

type Size = "lg" | "sm";

interface Props {
  size: Size;
  classNames?: string;
}

export default function HomeBanner({ size, classNames }: Readonly<Props>) {
  const baseClasses =
    "flex flex-col relative bg-[url('/backgrounds/home-bg.webp')] bg-cover bg-center w-full rounded-2xl p-6 ";

  const sizes = size === "lg" ? "h-[572px] sm:h-[612px]" : "h-[236px]";

  return (
    <section className={`${baseClasses} ${sizes} ${classNames}`}>
      <p className="text-[52px] sm:text-[10rem] text-white text-center">
        Willian Costa
      </p>

      {size === "lg" ? (
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-[364px]">
            <Image
              src={"/animacoes/responsive.gif"}
              width={51}
              height={51}
              alt="Responsivo animation"
            />

            <p className="text-[28px] font-bold text-white">
              Desenvolvedor Full Stack
            </p>

            <p className="text-[22px] text-white">
              Especizalizado em criar experiências digitais imersivas e
              centradas no usuário.
            </p>
          </div>

          <Image
            src={"/images/willian-costa.webp"}
            width={383}
            height={483}
            alt="Foto do Willian Costa"
            className="absolute bottom-0 left-20 sm:left-[410px] w-[183px] h-[248px] sm:w-[383px] sm:h-[483px]"
          />

          <Image
            src={"/icons/circles.svg"}
            width={51}
            height={116}
            alt="Círculos decorativos"
            className="absolute bottom-5 right-9"
          />
        </div>
      ) : null}
    </section>
  );
}
