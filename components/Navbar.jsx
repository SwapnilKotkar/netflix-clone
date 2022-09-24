import React, {useState, useEffect} from "react";
import { FaGlobe } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [navBG, setnavBG] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if(window.scrollY > 100) {
          setnavBG(true)
        } else setnavBG(false)

        return () => {
          window.removeEventListener('scroll');
        };
      })
    }, [])
    

  return (
    <>
      <nav className={`fixed w-full h-[5rem] ${navBG && 'transition-colors duration-500 bg-black'}`}>
        <div className="flex justify-between h-full items-center mx-[10px] md:mx-[50px] ">
          <div className="logo ">
            <img
              src="assets/netflix-logo.png"
              className="h-[4rem] md:h-[6rem] object-contain"
              alt="netflix logo"
            />
          </div>
          <div className="space-x-8 flex">
            <button className="relative px-[12px] py-[3px] border flex items-center rounded-sm" onClick={()=>setShow((prev) => !prev )}>
              <span className="pr-1">
                <FaGlobe />
              </span>
              <span className="text-[0.9rem]">English</span>
              <span className="pl-1">
                <VscTriangleDown />
              </span>
              <div className={`${!show && "hidden"} absolute top-[2rem] right-[0.01rem] w-[7rem] border text-left bg-black`}>
                <div className="hover:bg-slate-700 p-1 px-2 cursor-pointer text-[1rem]">English</div>
                <div className="hover:bg-slate-700 p-1 px-2 cursor-pointer text-[1rem]">Hindi</div>
            </div>
            </button>
            
            <button className="px-[14px] py-[3px] border border-[#e50914] bg-[#e50914] rounded-sm">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
