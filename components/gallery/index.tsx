"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

import GalleryTab, { ImageType } from "./gallery-tab";

type GalleryProps = {
  title: string;
  images: Array<string>;
};

const imagess = [
  {
    url: "https://camo.githubusercontent.com/211b09ce1aef685d0aab1ca9865064e97070243fc0cfdc4c82e5a53bafd06be6/68747470733a2f2f696d6775722e636f6d2f744a50315174312e706e67",
  },
  {
    url: "https://camo.githubusercontent.com/e0e65be11e2db79f4e942e234c12f185c5dffb1f2cd51c4591e0ab89ccb513a0/68747470733a2f2f696d6775722e636f6d2f316f346b4343642e706e67",
  },
  {
    url: "https://camo.githubusercontent.com/d7836cc818a0a202b780c66cd7e06903ed1063dc4ac6090ac92e5850331dd76f/68747470733a2f2f696d6775722e636f6d2f75676f614346442e706e67",
  },
  // {
  //   url: "https://camo.githubusercontent.com/211b09ce1aef685d0aab1ca9865064e97070243fc0cfdc4c82e5a53bafd06be6/68747470733a2f2f696d6775722e636f6d2f744a50315174312e706e67",
  // },
];

const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  const mappedImages = images.map((image, index) => (
    <GalleryTab
      key={image + index}
      image={image}
      title={title}
      slideIndex={index}
    />
  ));
  const mappedImagesPanel = images.map((image, index) => (
    <Tab.Panel key={image + index}>
      <div className="aspect-video relative w-full h-full sm:rounded-lg overflow-hidden">
        <Image
          fill
          src={image}
          alt={`${title} selected slide`}
          className="object-contain object-center"
        />
      </div>
    </Tab.Panel>
  ));
  return (
    <Tab.Group as="div" className="flex flex-col">
      <Tab.Panels className="aspect-video w-full">
        {mappedImagesPanel}
      </Tab.Panels>
      <div className="mx-auto mt-2 w-full max-w-2xl  lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-4">{mappedImages}</Tab.List>
      </div>
    </Tab.Group>
  );
};

export default Gallery;
