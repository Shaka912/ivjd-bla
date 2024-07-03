"use client";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import "./Carousel.css";
import Text from "../typography/Typography";
type PropType = {
  options?: EmblaOptionsType;
  children?: ReactNode;
  carouselType: "text" | "projectCard" | "shopCard" | "shopDetail";
};

const Carousel: React.FC<PropType> = (props) => {
  const { children, options, carouselType } = props;

  const [hasMoreToLoad, setHasMoreToLoad] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div
      className={[
        carouselType === "text" && "textCarouselContainer",
        carouselType === "projectCard" && "projectCardCarouselContainer",
        carouselType === "shopCard" && "shopCardCarouselContainer",
        carouselType === "shopDetail" && "shopDetailCarouselContainer",
      ].join(" ")}
    >
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">{children}</div>
      </div>
    </div>
  );
};

export const CarosuelSlide = ({ children }: { children: ReactNode }) => {
  return (
    <div className="carousel__slide ">
      <div className="carousel__slide__number ">{children}</div>
    </div>
  );
};

export default Carousel;
