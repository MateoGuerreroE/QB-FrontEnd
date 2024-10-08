"use client";
import React from "react";
import { MovieData, MovieVideoData } from "../types/MovieData";

type ComponentProps = {
  movie: MovieData;
  trailer?: MovieVideoData;
  isFavorite: boolean;
};

export default function MovieDescriptionComponent({
  movie,
  isFavorite,
  trailer,
}: ComponentProps) {
  console.log(movie, isFavorite, trailer);
  return <div>MovieDescriptionComponent</div>;
}
