import {
  faLinkedin,
  faGithub,
  faSquareBehance,
  IconDefinition
} from "@fortawesome/free-brands-svg-icons";

type Contact = {
  id: number;
  name: string;
  url: string;
  icon: IconDefinition;
};

export const SOCIAL_MEDIA: Contact[] = [
  {
    id: 1,
    name: "Linkdin",
    url: "https://www.linkedin.com/in/willianocosta/",
    icon: faLinkedin
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/costaowillian",
    icon: faGithub
  },
  {
    id: 3,
    name: "Behance",
    url: "https://www.behance.net/costawillian",
    icon: faSquareBehance
  }
];
