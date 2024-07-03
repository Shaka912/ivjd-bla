"use client";
import React from "react";
import { motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const article2 = "/homeImg1.png";
const FramerImage = motion(Image);
interface MovingImgProps {
  img: string;
  title: string;
  link: string;
}
interface ArticleProps {
  img: string;
  title: string;
  date: string;
  link: string;
}
const MovingImg = ({
  img,
  title,
  link,
}: {
  img: any;
  title: any;
  link: any;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = React.useRef<HTMLImageElement | null>(null);

  function handleMouse(event: React.MouseEvent) {
    console.log("Mouse enter"); // Debug log
    if (imgRef.current) {
      imgRef.current.className = "block";
    }
  }

  function handleMouseLeave(event: React.MouseEvent) {
    console.log("Mouse leave"); // Debug log
    if (imgRef.current) {
      imgRef.current.className = "hidden";
      x.set(0);
      y.set(0);
    }
  }

  return (
    <>
      <Link
        href={link}
        target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <FramerImage
          style={{ x: x, y: y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          ref={imgRef}
          src={img}
          alt={title}
          width={100}
          height={100}
          className="w-28 h-auto hidden rounded-lg md:!hidden"
        />

        <h2 className={"capitalize text-base  hover:underline dark:text-light"}>
          {title}
        </h2>
      </Link>
    </>
  );
};

const Article = ({
  img,
  title,
  date,
  link,
}: {
  img: any;
  title: any;
  date: any;
  link: any;
}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      className="dark:bg-dark relative w-full p-4 py-4 my-2 space-x-10 flex flex-row items-center justify-between bg-light text-dark first:mt-0 border-b border-solid border-black"
    >
      <MovingImg img={img} title={title} link={link} />

      <h2 className={"capitalize text-base  hover:underline dark:text-light"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </h2>
      <div>
        <span className="text-base  pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
          {date}
        </span>
      </div>
    </motion.li>
  );
};
function Section() {
  return (
    <>
      <main className="w-full mb-16 flex flex-col px-4   dark:text-light">
        <h2 className="font-medium text-xl w-full ml-2   mt-32">
          {" "}
          COLECCIONES
        </h2>
        <ul>
          <Article
            title="Form Validation"
            img={"/rightImg.png"}
            date="10-04-2923"
            link={"/"}
          />
          <Article
            title="Form Validation"
            img={"/rightImg.png"}
            date="10-04-2923"
            link={"/"}
          />
          <Article
            title="Form Validation"
            img={"/rightImg.png"}
            date="10-04-2923"
            link={"/"}
          />
          <Article
            title="Form Validation"
            img={"/rightImg.png"}
            date="10-04-2923"
            link={"/"}
          />
        </ul>
      </main>
    </>
  );
}

export default Section;
