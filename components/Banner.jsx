import React, {useEffect, useState} from 'react'
import instance from "../requests/axios";
import requests from '../requests/requests'

const Banner = () => {
    const [movie, setMovie] = useState([])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    useEffect(() => {
        async function fetchData() {
          const data = await instance.get(requests.fetchNetflixOriginals);
          setMovie(data.data.results[Math.floor(Math.random() * data.data.results.length - 1)]);
          return data;
        }
        fetchData();
      }, []);
    
  return (
    <>
        <div style={
            {
                backgroundSize:"cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }
        }>
            <div className='h-[25rem] md:h-[35rem] flex items-end px-5 md:px-10 bg-black bg-opacity-50'>
            <div>
                <h1 className='text-4xl md:text-6xl font-bold mb-3'>{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className='my-5 md:my-10 space-x-2'>
                    <button className='bg-slate-900 bg-opacity-70 px-6 md:px-8 py-1 md:py-2'>Play</button>
                    <button className='bg-slate-900 bg-opacity-70 px-6 md:px-8 py-1 md:py-2'>My List</button>
                </div>

                <h1 className='w-full md:w-2/3 mb-2 text-sm md:text-lg font-semibold'>{truncate(movie?.overview, 150)}</h1>
            </div>
            </div>

        </div>
    </>
  )
}

export default Banner

