import React from "react";
import Navbar from "../components/Navbar";
import SavedShows from "../components/SavedShows";

const myaccount = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black h-[100vh]">
      <div>
        <div className="w-full h-full bg-[url('/assets/bg-hero.jpg')] text-white">
          <div className=" bg-black/60 w-full h-[400px]">
          <div className="absolute top-[20%] p-4">
            <p className="text-3xl md:text-4xl font-bold">My Shows</p>
          </div>
          </div>
        </div>
      </div>
      <SavedShows />
      </div>
    </>
  );
};

export default myaccount;
