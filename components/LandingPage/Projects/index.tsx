"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionSectionWrapper from "@/components/animation/MotionSectionWrapper/MotionSectionWrapper";
import { fadeIn } from "@/utils/motion";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
const FramerImage = motion(Image);
gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
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
            // onEnter: () => gsap.to(image, { opacity: 0 }), // Fade out when scrolling down
            // onLeaveBack: () => gsap.to(image, { opacity: 1 }), // Fade in when scrolling back
            // toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* <MotionSectionWrapper id="home-hero-section"> */}
      <div className="   relative overflow-hidden h-[600px]" ref={component}>
        <p className="text-[#00000040] px-36 text-7xl font-normal absolute top-28 flex justify-center">
          {" "}
          Un centro dedicado a la investigación de la historia, el arte y la
          cultura de España
        </p>
        <div className="w-full flex justify-between px-4  " id="hero">
          <div id="image" className="flex   " ref={image1Ref}>
            <Image
              src={"/leftImg.jfif"}
              alt="left"
              width={300}
              height={380}
              className=""
            />
          </div>
          <div id="image" className=" flex    " ref={image2Ref}>
            <Image
              src={"/rightImg.png"}
              alt="right"
              width={400}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
      {/* <div className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <div
          id="iii"
          className={` w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 `}
        >
          <ul>
            <Article
              title="Form Validation"
              img={"/homeImg2.png"}
              date="10-04-2923"
              link={"/"}
            />
            <Article
              title="Form Validation"
              img={"/homeImg2.png"}
              date="10-04-2923"
              link={"/"}
            />
            <Article
              title="Form Validation"
              img={"/homeImg2.png"}
              date="10-04-2923"
              link={"/"}
            />
          </ul>
        </div>
      </div> */}
      {/* </MotionSectionWrapper> */}
    </>
  );
}

export default ProjectsSection;
