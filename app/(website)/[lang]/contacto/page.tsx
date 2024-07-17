import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

import VisitingSection from "@/components/LandingPage/VisitingSection";
import ContactForm from "@/components/ContactPage/ContactForm";
import {
  getHeaderFooter,
  getNavbar,
  getPage,
} from "@/sanity/api/sanity.queries";
import { urlForImage } from "@/sanity/lib/image";
import { Props } from "../page";
import Link from "next/link";

export default async function Page({ params: { lang } }: Props) {
  const contact = await getPage(`contact-${lang}`);
  const home = await getPage(`home-${lang}`);
  const footer = await getHeaderFooter(lang);
  const navbar = await getNavbar(lang);
  function getSection(section: any) {
    if (section._type === "Home Visit") {
      return (
        <>
          <VisitingSection data={section} />
        </>
      );
    }
    return null;
  }
  return (
    <>
      <Navbar lang={lang} data={navbar} />
      <main className="bg-white max-h-screen max-w-screen h-screen bg-blend-darken relative">
        {/* Logo */}
        <div className="relative ">
          <div className="absolute top-56  w-full">
            {contact.sections.map((section: any, index) => {
              if (section._type === "contactHero") {
                return (
                  <>
                    <div className=" flex items-center pt-4 pb-4 px-7 ">
                      <Link href={"/"}>
                        <Image
                          width={70}
                          height={73}
                          style={{ objectFit: "contain" }}
                          src={urlForImage(section.logo) || ""}
                          alt="logo"
                        />
                      </Link>
                      <h1 className=" md:text-6xl md:ml-10 ml-4 text-[32px]">
                        {section.heading}
                      </h1>
                    </div>
                    <ContactForm rightImg={section.rightImage} lang={lang} />

                    {home?.sections.map((section) => {
                      return getSection(section);
                    })}
                    <Footer data={footer} />
                  </>
                );
              }
            })}
          </div>
        </div>

        {/* Content */}
      </main>
    </>
  );
}
