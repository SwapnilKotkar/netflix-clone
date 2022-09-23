import React from 'react'

const SectionThree = () => {
  return (
    <>
    <section className='flex justify-center border-t-8 border-slate-900'>
  <div className='md:py-10 flex flex-col md:flex-row justify-center w-[80%]' >
    <div className='h-full flex flex-1 justify-center items-center'>
      <div className='pt-10'>
      <h1 className='text-4xl md:text-4xl lg:text-5xl font-bold text-center md:text-left'>
      Watch everywhere.
      </h1>
      <h3 className='lg:w-2/3 py-4 text-lg md:text-xl lg:text-2xl text-center md:text-left'>
      Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
      </h3>
      </div>
    </div>
  <div className='flex flex-1 justify-center'>
    <div>
    <img src="/assets/device-apple.png" className='h-[20rem] object-contain' alt="tv-image" />
    </div>
  </div>
  </div>

  </section>
</>
  )
}

export default SectionThree