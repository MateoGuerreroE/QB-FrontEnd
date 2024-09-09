import React from "react";
import { MovieData } from "../types/MovieData";
import { CircularProgress } from "@nextui-org/react";
import { getRatingColor } from "../utils/getRatingColor";

type ComponentProps = {
  movie: MovieData;
};

export default function MovieBannerCard({ movie }: ComponentProps) {
  const movieRating = Math.round((movie.vote_average / 10) * 100);
  return (
    <div className="w-full h-full overflow-hidden ">
      <div
        className="h-full flex flex-col justify-end bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
          backgroundPosition: `center 200%`,
        }}
      >
        <div className="flex flex-col gap-3 p-5 pt-16 bg-gradient-to-t from-black via-70% via-black/70 to-transparent">
          <div className="flex flex-row">
            <h3 className=" w-[90%] font-helveticabold text-3xl self-center">
              {movie.title}
            </h3>
            <CircularProgress
              aria-label="rating"
              size="lg"
              value={movieRating}
              color={getRatingColor(movieRating)}
              showValueLabel={true}
            />
          </div>
          <p className="font-aksara text-md">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
