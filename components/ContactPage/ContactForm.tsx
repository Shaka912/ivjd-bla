"use client";
import React from "react";
import { z } from "zod";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/mail";
import { contactusSchema } from "@/lib/validationSchemas";
import { Textarea, TextInput } from "@tremor/react";
import { urlForImage } from "@/sanity/lib/image";

export type contactusFormData = z.infer<typeof contactusSchema>;

const ContactForm = ({ rightImg, lang }: any) => {
  const methods = useForm<contactusFormData>({
    resolver: zodResolver(contactusSchema),
  });
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    setError,
    formState: { errors, isValid },
  } = methods;

  const processForm: SubmitHandler<contactusFormData> = async (data) => {
    try {
      toast.promise(sendContactEmail(data.email, data.name, data.message), {
        loading: "Loading...",
        success: (data) => {
          reset();
          return `Email has been sucessfully sumbmitted`;
        },
        error: "An error occurred while sending the email",
      });

      reset();
    } catch (error: any) {}
  };

  return (
    <form className="" onSubmit={handleSubmit(processForm)}>
      <FormProvider {...methods}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-7 pt-4 px-7">
          <div className="col-span-1">
            <div className="">
              <div className="text-base text-[#000000]">
                {lang === "es" ? "Nombre" : "Name"}
              </div>
              <TextInput
                placeholder={lang === "es" ? "Nombre" : "Name"}
                className="mt-1 w-full shadow-sm sm:text-base font-light text-gray-500 border border-gray-300 rounded-xl p-4 h-12 focus:outline-none focus:ring-0 focus:border-gray-300"
              />
              <div className="text-base text-[#000000] pt-7">
                {lang === "es" ? "Correo electrónico*" : "Email"}
              </div>
              <TextInput
                placeholder={lang === "es" ? "Correo electrónico*" : "Email"}
                className="mt-1 w-full shadow-sm sm:text-base font-light text-gray-500 border border-gray-300 rounded-xl p-4 h-12 focus:outline-none focus:ring-0 focus:border-gray-300"
              />
              <div className="text-base text-[#000000] pt-7">
                {lang === "es" ? "Mensaje" : "Message"}
              </div>
              <Textarea
                placeholder="Start typing here..."
                className="mt-1 w-full shadow-sm sm:text-base font-light text-gray-500 border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-0 focus:border-gray-300"
              />
              <div className="text-base text-[#000000] pt-6">
                {lang === "es" ? "Política de privacidad*" : "Privacy policy"}
              </div>
              <div className="pt-2">
                <label className="flex items-center w-full h-full">
                  <input
                    type="checkbox"
                    className="custom-checkbox "
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-base text-[16px] md:pl-4 pl-2 text-[#666666] ">
                    Acepto los términos y condiciones y la política de
                    privacidad (más información en la parte inferior)
                  </span>
                </label>
              </div>

              {/* <div className="pt-2">
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
              </div> */}
              <div className="pt-5">
                <button className="bg-black w-20 h-10 rounded-xl text-white text-base">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-full mt-4 md:mt-0">
            <img
              src={urlForImage(rightImg) || ""} // Use the local image path
              alt="images gallery"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </FormProvider>
    </form>
  );
};
export default ContactForm;
