import HomeHero from "@/components/LandingPage/HomeHero";
import VisitingSection from "@/components/LandingPage/VisitingSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { getPage } from "@/sanity/api/sanity.queries";
import HomeCollections from "@/components/LandingPage/HomeCollection";
import HomeResearchCentre from "@/components/LandingPage/HomeresearchCentre";

export default async function Home() {
  const home = await getPage(`home-es`);

  function getSection(section: any) {
    if (section._type === "homeHero") {
      return (
        <>
          <HomeHero data={section} />
        </>
      );
    } else if (section._type === "homeResearchCentre") {
      return <HomeResearchCentre data={section} />;
    } else if (section._type === "homeCollections") {
      return <HomeCollections data={section} />;
    } else if (section._type === "Home Visit") {
      return <VisitingSection data={section} />;
    }

    return null;
  }
  return (
    <>
      <Navbar />
      <main className="bg-white max-h-screen max-w-screen h-screen bg-blend-darken relative">
        {/* Logo */}
        <div className="relative ">
          <div className="absolute top-56  w-full">
            {home?.sections.map((section) => {
              return getSection(section);
            })}
            <Footer />
          </div>
        </div>

        {/* Content */}
      </main>
    </>
  );
}
