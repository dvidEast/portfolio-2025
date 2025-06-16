import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import TechnicalSkills from "@/components/TechnicalSkills";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

const karla = Karla({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${karla.className} bg-[#292A2C] text-white`}
    >
      <Navbar />

      <Hero />
    
      <About />
      
      <Timeline />

      <TechnicalSkills />

      <Projects />

      <Footer />
    </div>
  );
}

