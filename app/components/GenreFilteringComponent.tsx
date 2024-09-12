import axios from "axios";
import React from "react";
import { Response } from "../types/AbstractResponse";
import { GenreData } from "../types/GenreData";
import GenreList from "./GenreList";

export default async function GenreFilteringComponent() {
  const { data } = await axios.get<Response<GenreData[]>>(
    process.env.BE_URL + "/utils/getGenreList"
  );
  const genreList = data.data;
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="">
        <h5 className="font-titles text-2xl">Genres</h5>
      </div>
      <GenreList genres={genreList} />
    </div>
  );
}
