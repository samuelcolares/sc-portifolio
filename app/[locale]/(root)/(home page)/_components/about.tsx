import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import coding from "@/public/coding.png";

import ScrollDownButton from "@/components/ui/scroll-down-button";

const About = async () => {
  const translate = await getTranslations("About");
  return (
    <article
      className="min-h-screen px-6 lg:px-20 relative flex flex-col justify-center items-center gap-6 pt-16 lg:pt-4 pb-4"
      id="about"
    >
      <h2 className="lg:text-2xl text-xl self-start dark:text-[#f77872] text-[#E4170C] lg:mx-20">
        const{" "}
        <span className="dark:text-[#5ec0de] text-[#2183A1]">
          {translate("title")}
        </span>
        : <span className="dark:text-[#5ec0de] text-[#2183A1]">string</span> =
      </h2>

      <div className="flex items-center lg:gap-16 gap-8 max-w-[76.5rem] lg:mx-20 xl:flex-row flex-col">
        <p className="text-lg max-w-[50rem]">
          &quot; {translate("about1")}
          <br />
          <br />
          {translate("about2")} &quot;
        </p>

        <Image
          priority
          src={coding.src}
          alt="coding"
          width={coding.width}
          height={coding.height}
          className="object-contain lg:w-[500px] lg:h-[500px] w-72 h-72 drop-shadow-2xl"
        />
      </div>

      <ScrollDownButton
        selector="projects"
        className="lg:bottom-[5rem] bottom-4"
      />
    </article>
  );
};

export default About;
