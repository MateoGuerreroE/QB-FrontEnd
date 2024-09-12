"use client";
import React from "react";

type CardProps = { genreId: string; name: string };

export default function GenreCard({ genreId, name }: CardProps) {
  console.log(genreId);
  return (
    <li className="p-0.5 font-aksara text-lg pl-3 hover:bg-[#4b4b4b] hover:cursor-pointer">
      {name}
    </li>
  );
}
