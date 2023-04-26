import Image from "next/image";
import React from "react";

const LargeCard = () => {
  return (
    <div className="relative">
      <div className="min-w-[300px] h-[165px] md:h-[400px] ">
        <Image
          src="/asset/images/largeCardImg.jpg"
          width={1000}
          height={0}
          alt="footer-banner"
          className="h-full w-full rounded-lg"
        />
      </div>
      <div className="absolute top-12 left-20 hidden md:block">
        <h1 className="text-4xl mb-3 font-bold text-white">
          The Greatest Outdoor <br /> Experience
        </h1>
        <p className="text-white text-xl">Wishlist Created by Airbnb</p>
        <button className="my-5 px-8 py-3 bg-sky-500 rounded-lg text-white font-semibold hover:scale-105 transition duration-200 ease-out">
          Get inspired
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
