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
    containScroll: "keepSnaps",
    watchSlides: true,
    watchResize: true,
  };
  console.log(data);
  const pathName = usePathname();
  const kk = pathName === "/contacto";
  return (
    <>
      <div
        className={`grid grid-cols-12 gap-4 px-4 w-full h-[70vh] justify-center items-center ${kk ? "md:mt-30 mt-20" : "md:mt-60 mt-20"} `}
        id="visit"
      >
        <div className="md:col-span-5 col-span-12 flex flex-col justify-end">
          <h2 className="text-2xl">{data.heading}</h2>
          <h5 className="mt-5 text-lg">{data.subHeading}</h5>
          {data.hours.map((dayHour, index) => (
            <div
              className="flex justify-between text-[#646464] mt-3"
              key={index}
            >
              <p>{capitalizeFirstLetter(dayHour.day)}</p>
              <p>{dayHour.hour}</p>
            </div>
          ))}
        </div>
        <div className="md:col-span-7 col-span-12 flex flex-col items-start overflow-hidden relative">
          <div>
            <Carousel carouselType="shopCard" options={OPTIONS}>
              <>
                <CarosuelSlide>
                  {data.images.map((item, index) => (
                    <CarouselCard img={urlForImage(item)} key={index} />
                  ))}
                </CarosuelSlide>
              </>
            </Carousel>
            <p className="absolute bottom-3 ml-10">{data.title || ""}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisitingSection;
