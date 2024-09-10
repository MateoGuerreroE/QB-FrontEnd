"use client";
import { useStore } from "../store/zustandStore";
import AuthSection from "../sections/AuthSection";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function ProfileComponent() {
  const {
    isLogged,
    toggleIsLogged,
    isLoginVisible,
    toggleLoginVisible,
    setFavorites,
  } = useStore();

  const handleClick = async () => {
    if (isLogged) {
      toggleIsLogged();
      await signOut();
      setFavorites([]);
    } else {
      toggleLoginVisible();
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        onClick={() => handleClick()}
      >
        <Image
          className="w-8 self-center"
          src={`${isLogged ? "/LoggedProfile.jpg" : "/icons/user_icon.svg"}`}
          width={500}
          height={500}
          alt="user icon"
        />
      </div>
      <AuthSection isVisible={isLoginVisible} />
    </>
  );
}
