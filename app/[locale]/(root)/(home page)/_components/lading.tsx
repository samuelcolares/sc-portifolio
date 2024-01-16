import { getTranslations } from "next-intl/server";
import Image from "next/image";
import avatar from "@/public/profilepicture.png";

import AutoType from "@/components/ui/auto-type";
import ScrollDownButton from "@/components/ui/scroll-down-button";

const Landing = async () => {
  const translate = await getTranslations("Index");
  const acessibility = await getTranslations("Acessibility");
  const phrases = [
    translate("t1"),
    500,
    translate("t2"),
    500,
    translate("t3"),
    1000,
    translate("t4"),
    1000,
    translate("t5"),
    1000,
    translate("t6"),
    1000,
    translate("t7"),
    1000,
    translate("t8"),
    500,
    translate("t9"),
    1000,
    translate("t10"),
    500,
    translate("t11"),
    500,
  ];
  return (
    <section
      className="flex flex-col items-center justify-center h-screen lg:px-20 px-6 relative"
      id="landing"
    >
      <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-20 gap-10">
        <div className="max-w-[31rem]">
          <h1 className="sr-only">{acessibility("h1")}</h1>
          <AutoType
            wrapper="span"
            sequence={phrases}
            className="lg:text-3xl lg:text-left text-center text-2xl h-24 lg:h-auto lg:w-[500px] "
          />
        </div>

        <Image
          src={avatar.src}
          alt={translate("ProfileImageAltText")}
          width={avatar.width}
          height={avatar.height}
          priority
          className="lg:w-56 lg:h-56 w-64 h-64 object-cover object-top rounded-lg shadow-2xl lg:order-last order-first"
        />
      </div>

      <ScrollDownButton
        selector="about"
        className="bottom-[1rem] lg:bottom-[10rem]"
      />
    </section>
  );
};

export default Landing;
