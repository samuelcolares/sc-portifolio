"use client";
import React from "react";
import { Button } from "./button";
import { ChevronsDown } from "lucide-react";
import { cn, scrollIntoView } from "@/lib/utils";

type SDBProps = {
  selector: string;
  className?: string;
  screenReader?: string;
};

const ScrollDownButton: React.FC<SDBProps> = ({
  selector,
  screenReader = "Scroll Down",
  className,
}) => {
  return (
    <Button
      variant={"ghost"}
      className={cn(
        "flex gap-4 absolute bottom-[10rem] animate-bounce p-1 hover:bg-transparent border border-transparent hover:border-muted-foreground transition-colors",
        className
      )}
      onClick={() => {
        scrollIntoView(selector);
      }}
    >
      <p className="sr-only">{screenReader}</p>
      <ChevronsDown className="h-8 w-8 " />
    </Button>
  );
};

export default ScrollDownButton;
