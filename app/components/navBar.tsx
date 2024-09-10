import Image from "next/image";
import React from "react";
import ProfileComponent from "./profileComponent";

export default function NavBar() {
  return (
    <nav className=" bg-black w-full h-24">
      <div className="w-full h-full flex flex-row p-5 justify-between">
        <Image
          src={"/logo.JPG"}
          alt="logo"
          width={1000}
          height={500}
          className="w-52"
        />
        <div id="options" className="hidden">
          {/* ADD CLIENT COMPONENT HERE FOR OPTS*/}
        </div>
        <ProfileComponent />
      </div>
    </nav>
  );
}
