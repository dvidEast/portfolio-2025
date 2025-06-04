import { Karla } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

import Border from "@/components/Border";

const karla = Karla({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${karla.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen`}
    >
      <Navbar />

      <Hero />

      <Border sectionTitle="TECHNICAL SKILLS" textOnLeft={true}/>
      
      {/* <Timeline /> */}
      
      {/* <Footer /> */}
    </div>
  );
}

