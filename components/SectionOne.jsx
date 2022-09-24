import React from 'react'

const SectionOne = () => {
  return (
    <>
      <section className='flex justify-center border-t-8 border-[#303030] bg-black'>
      <div className='md:py-10 flex flex-col md:flex-row justify-center w-[80%]' >
        <div className='h-full flex flex-1 justify-center items-center'>
          <div className='pt-10'>
          <h1 className='text-4xl md:text-4xl lg:text-5xl font-bold text-center md:text-left'>
          Enjoy on your TV.
          </h1>
          <h3 className='lg:w-2/3 py-4 text-lg md:text-xl lg:text-2xl text-center md:text-left'>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
          </h3>
          </div>
        </div>
      <div className='flex flex-1 justify-center'>
        <div>
        <img src="/assets/tv.png" className='h-[20rem] object-contain' alt="tv-image" />
        </div>
      </div>
      </div>

      </section>
    </>
  )
}

export default SectionOne