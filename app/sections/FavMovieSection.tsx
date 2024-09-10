"use client";
// Really don't like this being a client comp but needed to access context.
import React from "react";
import { SessionProvider } from "next-auth/react";
import MovieFavCardList from "../components/MovieFavCardList";

type ComponentProps = {
  title: string;
  darkMode?: boolean;
};

export default function FavMovieSection({
  title,
  darkMode = true,
}: ComponentProps) {
  return (
    <section
      className={`p-9 w-full flex flex-col gap-10 ${
        darkMode ? "bg-[#444444]" : "bg-gray-50"
      }`}
    >
      <div>
        <h3 className="font-helveticabold text-3xl">{title}</h3>
      </div>
      <div className="flex flex-row jusitfy-center">
        <SessionProvider>
          <MovieFavCardList />
        </SessionProvider>
      </div>
    </section>
  );
}
