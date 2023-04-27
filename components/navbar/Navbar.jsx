import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const handleCancel = () => {
    setSearchInput("");
  };
  const handleSearch = () => {
    if (!searchInput) {
      alert("Please input place name and select date range");
      return;
    }
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 shadow-md p-3 md:px-12 grid grid-cols-3 bg-gray-100 ">
      {/* logo */}
      <Link href="/" className="cursor-pointer flex items-center space-x-2">
        <Image src="/asset/images/airbnbLogo.png" height={40} width={40} />
        <h1 className="hidden md:block font-extrabold text-3xl text-sky-500">
          airbnb
        </h1>
      </Link>
      {/* Search */}
      <div className="flex items-center border-2 rounded-full py-1 px-4 ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder={placeholder || "Search Places"}
        />

        <MagnifyingGlassIcon
          onClick={handleSearch}
          className="h-9 w-9 bg-sky-500 rounded-full text-white p-2 cursor-pointer font-bold md:ms-3 hidden md:block"
        />
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
      {/* date picker */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-1 p-1">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#0EA5E9"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-2 p-2">
            <h1 className="font-bold text-2xl flex-grow my-3">
              Number of Guests
            </h1>
            <UserGroupIcon className="h-6 w-6 me-2" />
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              min={1}
              max={10}
              className="w-14 pl-2 text-lg outline-none text-sky-500 rounded-md"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-neutral-500"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button className="flex-grow text-sky-500" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
