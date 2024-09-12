"use client";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";

type CardProps = { genreId: string; name: string };

export default function GenreCard({ genreId, name }: CardProps) {
  return (
    <li className="p-0.5 font-aksara text-lg pl-3 hover:bg-[#4b4b4b] hover:cursor-pointer">
      {name}
    </li>
  );
}
