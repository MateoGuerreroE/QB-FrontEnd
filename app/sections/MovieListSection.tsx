import React from "react";
import MovieCardList from "../components/MovieCardList";

type ComponentProps = {
  title: string;
  darkMode?: boolean;
  path?: "popular" | "now_playing" | "top_rated";
};

export default async function MovieListSection({
  title,
  darkMode = true,
  path,
}: ComponentProps) {
  const res = await fetch(
    `${process.env.BE_URL}/utils/movies${path ? `?path=${path}` : ""}`
  );
  const data = await res.json();

  return (
    <section
      className={`p-9 w-full flex flex-col gap-10 ${
        darkMode ? "bg-[#444444]" : "bg-gray-50"
      }`}
    >
      <div>
        <h3 className="font-helveticabold text-3xl">{title}</h3>
      </div>
      <div className="flex flex-row jusitfy-center">
        <MovieCardList movieList={data.data} />
      </div>
    </section>
  );
}
