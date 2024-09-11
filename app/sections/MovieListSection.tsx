import React from "react";
import MovieCardList from "../components/MovieCardList";
import axios from "axios";
import { MovieData } from "../types/MovieData";
import { Response } from "../types/AbstractResponse";

type ComponentProps = {
  title: string;
  darkMode?: boolean;
  path?: "popular" | "now_playing" | "top_rated" | "upcoming" | "recommended";
  recommendedId?: string;
};

export default async function MovieListSection({
  title,
  darkMode = true,
  path,
  recommendedId,
}: ComponentProps) {
  let movieList: MovieData[];
  if (path === "recommended" && recommendedId) {
    const { data } = await axios.get<Response<MovieData[]>>(
      process.env.BE_URL + `/movie/recommendations/${recommendedId}`
    );
    movieList = data.data;
  } else {
    const { data } = await axios.get<Response<MovieData[]>>(
      process.env.BE_URL + `/utils/movies${path ? `?path=${path}` : ""}`
    );
    movieList = data.data;
  }

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
        <MovieCardList movieList={movieList ?? []} />
      </div>
    </section>
  );
}
