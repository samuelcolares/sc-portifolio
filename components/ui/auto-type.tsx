"use client";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { TypeAnimation } from "react-type-animation";

type Wrapper =
  | "p"
  | "div"
  | "span"
  | "strong"
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "b";

type ATPROPS = {
  wrapper: Wrapper;
  className?: string;
  sequence: (string | number)[];
};

const AutoType: React.FC<ATPROPS> = ({ wrapper, className, sequence }) => {
  const t = useTranslations("Index");
  return (
    <TypeAnimation
      // preRenderFirstString={true}
      sequence={sequence}
      wrapper={wrapper}
      speed={50}
      style={{ display: "inline-block" }}
      repeat={0}
      className={cn("", className)}
    />
  );
};

export default AutoType;
