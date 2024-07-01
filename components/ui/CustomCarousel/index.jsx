"use client";
import React from "react";
import styles from "./CustomCarousel.module.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
// import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CustomCarousel = ({ offset = 20, children, ...props }) => {
  // const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollMax, setScrollMax] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setTotalCount(carouselRef.current.childNodes.length);
    const carouselWidth = carouselRef.current.childNodes[0].offsetWidth;
    const scrollMax = carouselRef.current.scrollWidth - carouselWidth;
    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    setScrollX(0);
    setScrollMax(scrollMax);
  }, []);

  const handlePrevious = () => {
    // const carouselWidth = carouselRef.current.offsetWidth;
    const carouselWidth = carouselRef.current.childNodes[0].offsetWidth;
    // const scrollMax = carouselRef.current.scrollWidth - carouselWidth;
    const scrollXNew = scrollX > 0 ? scrollX - carouselWidth - offset : 0;
    setScrollX(scrollXNew < 0 ? 0 : scrollXNew);
    console.log("ScrollX: ", scrollX);
    console.log("carouselWidth: ", carouselWidth);
    console.log("scrollXNew: ", scrollXNew);
    console.log("scrollWidth: ", carouselRef.current.scrollWidth);

    carouselRef.current.scrollTo({ left: scrollXNew, behavior: "smooth" });
    // if (selectedItemIndex > 0) {
    //   setSelectedItemIndex(selectedItemIndex - 1);

    // }
  };
  const handleNext = () => {
    // const totalCount = carouselRef.current.childNodes.length;
    // const carouselWidth = carouselRef.current.offsetWidth;
    const carouselWidth = carouselRef.current.childNodes[0].offsetWidth;
    const scrollMax = carouselRef.current.scrollWidth - carouselWidth;
    const scrollXNew =
      scrollX + carouselWidth > scrollMax
        ? scrollMax
        : scrollX + carouselWidth + offset;
    setScrollX(scrollXNew);
    carouselRef.current.scrollTo({ left: scrollXNew, behavior: "smooth" });
    console.log("scrollMax: ", scrollMax);
    console.log("ScrollX: ", scrollX);
    console.log("carouselWidth: ", carouselWidth);
    console.log("scrollXNew: ", scrollXNew);
    console.log("scrollWidth: ", carouselRef.current.scrollWidth);

    // if (selectedItemIndex < totalCount - 1) {
    //   setSelectedItemIndex(selectedItemIndex + 1);

    //   //   console.log("Next", carouselRef.current.childNodes[0].offsetWidth);
    //   //   carouselRef.current.style.left = `${carouselRef.current.childNodes[0].offsetWidth}px`;
    //   //   console.log("Next", carouselRef.current.style);
    // }
  };

  return (
    <div className={[styles.container].join(" ")}>
      <button
        onClick={handlePrevious}
        style={{ visibility: scrollX === 0 ? "hidden" : "visible", left: 25 }}
        className={[styles.button, styles.previousButton].join(" ")}
      ></button>
      <button
        className={[styles.button, styles.nextButton].join(" ")}
        onClick={handleNext}
        style={{
          visibility: scrollX >= scrollMax - 200 ? "hidden" : "visible",
        }}
      ></button>
      <div ref={carouselRef} {...props}>
        {children}
      </div>
    </div>
  );
};

const ReactHomeCarousel = ({ children, autoPlay = false, ...props }) => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={true}
      autoPlay={autoPlay}
      infiniteLoop
      showStatus={false}
      stopOnHover={true}
      showIndicators={false}
      renderArrowPrev={(clickHandler) => (
        <button
          className={[styles.button, styles.previousButton].join(" ")}
          onClick={clickHandler}
          style={{ left: 10 }}
          id="previousButton"
          aria-label="Previous Button"
        >
          {/* <HiArrowSmallLeft className={styles.icon} /> */}
          <img className={styles.icon} src="/Images/left.svg" />
        </button>
      )}
      renderArrowNext={(clickHandler) => (
        <button
          className={[styles.button, styles.nextButton].join(" ")}
          onClick={clickHandler}
          style={{ right: 10 }}
          id="nextButton"
          aria-label="Next Button"
        >
          {/* <HiArrowSmallRight className={styles.icon} /> */}
          <img className={styles.icon} src="/Images/right.svg" />
        </button>
      )}
      {...props}
    >
      {children}
    </Carousel>
  );
};

export { ReactHomeCarousel, CustomCarousel };
