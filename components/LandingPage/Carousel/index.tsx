import React from "react";
import { ReactHomeCarousel } from "@/components/ui/CustomCarousel";
import { homeCarousel } from "@/constants";
import Card from "@/components/ui/Card";
import Image from "next/image";
function HomeCarousel() {
  return (
    <>
      <div className={" overflow-hidden w-full  relative "}>
        <ReactHomeCarousel>
          {homeCarousel.map((card, index) => {
            return (
              <Card
                key={card.id}
                title={card.title}
                imgUrl={card?.image}
                // videoUrl={card?.video_url}
                link={card?.link}
                featured={card?.featured}
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
