"use client";
import NextProjectButton from "@/app/(website)/[lang]/collections/_components/NextProjectButton";
import { Locale } from "@/i18n";
import { urlForImage } from "@/sanity/lib/image";
import React, { Suspense } from "react";
import { ReactSVG } from "react-svg";
import { PortableText } from "@portabletext/react";
import { protableTextSettingsComponents } from "@/app/settings/portableTextSettings";
import { Collection } from "@/sanity/api/type";
import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";
import ImagePopup from "./ImagePopup";
function CollectionPage({
  collection,
  lang,
}: {
  collection: Collection;
  lang: Locale;
}) {
  const [currentImage, setCurrentImage] = React.useState("");
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const backgroundColor = collection.backgroundColor;
  const textColor = collection.textColor;
  const openImageViewer = React.useCallback((img: string) => {
    setCurrentImage(img);
    setIsViewerOpen(true);
  }, []);

  return (
    <Suspense>
      <div
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
        className={`pb-[103px]  w-full`}
      >
        <div className="fixed inset-0  -z-10 w-screen h-[80vh]">
          <div className="relative w-full h-[440px] sm:h-[625px]">
            <Image
              src={urlForImage(collection.featuredImage) || ""}
              alt="Hero image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <img
            src={collection.logo ? urlForImage(collection.logo) : "/logo.png"}
            className="absolute top-5 left-5 cursor-pointer"
            alt="ss"
            onClick={() => (window.location.href = "/")}
          />
        </div>

        {/* Content */}
        <h1 className="md:text-7xl text-4xl  absolute top-[31vh] md:bottom-[27rem] left-5 break-words">
          {collection.title}
        </h1>
        <div
          style={{ backgroundColor: backgroundColor }}
          className="z-10 relative sm:mt-[60vh] mt-[42vh] w-fit"
        >
          {/* Top Text Section */}

          {/* insitiute description  */}
          <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-xl text-[#B7B7B7] px-7 md:pr-48">
              {lang === "es" ? "INFORMACIÓN" : "IMFORMATION"}
            </div>
            <div className="px-7 md:pl-40">
              <div
                className="text-base font-extralight leading-5 tracking-wide"
                style={{ color: textColor }}
              >
                <PortableText
                  value={collection?.description}
                  components={protableTextSettingsComponents}
                />
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="px-8 md:px-30 mt-30 md:mt-4 flex flex-col md:gap-11">
            {/* First Images Row */}

            <div className="grid md:grid-cols-3 grid-cols-1 items-baseline  md:gap-x-24 md:mb-20 mb-5">
              {collection.collection1R.length > 0 &&
                collection.collection1R.map((item, index) => (
                  <div
                    key={index}
                    className="h-full col-span-1 flex flex-col justify-start md:items-start items-center mb-6 px-10 md:mb-0"
                  >
                    <div className="relative md:w-[400px] w-full sm:h-[418px]  overflow-hidden cursor-pointer">
                      <img
                        src={urlForImage(item.image) || ""}
                        alt="Project Image"
                        onClick={() =>
                          openImageViewer(urlForImage(item.image) || "")
                        }
                        className="object-contain"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectPosition: "left",
                        }}
                      />
                    </div>
                    <div className="pt-4  md:mb-11 w-full md:w-auto text-left ">
                      {item.description.split("\n").map((line, lineIndex) => (
                        <p key={lineIndex} className="leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
            {/* Second Image Column */}

            <div className="grid grid-cols-1">
              <div className="flex flex-col  md:items-start items-center px-10 md:px-0">
                <div className="relative  md:w-[96vw]  w-full md:h-auto cursor-pointer">
                  <img
                    src={urlForImage(collection.featuredImage1.image) || ""}
                    alt="images gallery"
                    className="object-contain w-full h-full"
                    onClick={() =>
                      openImageViewer(
                        urlForImage(collection.featuredImage1.image) || ""
                      )
                    }
                  />
                </div>
                {/* Image description */}
                <div className="mt-4 md:mt-10 xl:mt-16 w-full ">
                  {collection.featuredImage1.description
                    .split("\n")
                    .map((line, lineIndex) => (
                      <p key={lineIndex} className="leading-relaxed">
                        {line}
                      </p>
                    ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:pt-10 pt-4">
              {collection.collection2R.map((item, index) => (
                <>
                  <div
                    className="flex flex-col justify-center items-center md:items-baseline mt-5 md:mt-0 px-10 md:px-0"
                    key={index}
                  >
                    <div className="flex w-full md:w-fit aspect-w-1 aspect-h-1  justify-center cursor-pointer ">
                      <img
                        src={urlForImage(item.image) || ""}
                        onClick={() =>
                          openImageViewer(urlForImage(item.image) || "")
                        }
                        alt="Jarra"
                        className="object-contain   sm:h-[418px] "
                      />
                    </div>
                    <div className=" mt-4 w-full">
                      {item.description.split("\n").map((line, lineIndex) => (
                        <p key={lineIndex} className=" leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          {/* Next Project Section */}
          <NextProjectButton
            color={collection.textColor}
            nextProjectSlug={collection.nextProjectSlug}
            lang={lang}
          />
        </div>
        {isViewerOpen && (
          <ImagePopup
            handleClose={() => setIsViewerOpen(false)}
            img={currentImage}
            isOpen={isViewerOpen}
          />
        )}
      </div>
    </Suspense>
  );
}

export default CollectionPage;
