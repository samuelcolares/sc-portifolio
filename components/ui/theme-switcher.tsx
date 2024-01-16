"use client";

import * as React from "react";
import { Moon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  useTranslations,
} from "next-intl";

export function ModeToggle() {
  const t = useTranslations("Navbar");
  const { setTheme, theme } = useTheme();

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          onClick={changeTheme}
          className="w-9 h-9 flex items-center justify-center p-0 dark:hover:bg-white/20 hover:bg-black/20"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={16}>
        {theme === "dark" && <p className="text-base">{t("ThemeLight")}</p>}
        {theme === "light" && <p className="text-base">{t("ThemeDark")}</p>}
      </TooltipContent>
    </Tooltip>
  );
}
