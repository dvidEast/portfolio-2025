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
      className={`${karla.className}`}
    >
      <Navbar />

      <Hero />

      <Border sectionTitle="TIMELINE" textOnLeft={true}/>
      
      <Timeline />

      <Border sectionTitle="TECHNICAL SKILLS" textOnLeft={true}/>
      
      {/* <Footer /> */}
    </div>
  );
}

