import React, { useState, useEffect } from "react";
import { useLoginContext } from "../context/LoginContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai'
import { db } from "../firebase/firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedShows = () => {
  const imageBaseURL = "https://image.tmdb.org/t/p/w500/";

  const { user } = useLoginContext();

  const [movies, setMovies] = useState([]);

  const slideLeft = () => {
    let slider = document.getElementById(RowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById(RowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const movieRef = doc(db, 'users', `${user?.email}`)
  
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <>
      <div className="bg-black p-4">
        <h2 className="text-white text-xl md:text-2xl font-bold my-5">
          My Shows
        </h2>
        <div className="relative flex items-center group">
          <MdChevronLeft
            className="rounded-full text-black bg-white absolute top-[40%] left-0 opacity-60 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block"
            size={40}
            onClick={slideLeft}
          />
          <div
            id={"slider"}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {movies?.map((movie) => (
              <div
                key={movie.id}
                className={`relative p-2 inline-block w-[200px] md:w-[250px] first:pl-0 hover:scale-110 ease-in-out duration-300 cursor-pointer`}
              >
                <img
                  className={`w-full h-auto block`}
                  src={`${imageBaseURL}${movie?.img}`}
                  alt={movie?.name}
                />
                <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 hover:bg-black/90 hover:transition ease-in-out">
                  <p className="px-2 text-center text-white text-sm md:text-base font-semibold h-full flex justify-center items-center whitespace-normal">
                    {movie?.name}
                  </p>
                  <p className="absolute top-4 right-4 text-gray-300" onClick={()=> deleteShow(movie.id)}>
                    <AiOutlineClose size={20}/>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            className=" rounded-full text-black bg-white absolute top-[40%] right-0 opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block"
            size={40}
            onClick={slideRight}
          />
        </div>
      </div>
    </>
  );
};

export default SavedShows;
