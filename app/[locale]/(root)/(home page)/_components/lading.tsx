import { getTranslations } from "next-intl/server";
import AutoType from "@/components/ui/auto-type";

import avatar from "@/public/profilepicture.png";
import Image from "next/image";
import ScrollDownButton from "@/components/ui/scroll-down-button";

const sequence = [
  // Same substring at the start will only be typed out once, initially
  "HI",
  500, // wait 1s before replacing "Mice" with "Hamsters"
  "Hi, my name is Samuel",
  500,
  "Hi, my name is Samuel, and normally I'm doing some of these things: ",
  1000,
  "Hi, my name is Samuel, and normally I'm doing some of these things: 1. coding",
  1000,
  "Hi, my name is Samuel, and normally I'm doing some of these things: 2. lifting weights",
  1000,
  "Hi, my name is Samuel, and normally I'm doing some of these things: 3. playing games",
  1000,
  "Hi, my name is Samuel, and normally I'm doing some of these things: 4. eating pizza",
  1000,
  "And most important,",
  500,
  "I'm a Front-end web developer",
  1000,
  "Or just:",
  500,
  "Samuel Colares, Front-end Developer.",
  500,
];

const sequence3 = {
  // Same substring at the start will only be typed out once, initially
  t1: "HI", // wait 1s before replacing "Mice" with "Hamsters"
  t2: "Hi, my name is Samuel",
  t3: "Hi, my name is Samuel, and normally I'm doing some of these things: ",
  t4: "Hi, my name is Samuel, and normally I'm doing some of these things: 1. coding",
  t5: "Hi, my name is Samuel, and normally I'm doing some of these things: 2. lifting weights",
  t6: "Hi, my name is Samuel, and normally I'm doing some of these things: 3. playing games",
  t7: "Hi, my name is Samuel, and normally I'm doing some of these things: 4. eating pizza",
  t8: "And most important,",
  t9: "I'm a Front-end web developer",
  t10: "Or just:",
  t11: "Samuel Colares, Front-end Developer.",
};

const sequence2 = [
  // Same substring at the start will only be typed out once, initially
  "OI",
  500, // wait 1s before replacing "Mice" with "Hamsters"
  "Oi, meu nome é Samuel",
  500,
  "Oi, meu nome é Samuel, e normalmente estou fazendo alguma dessas coisas: ",
  1000,
  "Oi, meu nome é Samuel, e normalmente estou fazendo alguma dessas coisas: 1. programando",
  1000,
  "Oi, meu nome é Samuel, e normalmente estou fazendo alguma dessas coisas: 2. levantando pesos",
  1000,
  "Oi, meu nome é Samuel, e normalmente estou fazendo alguma dessas coisas: 3. jogando",
  1000,
  "Oi, meu nome é Samuel, e normalmente estou fazendo alguma dessas coisas: 4. comendo pizza",
  1000,
  "E o mais importante,",
  500,
  "Sou um desenvolvedor Front-end",
  1000,
  "Ou apenas:",
  500,
  "Samuel Colares, Desenvolvedor Front-end.",
  500,
];

const Landing = async () => {
  const translate = await getTranslations("Index");
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
          <h1 className="sr-only">Samuel Colares, Front-end Web Developer.</h1>
          <AutoType
            wrapper="span"
            sequence={phrases}
            className="lg:text-3xl lg:text-left text-center text-2xl h-24 lg:h-auto"
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
