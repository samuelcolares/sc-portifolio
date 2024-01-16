import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollIntoView = (selector: string) => {
  document.getElementById(selector)?.scrollIntoView({ behavior: "smooth" });
};
