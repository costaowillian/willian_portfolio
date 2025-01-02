import Image from "next/image";

interface Props {
  title: string;
  click: () => void;
  iconSlot?: string;
  className?: string;
}

export default function Button({ title, click, iconSlot, className }: Props) {
  const baseClasses =
    "flex item-center justify-center text-primary border border-primary rounded-full !bg-white hover:!bg-primary_100 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg";

  return (
    <button
      type="button"
      className={`${baseClasses} ${className}`}
      onClick={click}
    >
      {title}

      {iconSlot ? (
        <Image src={iconSlot} width={10} height={10} alt="Icone de seta" />
      ) : null}
    </button>
  );
}
