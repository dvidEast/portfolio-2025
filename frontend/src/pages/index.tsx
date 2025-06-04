import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import TechnicalSkills from "@/components/TechnicalSkills";
import Projects from "@/components/Projects";

const karla = Karla({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${karla.className}`}
    >
      <Hero />
    
      <About />
      
      <Timeline />

      <TechnicalSkills />

      <Projects />

      <Footer />
    </div>
  );
}

