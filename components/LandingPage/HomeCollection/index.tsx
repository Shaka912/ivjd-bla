"use client";
import React from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HomeCollectionProp } from "@/sanity/api/type";
import { urlForImage } from "@/sanity/lib/image";
import useMousePosition from "@/hooks/useMousePosition";
import ListViewHoverImages from "@/components/animation/ListViewHoverImages";
import LocaleLink from "@/components/ui/locale-link";
const article2 = "/homeImg1.png";
const FramerImage = motion(Image);
interface Props {
  data: HomeCollectionProp;
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
          style={{ x: x, y: y, borderRadius: "10px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          ref={imgRef}
          src={img}
          alt={title}
          width={100}
          height={100}
          className="w-28 h-auto hidden  md:!hidden"
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
  subTitle,
}: {
  img: any;
  title: any;
  date: any;
  link: any;
  subTitle: any;
}) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      className="dark:bg-dark relative w-full p-4 py-4 my-2 space-x-10 flex flex-row items-center justify-between bg-light border-b  border-black text-dark "
    >
      <MovingImg img={img} title={title} link={link} />

      <h2
        className={
          "capitalize text-base  hover:underline dark:text-light hidden md:block"
        }
      >
        {subTitle}
      </h2>
      <Link href={link}>
        <span className="text-base hover:underline  pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
          {date}
        </span>
      </Link>
    </motion.li>
  );
};

function CollectionItemss({
  title,
  date,
  link,
  subTitle,
}: {
  title: any;
  date: any;
  link: any;
  subTitle: any;
}) {
  return (
    <>
      <div className="dark:bg-dark relative w-full p-4 py-4 my-2 space-x-10 flex flex-row items-center justify-between bg-light border-b  border-black text-dark ">
        <h2> {title}</h2>
        <h2
          className={
            "capitalize text-base  hover:underline dark:text-light hidden md:block"
          }
        >
          {subTitle}
        </h2>
        <span className="text-base hover:underline  pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
          {date}
        </span>
      </div>
    </>
  );
}

function HomeCollections({ data }: Props) {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  const [hoverKey, setHoverKey] = React.useState<number>(0);
  const mousePosition = useMousePosition();
  console.log("HoverIndex: ", hoveredIdx);

  const onMouseEnterRow = (idx: number) => {
    setHoveredIdx(idx);
    setHoverKey((prevKey) => prevKey + 1);
  };

  const onMouseLeaveRow = () => {
    setHoveredIdx(null);
  };
  return (
    <>
      <main
        className="w-full mb-16 flex flex-col px-4   dark:text-light"
        id="collection"
      >
        <h2 className="font-medium text-xl w-full ml-4   mt-32">
          {data.title}
        </h2>
        <ul>
          <AnimatePresence>
            {hoveredIdx !== null && (
              <ListViewHoverImages
                key={`hovered-img-${hoveredIdx}-${hoverKey}`}
                mousePosition={mousePosition}
                currentImg={{
                  src: urlForImage(data.collectionItems[hoveredIdx].image),
                  alt: "hover Image",
                }}
              />
            )}
          </AnimatePresence>
          {data.collectionItems.map((item, index) => (
            // <Article
            //   key={index}
            //   title={item.title || ""}
            //   img={urlForImage(item.image) || ""}
            //   subTitle={item.subTitle}
            //   date={item.link.title || ""}
            //   link={item.link.link || ""}
            // />
            <LocaleLink
              onMouseEnter={() => onMouseEnterRow(index)}
              onMouseLeave={onMouseLeaveRow}
              lang={"es"}
              key={`locale-link-${index}`}
              href={item.link.link || ""}
            >
              <CollectionItemss
                key={index}
                title={item.title || ""}
                subTitle={item.subTitle}
                date={item.link.title || ""}
                link={item.link.link || ""}
              />
            </LocaleLink>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomeCollections;
