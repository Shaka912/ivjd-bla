import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black max-h-screen max-w-screen h-screen bg-blend-darken">
      {/* Main Image */}
      <Image
        src="/main-image.webp"
        alt="main image"
        fill
        className="z-0"
        style={{ objectFit: "cover" }}
      />

      {/* Logo */}
      <div className="relative p-4 md:p-5">
        <Image
          width={60}
          height={73}
          style={{ objectFit: "contain" }}
          src="/logo.svg"
          alt="logo"
        />
      </div>

      {/* Content */}
      <div className="text-white flex justify-between items-end absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <h2 className="text-3xl md:text-[40px] md:leading-[48px] max-w-[300px] md:max-w-[394px]">
          Contacta con nosotros
        </h2>
        <h5 className="text-base md:text-2xl text-end">
          Calle de Fortuny 43, Madrid
        </h5>
      </div>
    </main>
  );
}
