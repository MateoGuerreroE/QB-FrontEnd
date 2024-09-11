import { Carousel } from "flowbite-react";
import React from "react";
import { MovieData } from "../types/MovieData";
import { FetchResponse } from "../types/FetchResponse";
import MovieBannerCard from "../components/MovieBannerCard";

// type ComponentProps = {};

export default async function MainBannerSection() {
  const response = await fetch(
    `${process.env.BE_URL}/utils/movies?path=popular`
  );
  const { data }: FetchResponse<MovieData[]> = await response.json();
  const displayableResults = data.slice(0, 5);
  return (
    <div className="w-full h-[600px] md:h-[800px] lg:">
      <Carousel
        slideInterval={4000}
        indicators={false}
        leftControl=" "
        rightControl=" "
        className="h-full"
        theme={{
          scrollContainer: {
            base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
          },
        }}
      >
        {displayableResults.map((movie) => (
          <MovieBannerCard movie={movie} key={movie.id} />
        ))}
      </Carousel>
    </div>
  );
}
