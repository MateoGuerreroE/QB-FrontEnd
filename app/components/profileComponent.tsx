"use client";
import { useStore } from "../store/zustandStore";
import AuthSection from "../sections/AuthSection";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function ProfileComponent() {
  const {
    isLogged,
    toggleIsLogged,
    isLoginVisible,
    toggleLoginVisible,
    setFavorites,
    setUserId,
    setToken,
  } = useStore();
  const { data, status } = useSession();
  const handleClick = async () => {
    if (isLogged) {
      toggleIsLogged();
      await signOut({
        redirect: false,
      });
      setFavorites([]);
      setUserId(null);
      setToken(null);
      Swal.fire({
        title: "Logged out!",
        icon: "success",
        background: "#262626",
        width: "350px",
        confirmButtonColor: "#f0b90b",
        color: "#ffffff",
      });
    } else {
      toggleLoginVisible();
      document.body.style.overflow = "hidden";
    }
  };
  useEffect(() => {
    if (status === "authenticated" && data && !isLogged) {
      const user = data.user as { name: string; accessToken: string };
      toggleIsLogged();
      setUserId(user.name as string);
      setToken(user.accessToken as string);
    }
  }, [status]);
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
