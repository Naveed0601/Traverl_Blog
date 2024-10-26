import React from "react";
import title_image from "../assets/title_image.jpg";
import travel from "../assets/travel_image.jpg";
import eat from "../assets/eat.jpg";
import relax from "../assets/relax.jpg";

const Intro = () => {
  return (
    <div>
      <div className="relative">
        <img src={title_image} alt="title_image" className="h-[530px]" />
        <div className="absolute inset-0 flex items-center justify-center ">
          <p className="text-white text-3xl font-bold text-center">
            Travel Blog <h1 className="text-6xl">Going Places</h1> I haven’t
            been everywhere, but it’s on my list
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="mt-14 text-gray-700 text-center w-[650px] ">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </p>
      </div>
      <div className="flex justify-evenly mt-12">
        <div className="relative">
          <img src={travel} alt="travel" className="w-[300px]" />
          <div className="absolute inset-0 w-[300px] flex justify-center items-center">
            <button className="bg-white text-blue-400 hover:bg-blue-700 hover:text-white w-[150px] h-[50px] text-2xl transition-all duration-700 ease-in-out">
              Travel
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={eat} alt="eat" className="w-[300px]" />
          <div className="absolute inset-0 w-[300px] flex justify-center items-center">
            <button className="bg-white text-blue-400 hover:bg-blue-700 hover:text-white w-[150px] h-[50px] text-2xl transition-all duration-700 ease-in-out">
              Eat
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={relax} alt="relax" className="w-[300px]" />
          <div className="absolute inset-0 w-[300px] flex justify-center items-center">
            <button className="bg-white text-blue-400 hover:bg-blue-700 hover:text-white w-[150px] h-[50px] text-2xl transition-all duration-700 ease-in-out">
              Relax
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
