import React from "react";

import personalProjects from "@/app/api/personal-projects.json";
import sevenStudioProjects from "@/app/api/seven-studio.json";

const Projects = async () => {
  const translate = await getTranslations("Projects");
  return (
    <section
      className="py-10 lg:px-20 px-6 pt-16 lg:pt-4 flex flex-col justify-center items-center gap-6"
      id="projects"
    >
      <h2 className="lg:text-2xl text-xl self-start dark:text-[#f77872] text-[#E4170C] lg:mx-20">
        const{" "}
        <span className="dark:text-[#5ec0de] text-[#2183A1]">
          {translate("title")}
        </span>
        :{" "}
        <span className="dark:text-[#5ec0de] text-[#2183A1]">
          Array
          <span className="dark:text-[#3eca5d] text-[#248439]">&lt;</span>
          object
          <span className="dark:text-[#3eca5d] text-[#248439]">&gt;</span>
        </span>{" "}
        =
      </h2>

      <ProjectsCarousel projectCards={sevenStudioProjects} />
      <ProjectsCarousel projectCards={personalProjects} />
    </section>
  );
};

export default Projects;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "@/components/ui/Project-card.";
import { ProjectCardProps } from "@/types";
import { getTranslations } from "next-intl/server";

const ProjectsCarousel = ({
  projectCards,
}: {
  projectCards: ProjectCardProps[];
}) => (
  <Carousel
    className="lg:mx-20 lg:w-3/5"
    opts={{
      align: "center",
      loop: true,
    }}
  >
    <CarouselContent>
      {projectCards.map((project, index) => (
        <CarouselItem key={index}>
          <ProjectCard {...project} />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);
