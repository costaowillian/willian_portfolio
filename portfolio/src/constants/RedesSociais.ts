import {
  faLinkedin,
  faGithub,
  faSquareBehance
} from "@fortawesome/free-brands-svg-icons";
import { TSocialMedia } from "../Types/SocialMedia.type";

export const SOCIAL_MEDIA: TSocialMedia[] = [
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
