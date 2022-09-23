import React, {useState} from "react";
import Navbar from "./Navbar";
import { RiArrowRightSLine } from "react-icons/ri";

const Hero = () => {
  const [email, setEmail] = useState("")

  const handleChange = (e) => {
    console.log(e)
    const {value} = e.target;
    setEmail(value)
  }

  return (
    <>
      <Navbar />
      <section className='hero_section bg-[url("/assets/bg-hero.jpg")] h-full'>
        <div className="bg-black bg-opacity-60">
          <div className="h-20 bg-gradient-to-b from-black to-black-500" />
          <div className="my-40 flex justify-center text-center">
            <div>
            <h1 className="text-4xl md:text-5xl font-semibold">
                Unlimited movies,TV <br /> shows and more.
            </h1>
            <h4 className="pt-6 text-xl md:text-3xl font-semibold">Watch anywhere. Cancel anytime.</h4>
            <h6 className="pt-8 pb-4 text-sm md:text-xl">
                Ready to watch? Enter your email to create or restart your membership.
            </h6>
            <div className="flex">
                <input type="email" name="email" id="email" className="w-[70%] bg-white px-2 py-2 md:py-4 text-black" placeholder="Email address" value={email} onChange={handleChange} />
                <button className="bg-[#e50914] w-[30%] flex justify-center items-center">
                    <span className="text-lg md:text-2xl">Get Started</span>
                    <span className="text-2xl md:text-3xl"><RiArrowRightSLine/></span>
                </button>
            </div>
            </div>
          </div>
          <div className="h-20 bg-gradient-to-t from-black to-black-500" />
        </div>
      </section>
    </>
  );
};

export default Hero;

// h-full bg-gradient-to-b from-slate-900 to-black-500
