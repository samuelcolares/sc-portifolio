"use client";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import br from "dayjs/locale/pt-br";
import DrawerDialog from "./ResonsiveModal";

const Footer = () => {
  const day = dayjs().locale(br).format("HH:mm A");
  const timezone = dayjs().locale(br).format("Z");
  return (
    <footer
      id="footer"
      className="py-4 lg:px-20 px-6  lg:pt-4 flex flex-col justify-center items-center gap-6"
    >
      <div className="flex lg:flex-row flex-col gap-5 justify-between w-full lg:px-20 lg:items-center">
        <div className="flex gap-12">
          <div>
            <h3 className="uppercase">Version</h3>
            <span className="hover:text-primary-color transition-colors">
              2024 &copy; Edition
            </span>
          </div>
          <div>
            <h3 className="uppercase">Local Time</h3>
            <div className="flex gap-2 hover:text-primary-color transition-colors">
              <span>{day}</span>
              <span>GMT{timezone}</span>
            </div>
          </div>
        </div>
        <div className="lg:order-last order-first">
          <h3 className="uppercase">Contact Details</h3>
          <ul className="flex lg:justify-between lg:gap-0 gap-4">
            <li className="hover:text-primary-color transition-colors">
              <DrawerDialog
                href="mailto:samuelcolaresdeaquino@gmail.com"
                inputValue="samuelcolaresdeaquino@gmail.com"
                sendString="E-mail"
                title="E-mail Detail"
                trigger="E-mail"
              />
            </li>
            <li className="hover:text-primary-color transition-colors">
              <DrawerDialog
                href="https://wa.link/vjo7pg"
                inputValue="+5585996887338"
                sendString="Whatsapp Message"
                title="Phone Detail"
                trigger="Phone"
              />
            </li>
          </ul>
        </div>
        <div className="lg:order-last order-first">
          <h3 className="uppercase">Socials</h3>
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
