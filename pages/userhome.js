import React, {useEffect} from 'react'
import Banner from '../components/Banner'
import MoviesCategory from '../components/MoviesCategory'
import Navbar from '../components/Navbar'
import { useLoginContext } from "../context/LoginContext";
import { useRouter } from 'next/router';

const Userhome = () => {
  const router = useRouter();
  const { user, logOut } = useLoginContext();

  useEffect(() => {
    if(!user){
      router.push('/')
    }
  }, [user, router])
  
  return (
    <>
      <Navbar/>
      <div>
        <Banner/>
      </div>
      <div className='w-full pt-10 px-5 bg-black'>
        <MoviesCategory/>
      </div>
    </>
  )
}

export default Userhome;