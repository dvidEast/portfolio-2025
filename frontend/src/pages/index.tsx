import { Karla } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";


const karla = Karla({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${karla.className}`}
    >
      <Hero />
      
      <Timeline />
      
      <Footer />
    </div>
  );
}

