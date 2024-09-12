"use client";

import React from "react";
import { GenreData } from "../types/GenreData";
import GenreCard from "./GenreCard";

type Props = { genres: GenreData[] };

export default function GenreList({ genres }: Props) {
  return (
    <div className="pt-3 bg-[#1c1c1c] h-[500px] overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-webkit hidden lg:block">
      <ul className="flex flex-col gap-0.5 p-2 pt-0">
        {genres.map((genre) => (
          <GenreCard
            key={genre.id}
            genreId={genre.id.toString()}
            name={genre.name}
          />
        ))}
      </ul>
    </div>
  );
}
