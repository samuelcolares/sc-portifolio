import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/styles/global.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samuel Colares",
  description: "Front-end developer",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={cn("transition-all flex", jost.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
