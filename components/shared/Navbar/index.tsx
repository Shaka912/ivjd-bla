"use client";
import Text from "@/components/ui/typography/Typography";
import { navbarList } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuType, setMenuType] = useState<string>();
  const [blend, setBlend] = useState<boolean>(true);
  const pathname = usePathname();

  const isHome = pathname === "/" || pathname === "/es";
  const disableNavbar = false;
  React.useEffect(() => {
    if (isOpen == true) {
      setBlend(false);
    }
    if (isOpen == false) {
      setTimeout(() => setBlend(true), 350);
    }
  }, [isOpen]);
  return (
    <>
      <div
        className={[
          "flex items-baseline justify-between  transition-all duration-300 ease-in-out  bg-transparent w-full fixed top-0 left-0 right-0  z-20 gap-24 px-8 pt-12 ",
          disableNavbar && "!hidden",
          pathname.includes("/expos") && "text-primary",
          blend && "!mix-blend-difference text-white",
        ].join(" ")}
      >
        {/* left text */}
        <div className="flex gap-4 w-[400px]">
          <h5>
            El Instituto Valencia de Don Juan fue fundado en 1916 por don
            Guillermo de Osma y Scull y su esposa doña Adelaida Crooke y Guzmán
          </h5>
        </div>
        {/* Right Container */}

        <div className="p-5 flex items-center md:gap-24 z-10  ">
          {navbarList.map((item, index) => (
            <Link className="" href={item?.link || "#"} key={index}>
              <Text
                tag="h5"
                variant="subtitle"
                className={[
                  item?.title === "El instituto" && "hidden md:block gap-0",
                ].join(" ")}
              >
                {item?.title}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
