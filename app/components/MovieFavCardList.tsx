"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/css";
import { MovieData } from "../types/MovieData";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../store/zustandStore";

export default function MovieFavCardList() {
  const session = useSession();
  const { setFavorites, favorites } = useStore();
  const { isLogged } = useStore();
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session.data && isLogged) {
          const token = (session.data.user as any)?.accessToken;
          const favUrl = process.env.NEXT_PUBLIC_BE_URL + "/users/favorites";
          const { data } = await axios.get(favUrl, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const movieList = data.data;
          setFavorites(movieList);
          const movieUrl = process.env.NEXT_PUBLIC_BE_URL + "/utils/movies/ids";
          const { data: movieResponse } = await axios.post(movieUrl, {
            ids: movieList,
          });
          setMovieData(movieResponse.data);
        }
      } catch (error: any) {
        console.log(error);
      }
    };
    if (!isLogged) setMovieData([]);
    fetchData();
  }, [isLogged]);
  console.log(favorites);

  return (
    <Swiper spaceBetween={5} slidesPerView={1}>
      {isLogged ? (
        movieData.map((movie) => (
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
        ))
      ) : (
        <SwiperSlide>
          <div className="font-titles text-xl text-center">
            You are not logged in!
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
