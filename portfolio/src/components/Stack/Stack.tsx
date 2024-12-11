import Button from "@/components/Button/Button";
import { EXPERIENCES } from "@/constants/experiences";

export default function Stack() {
  return (
    <div className="flex flex-col">
      {EXPERIENCES.map((experience) => (
        <div
          key={experience.id}
          className="group flex  flex-col gap-4 p-4 border-t border-custom_black hover:bg-[url('/backgrounds/bg-stack.webp')] hover:rounded-2xl bg-cover bg-center hover:border-none"
        >
          <div className="flex gap-4 sm:gap-6">
            <p className="whitespace-nowrap text-sm font-bold">
              {experience.duration}
            </p>
            <p className="text-sm font-bold">{experience.ocupation}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:ml-[7rem]">
            <p className="text-sm">{experience.description}</p>

            <Button
              title={"Saiba mais"}
              className="group-hover:!bg-primary group-hover:text-white group-hover:border-none"
              click={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
