"use client";
import * as React from "react";
import { useTranslations } from "next-intl";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    className="dark:stroke-white stroke-black lg:group-hover:stroke-primary-color"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({
  toggle,
  state,
}: {
  toggle: () => void;
  state: string;
}) => {
  const translate = useTranslations("Navbar");
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={toggle}
          className="w-12 h-12 flex items-center justify-center relative z-10"
        >
          <span className="sr-only">{translate("AcessibilityMenu")}</span>
          <svg width="23" height="23" viewBox="0 0 23 23" className="group">
            <Path
              state="open"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={16}>
        {state === "closed" && (
          <p className="text-base">{translate("OpenMenu")}</p>
        )}
        {state === "open" && (
          <p className="text-base">{translate("CloseMenu")}</p>
        )}
      </TooltipContent>
    </Tooltip>
  );
};
