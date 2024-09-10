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
    <Swiper spaceBetween={5} slidesPerView={1}>
      {movieList.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
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
