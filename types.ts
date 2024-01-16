import { LucideIcon } from "lucide-react";

export type NavbarLinkPROPS = {
  href: string;
  acessibilty: string;
  tooltip: string;
  Icon: LucideIcon;
  local?: boolean;
};

export type ProjectCardProps = {
  type: {
    en: string;
    "pt-br": string;
  };
  title: {
    en: string;
    "pt-br": string;
  };
  description: {
    en: string;
    "pt-br": string;
  };
  links: {
    webiste?: string;
    github?: string;
  };
  techStack: Array<string>;
  images: Array<string>;
};
