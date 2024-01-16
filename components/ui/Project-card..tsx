"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import Gallery from "@/components/gallery";

import { ProjectCardProps } from "@/types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  type,
  title,
  description,
  links,
  techStack,
  images,
}) => {
  const translate = useTranslations("Projects");
  const params: { locale: "en" | "pt-br" } = useParams();
  return (
    <Card className="bg-transparent flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl lg:w-auto w-3/4">
          {params.locale === "en" ? title.en : title["pt-br"]}
        </CardTitle>
        <Badge
          className="w-fit"
          variant={type.en === "Personal Project" ? "default" : "sevenStudio"}
        >
          {params.locale === "en" ? type.en : type["pt-br"]}
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-1">
        <div className="flex flex-col flex-1 gap-5">
          <div>
            <h4>{translate("description")}</h4>
            <p>
              {params.locale === "en" ? description.en : description["pt-br"]}
            </p>
          </div>
          <div>
            <h4 className="mt-2">Links:</h4>
            <ul className="flex gap-4">
              {links.github && (
                <li>
                  <Link href={links.github} className="border-b border-white">
                    Github Repository
                  </Link>
                </li>
              )}
              {links.webiste && (
                <li>
                  <Link href={links.webiste} className="border-b border-white">
                    Website
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="mt-2">{translate("techStack")}</h4>
            <ul className="flex gap-3 flex-wrap">
              {techStack.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full mx-auto">
          <Gallery images={images} title={title.en} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
