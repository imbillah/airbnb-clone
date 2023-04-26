import Image from "next/image";
import React from "react";

const ExploreItems = ({ cardData: { img, location, distance } }) => {
  return (
    <div className="flex items-center space-x-4 m-3 cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative w-20 h-20">
        <Image
          src={img}
          height={75}
          width={75}
          alt={location}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold">{location}</h1>
        <p className="font-semibold text-neutral-500">{distance}</p>
      </div>
    </div>
  );
};

export default ExploreItems;
