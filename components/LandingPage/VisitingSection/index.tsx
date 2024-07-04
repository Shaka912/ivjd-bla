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
      <div
        className="grid grid-cols-12 gap-4 px-4 w-full h-[70vh] justify-center items-center mt-60"
        id="visit"
      >
        <div className="col-span-5 flex flex-col justify-end">
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
        <div className="col-span-7 flex flex-col items-start overflow-hidden relative">
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
            <p className="absolute bottom-3 ml-10">SOLICITAR ENTRADA</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisitingSection;
