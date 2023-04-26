import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative md:h-[700px]">
      <Image
        src="https://i.postimg.cc/CxW4H61H/airbnb-Banner.png"
        width={1280}
        height={500}
        className="w-full h-full"
        alt="banner-image"
      />
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="text-white text-xl md:text-5xl font-bold md:mb-8">
          Lifelong Memories just a <br /> few seconds away
        </h1>
        <button className="text-white bg-sky-500 rounded-full md:px-12 md:py-3 px-6 py-2 mt-2 shadow-md font-bold hover:shadow-lg active:scale-90 transition duration-150">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
