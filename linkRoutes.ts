import { NavbarLinkPROPS } from "./types";
import {
  CircleUserRound,
  Code2,
  Github,
  Linkedin,
} from "lucide-react";

export const Routes: NavbarLinkPROPS[] = [
  {
    href: "landing",
    acessibilty: "AcessibilityHome",
    Icon: CircleUserRound,
    tooltip: "Home",
  },
  {
    href: "projects",
    acessibilty: "AcessibilityProjects",
    Icon: Code2,
    tooltip: "Projects",
  },
];
export const Links: NavbarLinkPROPS[] = [
  {
    href: "https://github.com/samuelcolares",
    acessibilty: "AcessibilityGithub",
    Icon: Github,
    tooltip: "Github",
  },
  {
    href: "https://linkedin.com/in/samuelcolares/",
    acessibilty: "AcessibilityLinkedIn",
    Icon: Linkedin,
    tooltip: "LinkedIn",
  },
];