import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="relative">
      {" "}
      <div className="grid grid-cols-12 gap-4 px-4 w-full h-[70vh] justify-center items-center mt-72 absolute bottom-0">
        <div className="col-span-5 flex flex-col justify-end">
          <div className="first:mt-0 border-b border-solid border-black"></div>
          <div className=" flex items-center p-4">
            <Image
              width={60}
              height={73}
              style={{ objectFit: "contain" }}
              src="/logo.png"
              alt="logo"
            />
            <h1 className=" text-xl ml-10">Instituto Valencia de Don Juan</h1>
          </div>
          <h2 className="text-2xl">VISITA</h2>
          <h5 className="mt-5 text-lg">Horario</h5>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>Lunes</p>
            <p>00:00</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>Lunes</p>
            <p>00:00</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>Lunes</p>
            <p>00:00</p>
          </div>
        </div>
        <div className="col-span-5 flex flex-col justify-end">
          <h2 className="text-2xl">VISITA</h2>
          <h5 className="mt-5 text-lg">Horario</h5>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>Lunes</p>
            <p>00:00</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>Lunes</p>
            <p>00:00</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>Lunes</p>
            <p>00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
