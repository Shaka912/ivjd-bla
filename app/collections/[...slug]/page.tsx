import React from "react";
import Image from "next/image";
import Text from "@/components/ui/typography/Typography";
import Link from "next/link";
import NextProjectButton from "../_components/NextProjectButton";
import { projects } from "@/components/data/index";
import { PortableText } from "@portabletext/react";
import { protableTextSettingsComponents } from "@/components/settings/portableTextSettings";
import projectImages from "@/components/data/index";

interface Props {
  params: {
    slug: string;
    lang: string;
  };
}

const ProjectDetail = async ({ params }: Props) => {
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

  const backgroundColor = project.backgroundColor;
  const textColor = project.textColor;
  const lang = params.lang;

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
            src={project.images[0]} // Use the local image path
            alt="News card"
            fill
            style={{ objectFit: "cover" }}
          />
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
            <div className="text-base text-[#FFFFFF] font-extralight leading-5 tracking-wide">
              El Instituto Valencia de Don Juan fue fundado en 1916 por don
              Guillermo de Osma y Scull y su esposa doña Adelaida Crooke y
              Guzmán (XIII condesa de Valencia de Don Juan) con la idea de 
              crear un centro dedicado a la investigación de la historia, el
              arte y la cultura de España a través de las colecciones artísticas
              y documentales que el matrimonio había reunido durante su vida. 
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="px-8 md:px-30 mt-30 md:mt-4 flex flex-col gap-11">
          {/* First Images Row */}

          <div className="grid grid-cols-3 gap-x-24 ">
            {projectImages.length > 0 &&
              projectImages.map((item, index, arr) => (
                <div key={index} className="relative w-full  ">
                  <img
                    src={item.image} // Use the image URL from the array
                    alt="Project Image"
                    layout="fill"
                    style={{ objectFit: "contain", height: "100%" }}
                  />
                </div>
              ))}

            <div className="text-[#FFFFFF]  pt-0">
              <p>España, S.XV</p>
              <p>Cerámica de loza dorada o reflejo metálico.</p>
              <p>90x46cm</p>
              <p>Período Nazarí.</p>
            </div>
            <div className="text-[#FFFFFF]  pt-0">
              <p>Jarra de los Bérchules</p>
              <p>España, finales del S.XV-principios del S. XVI</p>
              <p>Período Nazarí</p>
            </div>
            <div className="text-[#FFFFFF]  pt-0">
              <p>Plato</p>
              <p>Manises, España. </p>
              <p>1410-1440</p>
              <p>Cerámica de reflejo dorado y azul cobalto</p>
            </div>
          </div>
          {/* Second Image Column */}

          {project?.images?.slice(0, 1).length > 0 ? (
            <div className="grid grid-cols-1 bg-black">
              {project?.images?.slice(0, 1).map((image, index, arr) => (
                <div
                  key={index}
                  className="relative aspect-[1/2] md:aspect-square  w-[96vw] h-[50vw]"
                >
                  <img
                    src={"/plato.png"} // Use the local image path
                    alt="images gallery"
                    fill
                    style={{
                      objectFit: "contain",
                      width: "96vw",
                    }}
                  />
                </div>
              ))}
            </div>
          ) : null}
          <div className="text-[#FFFFFF] mt-12">
            <p>Plato de la caza en la Albufera de Valencia. </p>
            <p>Manises, España. </p>
            <p>Tercer cuarto del S.XV.</p>
            <p>Cerámica de reflejo dorado y azul cobalto</p>
          </div>
          <div className="grid grid-cols-2 ">
            <div className=" h-[30vw] grid grid-cols-2 pt-10">
              <div className="relative h-full aspect-w-1 aspect-h-1">
                <div className="absolute inset-0">
                  <img
                    src={"/Jarra.png"}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className=" h-[30vw] w-28grid grid-row-2 ">
              <div className=" h-[30vw] grid grid-cols-2 pt-10">
                <div className="relative h-full aspect-w-1 aspect-h-1">
                  <div className="absolute inset-0 ">
                    <img
                      src={"/Jarron.png"}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="text-[#FFFFFF] mt-9">
                <p>Jarra de los Donceles</p>
                <p>España, S.XV</p>
                <p>Cerámica de loza dorada o reflejo metálico.</p>
                <p>Período Nazarí.</p>
              </div>
            </div>
            <div className="text-[#FFFFFF]  mt-9">
              <p>Jarra de los Donceles</p>
              <p>España, S.XV</p>
              <p>Cerámica de loza dorada o reflejo metálico.</p>
              <p>Período Nazarí.</p>
            </div>
          </div>
        </div>
        {/* Next Project Section */}
        <NextProjectButton
          color={project.textColor}
          lang={params.lang}
          nextProjectSlug={project.nextProjectSlug}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
