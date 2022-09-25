import React, {useState} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsArrowLeft } from "react-icons/bs";
import { useLoginContext } from "../context/LoginContext";
import toast from "react-hot-toast";

const Signup = () => {
    const router = useRouter();
    const { signUp, user } = useLoginContext();

    const [login, setLogin] = useState({
        email:"",
        password: ""
    })


    const handleChange = (event) =>{
        const {name, value} = event.target;
        setLogin({...login, [name]: value});
      }

      const handleSubmit = async (e) =>{
        e.preventDefault();
        toast.loading('redirecting...')

        const {email, password} = login;

        try {
            await signUp(email, password)
            toast.remove();
            toast.success('login success')
            setTimeout(() => {
                router.push('/userhome')
            }, 500);
        } 
        catch (error) {
            toast.remove()
            toast.error('sign up failed')
            console.log(error)
        }

        setLogin({
            email:"", 
            password:""
        })
      }
  return (
    <>
        <div className='bg-[url("/assets/bg-hero.jpg")] h-[100vh] flex justify-center'>
            <div className='h-full w-full bg-black bg-opacity-60'>
            <div className='py-20 px-5 flex justify-center'>
                <div className='relative w-full sm:w-[400px] md:w-[500px] py-[60px] px-[50px] rounded bg-black bg-opacity-80'>
                <Link href='/'>
                    <div className='absolute top-5 left-6'><BsArrowLeft className='text-2xl cursor-pointer'/></div>
                </Link>
                    <h1 className='mb-4 text-2xl md:text-3xl font-bold'>Sign Up</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col my-2'>
                            <label className='text-sm md:text-lg py-2' htmlFor="email">Email or phone number</label>
                            <input type="email" name="email" id="email" className='rounded py-3 px-4 bg-white text-black' autoComplete='off' value={login.email} onChange={handleChange} />
                            </div>
                            <div className='flex flex-col my-2'>
                            <label className='text-sm md:text-lg py-2' htmlFor="email">Password</label>
                            <input type="password" name="password" id="password" className='rounded py-3 px-4 bg-white text-black' autoComplete='off' value={login.password} onChange={handleChange} />
                            </div>
                            <div className='mt-8'>
                                <button type='submit' className='w-full py-3 rounded font-bold bg-[#e50914]'>
                                    Sign Up
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
                            <span className='font-semibold text-[#777777]'>Already a Netflix user? </span>
                            <Link href='/signin'><span className='text-base cursor-pointer hover:underline'>Sign in Now.</span></Link>
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

export default Signup