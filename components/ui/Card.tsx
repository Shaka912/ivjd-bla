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
  title: string;
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
  title,
  subtitle,
  btnTitle,
  imgUrl = "/images/home-top-slider-image-1.png",
  videoUrl,
  main = false,
  varient,
  bg,
  small,
  buttons,
  originalsButton,
  images,
  mode = "light",
  link = "",
  line = true,
  featured,
  imageSize = "large",
  priority = false,
  proxy = false,
  liveText = false,
  newTab = false,
  btnUrl = "",
  textStyles,
}) => {
  if (varient == "hoverable")
    return (
      <Link href={link}>
        <div className={styles.hoverableCardOuter}>
          <div className={styles.hoverableCard}>
            {/* Mobile Overlay Container Starts */}
            <div className={styles.hoverableMobOverlayContainer}>
              <div className={styles.hoverableMobSubtitle}>{subtitle}</div>
              <hr />
            </div>
            {/* Mobile Overlay Container Ends */}
            {videoUrl ? (
              <div
                className={[
                  styles.videoContainer,
                  styles.secondaryContainer,
                ].join(" ")}
              >
                {/* <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`${styles.videos}`}
                >
                  <source src={proxyUrl(videoUrl, true)} type="video/mp4" />
                </video> */}
                {/* <VideoPlayer
                  className={`${styles.videos}`}
                  src={proxyUrl(videoUrl, true, false, true)}
                  style={{ borderRadius: 16, overflow: "hidden" }}
                  // src={videoUrl}
                /> */}
              </div>
            ) : (
              <Image
                src={imgUrl}
                alt=""
                fill
                sizes={
                  imageSize === "small"
                    ? "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                    : imageSize === "medium"
                    ? "(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
                    : "(max-width: 768px) 50vw, (max-width: 1200px) 80vw, 100vw"
                }
                priority={priority}
                className={styles.image}
              />
            )}
            <div className={styles.hoverableCardContent}>
              <div className={styles.hoverableCardContentInner}>
                <div className={styles.hoverableCardContentTop}>
                  <div className={styles.hoverableCardContentTopTitle}>
                    {subtitle}
                  </div>
                  <hr className={styles.hoverableCardContentTopLine} />
                </div>
                <div className={styles.hoverableCardContentBottom}>{title}</div>
              </div>
            </div>
          </div>
          <div className={styles.hoverableCardContentMob}>
            <div className={styles.hoverableCardContentTitleMob}>{title}</div>
            {/* <div className={styles.hoverableCardContentSubTitleMob}>
              {subtitle}
            </div> */}
          </div>
        </div>
      </Link>
    );

  if (varient == "textOnly")
    return (
      <Link href={link}>
        <div className={styles.textOnlyCard}>
          {main ? (
            <h1
              className={styles.textOnlyCardContent}
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          ) : (
            <div
              className={styles.textOnlyCardContent}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
          )}

          <div className={styles.textOnlyCardSubtitleContainer}>
            <div className={styles.textOnlyCardSubtitle}>{subtitle}</div>
            <div className={styles.textOnlyCardArrow}>
              <ArrowSm arrow={"arrow-red-vector-sm.svg"} />
            </div>
          </div>
        </div>
      </Link>
    );

  if (varient == "ticket") {
    return (
      <Link href={link} className={styles.ticketCard}>
        <div className={styles.ticketCardTop}>
          <div className={styles.ticketCardTopSubtitle}>{subtitle}</div>
          <div className={styles.ticketCardTopImage}>
            <Image
              src="/images/icons/black-ticket.svg"
              alt=""
              fill
              className={styles.ticketCartImageBlackTicket}
            />
            <Image
              src="/images/icons/red-ticket.svg"
              alt=""
              fill
              className={styles.ticketCartImageRedTicket}
            />
          </div>
        </div>
        <div className={styles.ticketCardBottom}>{title}</div>
      </Link>
    );
  }

  if (varient == "textWithArrow") {
    const cardClass = {
      "#000000": "textWithArrowCardBlack",
      "#FF0000": "textWithArrowCardRed",
      "#EFEFEF": "textWithArrowCardGrey",
    };
    return (
      <Link href={link}>
        <div
          className={classNames(styles.textWithArrowCard)}
          style={{ background: bg }}
        >
          <div className={styles.textWithArrowCardArrow}>
            <Arrow
              arrow={
                bg === "#FF0000"
                  ? "arrow-black-vector.svg"
                  : "arrow-red-vector.svg"
              }
              red={bg === "#FF0000"}
            />
          </div>
          <div className={styles.textWithArrowCardTitle}>{title}</div>
        </div>
      </Link>
    );
  }

  if (varient == "originals") {
    return (
      <div className={styles.originalsCard}>
        <Image
          src={imgUrl}
          alt=""
          layout="fill"
          className={styles.originalsCardImg}
        />
        <div className={styles.originalsCardTitle}>{title}</div>
        <div className={styles.originalsCardButton}>{btnTitle}</div>
      </div>
    );
  }
  if (varient == "original-left") {
    return (
      <div className={styles.originalsLeftCard}>
        {videoUrl ? (
          <div className={styles.videoContainer}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`${styles.videos}`}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        ) : (
          <Image src={imgUrl} alt="" fill className={styles.originalsCardImg} />
        )}
        {/* <Image
          src={imgUrl}
          alt=""
          layout="fill"
          className={styles.originalsCardImg}
        /> */}

        <div className={styles.originalsLeftCardTextContainer}>
          <div className={styles.originalsLeftCardLiveText}>Live</div>
          <div
            className={[styles.originalsLeftCardTitle, textStyles].join(" ")}
          >
            {title}
          </div>
          {/* Button Wrapper */}

          <Link href={btnUrl}>
            <div className={styles.originalsLeftCardButton}>
              <Button
                varient={"red-with-arrow"}
                title={"Explore"}
                subTitle={"Tickets available"}
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }

  if (varient == "greyscale") {
    return (
      <div className={styles.greyscaleCard}>
        <Image
          src={imgUrl}
          alt=""
          layout="fill"
          className={styles.greyscaleCardImg}
        />
        <div className={styles.greyscaleCardTitle}>{title}</div>
      </div>
    );
  }

  if (varient == "news") {
    return (
      <Link href={link}>
        <div className={styles.newsCardOuter}>
          <div className={styles.newsCard}>
            <div className={styles.newsCardLeft}>
              <div className={styles.newsCardSubTitle}>{subtitle}</div>
              <div className={styles.newsCardTitle}>
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
              </div>
            </div>
            <div className={styles.newsCardRight}>
              <div className={styles.newsCardImage}>
                <Image src={imgUrl} alt="" fill />
              </div>
            </div>
          </div>
          {line && <hr />}
        </div>
      </Link>
    );
  }
  if (varient == "media") {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.newsCardOuter}>
          <div className={styles.newsCard}>
            <div className={styles.newsCardLeft}>
              <div className={styles.newsCardSubTitle}>{subtitle}</div>
              <div
                className={styles.newsCardTitle}
                dangerouslySetInnerHTML={{ __html: title }}
              ></div>
            </div>
            <div className={styles.newsCardRight}>
              <div className={styles.newsCardImage}>
                <Image src={imgUrl} alt="" layout="fill" />
              </div>
            </div>
          </div>
          {line && <hr />}
        </div>
      </a>
    );
  }

  if (varient == "playlist") {
    return (
      <Link href={link}>
        <div
          className={classNames(
            styles.playlistCard,
            mode == "dark" && styles.dark
          )}
        >
          <div className={styles.playlistCardTop}>
            {images &&
              images.map((image, index) => (
                <div key={index} className={styles.playlistCardTopImage}>
                  <Image src={image} alt="" fill />
                </div>
              ))}
          </div>
          <div className={styles.playlistCardBottom}>
            <div className={styles.playlistCardTitle}>{title}</div>
            <div className={styles.playlistCardSubTitle}>{subtitle}</div>
          </div>
        </div>
      </Link>
    );
  }

  if (varient == "collection") {
    return (
      <div className={styles.collectionCardOuter}>
        <div className={styles.collectionCard}>
          <Image src={imgUrl} alt="" fill />
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.titleMob}>{title}</div>
      </div>
    );
  }

  if (varient == "review") {
    return (
      <div className={styles.reviewCardContainer}>
        <p className={styles.reviewCardTitle}>{title}</p>
      </div>
    );
  }

  const HomeHeadCard = () => {
    return (
      <div className={styles.container}>
        {main && (
          <div className={styles.liveTextContainer}>
            <div className={classNames(styles.extraContainerInner)}>
              {/* <Image
                src={"/images/icons/rounded-logo.svg"}
                alt=""
                width={32}
                height={32}
                className={styles.logo}
                style={{ objectFit: "contain" }}
              /> */}
              {/* <Button varient="outline" title="Originals" /> */}
            </div>
            <div className={styles.liveText}>
              {/* {!main && liveText && <AnimatedText />} */}
            </div>
          </div>
        )}

        <div className={styles.featuredContainer}>
          {/* {featured && (
            <div className={styles.featuredButton}>Featured Project</div>
          )} */}
          {/* {!main && liveText && <AnimatedText />} */}
        </div>

        {videoUrl ? (
          <div className={styles.videoContainer}>
            {/* <video
              autoPlay
              muted
              loop
              playsInline
              
            >
              <source src={proxyUrl(videoUrl, true)} type="video/mp4" />
            </video> */}
            {/* <VideoPlayer
              className={`${styles.videos}`}
              src={proxy ? proxyUrl(videoUrl, true, false, true) : videoUrl}
              style={{ borderRadius: 20 }}
            /> */}

            {/* <CldVideoPlayer
              width={"100%"}
              height={"100%"}
              src={videoUrl}
              autoPlay="always"
              id="cloudinaryPlayer"
              controls={false}
              showLogo={false}
              muted={true}
              loop={true}
              transformation={{ crop: "fill" }}
              // className={styles.videos}
            /> */}
          </div>
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
