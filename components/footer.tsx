import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import br from "dayjs/locale/pt-br";
import DrawerDialog from "./ResonsiveModal";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const day = dayjs().locale(br).format("HH:mm A");
  const timezone = dayjs().locale(br).format("Z");
  const translate = await getTranslations("Footer")
  return (
    <footer
      id="footer"
      className="py-4 lg:px-20 px-6  lg:pt-4 flex flex-col justify-center items-center gap-6"
    >
      <div className="flex lg:flex-row flex-col gap-5 justify-between w-full lg:px-20 lg:items-center">
        <div className="flex gap-12">
          <div>
            <h3 className="uppercase">{translate("version")}</h3>
            <span className="hover:text-primary-color transition-colors">
            {translate("edition")}
            </span>
          </div>
          <div>
            <h3 className="uppercase">{translate("localTime")}</h3>
            <div className="flex gap-2 hover:text-primary-color transition-colors">
              <span>{day}</span>
              <span>GMT{timezone}</span>
            </div>
          </div>
        </div>
        <div className="lg:order-last order-first">
          <h3 className="uppercase">{translate("contact")}</h3>
          <ul className="flex lg:justify-between gap-4">
            <li className="hover:text-primary-color transition-colors">
              <DrawerDialog
                href="mailto:samuelcolaresdeaquino@gmail.com"
                inputValue="samuelcolaresdeaquino@gmail.com"
                sendString={translate("sendStringEmail")}
                title="E-mail"
                trigger="E-mail"
                acessibilityString={translate("copy")}
                closeString={translate("close")}
              />
            </li>
            <li className="hover:text-primary-color transition-colors">
              <DrawerDialog
                href="https://wa.link/vjo7pg"
                inputValue="+5585996887338"
                sendString={translate("sendString")}
                title={translate("title")}
                trigger={translate("triggerPhone")}
                acessibilityString={translate("copy")}
                closeString={translate("close")}
              />
            </li>
          </ul>
        </div>
        <div className="lg:order-last order-first">
          <h3 className="uppercase">{translate("socials")}</h3>
          <ul className="flex gap-4">
            <li className="hover:text-primary-color transition-colors">
              <Link href={"https://www.linkedin.com/in/samuelcolares/"}>
                LinkedIn
              </Link>
            </li>
            <li className="hover:text-primary-color transition-colors">
              <Link href={"https://github.com/samuelcolares"}>Github</Link>
            </li>
            <li className="hover:text-primary-color transition-colors">
              <Link href={"https://www.instagram.com/samuelcolares_/"}>
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
