import React, { useState, useEffect } from "react";
import instance from "../requests/axios";
import Image from "next/image";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const imageBaseURL = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await instance.get(fetchURL);
      setMovies(data.data.results);
      return data;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <>
      <div className="mb-7">
        <h2 className="text-white text-2xl font-bold my-5">{title}</h2>
          <div className="w-full flex overflow-x-scroll overflow-y-hidden">
            {movies?.map((movie) => (
              <img
                className={`${isLargeRow ? 'h-[300px]' : 'h-[170px]'} p-2 first:pl-0 object-contain hover:scale-110 ease-in-out duration-300 cursor-pointer`}
                key={movie.id}
                src={`${imageBaseURL}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                alt={movie?.name}
              />
            ))}
          </div>
      </div>
    </>
  );
};

export default Row;

// p-2 first:pl-0 h-[300px] object-contain hover:scale-110 ease-in-out duration-300 cursor-pointer