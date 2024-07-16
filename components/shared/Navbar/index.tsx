"use client";
import Text from "@/components/ui/typography/Typography";
import { navbarList } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuType, setMenuType] = useState<string>();
  const [blend, setBlend] = useState<boolean>(true);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("/");
  const isHome = pathname === "/" || pathname === "/es";
  const [subMenuIdx, setSubMenuIdx] = useState<any>();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [hoverKey, setHoverKey] = useState<number>(0);
  const disableNavbar = false;
  React.useEffect(() => {
    if (isOpen == true) {
      setBlend(false);
    }
    if (isOpen == false) {
      setTimeout(() => setBlend(true), 350);
    }
  }, [isOpen]);
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  const onMouseEnterRow = (idx: number) => {
    setHoveredIdx(idx);
    setHoverKey((prevKey) => prevKey + 1);
  };

  const onMouseLeaveRow = () => {
    setHoveredIdx(null);
  };
  return (
    <>
      <div
        className={[
          "flex items-baseline justify-between  transition-all duration-300 ease-in-out   w-full absolute top-0 left-0 right-0  z-50 gap-24 px-8 pt-12 ",
          disableNavbar && "!hidden",
          pathname.includes("/expos") && "text-primary",
          blend && "!mix-blend-difference text-white",
        ].join(" ")}
      >
        {/* left text */}
        <div className="flex gap-4 w-1/2 md:w-[400px] ">
          <h5 className=" text-sm md:text-md">
            El Instituto Valencia de Don Juan fue fundado en 1916 por don
            Guillermo de Osma y Scull y su esposa doña Adelaida Crooke y Guzmán
          </h5>
        </div>

        {/* Right Container */}

        <div className="p-5 hidden items-center md:gap-24 md:flex z-10  ">
          {navbarList.map((item, index) =>
            item.title === "Contacto" ? (
              <Link href={item.link} key={index} passHref>
                <div
                  className={`leading-[24px] cursor-pointer ${
                    activeLink === item.link ? "underline" : ""
                  }`}
                >
                  <Text tag="h5" variant="subtitle">
                    {item.title}
                  </Text>
                </div>
              </Link>
            ) : (
              <ScrollLink
                to={item.link.replace("#", "")}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index}
                className={` leading-[24px] cursor-pointer  ${
                  activeLink === item.link ? "underline" : ""
                }`}
                onClick={() => handleLinkClick(item.link)}
              >
                <Text
                  tag="h5"
                  variant="subtitle"
                  className={[
                    item?.title === "El instituto" && "hidden md:block gap-0",
                  ].join(" ")}
                >
                  {item?.title}
                </Text>
              </ScrollLink>
            )
          )}
        </div>
        <div className="flex md:hidden  " onClick={() => setIsOpen(!isOpen)}>
          <p className=" text-lg">Menu</p>
        </div>
        <div
          className={[
            "pt-[168px] flex flex-col  items-center gap-16 absolute top-0 left-0 -z-10 right-0 h-screen bg-primary -translate-y-[100%] transition-transform ease-in-out duration-300",
            isOpen && "translate-y-0 duration-500 ",
          ].join(" ")}
        >
          {navbarList.map((item, index) => (
            <Link
              href={item?.link || ""}
              onClick={() => setIsOpen(false)}
              onMouseEnter={() => onMouseEnterRow(index)}
              onMouseLeave={onMouseLeaveRow}
              key={index}
            >
              <Text
                tag="h5"
                variant="title"
                className={[" ", isOpen && "opacity-100"].join(" ")}
                hover="stroke"
              >
                {item?.title}
              </Text>
            </Link>
          ))}
        </div>
        {/* mobile menu */}
      </div>
    </>
  );
}

export default Navbar;
