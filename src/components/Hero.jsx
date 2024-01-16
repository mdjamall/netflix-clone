import React, { useEffect, useState } from "react";
import endpoints, { createImageUrl } from "../services/movieService";
import axios from "axios";

const Hero = () => {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movie = response.data.results;

      const randomMovies = movie[Math.floor(Math.random() * movie.length)];

      setMovies(randomMovies);
    });
  }, []);

  const trucate = (str, length) => {
    if (!str) return "";

    return str.length > length ? str.slice(0, length) + "...more" : str;
  };

  if (!movies)
    return (
      <>
        <p>Fetching movies...</p>
      </>
    );

  const { title, backdrop_path, release_date, overview } = movies;

  return (
    <div className="w-full h-[550px] lg:h-[850px] ">
      <div className="  w-full h-full">
        <div
          className="absolute w-full bg-gradient-to-b
        from-black h-[550px] lg:h-[850px]"
        >
          <img
            className="w-full h-full object-cover object-top  "
            src={createImageUrl(backdrop_path, "original")}
            alt={title}
          />

          <div className="absolute top-[30%] lg:top-[40%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-nsans-bold lg:max-w-[50%] md:max-w-[50%] sm:max-w-[60%]">
              {title}
            </h1>
            <div className="mt-8 mb-4">
              <button className="capitalize border  py-2 px-5 text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:scale-105 duration-200 hover:text-white border-gray-400 ">
                play
              </button>
              <button className="capitalize border bg-gray-500  py-2 px-5 text-white hover:bg-gradient-to-r hover:from-gray-600 hover:to-white hover:scale-105 duration-200  hover:text-black border-gray-400 ml-3">
                watch later
              </button>
            </div>
            <p className="text-gray-300">{release_date}</p>
            <p className="mt-2 w-full lg:max-w-[40%] md:max-w-[50%] max-w-[70%] text-gray-200">
              {trucate(overview, 165)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
