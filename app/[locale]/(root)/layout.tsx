import React from "react";
import { useMessages } from "next-intl";
import NextIntlProvider from "@/providers/NextIntlProvider";

import { Navbar, MobileNavbar } from "@/components/navbar";

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
