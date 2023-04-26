import { Nunito } from "next/font/google";
import {
  Navbar,
  Banner,
  ExploreItems,
  MediumCard,
  LargeCard,
} from "@/components";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home({ exploreData, mediumCardData }) {
  return (
    <div className={`${nunito.className}`}>
      <Navbar />
      <Banner />
      <main className="max-w-7xl mx-auto px-4 md:px-10 ">
        {/* small cards area */}
        <section className="pt-5 my-5">
          <h1 className="text-3xl text-neutral-700 font-bold mb-5">
            Explore Nearby
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map((item) => (
              <ExploreItems key={item.id} cardData={item} />
            ))}
          </div>
        </section>
        {/* medium card area */}
        <section className="pt-5 my-5">
          <h1 className="text-3xl text-neutral-700 font-bold mb-5">
            Live Anywhere
          </h1>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide">
            {mediumCardData?.map((item) => (
              <MediumCard key={item.id} cardData={item} />
            ))}
          </div>
        </section>
        <section className="pt-5 my-5">
          <LargeCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://api.npoint.io/74d9118325484065cd35"
  ).then((res) => res.json());
  const mediumCardData = await fetch(
    "https://api.npoint.io/696176bf3a60e852bf30"
  ).then((res) => res.json());
  return {
    props: {
      exploreData,
      mediumCardData,
    },
  };
}
