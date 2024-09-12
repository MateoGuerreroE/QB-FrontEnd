import React from "react";
import SearchBarInput from "./SearchBarInput";

export default function SearchBarComponent() {
  return (
    <div className="flex flex-row lg:flex-col lg:gap-3 gap-5 items-center lg:items-start w-full">
      <h3 className="font-titles text-2xl">Search</h3>
      <SearchBarInput />
    </div>
  );
}
