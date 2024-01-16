"use client";
import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { ModeToggle } from "@/components/ui/theme-switcher";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./ui/menu-toggle";
import LanguageSwitcher from "./ui/language-switcher";
import { useTranslations } from "next-intl";
import * as variant from "@/animations";
import { NavbarLinkPROPS } from "@/types";
import { Links, Routes } from "@/linkRoutes";
import { Button } from "./ui/button";
import { scrollIntoView } from "@/lib/utils";

const Navbar = () => {
  const translate = useTranslations("Navbar");
  const params: { locale: "en" | "pt-br" } = useParams();
  const [isOpen, toggleOpen] = useCycle(true, false);

  return (
    <TooltipProvider delayDuration={0}>
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-fit lg:flex items-center justify-between px-4 py-2 flex-col lg:fixed hidden z-20 h-screen"
      >
        <div className="flex flex-col items-center">
          <ModeToggle />
          <LanguageSwitcher />
        </div>
        <motion.nav
          className="flex flex-col gap-2 items-center justify-center rounded-md overflow-hidden relative"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div
            className="absolute top-0 left-0 w-12 bottom-0 dark:bg-white/20 bg-black/20"
            variants={variant.sidebar}
          />

          {Routes.map((link, index) => (
            <NavbarLink
              key={index}
              href={link.href}
              acessibilty={translate(link.acessibilty)}
              tooltip={translate(link.tooltip)}
              Icon={link.Icon}
              local={true}
            />
          ))}
          <MenuToggle
            toggle={() => toggleOpen()}
            state={isOpen ? "open" : "closed"}
          />

          {Links.map((link, index) => (
            <NavbarLink
              key={index}
              href={link.href}
              acessibilty={translate(link.acessibilty)}
              tooltip={link.tooltip}
              Icon={link.Icon}
            />
          ))}
        </motion.nav>
        {/* <LanguageSwitcher /> */}
        <span className="h-[5.25rem]"></span>
      </motion.aside>
    </TooltipProvider>
  );
};

const MobileNavbar = () => {
  const translate = useTranslations("Navbar");
  const params: { locale: "en" | "pt-br" } = useParams();
  const [isOpen, toggleOpen] = useCycle(false, true);

  const animacaoVariante = {
    visivel: { opacity: 1 },
    invisivel: { opacity: 0, display: "none" },
  };

  return (
    <TooltipProvider delayDuration={0}>
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="lg:hidden flex items-center justify-between p-2 fixed top-0 left-0 backdrop-blur-md z-20 w-screen"
      >
        <motion.nav
          initial={true}
          animate={isOpen ? "open" : "closed"}
          className="flex gap-1 items-center justify-center rounded-md overflow-hidden relative"
        >
          <motion.div
            variants={variant.navbarMobile}
            className="absolute top-0 left-0 w-full bottom-0 dark:bg-white/20 bg-black/20"
          />
          <MenuToggle
            toggle={() => toggleOpen()}
            state={isOpen ? "open" : "closed"}
          />
          {Routes.map((link, index) => (
            <NavbarLink
              key={index}
              href={link.href}
              acessibilty={translate(link.acessibilty)}
              tooltip={translate(link.tooltip)}
              Icon={link.Icon}
              local={true}
            />
          ))}
          {Links.map((link, index) => (
            <NavbarLink
              key={index}
              href={link.href}
              acessibilty={translate(link.acessibilty)}
              tooltip={link.tooltip}
              Icon={link.Icon}
            />
          ))}
        </motion.nav>
        <motion.div
          className="flex items-center"
          style={{ pointerEvents: isOpen ? "none" : "auto" }}
          initial={{ opacity: 1 }}
          animate={isOpen ? "invisivel" : "visivel"}
          variants={animacaoVariante}
        >
          <ModeToggle />
          <LanguageSwitcher />
        </motion.div>
        {/* <motion.nav
          className="flex flex-col gap-2 items-center justify-center rounded-md overflow-hidden relative"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div
            className="absolute top-0 left-0 w-12 bottom-0 dark:bg-white/20 bg-black/20"
            variants={variant.sidebar}
          />

          {Routes.map((link, index) => (
            <NavbarLink
              key={index}
              href={link.href}
              acessibilty={translate(link.acessibilty)}
              tooltip={translate(link.tooltip)}
              Icon={link.Icon}
              local={true}
            />
          ))}
          <MenuToggle
            toggle={() => toggleOpen()}
            state={isOpen ? "open" : "closed"}
          />

          {Links.map((link, index) => (
            <NavbarLink
              key={index}
              href={link.href}
              acessibilty={translate(link.acessibilty)}
              tooltip={link.tooltip}
              Icon={link.Icon}
            />
          ))}
        </motion.nav>

        <span className="h-[5.25rem]"></span> */}
      </motion.aside>
    </TooltipProvider>
  );
};

const NavbarLink: React.FC<NavbarLinkPROPS> = ({
  href,
  acessibilty,
  tooltip,
  Icon,
  local = false,
}) => {
  const button = (
    <Button
      className="w-12 h-12 flex items-center justify-center p-0 hover:bg-transparent"
      variant={"ghost"}
      onClick={() => scrollIntoView(href)}
    >
      <Icon className="w-8 h-8 lg:hover:text-primary-color" />
      <span className="sr-only">{acessibilty}</span>
    </Button>
  );

  const link = (
    <Link className="w-12 h-12 flex items-center justify-center" href={href}>
      <Icon className="w-8 h-8 lg:hover:text-primary-color" />
      <span className="sr-only">{acessibilty}</span>
    </Link>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          variants={variant.sidebarIcons}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10"
        >
          {local && button}
          {!local && link}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={16}>
        <p className="text-base ">{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export { Navbar, MobileNavbar };
