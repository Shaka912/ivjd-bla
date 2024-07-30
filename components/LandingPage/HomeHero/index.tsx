"use client";
import { HomeHeroProps } from "@/sanity/api/type";
import Image from "next/image";
import React from "react";
import HomeCarousel from "../Carousel";
import { urlForImage } from "@/sanity/lib/image";
import { ReactSVG } from "react-svg";
interface Props {
  data: HomeHeroProps;
}
function HomeHero({ data }: Props) {
  return (
    <>
      <div className=" flex items-center p-4 pt-0 -z-40 md:z-0 relative ">
        {/* <Image
          width={60}
          height={73}
          style={{ objectFit: "contain" }}
          src={urlForImage(data.header.logo) || ""}
          alt="logo"
        /> */}

        <ReactSVG
          src={urlForImage(data.header.logo) || ""}
          beforeInjection={(svg) => {
            svg.setAttribute(
              "class",
              "w-[40px] h-[48px] md:w-[60px] md:h-[73px]"
            );
          }}
        />
        <h1 className="text-3xl md:text-7xl md:ml-10 ml-5 mb-3 md:mb-0">
          {data.header.title || " "}
        </h1>
      </div>
      <HomeCarousel data={data.cards} />

      <div
        className="md:py-20 mt-10 px-6 grid grid-cols-1 md:grid-cols-2 overflow-hidden"
        id="instute"
      >
        <div className="md:pl-10 mb-6 md:mb-0 ">
          <div className="text-xl text-[#000000]">
            {data.heroCarouselContent.title || " "}
          </div>
        </div>
        <div className="md:pr-2">
          <div className="text-base text-[#646464] font-extralight leading-5 tracking-wide">
            {data.heroCarouselContent.description || " "}
          </div>
          <div className="text-base pt-6 text-[#646464] font-extralight leading-5 tracking-wide">
            {data.heroCarouselContent.description1 || " "}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
