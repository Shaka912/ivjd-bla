"use client";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import { TextInput, Textarea } from "@tremor/react";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import VisitingSection from "@/components/LandingPage/VisitingSection";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <Navbar />
      <main className="bg-white max-h-screen max-w-screen h-screen bg-blend-darken relative">
        {/* Logo */}
        <div className="relative ">
          <div className="absolute top-56  w-full">
            <div className=" flex items-center pt-4 pb-4 px-7 ">
              <Image
                width={70}
                height={73}
                style={{ objectFit: "contain" }}
                src="/logo.png"
                alt="logo"
              />
              <h1 className=" text-6xl ml-10">Contacto</h1>
            </div>

            {/* insitiute description  */}
            <div className="grid grid-cols-2  pt-4 px-7 gap-x-7 ">
              <div className="h-[20vw]">
                <div className="text-base text-[#000000]  ">Nombre</div>
                <TextInput
                  placeholder="Nombre"
                  className="mt-1 w-full shadow-sm sm:text-base font-light text-gray-500 border border-gray-300 rounded-xl p-4   h-12 focus:outline-none focus:ring-0 focus:border-gray-300"
                />
                <div className="text-base text-[#000000] pt-7 ">
                  Correo electrónico
                </div>
                <TextInput
                  placeholder="Correo electrónico"
                  className="mt-1 w-full shadow-sm sm:text-base font-light text-gray-500  border border-gray-300 rounded-xl p-4  h-12 focus:outline-none focus:ring-0 focus:border-gray-300"
                />
                <div className="text-base text-[#000000] pt-7 ">Mensaje</div>
                <Textarea
                  placeholder="Start typing here..."
                  className="mt-1 w-full shadow-sm sm:text-base font-light text-gray-500  border border-gray-300 rounded-xl p-4   focus:outline-none focus:ring-0 focus:border-gray-300"
                />
                <div className="text-base text-[#000000] pt-6 ">
                  Política de privacidad*
                </div>
                <div className="pt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <span className="text-base text-gray-800 pl-4">
                      Acepto los términos y condiciones y la poítica de
                      privacidad (más información en la parte inferior)
                    </span>
                  </label>
                </div>
                <div className="pt-3 ">
                  <button className="bg-black w-16 h-8 rounded-md text-white ">
                    {" "}
                    Enviar
                  </button>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Checkbox id="include" defaultChecked />
                  <label
                    htmlFor="include"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Allow administrators to change the directory.
                  </label>
                </div> */}
              </div>
              <div className="bg-black  ">
                {/* <img
                  src={"/Captura.png"} // Use the local image path
                  alt="images gallery"
                  style={{
                    objectFit: "contain",
                    // width: "47vw",
                    height: "100%",
                  }}
                /> */}
                <Image
                  width={700}
                  height={9}
                  style={{ objectFit: "contain" }}
                  src="/Captura.png"
                  alt="logo"
                />
              </div>
            </div>
            <VisitingSection />
            {/* Footer  */}
            <Footer />
          </div>
        </div>

        {/* Content */}
      </main>
    </>
  );
}
