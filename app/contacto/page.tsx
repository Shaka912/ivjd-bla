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
            <div className="grid grid-cols-2 gap-x-7 pt-4 px-7">
              <div className="col-span-1">
                <div className="">
                  <div className="text-base text-[#000000]">Nombre</div>
                  <TextInput
                    placeholder="Nombre"
                    className="mt-1 w-full shadow-sm sm:text-base font-light text-gray-500 border border-gray-300 rounded-xl p-4 h-12 focus:outline-none focus:ring-0 focus:border-gray-300"
                  />
                  <div className="text-base text-[#000000] pt-7">
                    Correo electrónico
                  </div>
                  <TextInput
                    placeholder="Correo electrónico"
                    className="mt-1 w-full shadow-sm sm:text-base font-light text-gray-500 border border-gray-300 rounded-xl p-4 h-12 focus:outline-none focus:ring-0 focus:border-gray-300"
                  />
                  <div className="text-base text-[#000000] pt-7">Mensaje</div>
                  <Textarea
                    placeholder="Start typing here..."
                    className="mt-1 w-full shadow-sm sm:text-base font-light text-gray-500 border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-0 focus:border-gray-300"
                  />
                  <div className="text-base text-[#000000] pt-6">
                    Política de privacidad*
                  </div>
                  <div className="pt-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="text-base text-[#666666] pl-4">
                        Acepto los términos y condiciones y la política de
                        privacidad (más información en la parte inferior)
                      </span>
                    </label>
                  </div>
                  <div className="pt-5">
                    <button className="bg-black w-20 h-10 rounded-xl text-white text-base">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-1 h-full">
                <img
                  src={"/Captura.png"} // Use the local image path
                  alt="images gallery"
                  className="object-cover w-full h-full"
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
