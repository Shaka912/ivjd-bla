import React from "react";
import { ReactHomeCarousel } from "@/components/ui/CustomCarousel";
import { homeCarousel } from "@/constants";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
interface cardArrayProp {
  data: {
    image: typeof Image;
    description: string;
  }[];
}
function HomeCarousel({ data }: cardArrayProp) {
  return (
    <>
      <div className={" overflow-hidden w-full  relative "}>
        <ReactHomeCarousel>
          {data?.map((card, index) => {
            return (
              <Card
                key={index}
                //@ts-ignore
                imgUrl={urlForImage(card.image) || ""}
                // videoUrl={card?.video_url}
                // link={card?.link}
                // featured={card?.featured}
                main={index === 1}
                // proxy={card?.proxy}
                // liveText={card?.live_text}
              />
            );
          })}
        </ReactHomeCarousel>
      </div>
    </>
  );
}

export default HomeCarousel;
