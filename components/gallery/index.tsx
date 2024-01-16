"use client";
import React from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";

import GalleryTab from "./gallery-tab";

type GalleryProps = {
  title: string;
  images: Array<string>;
};

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
