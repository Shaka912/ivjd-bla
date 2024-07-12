import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="first:mt-0 border-b border-solid border-black pt-0 mt-10 pb-0 px-7" />
      <div className="grid grid-cols-12 gap-4 md:px-4  px-2 w-full  justify-center items-center pt-0 pb-36 ">
        <div className="md:col-span-5 col-span-12 flex flex-col justify-end pt-0">
          <div className=" flex items-center p-4 ">
            <Image
              width={60}
              height={73}
              style={{ objectFit: "contain" }}
              src="/logo.png"
              alt="logo"
            />
            <h1 className="  ml-10">Instituto Valencia de Don Juan</h1>
          </div>
          <div className="md:px-7 px-4 md:mt-9  mt-4">
            <h2 className="text-2xl  ">CONTACTO</h2>
            <div className="flex justify-between text-[#646464] mt-3">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto.
            </div>
            <div className="flex justify-between text-[#646464] mt-3">
              000 000 000
            </div>
            <div className="flex justify-between text-[#646464] mt-3">
              info@example.com
            </div>
          </div>
        </div>
        <div className="md:col-span-5 col-span-6 md:ml-44 flex flex-col justify-around mb-20 px-4 mt-20 md:mt-0">
          <h2 className="md:text-2xl text-xl">LINKS</h2>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>EXAMPLE</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>EXAMPLE</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>EXAMPLE</p>
          </div>
        </div>
        <div className="md:col-span-2 col-span-6 flex flex-col justify-around mb-20 mt-20 md:mt-0">
          <h2 className="md:text-2xl text-xl">Legal Pages</h2>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>EXAMPLE</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>EXAMPLE</p>
          </div>
          <div className="flex justify-between text-[#646464] mt-3">
            <p>EXAMPLE</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
