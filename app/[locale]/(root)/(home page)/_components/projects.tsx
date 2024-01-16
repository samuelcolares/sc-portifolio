import { CarouselDemo } from "@/components/example";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import personalProjects from "@/app/api/personal-projects.json";
import sevenStudioProjects from "@/app/api/seven-studio.json";
import Gallery from "@/components/gallery";
import Link from "next/link";

const Projects = () => {
  // console.log(personalProjects);
  return (
    <section
      className="py-10 lg:px-20 px-6 pt-16 lg:pt-4 flex flex-col justify-center items-center gap-6"
      id="projects"
    >
      <h2 className="lg:text-2xl text-xl self-start dark:text-[#f77872] text-[#E4170C] lg:mx-20">
        const{" "}
        <span className="dark:text-[#5ec0de] text-[#2183A1]">someProjects</span>
        :{" "}
        <span className="dark:text-[#5ec0de] text-[#2183A1]">
          Array
          <span className="dark:text-[#3eca5d] text-[#248439]">&lt;</span>
          object
          <span className="dark:text-[#3eca5d] text-[#248439]">&gt;</span>
        </span>{" "}
        =
      </h2>
      {/* <div className="max-w-[76.5rem] mx-auto flex justify-center">
      </div> */}

      {/* <Card className="w-3/4 bg-transparent backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Snippets Library</CardTitle>
          <Badge className="w-fit">Personal</Badge>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="">
          <div className="flex flex-col">
            <h4>Description:</h4>
            <p>
              Here and there in the course of a project I remember that
              somewhere in the middle of my codes exists a snippet that fit
              exaclty what I need. So I made this little project to not waste
              much time searching for, and also to enhance my knowledge of
              Server Actions on Next 14 and NEXTAUTH.
            </p>
            <h4 className="mt-2">Links</h4>
            <ul className="flex gap-4">
              <li>
                <Link href={""} className="border-b border-white">
                  Github Repository
                </Link>
              </li>
              <li>
                <Link href={""} className="border-b border-white">
                  Website
                </Link>
              </li>
            </ul>
            <h4 className="mt-2">TechStack:</h4>
            <div className="flex gap-3">
              <Badge>Next.js 14</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Prisma</Badge>
              <Badge>Monaco Editor</Badge>
              <Badge>NextUI</Badge>
              <Badge>NextAuth.js</Badge>
            </div>
          </div>
          <div className="w-full mx-auto">
            <Gallery />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3 flex-wrap"></CardFooter>
      </Card>

      <Card className="w-3/4 bg-transparent backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Teste 3000</CardTitle>
          <Badge className="w-fit">Personal</Badge>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent className="">
          <div className="flex flex-col">
            <h4>Description:</h4>
            <p>
              Here and there in the course of a project I remember that
              somewhere in the middle of my codes exists a snippet that fit
              exaclty what I need. So I made this little project to not waste
              much time searching for, and also to enhance my knowledge of
              Server Actions on Next 14 and NEXTAUTH.
            </p>
            <h4 className="mt-2">Links</h4>
            <ul className="flex gap-4">
              <li>
                <Link href={""} className="border-b border-white">
                  Github Repository
                </Link>
              </li>
              <li>
                <Link href={""} className="border-b border-white">
                  Website
                </Link>
              </li>
            </ul>
            <h4 className="mt-2">TechStack:</h4>
            <div className="flex gap-3">
              <Badge>Next.js 14</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Prisma</Badge>
              <Badge>Monaco Editor</Badge>
              <Badge>NextUI</Badge>
              <Badge>NextAuth.js</Badge>
            </div>
          </div>
          <div className="w-full mx-auto">
            <Gallery />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3 flex-wrap"></CardFooter>
      </Card> */}

      <ProjectsCarousel projectCards={sevenStudioProjects} />
      <ProjectsCarousel projectCards={personalProjects} />
      {/* <ProjectsCarousel /> */}
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
