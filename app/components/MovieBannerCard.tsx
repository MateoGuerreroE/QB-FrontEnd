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
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundPosition: `center`,
        }}
      >
        <div className="flex flex-col gap-3 p-5 md:p-10 md:h-[300px] pt-16 bg-gradient-to-t from-black/100 via-70% via-black/70 md:via-40% md:via-black/100 to-transparent">
          <div className="max-h-[500px] self-center flex flex-col md:gap-5 gap-3">
            <div className="flex flex-row justify-between">
              <h3 className="w-[80%] font-titles text-3xl lg:text-5xl self-center">
                {movie.title}
              </h3>
              <div className="flex flex-col md:h-[80px] lg:h-[100px] justify-center">
                <CircularProgress
                  aria-label="rating"
                  size="lg"
                  value={movieRating}
                  color={getRatingColor(movieRating)}
                  showValueLabel={true}
                  classNames={{
                    svg: "w-full md:h-[70px] lg:h-[90px]",
                    value: "font-aksara text-sm lg:text-lg",
                  }}
                />
                <p className="hidden md:block text-center font-titles text-white">
                  Ratings
                </p>
              </div>
            </div>
            <p className="font-aksara md:font-helveticabold md:text-xl text-md md:w-[80%]">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
