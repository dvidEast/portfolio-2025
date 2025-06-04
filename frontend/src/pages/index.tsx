import { Karla } from "next/font/google";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import TechnicalSkills from "@/components/TechnicalSkills";

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

      <TechnicalSkills />
      
      <Footer />
    </div>
  );
}

