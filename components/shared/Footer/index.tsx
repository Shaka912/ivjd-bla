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
      <div className="grid grid-cols-12 gap-4 md:px-4  px-2 w-full  justify-center items-center pt-0 pb-36 ">
        <div className="md:col-span-5 col-span-12 flex flex-col justify-end pt-0">
          <div className=" flex items-center p-4 ">
            <ReactSVG
              src={urlForImage(data?.header?.logo) || ""}
              beforeInjection={(svg) => {
                svg.setAttribute("style", "width: 100px; height: 100px;");
              }}
            />
            {/* <Image
              width={60}
              height={73}
              style={{ objectFit: "contain" }}
              src={urlForImage(data.header.logo) || ""}
              alt="logo"
            /> */}
            <h1 className="  ml-10">{data.header.title}</h1>
          </div>
          <div className="md:px-7 px-4 md:mt-9  mt-4">
            <h2 className="text-2xl  "> {data.contact.title}</h2>
            <div className="flex justify-between text-[#646464] mt-3">
              {data?.contact.description}
            </div>
            <div className="flex justify-between text-[#646464] mt-3">
              {data?.contact.phone}
            </div>
            <div className="flex justify-between text-[#646464] mt-3">
              {data?.contact.email}
            </div>
          </div>
        </div>
        <div className="md:col-span-5 col-span-6 md:ml-44 flex flex-col justify-around mb-20 px-4 mt-20 md:mt-0">
          <h2 className="md:text-2xl text-xl">{data.navLinks.title}</h2>

          {data?.navLinks?.links?.map((item: any, index: number) => {
            return (
              <>
                <div className="flex justify-between text-[#646464] mt-3">
                  <Link href={item.link.url} key={index}>
                    {item.title}
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <div className="md:col-span-2 col-span-6 flex flex-col justify-around mb-20 mt-20 md:mt-0">
          <h2 className="md:text-2xl text-xl">{data.legalLinks.title}</h2>

          {data?.legalLinks?.links?.map((item: any, index: number) => {
            return (
              <>
                <div className="flex justify-between text-[#646464] mt-3">
                  <Link href={item.link.url} key={index}>
                    {item.title}
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Footer;
