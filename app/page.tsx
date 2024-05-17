import Image from "next/image";

export default function Home() {
  return (
    <main
      className="bg-black max-h-screen max-w-screen h-screen bg-blend-darken"
      // style={{ background: `url("/main-image.jpg")` }}
    >
      {/* Main Image */}
      <Image
        src="/main-image.jpg"
        alt="main image"
        fill
        className="z-0"
        style={{ objectFit: "cover" }}
      />

      {/* Logo */}
      <div className="relative p-5">
        <Image
          width={60}
          height={73}
          style={{ objectFit: "contain" }}
          src="/logo.svg"
          alt="logo"
        />
      </div>

      {/* Content */}
      <div className="text-white flex justify-between items-end absolute bottom-0 left-0 right-0 p-5">
        <h2 className="text-[40px] leading-[48px] max-w-[394px]">
          Contacta con nosotros
        </h2>
        <h5 className="text-2xl">Calle de Fortuny 43, Madrid</h5>
      </div>
    </main>
  );
}
