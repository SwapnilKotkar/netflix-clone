import React, {useState} from "react";
import { FaGlobe } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

const Navbar = () => {
    const [show, setShow] = useState(false)

  return (
    <>
      <nav className="fixed w-full h-[4rem]">
        <div className="flex justify-between h-full items-center pt-[20px] mx-[10px] md:mx-[50px] ">
          <div className="logo ">
            <img
              src="assets/netflix-logo.png"
              className="h-[4rem] md:h-[6rem] object-contain"
              alt="netflix logo"
            />
          </div>
          <div className="space-x-8 flex">
            <button className="px-[12px] py-[3px] border flex items-center rounded-sm" onClick={()=>setShow((prev) => !prev )}>
              <span className="pr-1">
                <FaGlobe />
              </span>
              <span className="text-[0.9rem]">English</span>
              <span className="pl-1">
                <VscTriangleDown />
              </span>
            </button>
            <div className={`${!show && "hidden"} absolute top-[4rem] right-[10.4rem] w-[7rem] border`}>
                <div className="hover:bg-slate-700 pt-1 px-2 cursor-pointer text-[1rem]">English</div>
                <div className="hover:bg-slate-700 pt-1 px-2 cursor-pointer text-[1rem]">Hindi</div>
            </div>
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
