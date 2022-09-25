import React, { useState, useEffect } from "react";
import instance from "../requests/axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL, isLargeRow, wait, RowID }) => {

  const [movies, setMovies] = useState([]);
    

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
            <Movie key={movie.id} item={movie} isLargeRow={isLargeRow}/>
            ))}
            </div>
            <MdChevronRight className=" rounded-full text-black bg-white absolute top-[40%] right-0 opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block" size={40} onClick={slideRight}/>
          </div>
      </div>
    </>
  );
};

export default Row;

// 