import React, { useState } from "react";
import { createImageUrl } from "../services/movieService";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieItem = ({ movie }) => {
  const { title, backdrop_path, poster_path } = movie;
  const [like, setLike] = useState(false);

  return (
    <div className="relative inline-block m-2 rounded-lg overflow-hidden w-[160px] sm:w-[200px]">
      <img
        className="w-full h-24 md:h-32 object-cover object-top"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />
      <div className="absolute w-full h-24 md:h-32 left-0 top-0 bg-black/80 opacity-0 hover:opacity-100">
        <p className="flex items-center whitespace-normal justify-center h-full text-xs ">
          {title}
        </p>
        <p>
          {!like ? (
            <FaRegHeart
              size={20}
              className="top-2 left-2 absolute text-gray-200"
            />
          ) : (
            <FaHeart
              size={20}
              className="top-2 left-2 absolute text-gray-200"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
