import { Contact } from "@/constants/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  data: Contact;
}
export default function CustomIconLink({ data }: Props) {
  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-8 text-gray-700 hover:text-primary transition-transform duration-300 transform hover:scale-110"
      aria-label={data.name}
    >
      <FontAwesomeIcon icon={data.icon} size="4x" />
    </a>
  );
}
