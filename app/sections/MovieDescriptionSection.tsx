import axios from "axios";
import React from "react";
import MovieDescriptionComponent from "../components/MovieDescriptionComponent";
import MovieListSection from "./MovieListSection";
import { Response } from "../types/AbstractResponse";
import { MovieData, MovieVideoData } from "../types/MovieData";

type SectionProps = {
  movieId: string;
  isFavorite: boolean;
};

export default async function MovieDescriptionSection({
  movieId,
  isFavorite,
}: SectionProps) {
  const { data } = await axios.get<Response<MovieData>>(
    process.env.BE_URL + `/utils/movie/${movieId}`
  );
  const movieData = data.data;

  const { data: videoData } = await axios.get<Response<MovieVideoData[]>>(
    process.env.BE_URL + `utils/movie/videos/${movieId}`
  );
  const videos = videoData.data;
  const trailer = videos.filter((vid) => vid.type === "Trailer");
  return (
    <div>
      <MovieDescriptionComponent
        movie={movieData}
        isFavorite={isFavorite}
        trailer={trailer.length ? trailer[0] : undefined}
      />
      <MovieListSection
        title="Recommendations"
        path="recommended"
        recommendedId={movieId}
      />
    </div>
  );
}
