import React from 'react'
import Banner from '../components/Banner'
import MoviesCategory from '../components/MoviesCategory'
import Navbar from '../components/Navbar'

const profile = () => {
  return (
    <>
      <Navbar/>
      <div>
        <Banner/>
      </div>
      <div className='w-full py-10 px-5 bg-black'>
        <MoviesCategory/>
      </div>
    </>
  )
}

export default profile