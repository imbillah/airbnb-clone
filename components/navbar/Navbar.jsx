import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 shadow-md p-3 md:px-12 grid grid-cols-3 bg-white ">
      {/* logo */}
      <div className="cursor-pointer">
        <Image src="/asset/images/airbnbLogo.png" height={40} width={40} />
      </div>
      {/* Search */}
      <div className="flex items-center border-2 rounded-full py-1 px-4 ">
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Search places"
        />
        <MagnifyingGlassIcon className="h-9 w-9 bg-sky-500 rounded-full text-white p-2 cursor-pointer font-bold md:ms-3 hidden md:block" />
      </div>
      {/* avatar */}
      <div className="flex space-x-1 md:space-x-3 items-center justify-end">
        <h1 className="hidden md:inline font-semibold text-neutral-600">
          Become a host
        </h1>
        <GlobeAltIcon className="h-7 w-7 text-sky-500 cursor-pointer" />
        <div className="flex items-center space-x-1 border-2 rounded-full px-2 py-1 text-sky-500 cursor-pointer">
          <Bars3Icon className="w-7 h-7" />
          <UserCircleIcon className="w-7 h-7" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
