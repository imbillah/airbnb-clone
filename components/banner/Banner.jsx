import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src="/asset/images/airbnbBanner2.jpg"
        width={1280}
        height={500}
        className="w-screen opacity-75"
        alt="banner-image"
      />
      <div className="absolute top-1/4 w-full text-center">
        <h2 className="text-neutral-700 text-xl font-semibold mb-2">
          Explore and Travel the world
        </h2>
        <button className="text-sky-500 bg-white rounded-full px-12 py-3 shadow-md font-bold hover:shadow-lg active:scale-90 transition duration-150">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
