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
      <div className=" flex items-center p-4 pt-0  md:z-0 relative ">
        <div
          className="flex gap-4 w-[70%] md:w-[400px] "
          style={{ fontWeight: 300 }}
        >
          <h5 className=" text-sm md:text-base">{data.header.title}</h5>
        </div>
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
