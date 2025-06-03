import Image from "next/image";
import { Karla } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// grotesque sans-serif
const karla = Karla({
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });


export default function Home() {
  return (
    <div
      className={`${karla.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Navbar />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        Main
      </main>
      
      <Footer />
    </div>
  );
}
