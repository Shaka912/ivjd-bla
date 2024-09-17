"use client";
import React from "react";
import { Dialog, DialogPanel } from "@tremor/react";
import { RiCloseFill } from "@remixicon/react";
function ImagePopup({
  isOpen,
  handleClose,
  img,
}: {
  isOpen: boolean;
  handleClose: any;
  img: string;
}) {
  return (
    <>
      <Dialog open={isOpen} onClose={handleClose} static={true}>
        <DialogPanel>
          <div className="relative">
            <div
              className="absolute right-3 z-40 cursor-pointer"
              onClick={handleClose}
            >
              <RiCloseFill />
            </div>
            <div className=" flex justify-center">
              <img
                src={img || ""}
                alt="images gallery"
                className="object-contain "
              />
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default ImagePopup;
