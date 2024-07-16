"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionSectionWrapper from "@/components/animation/MotionSectionWrapper/MotionSectionWrapper";
import { fadeIn } from "@/utils/motion";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import { HomeResearchCentreProp } from "@/sanity/api/type";
import { urlForImage } from "@/sanity/lib/image";
const FramerImage = motion(Image);
gsap.registerPlugin(ScrollTrigger);
interface Props {
  data: HomeResearchCentreProp;
}
function HomeResearchCentre({ data }: Props) {
  const component = React.useRef(null);
  const textRef = React.useRef(null);

  const image1Ref = React.useRef(null);
  const image2Ref = React.useRef(null);

  React.useEffect(() => {
    // const images = [image1Ref.current, image2Ref.current];

    ScrollTrigger.create({
      trigger: component.current,
      start: "bottom bottom", // Start pinning when the top of the text reaches the top of the viewport
      endTrigger: "iii", // End pinning based on the hero section ID
      end: "center center", // End pinning when the bottom of the hero section is at the top of the viewport
      pin: true, // Enable pinning
      pinSpacing: false, // Disable automatic spacing
    });

    // Animations for the images
    const images = [image1Ref.current, image2Ref.current];
    images.forEach((image) => {
      gsap.fromTo(
        image,
        { y: "80%", opacity: 1 }, // 80% hidden initially and fully opaque
        {
          y: "0%", // Move to fully visible
          opacity: 1, // Fade out completely
          ease: "none",
          scrollTrigger: {
            trigger: component.current, // Trigger when the text is in view
            start: "top bottom", // Start when the top of the component reaches the bottom
            end: "top top", // End when the top of the component reaches the top
            scrub: true, // Smooth transition
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* <MotionSectionWrapper id="home-hero-section"> */}
      <div className="   relative overflow-hidden h-[600px]" ref={component}>
        <p className="text-[#00000040] px-7 md:px-36 md:text-7xl text-[40px] font-normal absolute top-28 flex justify-center">
          {" "}
          {data.main.title || " "}
        </p>
        <div
          className="w-full flex justify-between px-4  md:mt-0 absolute top-64 md:top-0"
          id="hero"
        >
          <div
            id="image"
            className="flex  relative -bottom-16 "
            ref={image1Ref}
          >
            <Image
              src={urlForImage(data.main.leftImage) || ""}
              alt="left"
              width={300}
              height={380}
              className="w-48 h-[200px] md:h-[60%] md:w-[90%]"
            />
          </div>
          <div id="image" className=" flex    " ref={image2Ref}>
            <Image
              src={urlForImage(data.main.rightImage) || ""}
              alt="right"
              width={400}
              height={500}
              className="w-48 h-[220px] md:h-full md:w-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeResearchCentre;
