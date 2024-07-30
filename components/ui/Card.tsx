"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import styles from "@/styles/Card.module.css";

// import OriginalsButton from "./OriginalsButton";
// import Vimeo from "@u-wave/react-vimeo";

// import VideoPlayer from "./VideoPlayer";
import { ReactSVG } from "react-svg";
import { Arrow, ArrowSm } from "./Arrow";
import Button from "./Button";

// Card Varients
// hoverable, textOnly, ticket, textWithArrow, originals, greyscale, projects
interface CardProps {
  title?: string;
  subtitle?: string;
  btnTitle?: string;
  imgUrl?: string;
  videoUrl?: string;
  main?: boolean;
  varient?: string;
  bg?: string;
  small?: boolean;
  buttons?: React.ReactNode;
  originalsButton?: React.ReactNode;
  images?: string[];
  mode?: "light" | "dark";
  link?: string;
  line?: boolean;
  featured?: boolean;
  imageSize?: "small" | "medium" | "large";
  priority?: boolean;
  proxy?: boolean;
  liveText?: boolean;
  newTab?: boolean;
  btnUrl?: string;
  textStyles?: React.CSSProperties;
}
const Card: React.FC<CardProps> = ({
  imgUrl = "/images/home-top-slider-image-1.png",
  videoUrl,
  main = false,

  mode = "light",
  link = "",
}) => {
  const HomeHeadCard = () => {
    return (
      <div className={styles.container}>
        {videoUrl ? (
          <div className={styles.videoContainer}></div>
        ) : (
          <Image
            src={imgUrl}
            alt=""
            fill
            className={styles.image}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 80vw, 100vw"
          />
        )}
        <div className={styles.content}>
          {/* <div className={styles.title}>{title}</div> */}
          {/* {main && (
            <div className={styles.extraContainer}>
              <div className={classNames(styles.extraContainerInnerMobile)}>
                <Image
                  src={"/images/icons/rounded-logo.svg"}
                  alt=""
                  width={32}
                  height={32}
                  className={styles.logo}
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
                <Button varient="outline" title="Originals" />
              </div>

              <Link href={link} className={styles.desktop}>
                <Button title="Buy tickets" />
              </Link>
              <Link href={link} className={styles.mobile}>
                <Button title="Tickets" />
              </Link>
            </div>
          )} */}
        </div>
      </div>
    );
  };

  return (
    <>
      {main ? (
        <HomeHeadCard />
      ) : (
        <Link href={link}>
          <HomeHeadCard />
        </Link>
      )}
    </>
  );
};

export default Card;
