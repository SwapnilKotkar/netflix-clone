import React, {useState} from "react";
import { FaGlobe } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

const Footer = () => {
    const [show, setShow] = useState(false)

    const footerMenu = ["FAQ",
      "Help Center",
      "Account",
      "Media Center",
      "Investor Relations",
      "Jobs",
      "Ways to Watch",
      "Terms of Use",
      "Privacy",
      "Cookie Preferences",
      "Corporate Information",
      "Contact Us",
      "Speed Test",
      "Legal Notices",
      "Only on Netflix"
    ]

  return (
    <>
      <div className="py-10 px-5 md:px-20 flex justify-center border-t-8 border-[#303030] text-[#686868] bg-black">
        <div className="w-full lg:w-2/3">
          <h1 className="mb-10 font-semibold">Questions? Call 000-800-040-1843</h1>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
          {
            footerMenu.map((menu, index) => (
              <a key={index} href="#">{menu}</a>
            ))
          }
          </div>
         <div className="mt-5">
         <button className="relative px-[12px] py-[7px] border border-[#686868] flex items-center rounded-sm" onClick={()=>setShow((prev) => !prev )}>
              <span className="pr-1">
                <FaGlobe />
              </span>
              <span className="text-[0.9rem] text-gray-400 ">English</span>
              <span className="pl-1">
                <VscTriangleDown />
              </span>
              <div className={`${!show && "hidden"} absolute top-[2.5rem] right-[0.01rem] w-[7rem] border border-[#686868] text-left bg-black`}>
                <div className="hover:bg-slate-700 p-1 px-2 cursor-pointer text-[1rem]">English</div>
                <div className="hover:bg-slate-700 p-1 px-2 cursor-pointer text-[1rem]">Hindi</div>
            </div>
            </button>
         </div>
         <h6 className="mt-5">Netlix India</h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
