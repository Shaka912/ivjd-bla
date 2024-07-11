import { HomeHeroProps } from "@/sanity/api/type";
import Image from "next/image";
import React from "react";
import HomeCarousel from "../Carousel";
import { urlForImage } from "@/sanity/lib/image";
interface Props {
  data: HomeHeroProps;
}
function HomeHero({ data }: Props) {
  return (
    <>
      <div className=" flex items-center p-4">
        <Image
          width={60}
          height={73}
          style={{ objectFit: "contain" }}
          src={urlForImage(data.header.logo) || ""}
          alt="logo"
        />
        <h1 className=" text-7xl ml-10">{data.header.title || " "}</h1>
      </div>
      <HomeCarousel data={data.cards} />

      <div className=" py-20  grid  grid-flow-col" id="instute">
        <div className=" grid-flow-col">
          <div className="text-xl text-[#000000] px-7 pr-48">
            {data.heroCarouselContent.title || " "}
          </div>
        </div>
        <div className="grid grid-flow-row px-7 pl-40">
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
