"use client";
import Text from "@/components/ui/typography/Typography";
import React from "react";
import { ReactSVG } from "react-svg";
import { Locale } from "@/i18n";
import LocaleLink from "@/components/ui/locale-link";

interface Props {
  nextProjectSlug: string;
  lang: Locale;
  color: string;
}

const NextProjectButton = ({ nextProjectSlug, color, lang }: Props) => {
  if (!nextProjectSlug) return null;
  return (
    <div className="py-20 md:py-50 px-8 md:px-30 flex md:justify-end justify-center cursor-pointer">
      <LocaleLink
        lang={"es"}
        href={`/${lang}/collections/${nextProjectSlug}`}
        className="flex flex-col group"
      >
        <div className="flex gap-19 items-center">
          <Text tag="h4" variant="title" className="mr-4">
            NEXT
          </Text>
          {/* Arrow */}
          <div className="group-hover:translate-x-3 transition-transform duration-300 inline-block">
            <ReactSVG
              src={"/arrowWhite.svg"}
              beforeInjection={(svg) => {
                // Modify all path elements' fill color
                const paths = svg.querySelectorAll("path,line,circle,rect");
                paths.forEach((path) => {
                  path.setAttribute("fill", color);
                });
              }}
              className="arrow-svg"
            />
          </div>
        </div>
      </LocaleLink>
    </div>
  );
};

export default NextProjectButton;
