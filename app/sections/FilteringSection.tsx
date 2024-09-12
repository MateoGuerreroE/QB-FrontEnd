import React from "react";
import GenreFilteringComponent from "../components/GenreFilteringComponent";
import SearchBarComponent from "../components/SearchBarComponent";

export default function FilteringSection() {
  return (
    <section className=" bg-[#262626] h-full p-8 flex flex-col gap-5 w-full">
      <SearchBarComponent />
      <GenreFilteringComponent />
    </section>
  );
}
