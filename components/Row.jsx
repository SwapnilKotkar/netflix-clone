import React, { useState, useEffect } from "react";
import instance from "../requests/axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, isLargeRow, wait, RowID }) => {
  const imageBaseURL = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false)
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

const slideLeft = () => {
  let slider = document.getElementById(RowID)
  slider.scrollLeft = slider.scrollLeft - 500
}

const slideRight = () => {
  let slider = document.getElementById(RowID)
  slider.scrollLeft = slider.scrollLeft + 500
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
      <div className="z-10">
        <h2 className="text-white text-xl md:text-2xl font-bold my-5">{title}</h2>
          <div className="relative flex items-center group">
          <MdChevronLeft className="rounded-full text-black bg-white absolute top-[40%] left-0 opacity-60 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block" size={40} onClick={slideLeft}/>
            <div id={RowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {movies?.map((movie) => (
              <div key={movie.id} className={`relative p-2 inline-block ${isLargeRow ? 'w-[150px] md:w-[200px]' : 'w-[200px] md:w-[250px]'} first:pl-0 hover:scale-110 ease-in-out duration-300 cursor-pointer`}>
              <img
                className={`w-full h-auto block`}
                // key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${imageBaseURL}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                alt={movie?.name}
              />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 hover:bg-black/90 hover:transition ease-in-out">
                <p className="px-2 text-center text-white text-sm md:text-base font-semibold h-full flex justify-center items-center whitespace-normal">{movie?.name}</p>
                <p className="absolute top-4 left-4 text-gray-300">{like ? <FaHeart/> : <FaRegHeart/>}</p>
              </div>
              </div>
            ))}
            </div>
            <MdChevronRight className=" rounded-full text-black bg-white absolute top-[40%] right-0 opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block" size={40} onClick={slideRight}/>
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </>
  );
};

export default Row;

// 