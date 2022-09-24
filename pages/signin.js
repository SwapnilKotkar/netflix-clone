import React from 'react'
import Link from 'next/link';
import { BsArrowLeft } from "react-icons/bs";

const signin = () => {
  return (
    <>
        <div className='bg-[url("/assets/bg-hero.jpg")] h-[100vh] flex justify-center'>
            <div className='h-full w-full bg-black bg-opacity-60'>
            <div className='w-full p-20 flex justify-center'>
                <div className='relative md:w-2/3 lg:w-2/4 xl:w-1/3 py-[60px] px-[50px] rounded bg-black bg-opacity-80'>
                <Link href='/'>
                    <div className='absolute top-5 left-6'><BsArrowLeft className='text-2xl cursor-pointer'/></div>
                </Link>
                    <h1 className='mb-4 text-2xl md:text-3xl font-bold'>Sign In</h1>
                    <div>
                        <form action="">
                            <div className='flex flex-col my-2'>
                            <label className='text-sm md:text-lg py-2' htmlFor="email">Email or phone number</label>
                            <input type="email" name="email" id="email" className='rounded py-3 px-4 bg-white text-black' autoComplete='off'  />
                            </div>
                            <div className='flex flex-col my-2'>
                            <label className='text-sm md:text-lg py-2' htmlFor="email">Password</label>
                            <input type="password" name="password" id="password" className='rounded py-3 px-4 bg-white text-black' autoComplete='off' />
                            </div>
                            <div className='mt-8'>
                                <button className='w-full py-3 rounded font-bold bg-[#e50914]'>
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className='py-1 flex justify-between'>
                            <div className='flex justify-center'>
                                <input type="checkbox" name="remember" id="remember" /><span className='px-1 text-sm font-semibold text-[#777777]'>Remember me</span>
                            </div>
                            <p className='px-1 text-sm font-semibold text-[#777777]'>Need help?</p>
                        </div>
                    </div>
                    <div className='py-20'>
                        <div>
                            <span className='font-semibold text-[#777777]'>New to Netflix? </span>
                            <Link href='/'><span className='text-base cursor-pointer hover:underline'>Sign Up Now.</span></Link>
                        </div>
                        <p className='py-1 text-sm font-semibold text-[#777777]'>This page is protected by Google reCAPTCHA to ensure you are not a bot. <span className='text-blue-500 hover:underline cursor-pointer'>Learn more.</span></p>
                    </div>

                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default signin