import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLoginContext } from "../context/LoginContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const { user, logOut } = useLoginContext();
  const [navBG, setnavBG] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.remove();
      toast.success("logout success");
      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setnavBG(true);
      } else setnavBG(false);

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full h-[5rem] ${
          navBG && "transition-colors duration-500 bg-black z-50"
        }`}
      >
        <div className="flex justify-between h-full items-center ">
          <div className="logo cursor-pointer w-[110px] md:w-[200px]">
            <Link href="/">
              <Image
                src="/assets/netflix-logo.png"
                className="h-[4rem] md:h-[6rem] object-contain"
                alt="netflix logo"
                height={100}
                width={200}
              />
            </Link>
          </div>
          <div className="space-x-3 flex mr-5">
            {user ? (
              <>
              <Link href="/userhome">
                  <button className="py-[3px] text-[0.8rem] md:text-[1rem] hover:underline underline-offset-4">
                    Home
                  </button>
                </Link>
                <Link href="/myaccount">
                  <button className="py-[3px] text-[0.8rem] md:text-[1rem] hover:underline underline-offset-4">
                    My Watchlist
                  </button>
                </Link>
                <button
                  className="px-[14px] py-[3px] text-[0.8rem] md:text-[1rem] border border-[#e50914] bg-[#e50914] rounded-sm"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <button className="px-[14px] py-[3px] text-[0.8rem] md:text-[1rem] hover:underline underline-offset-4">
                    Sign Up
                  </button>
                </Link>
                <Link href="/signin">
                  <button className="px-[14px] py-[3px] text-[0.8rem] md:text-[1rem] border border-[#e50914] bg-[#e50914] rounded-sm">
                    Sign in
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
