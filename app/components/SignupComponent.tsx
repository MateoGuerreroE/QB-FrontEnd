"use client";
import { Button, Input } from "@nextui-org/react";
import React from "react";

export default function SignupComponent() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-4xl text-center">Welcome to Quickbet Movies!</h2>
      <div className="flex flex-col w-full pt-10 gap-3">
        <p className="font-aksara text-center">
          Ready to unlock a universe of cinematic delights? 🎬
        </p>
        <Input
          type="email"
          label="Email"
          labelPlacement="outside"
          radius="sm"
          variant="flat"
          classNames={{
            inputWrapper: "rounded-b-none",
            input:
              " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
          }}
        />
        <Input
          type="password"
          label="Password"
          labelPlacement="outside"
          radius="sm"
          variant="flat"
          classNames={{
            inputWrapper: "rounded-b-none",
            input:
              " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
          }}
        />
        <Input
          type="password"
          label="Repeat Password"
          labelPlacement="outside"
          radius="sm"
          variant="flat"
          classNames={{
            inputWrapper: "rounded-b-none",
            input:
              " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
          }}
        />
        <Button color="primary" className="text-black mt-5" radius="sm">
          Register with your Email
        </Button>
      </div>
    </div>
  );
}
