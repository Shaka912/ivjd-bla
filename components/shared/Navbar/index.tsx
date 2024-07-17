"use client";
import Text from "@/components/ui/typography/Typography";
import { navbarList } from "@/constants";
import { i18nConfig, Locale } from "@/i18n";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LocaleLink from "@/components/ui/locale-link";

interface props {
  lang: Locale;
  data: any;
}
function Navbar({ lang, data }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const query = useSearchParams();
  const [blend, setBlend] = useState<boolean>(true);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("/");
  const redirectedPathName = (locale: string) => {
    const queryParams = new URLSearchParams(query).toString();

    if (!pathname) return "/";

    const pathnameIsMissingLocale = i18nConfig.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    let newPathName;

    if (pathnameIsMissingLocale) {
      if (locale === i18nConfig.defaultLocale) {
        newPathName = pathname;
      } else {
        newPathName = `/${locale}${pathname}`;
      }
    } else {
      if (locale === i18nConfig.defaultLocale) {
        const segments = pathname.split("/");
        const isHome = segments.length === 2;
        if (isHome) {
          newPathName = "/";
        } else {
          segments.splice(1, 1);
          newPathName = segments.join("/");
        }
      } else {
        const segments = pathname.split("/");
        segments[1] = locale;
        newPathName = segments.join("/");
      }
    }

    // Append query parameters if any
    return queryParams ? `${newPathName}?${queryParams}` : newPathName;
  };
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
          <h5 className=" text-sm md:text-md">{data.header.title}</h5>
        </div>

        {/* Right Container */}

        <div className="p-5 hidden items-center md:gap-24 md:flex z-10  ">
          {data.navLinks.map((item: any, index: number) =>
            item.dropDown ? (
              <div key={index}>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex items-center space-x-2 justify-center">
                      <Text
                        tag="h5"
                        variant="subtitle"
                        className=" cursor-pointer "
                      >
                        {i18nConfig.localeNames[lang][lang]}
                      </Text>
                      <IoIosArrowDown />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {i18nConfig.locales.map((locale, index1) => {
                      return (
                        <Link key={locale} href={redirectedPathName(locale)}>
                          <DropdownMenuItem>
                            <Text
                              tag="h5"
                              variant="subtitle"
                              className="uppercase cursor-pointer "
                            >
                              {i18nConfig.localeNames[lang][locale]}
                            </Text>
                          </DropdownMenuItem>
                        </Link>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : item.link === "/contacto" ? (
              <LocaleLink
                key={index}
                lang={lang}
                href={item.link}
                className={`leading-[24px] cursor-pointer ${
                  activeLink === item.link ? "underline" : ""
                }`}
              >
                <Text
                  tag="h5"
                  variant="subtitle"
                  className={`leading-[24px] cursor-pointer ${
                    activeLink === item.link ? "underline" : ""
                  }`}
                >
                  {item?.title}
                </Text>
              </LocaleLink>
            ) : (
              <ScrollLink
                to={item.link.replace("#", "")}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index}
                className={`leading-[24px] cursor-pointer ${
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
        {/* mobile menu */}
        <div
          className={[
            "pt-[168px] md:pt-0  flex-col flex items-center gap-16 absolute top-0 left-0 -z-10 right-0 h-screen bg-primary -translate-y-[100%] transition-transform ease-in-out duration-300",
            isOpen && "translate-y-0 duration-500  ",
          ].join(" ")}
        >
          {navbarList.map((item, index) => {
            return (
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
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
