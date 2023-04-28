import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const SerachResults = ({
  results: { img, location, title, description, star, price, total },
}) => {
  return (
    <div
      className="flex space-x-2 p-2
    border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out rounded-md first:border-t
    "
    >
      <div className="h-24 md:h-[150px] cursor-pointer">
        <Image
          src={img}
          height={125}
          width={200}
          className="h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col w-full  text-neutral-600">
        <div className="flex justify-between">
          <p className="font-semibold md:text-sm text-[12px]">{location}</p>
          <HeartIcon className="w-6 h-6" />
        </div>
        <h1 className="md:text-xl font-semibold mb-3">{title}</h1>
        <p className="flex-grow text-sm italic">{description}</p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-sky-500 me-1" />
            {star}
          </div>
          <div className="mt-2">
            <h1 className="md:text-xl font-semibold">{price}</h1>
            <p className="text-right font-light">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerachResults;
