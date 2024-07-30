"use client";
import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";

function Footer({ data }: any) {
  return (
    <>
      <div className="first:mt-0 border-b border-solid border-black pt-0 mt-14 pb-0 px-7" />
      <div className="flex flex-col mt-5 md:flex-row md:justify-between gap-24 sm:gap-28 xl:gap-72 px-5  w-full pt-0 pb-[80px]">
        <div className="md:w-1/2 w-full flex flex-col justify-end pt-0">
          <div className="flex items-center">
              <ReactSVG
    src={urlForImage(data?.header?.logo) || ""}
    beforeInjection={(svg) => {
      svg.setAttribute("class", "w-[40px] h-[48px] md:w-[60px] md:h-[73px]");
    }}
  />
            <h1 className="ml-4">{data.header.title}</h1>
          </div>
          <div className=" md:mt-9 mt-4">
            <h2 className="text-2xl">{data.contact.title}</h2>
            <div className="text-[#646464] mt-3">
              {data?.contact.description}
            </div>
            <div className="text-[#646464] mt-3">
              {data?.contact.phone}
            </div>
            <div className="text-[#646464] mt-3">
              {data?.contact.email}
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 flex lg:justify-evenly gap-7">
        <div className=" w-1/4 flex flex-col gap-4">
          <h2 className="md:text-2xl text-xl">{data.navLinks.title}</h2>
          {data?.navLinks?.links?.map((item: any, index: number) => (
            <div className="text-[#646464] flex flex-col gap-2 whitespace-nowrap" key={index}>
              <Link href={item.link.url}>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className=" w-1/4 flex flex-col gap-4 ">
          <h2 className="md:text-2xl text-xl">{data.legalLinks.title}</h2>
          {data?.legalLinks?.links?.map((item: any, index: number) => (
            <div className="text-[#646464] flex flex-col gap-2  whitespace-nowrap" key={index}>
              <Link href={item.link.url}>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        </div>

      </div>
    </>
  );
}

export default Footer;
