import { CONTACTS } from "@/constants/contact";
import CustomIconLink from "../CustomIconLink/CustomIconLink";

export default function Contact() {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4">
      <h2 className="text-4xl sm:text-5xl w-full font-bold">Contato</h2>

      <div className="flex items-center justify-center">
        {CONTACTS.map((contact) => (
          <CustomIconLink key={contact.id} data={contact} />
        ))}
      </div>
    </div>
  );
}
