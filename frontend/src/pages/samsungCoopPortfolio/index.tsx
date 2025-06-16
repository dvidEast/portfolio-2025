import SamsungNavbar from "@/components/SamsungNavbar";
import { Karla } from "next/font/google";

const karla = Karla({
    subsets: ["latin"],
});

export default function SamsungCoopPortfolio() {
    return (

        <div
            className={`${karla.className}`}
        >
            <SamsungNavbar />
            
        </div>
        // <div className="bg-[#F4F6F9] text-[#1A1A1A] font-sans">
        //     <main className="max-w-6xl mx-auto px-6 py-12">
        //         {/* Hero */}
        //         <section className="bg-white shadow-lg rounded-2xl p-10 mb-12">
        //         <h1 className="text-3xl font-bold mb-4 text-[#1428A0]">
        //             Hello to the hiring team at Samsung R&D Vancouver!
        //         </h1>
        //         <p className="text-lg leading-relaxed">
        //             I’m David and I’m excited to show you some of my work! I realized that most of my
        //             work was scattered across many links, so I created this page to consolidate my
        //             most relevant projects into a single, easy-to-browse location.
        //         </p>
        //         <p className="mt-4 text-lg">
        //             I coded and launched this page within a day—check my GitHub if you don’t believe me 😉.
        //             I curated these based on the job description and my conversations with interviewers—
        //             highlighting key areas of interest like data science, SEO/marketing, coding, content creation,
        //             and communication.
        //         </p>
        //         <p className="mt-4 text-lg italic text-gray-600">
        //             Feel free to explore what’s most relevant to you!
        //         </p>
        //         </section>

        //         {/* Table of Contents */}
        //         <aside className="bg-[#E1E4E8] rounded-xl p-6 mb-12">
        //         <h2 className="text-xl font-semibold mb-4 text-[#1428A0]">Jump To:</h2>
        //         <ul className="list-disc pl-6 space-y-2 text-blue-700">
        //             <li><a href="#data">Data Science, SEO & Marketing</a></li>
        //             <li><a href="#code">Coding Experience</a></li>
        //             <li><a href="#time">Time & Priority Management</a></li>
        //             <li><a href="#blog">Blog Writing</a></li>
        //             <li><a href="#media">Photo & Video Editing</a></li>
        //             <li><a href="#figma">Figma Markups</a></li>
        //             <li><a href="#present">Technical Presentations</a></li>
        //             <li><a href="#creativity">Creativity</a></li>
        //         </ul>
        //         </aside>

        //         {/* Sections */}
        //         <Section id="data" title="Data Science, SEO & Marketing">
        //         <ul className="list-disc ml-6 space-y-2">
        //             <li>Major in Mathematics / Minor in Data Science</li>
        //             <li>Samsung SEO ML Project</li>
        //             <li>Churn Rate Analytics</li>
        //         </ul>
        //         </Section>

        //         <Section id="code" title="Coding Experience">
        //         <ul className="list-disc ml-6 space-y-2">
        //             <li>SUS - Development Lead</li>
        //             <li>DraapeAI - Software Developer</li>
        //             <li>Trickster’s Hideout - Project Manager / Developer</li>
        //             <li>Featured Projects: KingsCraft, Donuts</li>
        //         </ul>
        //         </Section>

        //         <Section id="time" title="Time & Priority Management">
        //         <p>Balancing multiple roles and responsibilities: SUS, school, personal projects, and work.</p>
        //         </Section>

        //         <Section id="blog" title="Blog Writing">
        //         <p>
        //             <a href="https://medium.com/@yourname" className="text-blue-600 underline" target="_blank">
        //             Medium Article
        //             </a>
        //         </p>
        //         </Section>

        //         <Section id="media" title="Photo & Video Editing">
        //         <ul className="list-disc ml-6 space-y-2">
        //             <li>Photography portfolio from high school</li>
        //             <li>Video project from biology class</li>
        //         </ul>
        //         </Section>

        //         <Section id="figma" title="Figma Markups">
        //         <ul className="list-disc ml-6 space-y-2">
        //             <li>SUS UI Designs</li>
        //             <li>Donuts App Prototypes</li>
        //             <li>Marketing visuals for Hootsuite project</li>
        //         </ul>
        //         </Section>

        //         <Section id="present" title="Presentation Work">
        //         <ul className="list-disc ml-6 space-y-2">
        //             <li>Hootsuite Pitch</li>
        //             <li>Trickster’s Hideout Stakeholder Presentation</li>
        //             <li>DraapeAI technical walkthroughs</li>
        //         </ul>
        //         </Section>

        //         <Section id="creativity" title="Creativity">
        //         <p>
        //             <Link href="/art" className="text-blue-600 underline">View my art portfolio →</Link>
        //         </p>
        //         </Section>
        //     </main>
        //     <Footer />
        // </div>
    );
}


// function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
//     return (
//         <section id={id} className="bg-white rounded-2xl shadow p-8 mb-10">
//         <h2 className="text-2xl font-semibold text-[#1428A0] mb-4">{title}</h2>
//         {children}
//         </section>
//     );
// }