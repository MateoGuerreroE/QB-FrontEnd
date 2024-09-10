"use client";
import React from "react";
import { useStore } from "../store/zustandStore";
import Image from "next/image";

export default function CloseLoginButton() {
  const { toggleLoginVisible } = useStore();
  const handleClose = () => {
    toggleLoginVisible();
    document.body.style.overflow = "auto";
  };
  return (
    <div className="w-full h-6 mb-6 flex flex-row gap-3">
      <div className="w-6" onClick={() => handleClose()}>
        <Image src="/icons/back.svg" alt="back_icon" width={300} height={300} />
      </div>
      <h5 className="font-titles">Back</h5>
    </div>
  );
}
