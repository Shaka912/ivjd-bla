"use client";
import Carousel, { CarosuelSlide } from "@/components/ui/Carousel/Carousel";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import CarouselCard from "@/components/ui/CarouselCard";
import { HomeVistingProp } from "@/sanity/api/type";
import { urlForImage } from "@/sanity/lib/image";
import { usePathname } from "next/navigation";
interface Props {
  data: HomeVistingProp;
}
// Helper function to capitalize the first letter of the day
const capitalizeFirstLetter = (string: string) => {
  if (!string) return "";
  return string[0].toUpperCase() + string.slice(1);
};

function VisitingSection({ data }: Props) {
  const OPTIONS: EmblaOptionsType = {
    // dragFree: false,
    // containScroll: "keepSnaps",
    watchSlides: true,
    watchResize: true,
  };

  const pathName = usePathname();
  const kk = pathName === "/contacto";
  return (
    <>
      <div
        className={`flex md:flex-row mb-24 flex-col gap-12 lg:gap-28 xl:gap-36 px-5 w-full  justify-center items-center ${kk ? "md:mt-30 mt-20" : "md:mt-60 mt-20"} `}
        id="visit"
      >
        <div className="flex w-full md:w-1/2 flex-col justify-end">
          <h2 className="text-2xl">{data?.heading}</h2>
          <h5 className="mt-5 text-lg">{data?.subHeading}</h5>
          {data.hours.map((dayHour, index) => (
            <div
              className="flex justify-between text-[#646464] mt-3"
              key={index}
            >
              <p>{capitalizeFirstLetter(dayHour.day)}</p>
              <p>{dayHour?.hour}</p>
            </div>
          ))}
        </div>
        <div className="relative w-full md:w-[50%] cursor-pointer">
          <Carousel carouselType="shopCard" options={OPTIONS}>
            <>
              {data?.images?.flatMap((item, index) => {
                // Duplicate each image by mapping it twice
                const images = [item, item];
                return images.map((image, idx) => (
                  <CarosuelSlide key={idx}>
                    <CarouselCard img={urlForImage(image)} />
                  </CarosuelSlide>
                ));
              })}
            </>
          </Carousel>
          <p className="absolute bottom-[-2.5rem] ml-10 text-[#000000]">
            {data?.title || ""}
          </p>
        </div>
      </div>
    </>
  );
}

export default VisitingSection;
