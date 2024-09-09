"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/css";
import { MovieData } from "../types/MovieData";

type ComponentProps = {
  movieList: MovieData[];
};

export default function MovieCardList({ movieList }: ComponentProps) {
  const [activeMovie, setActiveMovie] = useState<number>(movieList[0].id);
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {movieList.map((movie) => (
        <SwiperSlide>
          <MovieCard
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={Math.round((movie.vote_average / 10) * 100)}
            releaseDate={movie.release_date}
            dark={true}
          />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>
        <MovieCard
          title="Sample"
          image="https://hs.sbcounty.gov/cn/Photo%20Gallery/_w/Sample%20Picture%20-%20Koala_jpg.jpg"
          rating={50}
          releaseDate="21 Jun. 2021"
          dark={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <MovieCard
          title="Sample"
          image="https://hs.sbcounty.gov/cn/Photo%20Gallery/_w/Sample%20Picture%20-%20Koala_jpg.jpg"
          rating={50}
          releaseDate="21 Jun. 2021"
          dark={true}
        />
      </SwiperSlide> */}
    </Swiper>
  );
}
