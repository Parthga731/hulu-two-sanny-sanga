import React, { forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ result }, ref) => {
  const base_path = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={1000}
        width={1920}
        src={
          `${base_path}${result.backdrop_path || result.poster_path}` ||
          `${base_path}${result.poster_path}`
        }
        alt="pic"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}`}{" "}
          {result.release_date || result.first_air_date}{" "}
          <ThumbUpIcon className="h-7 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
