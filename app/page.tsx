import HomeCarousel from "@/components/LandingPage/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white max-h-screen max-w-screen h-screen bg-blend-darken relative">
      {/* Main Image */}
      {/* <Image
        src="/main-image.webp"
        alt="main image"
        fill
        className="z-0"
        style={{ objectFit: "cover" }}
      /> */}
      {/* Logo */}
      <div className="relative ">
        <div className="absolute top-56  w-full">
          <div className=" flex items-center p-4">
            <Image
              width={60}
              height={73}
              style={{ objectFit: "contain" }}
              src="/logo.png"
              alt="logo"
            />
            <h1 className=" text-7xl ml-10">Instituto Valencia de Don Juan</h1>
          </div>
          {/* carousel */}

          <HomeCarousel />

          {/* insitiute description  */}
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Content */}
      {/* <div className="text-white flex justify-between items-end absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <a href="mailto:instvaldonjuan@hotmail.com">
          <h2 className="text-3xl md:text-[40px] md:leading-[48px] max-w-[300px] md:max-w-[394px]">
            Contacta con nosotros
          </h2>
        </a>
        <h5 className="text-base md:text-2xl text-end">
          Calle de Fortuny 43, Madrid
        </h5>
      </div> */}
    </main>
  );
}
