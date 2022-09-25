import React, {useState} from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {db} from '../firebase/firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'
import { useLoginContext } from "../context/LoginContext";

const Movie = ({ item, isLargeRow }) => {
  const imageBaseURL = "https://image.tmdb.org/t/p/w500/";

  const { user } = useLoginContext();
  const [movie, setMovie] = useState(item)
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)

  const movieID = doc(db, 'users', `${user?.email}`)

  const saveShow = async () => {
    if(user?.email) {
      setLike(!like);
      setSaved(true)
      try {
        await updateDoc(movieID, {
            savedShows: arrayUnion({
              id: movie.id,
              name: movie.name,
              img: movie.backdrop_path,
            }),
          });
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <div
      key={movie.id}
      className={`relative p-2 inline-block ${
        isLargeRow ? "w-[150px] md:w-[200px]" : "w-[200px] md:w-[250px]"
      } first:pl-0 hover:scale-110 ease-in-out duration-300 cursor-pointer`}
    >
      <img
        className={`w-full h-auto block`}
        src={`${imageBaseURL}${
          isLargeRow ? movie?.poster_path : movie?.backdrop_path
        }`}
        alt={movie?.name}
      />
      <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 hover:bg-black/90 hover:transition ease-in-out">
        <p className="px-2 text-center text-white text-sm md:text-base font-semibold h-full flex justify-center items-center whitespace-normal">
          {movie?.name}
        </p>
        <p onClick={saveShow} className="absolute top-4 left-4 text-gray-300">
          {like ? <FaHeart /> : <FaRegHeart />}
        </p>
      </div>
    </div>
  );
};

export default Movie;
