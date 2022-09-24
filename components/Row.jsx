import React, { useState, useEffect } from "react";
import instance from "../requests/axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const Row = ({ title, fetchURL, isLargeRow, wait }) => {
  const imageBaseURL = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  const opts = {
    height : "390",
    width : "100%",
    playerVars : {
      autoplay : 1,
    }
  }

  const handleClick = async (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } 
    else {
      try {
        const movieURL = await movieTrailer(movie.name);
        const urlParams = new URLSearchParams(new URL(movieURL).search);
        setTrailerUrl(urlParams.get("v"))
      } 
      catch (error) {
        console.log(error)
      }
  }
}

  useEffect(() => {
    async function fetchData() {
      const data = await instance.get(fetchURL);
      setMovies(data.data.results);
      return data;
    }
    setTimeout(() => {
      fetchData();
    }, wait);
  }, [fetchURL, wait]);

  return (
    <>
      <div>
        <h2 className="text-white text-xl md:text-2xl font-bold my-5">{title}</h2>
          <div className="w-full flex overflow-x-scroll overflow-y-hidden">
            {movies?.map((movie) => (
              <img
                className={`${isLargeRow ? 'h-[200px] md:h-[300px]' : 'h-[120px] md:h-[170px]'} p-2 first:pl-0 object-contain hover:scale-110 ease-in-out duration-300 cursor-pointer`}
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${imageBaseURL}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                alt={movie?.name}
              />
            ))}
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </>
  );
};

export default Row;