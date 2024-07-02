import HomeCarousel from "@/components/LandingPage/Carousel";
import ProjectsSection from "@/components/LandingPage/Projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white max-h-screen max-w-screen h-screen bg-blend-darken relative">
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
          <div className=" py-20  grid  grid-flow-col">
            <div className=" grid-flow-col">
              <div className="text-xl text-[#000000] px-7 pr-48">
                EL INSTITUTO
              </div>
            </div>
            <div className="grid grid-flow-row px-7 pl-40">
              <div className="text-base text-[#646464] font-extralight leading-5 tracking-wide">
                El Instituto Valencia de Don Juan fue fundado en 1916 por don
                Guillermo de Osma y Scull y su esposa doña Adelaida Crooke y
                Guzmán (XIII condesa de Valencia de Don Juan) con la idea de 
                crear un centro dedicado a la investigación de la historia, el
                arte y la cultura de España a través de las colecciones
                artísticas y documentales que el matrimonio había reunido
                durante su vida. 
              </div>
              <div className="text-base pt-6 text-[#646464] font-extralight leading-5 tracking-wide">
                La colección del Instituto se conserva hoy en un singular
                edificio neomudéjar construido entre 1889 y 1889 para ser  la
                residencia particular de Don Guillermo y Doña Adelaida. Entre
                sus más de 8.000 piezas (armas, cerámicas hispano-árabes,
                cuadros, azabaches, etc.), se encuentra una de las colecciones
                de arte andalusí más importantes, y posiblemente más
                desconocidas, del mundo. Además, el Instituto conserva en su
                biblioteca un importante archivo de 40.000 documentos, desde los
                Reyes Católicos hasta el siglo XIX, y un importante fondo
                fotográfico, compuesto por más de 10.000 originales de los
                siglos XIX y XX en distintos soportes.
              </div>
            </div>
          </div>
          {/* <div className="">
            <div className="pt-20 px-36 text-[#00000040] text-7xl font-normal  ">
              Un centro dedicado a la investigación de la historia, el arte y la
              cultura de España
            </div>
          </div> */}

          {/* animated projects section  */}

          <ProjectsSection />
          <div
            className="text-black flex justify-between items-end  mt-[300px] p-4 md:p-5"
            id="iii"
          >
            <a href="mailto:instvaldonjuan@hotmail.com">
              <h2 className="text-3xl md:text-[40px] md:leading-[48px] max-w-[300px] md:max-w-[394px]">
                Contacta con nosotros
              </h2>
            </a>
            <h5 className="text-base md:text-2xl text-end">
              Calle de Fortuny 43, Madrid
            </h5>
          </div>
        </div>
      </div>

      {/* Content */}
    </main>
  );
}
