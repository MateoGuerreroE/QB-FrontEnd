"use client";
import React from "react";
import { useStore } from "../store/zustandStore";
import AuthSection from "../sections/AuthSection";
import Image from "next/image";

export default function ProfileComponent() {
  const { user, isLoginVisible, toggleLoginVisible } = useStore();
  const handleClick = () => {
    if (user) {
    } else {
      toggleLoginVisible();
    }
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        onClick={() => handleClick()}
      >
        <Image
          className="w-8 self-center"
          src={`${user ? "/LoggedProfile.jpg" : "/icons/user_icon.svg"}`}
          width={500}
          height={500}
          alt="user icon"
        />
      </div>
      <AuthSection isVisible={isLoginVisible} />
    </>
  );
}
