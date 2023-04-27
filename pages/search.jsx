import { Navbar, SearchResults } from "@/components";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const dateRange = `${formattedStartDate} to ${formattedEndDate}`;
  return (
    <div>
      <Navbar placeholder={`${location} | ${dateRange} | ${guests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-10 px-6">
          <p className="italic text-neutral-600 font-semibold text-sm">
            200+ stays from {dateRange} for {guests} guests
          </p>
          <h1 className="text-2xl font-bold my-4">
            Stays available in <span className="text-sky-400 ">{location}</span>
          </h1>
          <div className="hidden md:flex space-x-2 font-semibold text-neutral-600 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Types of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms & Beds</p>
            <p className="button">More</p>
          </div>
          {/* search results */}
          <div className="flex flex-col space-y-4 mt-5">
            {searchResults?.map((item, idx) => (
              <SearchResults key={idx + 1} results={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://api.npoint.io/c17545db1aa98b2cc271"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
