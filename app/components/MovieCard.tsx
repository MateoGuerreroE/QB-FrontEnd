"use client";

import Image from "next/image";
import { CircularProgress } from "@nextui-org/react";
import { formatDateString } from "../utils/formatDate";

type ComponentProps = {
  title: string;
  image: string;
  isFavorite?: boolean;
  rating: number;
  releaseDate: string;
  dark?: boolean;
};

export default function MovieCard({
  title,
  image,
  isFavorite = false,
  rating,
  releaseDate,
  dark = false,
}: ComponentProps) {
  const setRatingColor = (rating: number): "success" | "warning" | "danger" => {
    if (rating >= 70) {
      return "success";
    } else if (rating >= 50) {
      return "warning";
    } else return "danger";
  };
  const isTitleLong = title.length > 25;
  return (
    <div className="aspect-[2/3] max-w-[350px]">
      <div
        className={`w-full h-full flex flex-col rounded-xl overflow-hidden ${
          dark ? "bg-[#262626]" : "bg-gray-500"
        }`}
      >
        <Image
          src={image}
          alt="movie_image"
          className="h-2/3 shadow-lg shadow-black/50"
          width={700}
          height={700}
        />
        <div
          className={`flex flex-col p-3 mt-2 gap-1 h-1/3 ${
            dark ? "text-white" : "text-black"
          }`}
        >
          <div
            className={`flex flex-col ${
              isTitleLong && title.length > 40 ? "gap-0" : "gap-1.5"
            }`}
          >
            <h4
              className={`${
                isTitleLong ? "text-md" : "text-2xl"
              } font-helveticabold`}
            >
              {title}
            </h4>
            <h5 className="font-aksara text-md opacity-95">
              {formatDateString(releaseDate)}
            </h5>
          </div>
          <div className="flex flex-row justify-center gap-16">
            <div
              className={`flex flex-col ${
                isTitleLong && title.length > 40 ? "gap-0.5" : "gap-2"
              }`}
            >
              <label className="text-sm text-center opacity-95 font-aksara">
                Rating
              </label>
              <CircularProgress
                aria-label="rating"
                size="lg"
                value={rating}
                color={setRatingColor(rating)}
                showValueLabel={true}
              />
            </div>
            <div
              className={`flex flex-col ${
                isTitleLong && title.length > 40 ? "gap-0.5" : "gap-2"
              }`}
            >
              <label className="text-sm text-center opacity-95 font-aksara">
                Favorites
              </label>
              <Image
                src={
                  isFavorite ? `/icons/heart-filled.svg` : `/icons/heart.svg`
                }
                alt="favorite_icon"
                width={500}
                height={500}
                className="w-11 h-11 self-center mt-0.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
