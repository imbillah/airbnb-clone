import Image from "next/image";
import { Inter, Nunito } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${nunito.className}`}>
      <Navbar />
    </div>
  );
}
