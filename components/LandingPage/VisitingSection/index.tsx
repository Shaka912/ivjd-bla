import Carousel, { CarosuelSlide } from "@/components/ui/Carousel/Carousel";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import CarouselCard from "@/components/ui/CarouselCard";
function VisitingSection() {
  const OPTIONS: EmblaOptionsType = {
    // dragFree: false,
    containScroll: "keepSnaps",
    watchSlides: true,
    watchResize: true,
  };
  return (
    <>
      <div className="flex px-4 justify-between w-full h-[50vh]">
        <div className="w-[40%]">
          <h2 className="text-2xl">VISITA</h2>
          <h5 className="mt-5 text-lg">Horario</h5>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>Lunes</p>
            <p>00:00</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>Lunes</p>
            <p>00:00</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>Lunes</p>
            <p>00:00</p>
          </div>
        </div>
        <div className="w-[60%]  flex justify-start items-start">
          <div>
            <Carousel carouselType="shopCard" options={OPTIONS}>
              <>
                <CarosuelSlide>
                  <CarouselCard img="/visitPic.png" />
                  <CarouselCard img="/visitPic1.png" />
                  <CarouselCard img="/visitPic.png" />
                </CarosuelSlide>
              </>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisitingSection;
