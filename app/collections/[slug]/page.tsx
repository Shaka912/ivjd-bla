import React from "react";
import Image from "next/image";
import Text from "@/components/ui/typography/Typography";
import Link from "next/link";
import NextProjectButton from "../_components/NextProjectButton";
import { projects } from "@/components/data/index";

import projectImages from "@/components/data/index";
import Footer from "@/components/shared/Footer";
import { getSingleCollection } from "@/sanity/api/sanity.queries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { protableTextSettingsComponents } from "@/app/settings/portableTextSettings";

interface Props {
  params: {
    slug: string;
  };
}

const ProjectDetail = async ({ params }: Props) => {
  const collection = await getSingleCollection(params.slug);

  // Fake data for demonstration. Replace this with your actual data fetching logic.
  const project = {
    backgroundColor: "#2D4138",
    textColor: "#000",
    country: "Country Name",
    year: "2023",
    title: "Project Title",
    description: "Project description goes here.",
    // description:  "Project description goes here." [
    //   {
    //     type: "paragraph",
    //     children: [{ text: "Project description goes here." }],
    //   },
    // ],
    images: [
      "/homeImg2.png", // Local image path
      "/homeImg1.png", // Local image path
      "/homeImg2.png", // Local image path
    ],
    nextProjectSlug: "next-project",
  };

  const backgroundColor = collection.backgroundColor;
  const textColor = collection.textColor;

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      className={`pb-[103px]`}
    >
      <div className="fixed top-0 right-0 left-0 bottom-0 -z-10">
        <div className="relative w-screen h-screen">
          <Image
            src={urlForImage(collection.featuredImage) || ""}
            alt="Hero image"
            fill
            style={{ objectFit: "cover" }}
          />
          <h1 className="text-7xl  absolute top-[400px] left-5 z-20">
            {collection.title}
          </h1>
        </div>
      </div>
      {/* Content */}
      <div
        style={{ backgroundColor: backgroundColor }}
        className="z-10 relative mt-[80vh]"
      >
        {/* Top Text Section */}

        {/* insitiute description  */}
        <div className=" py-20  grid  grid-flow-col">
          <div className=" grid-flow-col">
            <div className="text-xl text-[#B7B7B7] px-7 pr-48">INFORMACIÓN</div>
          </div>
          <div className="grid grid-flow-row px-7 pl-40">
            <div
              className="text-base font-extralight leading-5 tracking-wide"
              style={{ color: textColor }}
            >
              <PortableText
                value={collection?.description}
                components={protableTextSettingsComponents}
              />
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="px-8 md:px-30 mt-30 md:mt-4 flex flex-col gap-11">
          {/* First Images Row */}

          <div className="grid grid-cols-3 gap-x-24 mb-20 ">
            {collection.collection1R.length > 0 &&
              collection.collection1R.map((item, index, arr) => (
                <>
                  <div
                    key={index}
                    className=" w-fit h-full col-span-1 relative"
                  >
                    <img
                      src={urlForImage(item.image) || ""}
                      alt="Project Image"
                      // layout="fill"
                      style={{ objectFit: "contain", height: "100%" }}
                    />
                    <div className="pt-3 mb-11">
                      {item.description.split("\n").map((line, lineIndex) => (
                        <p key={lineIndex} className=" leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              ))}
          </div>
          {/* Second Image Column */}

          <div className="grid grid-cols-1 ">
            <div className=" aspect-[1/2] md:aspect-square  w-[96vw] h-[50vw]">
              <img
                src={urlForImage(collection.featuredImage1.image) || ""} // Use the local image path
                alt="images gallery"
                style={{
                  objectFit: "contain",
                  width: "96vw",
                }}
              />
            </div>
          </div>
          {/* iamge description  */}
          <div className=" mt-12 xl:mt-20">
            {collection.featuredImage1.description
              .split("\n")
              .map((line, lineIndex) => (
                <p key={lineIndex} className=" leading-relaxed">
                  {line}
                </p>
              ))}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-10">
            {collection.collection2R.map((item, index) => (
              <>
                <div className="flex flex-col">
                  <div className="relative w-full aspect-w-1 aspect-h-1 ">
                    <img
                      src={urlForImage(item.image) || ""}
                      alt="Jarra"
                      className="object-cover"
                    />
                  </div>
                  <div className=" mt-4 ">
                    {item.description.split("\n").map((line, lineIndex) => (
                      <p key={lineIndex} className=" leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Next Project Section */}
        <NextProjectButton
          color={project.textColor}
          nextProjectSlug={project.nextProjectSlug}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
