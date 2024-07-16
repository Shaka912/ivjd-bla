"use client";
import Text from "@/components/ui/typography/Typography";
import Image from "next/image";
import React from "react";
import { ReactSVG } from "react-svg";
import { projects } from "@/components/data/index";
import Link from "next/link";

interface Props {
  nextProjectSlug: string;

  color: string;
}

const NextProjectButton = ({ nextProjectSlug, color }: Props) => {
  if (!nextProjectSlug) return null;

  // Find the next project based on the slug
  // const nextProject = projects.find(
  //   (project) => project.slug === nextProjectSlug
  // );

  return (
    <div className="py-20 md:py-50 px-8 md:px-30 flex md:justify-end justify-center cursor-pointer">
      <Link
        href={`/collections/${nextProjectSlug}`}
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
        {/* <Text tag="h4" variant="title">
          Collection
        </Text> */}
      </Link>
    </div>
  );
};

export default NextProjectButton;
