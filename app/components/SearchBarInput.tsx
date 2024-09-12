"use client";
import { Input } from "@nextui-org/react";
import React from "react";

export default function SearchBarInput() {
  return (
    <div className="w-full font-aksara">
      <Input
        variant="flat"
        placeholder="Keywords"
        radius="sm"
        classNames={{
          inputWrapper: "rounded-b-none bg-[#1c1c1c]",
          input:
            " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
        }}
      />
    </div>
  );
}
