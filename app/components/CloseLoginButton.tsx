"use client";
import React from "react";
import { useStore } from "../store/zustandStore";

export default function CloseLoginButton() {
  const { toggleLoginVisible } = useStore();
  const handleClose = () => {
    toggleLoginVisible();
    document.body.style.overflow = "auto";
  };
  return (
    <div className="w-full h-6 mb-6 flex flex-row gap-3">
      <div className="w-6" onClick={() => handleClose()}>
        <img src="/icons/back.svg" alt="back_icon" />
      </div>
      <h5 className="font-titles">Back</h5>
    </div>
  );
}
