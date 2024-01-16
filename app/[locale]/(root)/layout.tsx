import { Navbar, MobileNavbar } from "@/components/navbar";
import NextIntlProvider from "@/providers/NextIntlProvider";
import { useMessages } from "next-intl";
import React from "react";

const Layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const messages = useMessages();
  return (
    <NextIntlProvider messages={messages} locale={params.locale}>
      <MobileNavbar />
      <Navbar />
      <main className="w-full">{children}</main>
    </NextIntlProvider>
  );
};

export default Layout;
