import Image from "next/image";
import React from "react";
interface props {
  img: string;
}
function CarouselCard({ img }: props) {
  return (
    <>
      <div className=" ml-2 ">
        {/* Image Container */}
        <div className=" relative w-[45vw] md:w-[40vw] lg:w-[20vw] h-[50vw] md:h-[45vw] lg:h-[20vw]">
          <Image
            src={img}
            alt="News card"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        {/* Text Container */}
        <div className="mt-16 flex items-center justify-between ">
          {/* Left Container */}
          <div className="flex flex-col gap-4">
            {/* Title */}

            {/* Subtitle */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselCard;
