import React, {useEffect, useState} from 'react'
import instance from "../requests/axios";
import requests from '../requests/requests'

const Banner = () => {
    const [movie, setMovie] = useState([])

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
            <div className='h-[35rem] flex items-center px-10 bg-black bg-opacity-40'>
            <div>
                <h1 className='text-6xl font-bold mb-3'>{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className='my-10'>
                    <button className='bg-slate-900 bg-opacity-70 mx-2 px-8 py-2'>Play</button>
                    <button className='bg-slate-900 bg-opacity-70 mx-2 px-8 py-2'>My List</button>
                </div>

                <h1 className='w-2/3 text-lg font-semibold'>{movie?.overview}</h1>
            </div>
            </div>
        </div>
    </>
  )
}

export default Banner

