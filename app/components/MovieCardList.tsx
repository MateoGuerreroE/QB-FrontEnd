"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/css";
import { MovieData } from "../types/MovieData";
import { useStore } from "../store/zustandStore";

type ComponentProps = {
  movieList: MovieData[];
};

export default function MovieCardList({ movieList }: ComponentProps) {
  const { favorites } = useStore();
  return (
    <Swiper
      spaceBetween={5}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        750: {
          slidesPerView: 2,
        },
        1450: {
          slidesPerView: 3,
        },
        1850: {
          slidesPerView: 4,
        },
        2320: {
          slidesPerView: 5,
        },
      }}
    >
      {movieList.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            id={movie.id.toString()}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={Math.round((movie.vote_average / 10) * 100)}
            releaseDate={movie.release_date}
            isFavorite={favorites.includes(movie.id.toString())}
            dark={true}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
