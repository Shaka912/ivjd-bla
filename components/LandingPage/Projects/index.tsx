"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionSectionWrapper from "@/components/animation/MotionSectionWrapper/MotionSectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

gsap.registerPlugin(ScrollTrigger);
function ProjectsSection() {
  const component = React.useRef(null);
  const textRef = React.useRef(null);
  //   React.useEffect(() => {
  //     // Define the animation
  //     let ctx = gsap.context(() => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: "#hero",
  //           start: "top bottom",
  //           end: "center center",
  //           scrub: true, // Enable scrubbing
  //           // pin: true,
  //           refreshPriority: 100,
  //         },
  //       });

  //       // Add animation to the timeline
  //       tl.to("#image", {
  //         rotationX: 0,
  //         ease: "slow",
  //         duration: 2,
  //         height: "50vw",
  //         scale: 0.9,
  //       });
  //       if (window.innerWidth > 768) {
  //         gsap.to("#parallaxHeading", {
  //           scrollTrigger: {
  //             scrub: 1,
  //             trigger: "#hero",
  //             start: "30% center",
  //             end: "70% center",
  //           },
  //           y: -280, // Adjust the value to control the parallax effect intensity
  //           opacity: 0, // Adjust the opacity as desired
  //           ease: "power1.out", // Easing function for smoother animation
  //           scale: 0.5,
  //         });
  //       }
  //     }, component);

  //     return () => ctx.revert(); // cleanup!
  //   });

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
      {/* </MotionSectionWrapper> */}
    </>
  );
}

export default ProjectsSection;
